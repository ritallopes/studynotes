const fs = require("fs");
exports.file = function(in){
  const content = `---\ntitle: ${}\ntag: 'React-to-Next'\nexcerpt: 'Anotações do processo de adaptação do CSS já usado em componentes no React para o Next'\ncoverImage: '/assets/blog/dynamic-routing/cover.jpg'\ndate: '2021-04-06T17:46:00.000Z'\nauthor:\n  name: Rita L Lopes\n  picture: '/assets/blog/authors/ritallopes.jpg'\nogImage:\n ${in.ogImage}\n---\n\n${in.content}`;
fs.writeFile("../../front/_posts/test.md", content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
}

