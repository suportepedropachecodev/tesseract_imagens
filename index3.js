//Extraindo texto de mais de uma img

const tesseract = require("node-tesseract-ocr");

const imgs = ['imagens/1.png','imagens/2.png']

async function main(){
    const textos = await tesseract.recognize(imgs);
    console.log(textos);
};

main();