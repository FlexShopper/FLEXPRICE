var preciseRound = function (num, decimals) {
    return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
};

var formatMoney = function (n, c, d, t) {
    var c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return '$'+ s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t);
};

var s4 = function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};