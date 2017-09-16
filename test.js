var html = '<li><a title="報紙總覽" alt="報紙總覽" data-desc="報紙新聞">報紙總覽</a></li>';


var body; // get dom body
var node;

//walk the body

function walk(node) {

	// if node is text element, add zhuyin
	if (node.nodeType == 3) {
		addZhuyin(node);
	}

	// otherwise, keep walking

	// find children
	node = node.firstChild;

	// walk through children
	while (node) {
		walk(node);
		node = node.nextSibling;
	}
}

function addZhuyin(node) {

	// convert to uppercase
	var text = node.nodeValue.toUpperCase;

	node.nodeValue = text;
}






























node = body.firstChild;
while (node) {
	node = node.nextSibling;
}

function walk() {

	// if node type is 3, do something
	// else keep walking
}