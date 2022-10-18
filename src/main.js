import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardTypes(type) {
  const colors = {
    visa: ["#436D99", "2D57F2"],
    mastercard: ["#DF6F29", "#C69347"],
    defaut: ["black", "gray"],
  }
  ccBgColor01.setAttribute("fill", colors[type][0]) // Uma maneira JavaScript de selecionar, uma propriedade do elemento, com uma variável, neste caso a variável é type, por exemplo se ela vier escrita como visa, irá atribuir as cores conforme visa.
  // Simplesmente acessa a propriedade de um Objeto JS, através de uma Variável.
  ccBgColor02.setAttribute("fill", colors[type][1])

  ccLogo.setAttribute("src", `cc-${type}.svg`)
}

globalThis.setCardTypes = setCardTypes
