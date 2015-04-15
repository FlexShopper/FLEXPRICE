/* widget */
var Widget = function () {
    this.maxSpendLimit = 2500;
    this.widgetIdPrefix = 'weekly-price-widget';
    this.popIdPrefix = 'fs-pop';
    this.baseHtml = WIDGET_HTML;
    this.html = '';
    this.uniqueString = '';
    this.widgetId = '';
    this.fsPopId = '';
}

Widget.prototype.generateUniqueString = function () {
    this.uniqueString = s4() + s4() + s4();
};

Widget.prototype.getHtml = function () {
    return this.html;
};

Widget.prototype.getWidgetId = function () {
    return this.widgetId;
};

Widget.prototype.init = function (container, inject) {
    var price, node, amountDisplay, weeklyPrice, domWidget;
    if (inject === undefined) {
        inject = false;
    }
    // see if too expensive, and if so abort
    price = parseFloat(container.innerHTML.replace(/[^0-9.]/mg, ''));
    if (price > this.maxSpendLimit) {
        this.html = '';
        this.widgetId = '';
        return false;
    }
    this.generateUniqueString();
    this.widgetId = this.widgetIdPrefix + '-' + this.uniqueString;
    this.fsPopId = this.popIdPrefix + '-' + this.uniqueString;
    this.html = this.baseHtml.replace(this.widgetIdPrefix, this.widgetId);
    this.html = this.html.replace(this.popIdPrefix, this.fsPopId);

    if (inject) {
        var node = container.parentNode;  // append widget to same parent node as price
        console.log('inject');
        console.log(node);
    } else {
        node = document.createElement('div');
    }
    node.innerHTML += this.html;
    amountDisplay = Sizzle('#' + this.widgetId + ' span.fs-price-amt', node);
    if (amountDisplay.length == 0) {
        this.html = '';
        this.widgetId = '';
        return;
    }
    weeklyPrice = formatMoney(Math.ceil((price * 2.02) / 52, 1));
    amountDisplay[0].innerHTML = weeklyPrice;

    domWidget = Sizzle('#' + this.widgetId, node);
    console.log(domWidget);
    console.log(domWidget.length);
    if (domWidget.length == 0) {
        this.html = '';
        this.widgetId = '';
        return;
    }
    domWidget[0].style.display = 'block';
    this.html = node.innerHTML;
    if (!inject) {
        node.innerHTML = '';
    }
};
