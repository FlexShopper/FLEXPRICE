!function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,n=b&&b.ownerDocument,o=b?b.nodeType:9;if(c=c||[],"string"!=typeof a||!a||1!==o&&9!==o&&11!==o)return c;if(!d&&((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,I)){if(11!==o&&(i=ra.exec(a)))if(e=i[1]){if(9===o){if(!(g=b.getElementById(e)))return c;if(g.id===e)return c.push(g),c}else if(n&&(g=n.getElementById(e))&&M(b,g)&&g.id===e)return c.push(g),c}else{if(i[2])return $.apply(c,b.getElementsByTagName(a)),c;if((e=i[3])&&v.getElementsByClassName&&b.getElementsByClassName)return $.apply(c,b.getElementsByClassName(e)),c}if(v.qsa&&!T[a+" "]&&(!J||!J.test(a))){if(1!==o)n=b,l=a;else if("object"!==b.nodeName.toLowerCase()){for((h=b.getAttribute("id"))?h=h.replace(ta,"\\$&"):b.setAttribute("id",h=N),j=z(a),f=j.length;f--;)j[f]="[id='"+h+"'] "+m(j[f]);l=j.join(","),n=sa.test(a)&&k(b.parentNode)||b}if(l)try{return $.apply(c,n.querySelectorAll(l)),c}catch(a){}finally{h===N&&b.removeAttribute("id")}}}return B(a.replace(ha,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>w.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[N]=!0,a}function e(a){var b=G.createElement("div");try{return!!a(b)}catch(a){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=a.length;d--;)w.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||V)-(~a.sourceIndex||V);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){return"input"===b.nodeName.toLowerCase()&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function j(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function k(a){return a&&void 0!==a.getElementsByTagName&&a}function l(){}function m(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function n(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[P,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(j=b[N]||(b[N]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===P&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function o(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function p(a,c,d){for(var e=0,f=c.length;e<f;e++)b(a,c[e],d);return d}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,r=d||p(b||"*",h.nodeType?[h]:h,[]),s=!a||!d&&b?r:q(r,m,a,h,i),t=c?f||(d?a:o||e)?[]:g:s;if(c&&c(s,t,h,i),e)for(j=q(t,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?aa(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=q(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):$.apply(g,t)})}function s(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[" "],h=f?1:0,i=n(function(a){return a===b},g,!0),j=n(function(a){return aa(b,a)>-1},g,!0),k=[function(a,c,d){var e=!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d));return b=null,e}];h<e;h++)if(c=w.relative[a[h].type])k=[n(o(k),c)];else{if(c=w.filter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;d<e&&!w.relative[a[d].type];d++);return r(h>1&&o(k),h>1&&m(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ha,"$1"),c,h<d&&s(a.slice(h,d)),d<e&&s(a=a.slice(d)),d<e&&m(a))}k.push(c)}return o(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,t=d||f&&w.find.TAG("*",j),u=P+=null==s?1:Math.random()||.1,v=t.length;for(j&&(C=g===G||g||j);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0,g||k.ownerDocument===G||(F(k),h=!I);m=a[l++];)if(m(k,g||G,h)){i.push(k);break}j&&(P=u)}e&&((k=!m&&k)&&n--,d&&p.push(k))}if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,r,g,h);if(d){if(n>0)for(;o--;)p[o]||r[o]||(r[o]=Y.call(i));r=q(r)}$.apply(i,r),j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}return j&&(P=u,C=s),p};return e?d(g):g}var u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N="sizzle"+1*new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0},V=1<<31,W={}.hasOwnProperty,X=[],Y=X.pop,Z=X.push,$=X.push,_=X.slice,aa=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},ba="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ca="[\\x20\\t\\r\\n\\f]",da="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ea="\\["+ca+"*("+da+")(?:"+ca+"*([*^$|!~]?=)"+ca+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+da+"))|)"+ca+"*\\]",fa=":("+da+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ea+")*)|.*)\\)|)",ga=new RegExp(ca+"+","g"),ha=new RegExp("^"+ca+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ca+"+$","g"),ia=new RegExp("^"+ca+"*,"+ca+"*"),ja=new RegExp("^"+ca+"*([>+~]|"+ca+")"+ca+"*"),ka=new RegExp("="+ca+"*([^\\]'\"]*?)"+ca+"*\\]","g"),la=new RegExp(fa),ma=new RegExp("^"+da+"$"),na={ID:new RegExp("^#("+da+")"),CLASS:new RegExp("^\\.("+da+")"),TAG:new RegExp("^("+da+"|[*])"),ATTR:new RegExp("^"+ea),PSEUDO:new RegExp("^"+fa),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ca+"*(even|odd|(([+-]|)(\\d*)n|)"+ca+"*(?:([+-]|)"+ca+"*(\\d+)|))"+ca+"*\\)|)","i"),bool:new RegExp("^(?:"+ba+")$","i"),needsContext:new RegExp("^"+ca+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ca+"*((?:-\\d)?\\d*)"+ca+"*\\)|)(?=[^-]|$)","i")},oa=/^(?:input|select|textarea|button)$/i,pa=/^h\d$/i,qa=/^[^{]+\{\s*\[native \w/,ra=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,sa=/[+~]/,ta=/'|\\/g,ua=new RegExp("\\\\([\\da-f]{1,6}"+ca+"?|("+ca+")|.)","ig"),va=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},wa=function(){F()};try{$.apply(X=_.call(O.childNodes),O.childNodes),X[O.childNodes.length].nodeType}catch(a){$={apply:X.length?function(a,b){Z.apply(a,_.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}v=b.support={},y=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},F=b.setDocument=function(a){var b,c,d=a?a.ownerDocument||a:O;return d!==G&&9===d.nodeType&&d.documentElement?(G=d,H=G.documentElement,I=!y(G),G.documentMode&&(c=G.defaultView)&&c.top!==c&&(c.addEventListener?c.addEventListener("unload",wa,!1):c.attachEvent&&c.attachEvent("onunload",wa)),v.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),v.getElementsByTagName=e(function(a){return a.appendChild(G.createComment("")),!a.getElementsByTagName("*").length}),v.getElementsByClassName=qa.test(G.getElementsByClassName),v.getById=e(function(a){return H.appendChild(a).id=N,!G.getElementsByName||!G.getElementsByName(N).length}),v.getById?(w.find.ID=function(a,b){if(void 0!==b.getElementById&&I){var c=b.getElementById(a);return c?[c]:[]}},w.filter.ID=function(a){var b=a.replace(ua,va);return function(a){return a.getAttribute("id")===b}}):(delete w.find.ID,w.filter.ID=function(a){var b=a.replace(ua,va);return function(a){var c=void 0!==a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),w.find.TAG=v.getElementsByTagName?function(a,b){return void 0!==b.getElementsByTagName?b.getElementsByTagName(a):v.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},w.find.CLASS=v.getElementsByClassName&&function(a,b){if(void 0!==b.getElementsByClassName&&I)return b.getElementsByClassName(a)},K=[],J=[],(v.qsa=qa.test(G.querySelectorAll))&&(e(function(a){H.appendChild(a).innerHTML="<a id='"+N+"'></a><select id='"+N+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&J.push("[*^$]="+ca+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||J.push("\\["+ca+"*(?:value|"+ba+")"),a.querySelectorAll("[id~="+N+"-]").length||J.push("~="),a.querySelectorAll(":checked").length||J.push(":checked"),a.querySelectorAll("a#"+N+"+*").length||J.push(".#.+[+~]")}),e(function(a){var b=G.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&J.push("name"+ca+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),J.push(",.*:")})),(v.matchesSelector=qa.test(L=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){v.disconnectedMatch=L.call(a,"div"),L.call(a,"[s!='']:x"),K.push("!=",fa)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=qa.test(H.compareDocumentPosition),M=b||qa.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){if(a===b)return E=!0,0;var c=!a.compareDocumentPosition-!b.compareDocumentPosition;return c||(c=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&c||!v.sortDetached&&b.compareDocumentPosition(a)===c?a===G||a.ownerDocument===O&&M(O,a)?-1:b===G||b.ownerDocument===O&&M(O,b)?1:D?aa(D,a)-aa(D,b):0:4&c?-1:1)}:function(a,b){if(a===b)return E=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===G?-1:b===G?1:e?-1:f?1:D?aa(D,a)-aa(D,b):0;if(e===f)return g(a,b);for(c=a;c=c.parentNode;)h.unshift(c);for(c=b;c=c.parentNode;)i.unshift(c);for(;h[d]===i[d];)d++;return d?g(h[d],i[d]):h[d]===O?-1:i[d]===O?1:0},G):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==G&&F(a),c=c.replace(ka,"='$1']"),v.matchesSelector&&I&&!T[c+" "]&&(!K||!K.test(c))&&(!J||!J.test(c)))try{var d=L.call(a,c);if(d||v.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(a){}return b(c,G,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==G&&F(a);var c=w.attrHandle[b.toLowerCase()],d=c&&W.call(w.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:v.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(E=!v.detectDuplicates,D=!v.sortStable&&a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return D=null,a},x=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=x(b);return c},w=b.selectors={cacheLength:50,createPseudo:d,match:na,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ua,va),a[3]=(a[3]||a[4]||a[5]||"").replace(ua,va),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return na.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&la.test(c)&&(b=z(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ua,va).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+ca+")"+a+"("+ca+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||void 0!==a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:!c||(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f.replace(ga," ")+" ").indexOf(d)>-1:"|="===c&&(f===d||f.slice(0,d.length+1)===d+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){for(;p;){for(m=b;m=m[p];)if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(m=q,l=m[N]||(m[N]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===P&&j[1],t=n&&j[2],m=n&&q.childNodes[n];m=++n&&m&&m[p]||(t=n=0)||o.pop();)if(1===m.nodeType&&++t&&m===b){k[a]=[P,n,t];break}}else if(s&&(m=b,l=m[N]||(m[N]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===P&&j[1],t=n),!1===t)for(;(m=++n&&m&&m[p]||(t=n=0)||o.pop())&&((h?m.nodeName.toLowerCase()!==r:1!==m.nodeType)||!++t||(s&&(l=m[N]||(m[N]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[P,t]),m!==b)););return(t-=e)===d||t%d==0&&t/d>=0}}},PSEUDO:function(a,c){var e,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[N]?f(c):f.length>1?(e=[a,a,"",c],w.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=aa(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=A(a.replace(ha,"$1"));return e[N]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),b[0]=null,!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return a=a.replace(ua,va),function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)>-1}}),lang:d(function(a){return ma.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(ua,va).toLowerCase(),function(b){var c;do{if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return(c=c.toLowerCase())===a||0===c.indexOf(a+"-")}while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return!1===a.disabled},disabled:function(a){return!0===a.disabled},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,!0===a.selected},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},header:function(a){return pa.test(a.nodeName)},input:function(a){return oa.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[c<0?c+b:c]}),even:j(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},w.pseudos.nth=w.pseudos.eq;for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=h(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=i(u);l.prototype=w.filters=w.pseudos,w.setFilters=new l,z=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){d&&!(e=ia.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=ja.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ha," ")}),h=h.slice(d.length));for(g in w.filter)!(e=na[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):S(a,i).slice(0)},A=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(b||(b=z(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d)),f.selector=a}return f},B=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,l=!d&&z(a=j.selector||a);if(c=c||[],1===l.length){if(f=l[0]=l[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&v.getById&&9===b.nodeType&&I&&w.relative[f[1].type]){if(!(b=(w.find.ID(g.matches[0].replace(ua,va),b)||[])[0]))return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=na.needsContext.test(a)?0:f.length;e--&&(g=f[e],!w.relative[h=g.type]);)if((i=w.find[h])&&(d=i(g.matches[0].replace(ua,va),sa.test(f[0].type)&&k(b.parentNode)||b))){if(f.splice(e,1),!(a=d.length&&m(f)))return $.apply(c,d),c;break}}return(j||A(a,l))(d,b,!I,c,!b||sa.test(a)&&k(b.parentNode)||b),c},v.sortStable=N.split("").sort(U).join("")===N,v.detectDuplicates=!!E,F(),v.sortDetached=e(function(a){return 1&a.compareDocumentPosition(G.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),v.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(ba,function(a,b,c){var d;if(!c)return!0===a[b]?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),"function"==typeof define&&define.amd?define(function(){return b}):"undefined"!=typeof module&&module.exports?module.exports=b:a.Sizzle=b}(window),function(){"use strict";var a=function(a,b,c,d){var b=isNaN(b=Math.abs(b))?2:b,d=void 0==d?",":d,e=a<0?"-":"",f=parseInt(a=Math.abs(+a||0).toFixed(b))+"",g=(g=f.length)>3?g%3:0;return"$"+e+(g?f.substr(0,g)+d:"")+f.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+d)},b=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},c=function(a){this.maxSpendLimit=2500,this.minSpendLimit=20,this.widgetIdPrefix="weekly-price-widget",this.popIdPrefix="fs-pop",this.baseHtml="",this.popupHtml=a.POPUP_HTML,this.widgetHtml=a.WIDGET_HTML,this.html="",this.uniqueString="",this.widgetId="",this.fsPopId="",this.size=a.size};c.prototype.generateUniqueString=function(){this.uniqueString=b()+b()+b()},c.prototype.getHtml=function(){return this.html},c.prototype.getWidgetId=function(){return this.widgetId},c.prototype.initOverlayAndPopup=function(){function a(a){b.closePopupAndOverlay(),a.stopImmediatePropagation(),a.preventDefault()}var b=(document.getElementById("fs-pop-overlay"),document.getElementById("fs-pop"),this);Sizzle("#fs-pop .fs-pop-close")[0].addEventListener("click",a)},c.prototype.closePopupAndOverlay=function(){document.getElementById("fs-pop-overlay");document.getElementById("fs-pop").style.display="none"},c.prototype.showOverlay=function(){document.getElementById("fs-pop-overlay")},c.prototype.showPopup=function(){document.getElementById("fs-pop").style.display="block"},c.prototype.repositionPopup=function(){document.getElementById("fs-pop").style.top=window.pageYOffset+25+"px"},c.prototype.configureAndshowPopup=function(){this.showOverlay(),this.showPopup(),this.repositionPopup()},c.prototype.determineRecommendedSize=function(a){return a.offsetWidth<150?"XS":a.offsetWidth<200?"SM":"MD"},c.prototype.init=function(b,c,d,e){var f,g,h,i,j,k,l,m,n=this;if(d||(d=c),l=Sizzle(c,b)[0],m=Sizzle(d,b)[0],!l)return!1;if((f=parseFloat(l.innerHTML.replace(/[^0-9.]/gm,"")))>this.maxSpendLimit||f<this.minSpendLimit)return this.html="",this.widgetId="",!1;if("AUTO"===this.size){if(!m)return!1;k=this.determineRecommendedSize(m)}else k=this.size;if(this.baseHtml=this.widgetHtml[k],this.generateUniqueString(),this.widgetId=this.widgetIdPrefix+"-"+this.uniqueString,this.html=this.baseHtml.replace(new RegExp(this.widgetIdPrefix,"g"),this.widgetId),!document.getElementById("fs-pop")){var o=document.createElement("div");o.innerHTML=this.popupHtml,document.body.appendChild(o)}if(e?(g=m.parentNode,g.innerHTML+=this.html,g.childNodes[g.childNodes.length-1].addEventListener("click",function(){n.configureAndshowPopup()},!0)):(h=document.createDocumentFragment(),h.appendChild(document.createElement("div")),h.childNodes[0].addEventListener("click",function(){n.configureAndshowPopup()},!0),h.childNodes[0].innerHTML=this.html),n.initOverlayAndPopup(),j=Sizzle("#"+this.widgetId+" .fs-price-amt",g),0===j.length)return this.html="",void(this.widgetId="");var p=f+50;i=Math.ceil(2.4*f/52,1);var q=52*i,r=q-p;return j[0].innerHTML=a(i),Sizzle("#fs-pop .top-footnote .weekly-price")[0].innerHTML=a(i),Sizzle("#fs-pop .top-footnote .total-price")[0].innerHTML=a(q),Sizzle("#fs-pop .top-footnote .cash-price")[0].innerHTML=a(p),Sizzle("#fs-pop .top-footnote .rental-fee")[0].innerHTML=a(r),e?void 0:h};var d,e,f=!1,g=[];g.XS="",g.XS+='<div id="weekly-price-wrap">',g.XS+='    <div id="weekly-price-widget" class="fs-wkly-price fs-badge-xs" title="Click here to learn about FlexShopper\'s Lease to Own Payment Option">',g.XS+='        <div class="fs-price"><span class="fs-price-amt">$17</span><span class="fs-price-label">per week*</span></div>',g.XS+='        <span class="icon-q">?</span>',g.XS+='        <span class="icon-link" style="font-family: arial">learn more</span>',g.XS+="    </div>",g.XS+="</div>",g.XS+="",g.SM="",g.SM+='<div id="weekly-price-wrap">',g.SM+='    <div id="weekly-price-widget" class="fs-wkly-price fs-badge-sm" title="Click here to learn about FlexShopper\'s Lease to Own Payment Option">',g.SM+='        <img class="fs-price-img" src="http://cdn.flexshopper.com/media/wysiwyg/plugin/fs_badge_widget_nocart.png" alt="Click here to learn about FlexShopper\'s Lease to Own Payment Option">',g.SM+='        <div class="fs-price"><span class="fs-price-amt">$17</span><span class="fs-price-label">per week*</span></div>',g.SM+='        <span class="icon-q">?</span>',g.SM+='        <span class="icon-link" style="font-family: arial">learn more</span>',g.SM+="    </div>",g.SM+="</div>",g.SM+="",g.MD="",g.MD+='<div id="weekly-price-wrap">',g.MD+='    <div id="weekly-price-widget" class="fs-wkly-price fs-badge-md" title="Click here to learn about FlexShopper\'s Lease to Own Payment Option">',g.MD+='        <img class="fs-price-img" src="http://cdn.flexshopper.com/media/wysiwyg/plugin/fs_badge_widget_nocart.png" alt="Click here to learn about FlexShopper\'s Lease to Own Payment Option">',g.MD+='        <div class="fs-price"><span class="fs-price-amt">$17</span><span class="fs-price-label">per week*</span></div>',g.MD+='        <span class="icon-q">?</span>',g.MD+='        <span class="icon-link" style="font-family: arial">learn more</span>',g.MD+="    </div>",g.MD+="</div>",g.MD+="";var h="";h+='<div id="fs-pop" class="fs-pop-wrap" style="display:none">',h+='    <p class="top-footnote">',h+="        * The advertised Lease is a rental-purchase agreement for new merchandise. Unless you exercise your Early Purchase Option, to acquire the merchandise you must make 52 weekly payments of",h+='        <span class="weekly-price"></span>',h+="        (plus tax & shipping), for a",h+='        <span class="total-price"></span>',h+="        (plus tax & shipping) Total Cost/Total of Payments. This includes a",h+='        <span class="cash-price"></span>',h+="        Cash Price<sup>3</sup> and a",h+='        <span class="rental-fee"></span>',h+="        Cost of Rental.",h+="    </p>",h+="    <div>",h+='        <div class="fs-pop-head">',h+='            <div class="fs-pop-header">',h+='                <div class="fs-logo">',h+='                    <img src="https://origin.flexshopper.com/media/wysiwyg/plugin/fs_logo_m_white_278x50.png" alt="FlexShopper" />',h+="                </div>",h+='                <div class="fs-copy">',h+='                    <span class="fs-highlight">Select FlexShopper</span> as your payment option during checkout.',h+="                </div>",h+="            </div>",h+='            <p class="fs-pop-title">',h+="                No Cash? Bad Credit?<sup><small>5</small></sup> No Problem!",h+="                <br />",h+="                Lease to Own Your Items Today.",h+="            </p>",h+='            <a class="fs-pop-close" href="#" onClick="document.getElementById(\'fs-pop\').style.display=\'none\';">&times;</a>',h+="        </div>",h+='        <div class="fs-pop-body">',h+='            <div class="row">',h+='                <div class="fs-left">',h+='                    <div class="fs-callout">',h+='                        <img src="https://origin.flexshopper.com/media/wysiwyg/plugin/fs_pop_leftbullets.png" alt="Qualify today" />',h+="                    </div>",h+="                </div>",h+='                <div class="fs-right">',h+="                    <ul>",h+='                        <li class="fs-ulpayments">',h+="                            <strong>Affordable Weekly Payments</strong>",h+="                            Our transactions are lease-to-own - you get the products you want today, while paying affordable weekly payments over time.",h+="                        </li>",h+='                        <li class="fs-ullimit">',h+="                            <strong>Instant Spending Limit</strong>",h+="                            Apply online instantly with zero paperwork and receive a decision within minutes.",h+="                        </li>",h+='                        <li class="fs-ulsecure">',h+="                            <strong>Safe and Secure</strong>",h+="                            Protecting your information is our top priority. It will never be shared with anyone.",h+="                        </li>",h+='                        <li class="fs-ulservice">',h+="                            <strong>Excellent Customer Service</strong>",h+="                            Our agents are available to guide you through the entire process and answer any questions you have.",h+="                        </li>",h+="                    </ul>",h+="                </div>",h+="            </div>",h+="            <hr />",h+='            <section class="lp-sec-how">',h+="                <h2>How FlexShopper Works</h2>",h+='                <ol class="list-unstyled li-steps row">',h+='                    <li class="step-1 col-3">',h+="                        <h3>Shop </h3>",h+="                        Shop and find the product(s) you want. Check for products that have a weekly price option.",h+="                    </li>",h+='                    <li class="step-2 col-3">',h+="                        <h3>Checkout</h3>",h+="                        Add the product to your shopping cart, and select FlexShopper as your payment method during checkout.",h+="                    </li>",h+='                    <li class="step-3 col-3">',h+="                        <h3>Apply</h3>",h+="                        You will be temporarily redirected to FlexShopper.com. Fill out the easy, online application and get an instant spending decision.",h+="                    </li>",h+='                    <li class="step-4 col-3">',h+="                        <h3>Sign</h3>",h+="                        Accept the simple, electronic lease agreement, and you will be redirected to our site for your order confirmation.",h+="                    </li>",h+="                </ol>",h+="            </section>",h+='            <section class="lp-highlight-bullets">',h+='                <div class="well">',h+='                    <div class="pull-left">',h+="                        <h3>Your first payment will be the Friday after delivery!</h3>",h+="                    </div>",h+='                    <div class="pull-left">',h+="                        <h3>Make payments for one year and it's yours to keep!</h3>",h+="                    </div>",h+="                </div>",h+="            </section>",h+="            <hr />",h+='            <section class="lp-sec-faq">',h+="                <h2>FlexShopper FAQs</h2>",h+='                <p class="lp-faq-q">What products can I lease?</p>',h+="                <p>Qualifying products include those priced between $49.95 and $2,500. On the product page of all qualifying products, you will see an estimated weekly price in addition to the retail price</p>",h+='                <p class="lp-faq-q">Where can I find the weekly price?</p>',h+="                <p>",h+="                    On eligible product pages, the weekly price can be found in a badge simliar to the below.",h+="                    <br />",h+='                    <img src="https://origin.flexshopper.com/media/wysiwyg/cms/icon-payment-widget-flexshopper.png" alt="" />',h+="                </p>",h+='                <p class="lp-faq-q">How do I checkout with FlexShopper?</p>',h+="                <p>",h+="                    During checkout look for the badge below to select FlexShopper as your payment method.",h+="                    <br />",h+='                    <img src="https://origin.flexshopper.com/media/wysiwyg/plugin/fs_badge_pay.png" alt="" />',h+="                </p>",h+='                <div class="widget widget-static-block">',h+="                    <h4>How does the transaction work?</h4>",h+='                    <p>We lease you goods under a rental-purchase agreement. (We generally call this agreement a "Lease" on this Website, including the FAQs.)  You can make 52 weekly payments or exercise an Early Purchase Option to acquire ownership of the rented goods.  Or, you can lease the goods for the initial term (or longer) and then end the Lease by giving us notice, making all required payments and returning the goods.</p>',h+="                    <h4>What are the general requirements to apply?</h4>",h+="                    <p>To apply (or to have any chance for a spending limit), you must:</p>",h+="                    <ol>",h+="                        <li>Be at least 18 years old</li>",h+="                        <li>Have a current source of income</li>",h+="                        <li>Reside in the U.S. (but not in New Jersey, Minnesota, North Carolina, Wisconsin or Wyoming)</li>",h+="                        <li>Have had an active bank account for at least 90 days</li>",h+="                        <li>Have had no more than one NSF transaction in the past 30 days</li>",h+="                    </ol>",h+="                    <h4>Do I need to have good credit?</h4>",h+="                    <p>No. Good credit is not necessary but not everyone with bad credit is approved. Our goal is to help consumers with bad credit get goods they want through a Lease.</p>",h+="                    <h4>Can I get more than one product?</h4>",h+="                    <p>Yes, you may lease any number of products up to your approved spending limit.</p>",h+="                    <h4>What is the spending limit?</h4>",h+="                    <p>The spending limit is the total Cash Price of the goods you can lease.</p>",h+="                    <h4>How does the Lease work?</h4>",h+="                    <p>With your Lease, you are agreeing to make weekly payments for at least the initial lease term, which may vary by state but ranges from 7 days to 29 days. If you rent the goods for at least the initial term and you give us proper notice, make all of your required payments and return the item in good condition, the Lease ends and you have no further obligation to us. The Lease continues until you end it early or make all required payments for 52 weeks.  You acquire the goods if you make all required payments for 52 weeks or exercise your Early Purchase Option. Simply refer to the table in your Lease to look up the Early Purchase Option amount.</p>",h+="                    <h4>Can I buy the product?</h4>",h+="                    <p>You can buy the item at any time by exercising the Early Purchase Option. Simply refer to the table in your Lease to look up the Early Purchase Option amount. You can also acquire the goods by making all required payments for 52 weeks.</p>",h+="                    <h4>How long is the Lease?</h4>",h+="                    <p>With your Lease, you are agreeing to make weekly payments for at least the initial lease term, which may vary by state but ranges from 7 days to 29 days. If you rent the goods for at least the initial term and you give us proper notice, make all of your required payments and return the item in good condition, the Lease ends and you have no further obligation to us. The Lease continues until you end it early or make all required payments for 52 weeks.  You acquire the goods if you make all required payments for 52 weeks or exercise your Early Purchase Option. Simply refer to the table in your Lease to look up the Early Purchase Option amount.</p>",h+="                    <h4>What is the Cash Price?</h4>",h+="                    <p>The Cash Price is the price we charge for a cash sale of the item (or $50 more than the price the merchant you select charges). However, if you rent multiple items at the same time, we reduce the Cash Price (and increase the Cost of Rental) by $50 for the second and each subsequent item you rent. This makes it less expensive to purchase the items before the end of the term of the Lease.</p>",h+="                    <h4>What is 90 Days Same as Cash?</h4>",h+="                    <p>If you pay the full Cash Price of an item plus sales taxes within the first ninety days of your Lease, you will own the item(s). You will not have to pay any additional amount.</p>",h+="                    <h4>Can I purchase early after 90 days?</h4>",h+="                    <p>Yes, your Lease has an Early Purchase Option. Simply refer to the table in your Lease to look up the Early Purchase Option amount after each payment date.</p>",h+="                    <h4>When are payments due?</h4>",h+="                    <p>Your payments will be weekly, on Fridays. The first payment will be on the first Friday after you receive your item.</p>",h+="                    <h4>Can I return the goods?</h4>",h+="                    <p>You cannot return the goods during the initial lease term unless they are defective. However, if you rent the goods for at least the initial term and you give us proper notice, make all of your required payments and return the item in good condition, the Lease ends and you have no further obligation to us.</p>",h+="                    <h4>Do you pull my credit score?</h4>",h+="                    <p>We obtain a credit report from FactorTrust, Inc. and/or Clarity Services, Inc. but not from any of the major nationwide credit reporting agencies.</p>",h+="                    <h4>Will my FICO score be impacted?</h4>",h+="                    <p>If you do not pay your lease payment(s) and do not return your leased item(s), this can negatively affect your FICO score.</p>",h+="                </div>",h+='                <p style="font-style:italic;"><sup>3</sup> The Cash Price is the price we charge for a cash sale of the item (or $50 more than the price the merchant you select charges). However, if you rent multiple items at the same time, we reduce the Cash Price (and increase the Cost of Rental) by $50 for the second and each subsequent item you rent. This makes it less expensive to purchase the items before the end of the term of the Lease.</p>',h+='                <p style="font-style:italic;"><sup>5</sup> Good credit is not necessary but not everyone with bad credit is approved. Our goal is to help consumers with bad credit get goods they want through a Lease.</p>',h+="            </section>",h+="        </div>",h+="    </div>",h+="</div>",h+="";var i=function(a,b){return function(){a.apply(b)}};d=function(a){var b=this;void 0!==a&&this.load(a),this.completedProxied=i(this.completed,b),document.addEventListener("DOMContentLoaded",this.completedProxied),window.addEventListener("load",this.completedProxied)},d.prototype.load=function(a){return this.options={},this.options.size="AUTO",this.options.autoInject=!0,a.hasOwnProperty("productSelector")&&(this.options.productSelector=a.productSelector),a.hasOwnProperty("priceSelector")&&(this.options.priceSelector=a.priceSelector),a.hasOwnProperty("targetSelector")&&(this.options.targetSelector=a.targetSelector),a.hasOwnProperty("autoInject")&&(this.options.autoInject=a.autoInject),a.hasOwnProperty("size")&&(this.options.size=a.size),this},d.prototype.create=function(){f&&console.log("create");var a;return a=Sizzle(this.options.productSelector),0===a.length?"":(new c).init(a[0],this.options.priceSelector,this.options.targetSelector,!1)},d.prototype.inject=function(){var a=Sizzle(this.options.productSelector),b=a.length;if(0!==b)for(var d=0;d<b;d++){var e=new c({WIDGET_HTML:g,POPUP_HTML:h,size:this.options.size});e.init(a[d],this.options.priceSelector,this.options.targetSelector,!0)}},d.prototype.ready=function(){f&&console.log("ready"),this.readyExecuted||(this.readyExecuted=!0,Sizzle("#fs-css-link",document.getElementsByTagName("head")[0]).length||e(),this.options.autoInject&&this.inject())},d.prototype.completed=function(){f&&console.log("completed"),document.removeEventListener("DOMContentLoaded",this.completedProxied,!1),window.removeEventListener("load",this.completedProxied,!1),this.ready()};var e=function(){var a=document.createElement("link");a.id="fs-css-link",a.type="text/css",a.rel="stylesheet",a.async=!0,a.href=("https:"==document.location.protocol?"https://cdn":"http://cdn")+".flexprice.com/v1/flexprice.css",f&&(a.href="http://weekly-payment-widget.flexshopper.dev/flexprice.css",console.log(a.href)),document.getElementsByTagName("head")[0].appendChild(a)};this._FlexPrice=d}.call(this);