var toggle = true;

chrome.browserAction.onClicked.addListener(function(tab) {
    toggle = !toggle;
    if (toggle) {
        console.log("GU ME DADDY");
        chrome.browswerAction.setIcon({path: "img/on.png"});
    } else {
        console.log("NO MORE GU");
        chrome.browswerAction.setIcon({path: "img/off.png"});
    }
    chrome.tabs.executeScript(tab.id, {file: "content.js"});
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type == "toggle") {
        sendResponse({toggle: toggle});
    }
});
