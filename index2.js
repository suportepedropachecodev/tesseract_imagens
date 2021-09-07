//Extraindo texto de imagem remota

const tesseract = require("node-tesseract-ocr");

const img = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_pt_BR_1x._CB667161802_.jpg";

async function main(){
    const text = await tesseract.recognize(img);
    console.log(text);
};

main();