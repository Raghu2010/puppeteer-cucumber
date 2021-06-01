const reporter = require("cucumber-html-reporter")
const options ={
     theme:'bootstrap',
     jsonFile:'results/cucumber-report.json',
     output:'results/cucumber-html-result.html',
     reportSuiteAsScenaros:true,
     launchReport:false,
}
reporter.generate(options)