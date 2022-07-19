---
title: 'Uso de CSS em componentes'
tag: 'React-to-Next'
excerpt: 'Anotações do processo de adaptação do CSS já usado em componentes no React para o Next'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2021-04-06T17:46:00.000Z'
author:
  name: Rita L Lopes
  picture: '/assets/blog/authors/ritallopes.jpg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---


Para uso de estilos próprios em cada componente, o NextJS exige um pouco mais de atenção do que no React.   
No CSS usado em React, era possível usar o elemento como seletor para aplicação do estilo, por exemplo:   
``` 
p{
    color: #ffffff;
}
```   
O exemplo acima deixaria todo texto que estivesse dentro de uma tag <p> com a cor branca. No entanto, no Next, não pode ser assim. Há diversas alternativas apontadas na documentação do NextJs para uso de CSS (importar um css global no _app.js, usar Sass, Css-in-JS). Mas, a adaptação mais simples de um CSS para uso em um componente específico seria usar __CSS Modules__.   
O padrão de nomeação do arquivo de estilo fica assim: _nomeQualquer.module.css_  
Já no interior do CSS Module são necessárias algumas adaptações. Para o exemplo mostrado acima com a tag <p> é necessário criar uma classe ou usar o id como seletor. Por exemplo:   
```
.tag_p{
    color: #ffffff;
}
```    
No componente, o módulo deve ser importado e usado nas tags/componentes com o atributo _className_ de forma semelhante ao exemplo abaixo:
Importando:
```
import styles from 'Home.module.css';
```   
Uso em tag:   
```
<p className={styles.tag_p}>Alguma coisa</p>
```




OBS: Não garanto que é a melhor forma de fazer isso


