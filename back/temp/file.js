const fs = require("fs");
const content =
  "---\ntitle: 'Uso de CSS em componentes'\ntag: 'React-to-Next'\nexcerpt: 'Anotações do processo de adaptação do CSS já usado em componentes no React para o Next'\ncoverImage: '/assets/blog/dynamic-routing/cover.jpg'\ndate: '2021-04-06T17:46:00.000Z'\nauthor:\n  name: Rita L Lopes\n  picture: '/assets/blog/authors/ritallopes.jpg'\nogImage:\n  url: '/assets/blog/dynamic-routing/cover.jpg'\n---\n-Para uso de estilos próprios em cada componente, o NextJS exige um pouco mais de atenção do que no React.\nNo CSS usado em React, era possível usar o elemento como seletor para aplicação do estilo, por exemplo:";
fs.writeFile("../../front/_posts/test.md", content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
