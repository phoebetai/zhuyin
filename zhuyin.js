
// when a tab is updated, change whether page action is shown
chrome.tabs.onUpdated.addListener(showPageAction(tabId, changeInfo, tab));

// determines whether to show page action for given tab
function showPageAction(tabId, changeInfo, tab) {
	chrome.tabs.detectLanguage(tabId, function(language) {
		if (language == 'zh-TW') {
			chrome.pageAction.show();
		}
	});
}

chrome.pageAction.onClicked.addListener();

function addZhuyin() {
	var text = document.body.innerHTML;
}