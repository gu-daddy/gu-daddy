chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("GU ME DADDY")
  chrome.tabs.executeScript(null, {
    file: "gudaddy.js"
  });
});
