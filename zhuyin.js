var zhuyinAdded = false;

chrome.browserAction.onClicked.addListener(function(tab) {

	if (!zhuyinAdded) {
		chrome.tabs.insertCSS(null, {file: "zhuyin.css"});
		zhuyinAdded = true;
	} else {
		chrome.tabs.insertCSS({
			code: '* {font-family: null !important;}'
		});
		zhuyinAdded = false;
	}

});
