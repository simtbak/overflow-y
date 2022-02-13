document.addEventListener("mousemove", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: unhideScroll,
  });
});

function unhideScroll(e) {
    document.getElementsByTagName('body')[0].style = "overflow-y:scroll";
	window.onscroll = function () { console.log('scrolling'); }
	document.onscroll = function () { console.log('scrolling'); }
	document.body.onscroll = function () { console.log('scrolling'); }
}
