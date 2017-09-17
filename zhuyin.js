chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({
		code: "document.body.style.fontFamily=='HanWangKaiMediumChuIn' ? document.body.style.fontFamily=null : document.body.style.fontFamily='HanWangKaiMediumChuIn'"
	});
});