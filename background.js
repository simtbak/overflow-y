let tab_collection = {}

chrome.runtime.onInstalled.addListener(() => {
    //use this to store all original tab names?
  chrome.storage.sync.set(tab_collection);
});
