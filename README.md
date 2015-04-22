#FlexPrice FlexShopper Weekly Payment Widget

JS script for placement of FlexShopper weekly price on ecommerce stores implementing the FlexShopper plugin

###Usage
Place script in header and configure FlexPay Widget with options:
```
    <script type="text/javascript" src="http://plugin.flexshopper.dev/flexshopper.js"></script>
    <script type="application/javascript">
        var _FP = new _FlexPrice();
        _FP.load({
            productSelector: '.product',
            priceSelector: '.price'
        });
    </script>
```

###Required Options:
*   productSelector: '.product' // Selects the product container/containers
*   priceSelector: '.price' // Selects the element containing the price relative to the product container

###Optional:
*   targetSelector: '.price' // Selects the element which will be used as the target for insertion - widget is inserted as the last child of the target's parent, defaults to the "priceSelector" option
*   size: 'SM' // Set the size of the plugin labels (XS,SM,MD, and auto), default auto
*   debug: true // Enable debug mode, default false

###Configuration Examples:

Inject Example w size
```
    <script type="application/javascript">
        var _FP = new _FlexPrice();
        _FP.load({
            size: 'SM' // 'auto', 'MD', 'SM', or 'XS'
            productSelector: '#product-main-content',
            targetSelector: 'input.add-cart'
        });
    </script>
```

Inject Example w custom price DOM selector (useful for product details pages):
```
    <script type="application/javascript">
        var _FP = new _FlexPrice();
        _FP.load({
            productSelector: '#product-main-content',
            priceSelector: '#reg_price',
            targetSelector: 'input.add-cart'
        });
    </script>
```
