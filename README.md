#FlexPrice FlexShopper Weekly Payment Widget

JS script for placement of FlexShopper weekly price on ecommerce stores implementing the FlexShopper plugin

###Usage
Place script in header:
```
    <script type="text/javascript" src="http://plugin.flexshopper.dev/flexshopper.js"></script>
```
Without further customization, the medium sized Payment Widget will be injected in to the DOM as the next sibling of any DOM element containing a parsable price value and having a class of '_FsClientPrice'.

###Configuration Examples:

Inject Example w size (not implemented yet / sitewide header):
```
    <script type="application/javascript">
        var _FP = new _FlexPrice();
        _FP.load({
            size: 'SM' // 'auto', 'MD', 'SM', or 'XS'
            productSelector: '#product-main-content',
            priceSelector: '#reg_price',
            targetSelector: 'input.add-cart',
        });
    </script>
```

Inject Example w custom price DOM selector (sitewide header):
```
    <script type="application/javascript">
        var _FP = new _FlexPrice();
        _FP.load({
            priceSelector: 'span.amount'
        });
    </script>
```

Create Example for explicit placement of single widget:
```
    <script type="application/javascript">
        var _FP = new _FlexPrice();
        _FP.load({
            autoApply: false
        });
	var myWidget = _FP.create();
	document.write(myWidget);
    </script>
```
