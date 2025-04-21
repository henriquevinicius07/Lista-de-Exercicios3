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

const raiz = xmlDoc.documentElement;

const filhos = raiz.childNodes;

filhos.forEach((nó) => {
  if (nó.nodeType === 1) {
    console.log("Nó filho:", nó.nodeName);
  }
});
