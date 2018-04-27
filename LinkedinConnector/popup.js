function injectTheScript() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"});
    });
}
function sendMessageScript() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {file: "sendmessage.js"});
    });
}

document.getElementById('findcommenter').addEventListener('click', injectTheScript);
document.getElementById('sendmessage').addEventListener('click', sendMessageScript);