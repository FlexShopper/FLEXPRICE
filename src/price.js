var FlexPrice;
var linkCss;
var debug = false;

var WIDGET_HTML = [];
/** WIDGET HTML **/

var POPUP_HTML = '';
/** POPUP HTML **/

var proxy = function (func, context) {
    return function () {
        func.apply(context);
    };
};

FlexPrice = function (options) {
    var self = this;

    // store the options
    if (options !== undefined) {
        this.load(options);
    }

    this.completedProxied = proxy(this.completed, self);

    document.addEventListener('DOMContentLoaded', this.completedProxied);
    window.addEventListener('load', this.completedProxied);
};

/* bus logic */
FlexPrice.prototype.load = function (options) {
    this.options = {};

    // Set defaults
    this.options.size = 'AUTO';
    this.options.autoInject = true;

    if (options.hasOwnProperty('productSelector')) {
        this.options.productSelector = options.productSelector;
    }

    if (options.hasOwnProperty('priceSelector')) {
        this.options.priceSelector = options.priceSelector;
    }

    if (options.hasOwnProperty('targetSelector')) {
        this.options.targetSelector = options.targetSelector;
    }

    if (options.hasOwnProperty('autoInject')) {
        this.options.autoInject = options.autoInject;
    }

    if (options.hasOwnProperty('size')) {
        this.options.size = options.size;
    }

    return this;
};

FlexPrice.prototype.create = function () {
    if (debug) {
        console.log('create');
    }

    var weeklyPrice;
    var productContainers;
    var amountDisplay;

    productContainers = Sizzle(this.options.productSelector);

    if (productContainers.length === 0) {
        return '';
    }

    var widget = new Widget();

    return widget.init(productContainers[0], this.options.priceSelector, this.options.targetSelector, false);
};

FlexPrice.prototype.inject = function () {
    var productContainers = Sizzle(this.options.productSelector);
    var containerLength = productContainers.length;

    if (containerLength === 0) {
        return;
    }

    for (var a = 0; a < containerLength; a++) {
        var widget = new Widget({
            WIDGET_HTML: WIDGET_HTML,
            POPUP_HTML: POPUP_HTML,

            // @todo deal with size
            size: this.options.size
        });

        widget.init(productContainers[a], this.options.priceSelector, this.options.targetSelector, true);
    }
};

FlexPrice.prototype.ready = function () {
    if (debug) {
        console.log('ready');
    }

    if (this.readyExecuted) {
        return;
    }

    this.readyExecuted = true;

    // Load css if not already
    if (!Sizzle('#fs-css-link', document.getElementsByTagName('head')[0]).length) {
        linkCss();
    }

    if (!this.options.autoInject) {
        return;
    }

    this.inject();
};

/* routing */
FlexPrice.prototype.completed = function () {
    if (debug) {
        console.log('completed');
    }

    document.removeEventListener('DOMContentLoaded', this.completedProxied, false);
    window.removeEventListener('load', this.completedProxied, false);

    this.ready();
};

/* styling */
var linkCss = function () {

    var css = document.createElement('link');

    css.id = 'fs-css-link';
    css.type = 'text/css';
    css.rel = 'stylesheet';
    css.async = true;
    css.href = (document.location.protocol == 'https:' ? 'https://images' : 'http://images') + '.flexprice.xyz/flexprice/v4/flexprice.css';

    if (debug) {
        // css.href = 'http://plugin.flexshopper.dev/flexprice.css'; // debug
        css.href = 'https://weekly-payment-widget.flexshopper.dev/flexprice.css'; // debug
        console.log(css.href);
    }

    var s = document.getElementsByTagName('head')[0];
    s.appendChild(css);
};

this._FlexPrice = FlexPrice;

