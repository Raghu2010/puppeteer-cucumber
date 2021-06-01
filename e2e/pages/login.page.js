const users = require("./../testData/users.json");

class LoginPage {
    
    constructor(page) {
        this.page = page;
    }

    async openAxeReportApp() {
        await this.page.goto("https://axe-reports-qa.dequelabs.com/");
        
    }

    async login() {
        
    }
}

module.exports = LoginPage;
