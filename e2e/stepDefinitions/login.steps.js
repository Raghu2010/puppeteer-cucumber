const {Given, Before} = require("@cucumber/cucumber"),
LoginPage = require("./../pages/login.page");
const { expect } = require("chai");

let loginPage;

Before(async () => {
    console.log("before method");
    loginPage = new LoginPage(page);
})

Given("User opens the application", async () => {
    console.log("Step definition called");
    //await loginPage.openAxeReportApp();
    expect(true).to.equal(true);
});