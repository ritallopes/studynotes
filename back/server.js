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
  console.log(body);
  return res.json(body);
});

const readFileJson = () => {
  // Read users.json file
  fs.readFile("./data/users.json", function (err, data) {
    // Check for errors
    if (err) throw err;

    // Converting to JSON
    const users = JSON.parse(data);
    users.forEach((user) => {
      console.log(user);
    });
    console.log(users); // Print users
  });
};

const writeFileJson = async (user) => {
  // Read users.json file
  const newUsers = [];

  await fs.readFile("./data/users.json", function (err, data) {
    // Check for errors
    if (err) throw err;

    // Converting to JSON
    const users = JSON.parse(data);
    newUsers = [...users, { ...user }];
  });
  await fs.writeFile("./data/users.json", newUsers.toString(), (err) => {
    if (err) {
      console.error(err);
      return err;
    }
  });
  return user;
};

let file = function (p) {
  const content = `---\ntitle: ${p.title}\ntag: ${p.tag}\nexcerpt: ${p.excerpt}\ncoverImage: ${p.coverImage}\ndate:  ${p.date}\nauthor:\n  name: ${p.author}\n  picture: ${p.pictures}\nogImage: ${p.ogImage}\n---\n\n${p.content}`;
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
