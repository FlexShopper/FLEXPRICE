(function() {
    var css = document.createElement('link');                                                                               
    css.type = 'text/css';                                                                                                  
    css.rel='stylesheet';                                                                                                   
    css.async = true;                                                                                                       
    css.href = ('https:' == document.location.protocol ? 'https://cdn' : 'http://cdn') + '.flexshopper.com/widget.css';     
    var s = document.getElementsByTagName('head')[0]; 
    s.appendChild(css);
    WIDGET_HTML='';   
    /** WIDGET HTML **/

     var maxSpendingLimit = 2500;                                                                                        
     function completed() {                                                                                              
         document.removeEventListener('DOMContentLoaded', completed, false);                                             
         window.removeEventListener('load', completed, false);                                                           
         ready();                                                                                                        
     }                                                                                                                   
                                                                                                                         
     function precise_round(num,decimals) {                                                                              
         return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);                                       
     }                                                                                                                   
                                                                                                                         
     function formatMoney(n, c, d, t){                                                                                   
         var c = isNaN(c = Math.abs(c)) ? 2 : c,                                                                         
             d = d == undefined ? "." : d,                                                                               
             t = t == undefined ? "," : t,                                                                               
             s = n < 0 ? "-" : "",                                                                                       
             i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",                                                        
             j = (j = i.length) > 3 ? j % 3 : 0;                                                                         
         return '$'+ s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t);                
     }                                                                                                                   
                                                                                                                         
    readyExecuted = false;                                                                                              
    function ready() {                                                                                                  
         if (readyExecuted) {                                                                                           
            return;                                                                 
         }   

        document.getElementsByTagName('body')[0].innerHTML += WIDGET_HTML;
        weeklyPriceWidget = document.getElementById('weekly-price-widget');                                         
        amountDisplay = document.getElementById('fs-price-amt')                                                     
        priceContainer = Sizzle(_flex.priceSelector);                                                               
        if (priceContainer.length == 0) {                                                                           
            return;                                                                                                 
        }                                                                                                           
                                                                                                                         
        priceContainer = priceContainer[0];                                                                         
        price = parseFloat(priceContainer.innerHTML.replace(/[^0-9.]/mg, ''));                                      
        if (price > maxSpendingLimit) {                                                                             
            return;                                                                                                 
        }                                                                                                                                                                
                                                                                                                         
        weeklyPrice = formatMoney(Math.ceil((price * 2.02) / 52, 1));                                               
        amountDisplay.innerHTML = weeklyPrice;                                                                      
        weeklyPriceWidget.style.display = 'block';                                                                                                             
                                                                                                                         
        readyExecuted = true;                                                                                           
    }                                                                                                                   
                                                                                                                         
     document.addEventListener('DOMContentLoaded', completed, true);                                                     
     window.addEventListener('load', completed, true);                                                                   
 })(); 