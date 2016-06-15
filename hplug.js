//Copyright Notice
//Copyright (c) 2016 Paul Huynh

function createNewTab() {
    chrome.tabs.create({url : 'http://google.com'});
    chrome.tabs.getCurrent(function(tab){
            chrome.tabs.remove(tab.id);
    })
}