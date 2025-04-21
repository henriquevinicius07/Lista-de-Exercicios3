const xmlString = `
<biblioteca>
  <livro categoria="ficcao">
    <titulo>O Guia do Mochileiro das Galáxias</titulo>
    <autor>Douglas Adams</autor>
  </livro>
  <livro categoria="tecnico">
    <titulo>Introdução ao XML</titulo>
    <autor>Professor Exemplo</autor>
  </livro>
</biblioteca>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

const livros = xmlDoc.querySelectorAll("livro");

const segundoTitulo = livros[1].querySelector("titulo");

console.log("Título do segundo livro:", segundoTitulo.textContent);
