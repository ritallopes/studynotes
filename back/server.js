const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { Console } = require("console");
const app = express();
require("./src/routes/index")(app); // <--- basta adicionar essa linha
const corsOpts = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "DELETE", "PUT"],
};
app.use(cors(corsOpts));
app.use(express.json());
app.listen(3333);

app.post("/posts", (req, res) => {
  const body = req.body;
  if (!body) return req.statusCode(400).end();
  file(req.body);
  return res.json(body);
});

app.post("/author", async (req, res) => {
  const body = req.body;
  writeFileJson(body);
  return res.json(body);
});

app.post("/login", async (req, res) => {
  let a = await auth(req.body.email, req.body.password);
  console.log(a);
  return res.status(a ? 200 : 400).send(a);
});

const auth = async (email, pass) => {
  const users = readFileJson();
  await users.forEach((user, i) => {
    if (user.email == email && user.password == pass) {
      console.log("Usuario autenticado");
      return true;
    }
    if (i == users.length()) {
      return false;
    }
  });
};

const readFileJson = async () => {
  // Read users.json file
  let users = [];
  fs.readFile("./data/users.json", function (err, data) {
    // Check for errors
    if (err) throw err;

    // Converting to JSON
    users = JSON.parse(data);
    //console.log(users); // Print users
  });
  return users;
};

const writeFileJson = async (user) => {
  // Read users.json file
  let newUsers = [];
  await fs.readFile("./data/users.json", function (err, data) {
    // Check for errors
    if (err) throw err;

    // Converting to JSON
    if (!data) return;
    const users = JSON.parse(data);
    newUsers = [...users, { ...user }];
    fs.writeFile("./data/users.json", JSON.stringify(newUsers), (err) => {
      if (err) {
        console.error(err);
        return err;
      }
    });
  });

  return user;
};

let file = function (p) {
  const content = `---\ntitle: '${p.title}'\ntag: '${p.tag}'\nexcerpt: '${p.excerpt}'\ncoverImage: '${p.coverImage}'\ndate:  '${p.date}'\nauthor:\n  name: '${p.name}'\n  picture: '${p.picture}'\nogImage: url'${p.url}'\n---\n\n${p.content}`;
  const nameFile = p.title
    .toLowerCase()
    .replace(/ +/g, "-")
    .replace(/'+/g, "")
    .concat(".md");
  fs.writeFile(`../front/_posts/${nameFile}`, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};
