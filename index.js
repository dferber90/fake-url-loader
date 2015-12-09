/*
  This file was taken from webpack and modified.
  https://github.com/webpack/file-loader/blob/master/index.js

  Original Author: Tobias Koppers @sokra
  Modifications: Dominik Ferber @dferber90
 */

var loaderUtils = require("loader-utils");
var mime = require("mime");
module.exports = function(content) {
  this.cacheable && this.cacheable();
  var query = loaderUtils.parseQuery(this.query);
  var limit = (this.options && this.options.url && this.options.url.dataUrlLimit) || 0;
  if(query.limit) {
    limit = parseInt(query.limit, 10);
  }
  var mimetype = query.mimetype || query.minetype || mime.lookup(this.resourcePath);
  if(limit <= 0 || content.length < limit) {
    return "module.exports = " + JSON.stringify("data:" + (mimetype ? mimetype + ";" : "") + "base64," + content.toString("base64"));
  } else {
  	var fakeFileLoader = require("fake-file-loader");
  	return fakeFileLoader.call(this, content);
  }
}
module.exports.raw = true;
