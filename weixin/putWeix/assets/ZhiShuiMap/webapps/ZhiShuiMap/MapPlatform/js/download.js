
var downloadData = {
	data: DownloadConfig,
};
var tbHtml = template('downloadTpl', downloadData);
$("#downloadTB").html(tbHtml);

$(document).ready(
	function() {
		setNiceScroll("zs_content", "row");
	}
);
