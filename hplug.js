//Copyright Notice
//Copyright (c) 2016 Paul Huynh

function createNewTab() {
    chrome.tabs.create({ url: 'http://google.com' });
<<<<<<< HEAD
    removeCurrentTab();
};

function removeCurrentTab() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        chrome.tabs.remove(tabs[0].id, function () { });
=======
};

function removeCurrentTab() {
    chrome.tabs.getCurrent(function (tab) {
        chrome.tabs.remove(tab.id, function () { });
>>>>>>> refs/remotes/origin/master
    });
};

function removeLastHour() {
    var end = Date.now();
    var start = end - 3600000;
    chrome.history.deleteRange({ startTime: start, endTime: end }
        , function () { });
<<<<<<< HEAD
};
=======
}
>>>>>>> refs/remotes/origin/master

document.addEventListener('DOMContentLoaded', function () {
    createNewTab();
    removeCurrentTab();
    removeLastHour();
<<<<<<< HEAD
=======


>>>>>>> refs/remotes/origin/master
});