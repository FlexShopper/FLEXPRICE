#Weekly Payment Widget

[![Join the chat at https://gitter.im/FlexShopper/FLEXPRICE](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/FlexShopper/FLEXPRICE?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

JS for placement of FlexShopper weekly price on ecommerce stores implementing the FlexShopper plugin
[Examples](http://rawgit.com/FlexShopper/FLEXPRICE/master/test/sample.html)

###Usage
Place script in header and configure FlexPay Widget with options:
``` js
    <script type="text/javascript" src="http://cdn.flexprice.com/flexprice.js"></script>
    <script type="application/javascript">
        var _FP = new _FlexPrice({
            productSelector: '.product',
            priceSelector: '.price'
        });
    </script>
```
###Configuration Options
######Required
*   `productSelector` - Selects the product container or containers
*   `priceSelector` - Selects the element containing the price relative to the product container

######Optional:
*   `targetSelector` - Selects the element which will be used as the target for insertion - widget is inserted as the last child of the target's parent, defaults to the "priceSelector" option
*   `size` - Set the size of the plugin labels (XS,SM,MD, and AUTO), default AUTO
*   `autoInject` - Automatically inject widget on page load.  If disabled, widget must be injected manually using inject() call.
*   `debug` -  Enable debug mode, default false

Note: The **priceSelector** and **targetSelector** elements must be children of the **productSelector**.  If you are configuring a single product using the FlexPrice widget then the **productSelector** can be simply set to the body tag.

###Configuration Examples:

######Inject On Multiple Products
``` js
    <script type="application/javascript">
    new _FlexPrice({
        productSelector: '.sub-category-items .row'
        ,priceSelector: '.price'
        ,size: 'MD'
    });
    </script>
```    

######Inject On Single Product w size
``` js
    <script type="application/javascript">
        var _FP = new _FlexPrice({
            size: 'SM' // 'AUTO', 'MD', 'SM', or 'XS'
            productSelector: '#product-main-content',
            targetSelector: 'input.add-cart'
        });
    </script>
```

######Custom injection target selector (useful for product detail pages):
``` js
    <script type="application/javascript">
        var _FP = new _FlexPrice({
            productSelector: '#product-main-content',
            priceSelector: '#reg_price',
            targetSelector: 'input.add-cart'
        });
    </script>
```

######Injection w placeholder:

Step 1: Add Placeholder HTML
``` html
<div class="fs-placeholder"><div style="display: none"></div></div>
```

Step 2: Configure & Use Plugin
``` js
    <script type="application/javascript">
        var _FP = new _FlexPrice({
            productSelector: '#some-container',
            priceSelector: '.price',
            targetSelector: '.fs-placeholder div'
        });
    </script>
```
