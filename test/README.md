# Test FE Project

## Chrome Headless and Combined
### Chrome Headless CLI
1. download chrome-canary [here](https://www.google.com/chrome/canary/thank-you.html?statcb=0&installdataindex=empty) and install.
2. add alias to ~/.zshrc or ~/.bashrc
`````` shell
alias chrome="/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"
alias chrome-canary="/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary"
``````
3. start headless CLI
`chrome --headless --dump-dom https://www.chromestatus.com/`
或者
`chrome-canary --headless --remote-debugging-port=9222 https://www.chromestatus.com/ --crash-dumps-dir=/tmp`

### Using programmatically (Node) - Puppeteer
1. install Puppeteer
`npm i --save puppeteer`
2. running an example
`node puppeteer.example.js`

### Using programmatically (Node) - chrome-remote-interface
child_process way
`node  chrome.remote.interface.example.js`
or 
1. install `npm i --save chrome-remote-interface`
2. run `node  chrome.remote.interface.example2.js`
Issue: `ReferenceError: launchChrome is not defined`

### Using programmatically (Node) - ChromeLauncher
1. install `npm i --save chrome-launcher`
2. run `node chrome.launcher.example.js`

### Using programmatically -  Selenium, WebDriver, and ChromeDriver
1. install `npm i --save-dev selenium-webdriver chromedriver`
2. run `node selenium.webdriver.example.js`
Issues: 
1. Warnings couples of.
2. screenshot shows nothing.

References: 
https://developers.google.com/web/updates/2017/04/headless-chrome
Issues:
devtool 502 badway: http:localhost:9222 then click links.

## Jest
Usage see 
https://jestjs.io/docs/en/tutorial-react

Unit test.

