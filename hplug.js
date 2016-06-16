//Copyright Notice
//Copyright (c) 2016 Paul Huynh

function createNewTab() {
    chrome.tabs.create({ url: 'http://google.com' });
    removeCurrentTab();
};

function removeCurrentTab() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        chrome.tabs.remove(tabs[0].id, function () { });
    });
};

function removeLastHour() {
    var end = Date.now();
    var start = end - 3600000;
    chrome.history.deleteRange({ startTime: start, endTime: end }
        , function () { });
};

document.addEventListener('DOMContentLoaded', function () {
    createNewTab();
    removeCurrentTab();
    removeLastHour();
});