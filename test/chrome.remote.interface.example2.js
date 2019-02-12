const CDP = require('chrome-remote-interface');

launchChrome().then(async chrome => {
  const version = await CDP.Version({port: chrome.port});
  console.log(version['User-Agent']);
});