var pathName = window.location.pathname;
pathName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
var pathUrl = 'http://' + window.location.host + pathName;