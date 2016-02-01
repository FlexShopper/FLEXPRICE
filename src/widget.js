/* widget */
var Widget = function (options) {
    this.maxSpendLimit = 2500;
    this.minSpendLimit = 20;
    this.widgetIdPrefix = 'weekly-price-widget';
    this.popIdPrefix = 'fs-pop';
    this.baseHtml = '';
    this.popupHtml = options.POPUP_HTML;
    this.widgetHtml = options.WIDGET_HTML;
    this.html = '';
    this.uniqueString = '';
    this.widgetId = '';
    this.fsPopId = '';
    this.size = options.size;
};

Widget.prototype.generateUniqueString = function () {
    this.uniqueString = s4() + s4() + s4();
};

Widget.prototype.getHtml = function () {
    return this.html;
};

Widget.prototype.getWidgetId = function () {
    return this.widgetId;
};

Widget.prototype.initOverlayAndPopup = function () {
    var overlay = document.getElementById('fs-pop-overlay');
    var popup = document.getElementById('fs-pop');
    var popupClose = Sizzle('#fs-pop .fs-pop-close')[0];
    var self = this;

    function close(event) {
        // close the popup + overlay
        self.closePopupAndOverlay();

        // Stop the propagation
        event.stopImmediatePropagation();
        event.preventDefault();
    }

    popupClose.addEventListener('click', close);

    // hide overlay and popup on click
    // element does not exist in new popup
    // overlay.addEventListener('click', close);
};

Widget.prototype.closePopupAndOverlay = function () {
    var overlay = document.getElementById('fs-pop-overlay');
    var popup = document.getElementById('fs-pop');

    overlay.style.display = 'none';
    popup.style.display = 'none';
};

Widget.prototype.showOverlay = function () {
    var overlay = document.getElementById('fs-pop-overlay');

    // element does not exist in new popup
    // overlay.style.display = 'block';
};

Widget.prototype.showPopup = function () {

    var popup = document.getElementById('fs-pop');

    popup.style.display = 'block';
};

Widget.prototype.repositionPopup = function () {
    var popup = document.getElementById('fs-pop');
    var marginTop = 25;

    popup.style.top = (window.pageYOffset + marginTop) + 'px';
};

Widget.prototype.configureAndshowPopup = function () {
    this.showOverlay();
    this.showPopup();
    this.repositionPopup();
};

Widget.prototype.determineRecommendedSize = function (container) {
    var size;

    if (container.offsetWidth < 150) {
        size = 'XS';
    } else if (container.offsetWidth < 200) {
        size = 'SM';
    } else {
        size = 'MD';
    }

    return size;
};

Widget.prototype.init = function (container, priceSelector, targetSelector, inject) {
    var price, node, fragment, weeklyPrice, amountDisplay, size, self = this, priceContainer, targetContainer;

    // Default the targetSelector to the priceSelector if not specified
    if (!targetSelector) {
        targetSelector = priceSelector;
    }

    // Find the price
    priceContainer = Sizzle(priceSelector, container)[0];
    targetContainer = Sizzle(targetSelector, container)[0];

    if (!priceContainer) {
        return false;
    }

    price = parseFloat(priceContainer.innerHTML.replace(/[^0-9.]/mg, ''));

    if (price > this.maxSpendLimit || price < this.minSpendLimit) {
        this.html = '';
        this.widgetId = '';
        return false;
    }

    // Set label html based on size
    if (this.size === 'AUTO') {
        if (!targetContainer) {
            return false;
        }

        size = this.determineRecommendedSize(targetContainer);
    } else {
        // Otherwise just use default size

        size = this.size;
    }
    this.baseHtml = this.widgetHtml[size];

    this.generateUniqueString();
    this.widgetId = this.widgetIdPrefix + '-' + this.uniqueString;

    // Update the widget id
    this.html = this.baseHtml.replace(new RegExp(this.widgetIdPrefix, 'g'), this.widgetId);

    // Make sure that we have a popup on the page
    if (!document.getElementById('fs-pop')) {
        var popup = document.createElement('div');
        popup.innerHTML = this.popupHtml;

        document.body.appendChild(popup);
    }

    // Inject as sibling of targetContainer
    if (inject) {
        node = targetContainer.parentNode;  // append widget to same parent node as price

        node.innerHTML += this.html;
        node.childNodes[(node.childNodes.length - 1)]
            .addEventListener('click', function () {
                self.configureAndshowPopup();
            }, true);

    // Otherwise prepare a fragment for return
    } else {
        fragment = document.createDocumentFragment();
        fragment.appendChild(document.createElement('div'));
        fragment.childNodes[0].addEventListener('click', function () {
            self.configureAndshowPopup();
        }, true);
        fragment.childNodes[0].innerHTML = this.html;
    }

    // Hide Popup On Overlay Click
    self.initOverlayAndPopup();

    // Update the display price
    amountDisplay = Sizzle('#' + this.widgetId + ' .fs-price-amt', node);

    if (amountDisplay.length === 0) {
        this.html = '';
        this.widgetId = '';
        return;
    }

    var cashPrice = price + 50;
    weeklyPrice = Math.ceil((price * 2.02) / 52, 1);
    var totalPrice = weeklyPrice * 52;
    var rentalFee = totalPrice - price;

    amountDisplay[0].innerHTML = formatMoney(weeklyPrice);

    // Popup legalese values
    Sizzle('#fs-pop .top-footnote .weekly-price')[0].innerHTML = formatMoney(weeklyPrice);
    Sizzle('#fs-pop .top-footnote .total-price')[0].innerHTML  = formatMoney(totalPrice);
    Sizzle('#fs-pop .top-footnote .cash-price')[0].innerHTML   = formatMoney(cashPrice);
    Sizzle('#fs-pop .top-footnote .rental-fee')[0].innerHTML   = formatMoney(rentalFee);

    if (!inject) {
        return fragment;
    }
};

