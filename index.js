//Lendo imagem
const tesseract = require("node-tesseract-ocr");

const config = {
  lang: "por",
  oem: 1,
  psm: 3,
}

tesseract
  .recognize("./imagens/1.png", config)
  .then((text) => {
    console.log("Texto:", text)
  })
  .catch((error) => {
    console.log(error.message)
  })