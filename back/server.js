const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
require("./src/routes/index")(app); // <--- basta adicionar essa linha
app.use(express.json());
app.listen(3333);

app.post("/add", (req, res) => {
  const body = req.body;
  if (!body) return req.statusCode(400).end();
  file(req.body);
  return res.json(body);
});

let file = function (p) {
  const content = `---\ntitle: ${p.title}\ntag: ${p.tag}\nexcerpt: ${p.excerpt}\ncoverImage: ${p.coverImage}\ndate:  ${p.date}\nauthor:\n  name: ${p.author}\n  picture: ${p.pictures}\nogImage: ${p.ogImage}\n---\n\n${p.content}`;
  const nameFile = p.title.toLowerCase().replace(/ +/g,"-").replace(/'+/g, "").concat('.md');
  fs.writeFile(`../front/_posts/${nameFile}`, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });};
