var FlexPrice, completed, ready, linkCss, create, inject;

var readyExecuted = false;
var autoApply = true;
var priceSelector   = '._FsClientPrice';
var size = 'M';
var debug = false;

var WIDGET_HTML='';
/** WIDGET HTML **/
var POPUP_HTML='';
/** POPUP HTML **/

FlexPrice = function(){};

/* bus logic */
FlexPrice.prototype.load = function(options) {
    if (options.hasOwnProperty('priceSelector')) {
        priceSelector = options.priceSelector;
    }
    if (options.hasOwnProperty('autoApply')) {
        autoApply = options.autoApply;
    }
    if (options.hasOwnProperty('size')) {
        if (options.size === 'S' || options.size === 'L') {
            size = options.size;
        }
    }
    if (options.hasOwnProperty('debug')) {
        debug = options.debug;
    }
};

FlexPrice.prototype.create = function() {
    if (debug) {
        console.log('create');
    }
    var weeklyPrice;
    var priceContainers;
    var amountDisplay;

    priceContainers = Sizzle(priceSelector);
    if (priceContainers.length == 0) {
        return '';
    }
    var widget = new Widget();
    widget.init(priceContainers[0]);
    return widget.getHtml();

};

var inject = function () {
    var priceContainers = Sizzle(priceSelector);
    var containerLength = priceContainers.length;
    if (containerLength == 0) {
        return;
    }
    for (var a=0; a < containerLength; a++) {
        var widget = new Widget();
        widget.init(priceContainers[a], true);
    }
};

var ready = function () {
    if (debug) {
        console.log('ready');
    }
    if (readyExecuted) {
        return;
    }
    readyExecuted = true;
    linkCss();
    if (debug) {
        console.log('autoApply ' + autoApply);
    }
    if (!autoApply) {
        return;
    }
    inject();

};

/* routing */
var completed = function () {
    if (debug) {
        console.log('completed');
    }
    document.removeEventListener('DOMContentLoaded', completed, false);
    window.removeEventListener('load', completed, false);
    ready();
};

/* styling */
var linkCss = function () {
    var css = document.createElement('link');
    css.type = 'text/css';
    css.rel='stylesheet';
    css.async = true;
    css.href = ('https:' == document.location.protocol ? 'https://cdn' : 'http://cdn') + '.flexshopper.com/widget.css';
    if (debug) {
        css.href = 'http://plugin.flexshopper.dev/widget.css'; // debug
        console.log(css.href);
    }
    var s = document.getElementsByTagName('head')[0];
    s.appendChild(css);
};


this._FlexPrice = FlexPrice;

document.addEventListener('DOMContentLoaded', completed, true);
window.addEventListener('load', completed, true);