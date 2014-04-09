var data = [];

if (Titanium.Network.online) {
	var xhr = Titanium.Network.createHTTPClient();
	xhr.open("GET", 'http://haarlem.cityapp.nu/app/news');
	xhr.setTimeout(10000);
	xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	xhr.onload = function() {
		data = [];
		Titanium.API.info('THIS IS :' + this.responseText);
		var jsObj = JSON.parse(this.responseText);
		Titanium.API.info('THIS  jsObj.news_official.length :' + jsObj.news_official.length);
		for (var i = 0; i < jsObj.news_official.length; i++) {
			var News_Row = Alloy.createController('rows/row_news', jsObj.news_official[i]).getView();
			data.push(News_Row);
		}
		$.TableView1.setData(data);
	};
	xhr.onerror = function(exhr) {
		xhr.abort();
		Ti.UI.createAlertDialog({
			title : 'Demo',
			message : 'Error in download data'
		}).show();
	};
	xhr.send();
}
$.TableView1.addEventListener('click', function(e) {
	var openDetails = Alloy.createController('detailsNews', e.row.rowJSONData).getView().open();
});
$.win1.open();
