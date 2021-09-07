//Lendo img escaneada

const tesseract = require("node-tesseract-ocr")
const fs = require("fs")

const config = {
    lang: "por",
    oem: 1,
    psm: 3,
  }

async function main() {
  const img = await fs.readFileSync("./imagens/prova.png");
  const text = await tesseract.recognize(img, config);

  console.log("Resultado:", text)
};

main()