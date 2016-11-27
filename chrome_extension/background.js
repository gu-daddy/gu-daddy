var toggle = true;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (toggle) {
        console.log("GU ME DADDY");
        chrome.tabs.executeScript(tab.id, {file: "gudaddy.js"});
    }
});

chrome.browserAction.onClicked.addListener(function(tab) {
    toggle = !toggle;
    if (toggle) {
        console.log("GU ME DADDY");
        chrome.browswerAction.setIcon({path: "img/on.png", tabID: tab.id});
        chrome.tabs.executeScript(tab.id, {file: "gudaddy.js"});
    } else {
        console.log("NO MORE GU");
        chrome.browswerAction.setIcon({path: "img/off.png", tabID: tab.id});
    }
});
