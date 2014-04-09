var args = arguments[0] || {};

Titanium.API.info('THE ARGS:' + args.text);

$.tableView_row.rowJSONData = args;

$.imgAvtar.image = args.link_img_avatar;

$.lblTitle.text = args.title;

$.lblText.text = args.text;
