var args = arguments[0] || {};

Titanium.API.info("=====================================================");
Titanium.API.info(args.text);

$.backbutton.addEventListener('click', function(e) {
	$.detailsnews.close();
});
