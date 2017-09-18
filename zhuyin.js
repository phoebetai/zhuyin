//css

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


//jquery

/*var zhuyinAdded = false;

chrome.browserAction.onClicked.addListener(function(tab) {

	chrome.tabs.executeScript({
		document.head.
	});

	// add or remove zhuyin
	if (!zhuyinAdded) {
		$('*').css('font-family', 'HanWangKaiMediumChuIn');
		zhuyinAdded = true;
	} else {
		$('*').css('font-family', '');
		zhuyinAdded = false;
	}

});*/
