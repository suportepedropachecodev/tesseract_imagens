//Extraindo texto de print de site

const puppeteer = require("puppeteer");
const tesseract = require("node-tesseract-ocr");
const fs = require("fs");

const config = {
  lang:"por",
  oem: 1,
  psm: 3,
};

const tirascreen = async () => {
  
    const browser = await puppeteer.launch({
        defaultViewport: null
    });
  const page = await browser.newPage();
  
  await page.goto(
    'https://oblumenauense.com.br/pessoas-acima-dos-45-anos-ja-podem-agendar-a-vacinacao-contra-a-covid-19-em-blumenau/'
  );
  await page.screenshot({ path: `noticia.png`, fullPage: true });

  await browser.close();
};

const lerimagem = async (ft)=>{
  const img = await fs.readFileSync(ft);
  const text = await tesseract.recognize(img, config);

  console.log("Resultado:", text);
};

const main = async () => {
    await console.log('Gerando screen...')
    await tirascreen();
    await console.log('Lendo imagem...')
    await lerimagem("./noticia.png");
};

main();
