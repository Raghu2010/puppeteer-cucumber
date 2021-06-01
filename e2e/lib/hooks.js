const {BeforeAll, setDefaultTimeout, AfterAll, After} = require("@cucumber/cucumber"),
puppeteer = require("puppeteer"),
ElementUtils = require("./elementUtils");

let browser;

setDefaultTimeout(60000);

BeforeAll(async () => {
    console.log("Before all");
    
    browser = await puppeteer.launch({"headless": false});
    const page = await browser.newPage();
    global.page = page;
    global.elementUtils = new ElementUtils();
});

AfterAll(async () => {
    await browser.close();

})

