if("undefined"===typeof kint){var kintExpandOnLoad={},e=function(a){a.className=a.className.replace(/(\s|^)kint-minus(\s|$)/," ");return a},f=function(a){do a=a.nextElementSibling;while("dd"!=a.nodeName.toLowerCase());return a},h=function(a){for(var c=f(a),b=c.getElementsByClassName("kint-parent"),d=b.length,c="inline"==c.style.display;d--;)g(b[d],c);g(a,c)},g=function(a,c){var b,d;a.href?(b=a.parentNode.parentNode.getElementsByClassName("kint-"+a.href.replace(/[^#]+#/,""))[0],d=a):(b=f(a),d=a.getElementsByClassName("_kint-collapse")[0]); "undefined"==typeof c&&(c="inline"==b.style.display);c?(b.style.display="none",d&&e(d)):(b.style.display="inline",d&&(e(d).className+=" kint-minus"))},kint={};window.addEventListener("load",function(){for(var a=document.getElementsByClassName("kint"),c=a.length;c--;)a[c].addEventListener("click",k,!1);a=document.getElementsByClassName("_kint-collapse");for(c=a.length;c--;)a[c].addEventListener("dblclick",function(a){this.a=2;for(var b=document.getElementsByClassName("kint-parent"),c=b.length,l="inline"== f(this.parentNode).style.display;c--;)g(b[c],l);a.stopPropagation()},!1);for(var b in kintExpandOnLoad)Array.prototype.slice.call(document.querySelectorAll("."+b+">dl>dt"),0).forEach(function(a){h(a)})},!1);var k=function(a){function c(a){return RegExp("\\b"+a+"\\b").test(b.className)}var b=a.target,d=b.nodeName.toLowerCase();if("dfn"===d){var d=b,i=window.getSelection(),j=document.createRange();j.selectNodeContents(d);i.removeAllRanges();i.addRange(j);a.stopPropagation();b=b.parentNode}else if("span"=== d||"var"===d)b=b.parentNode;c("_kint-collapse")?(setTimeout(function(){0<parseInt(b.a,10)?b.a--:h(b.parentNode)},300),a.stopPropagation()):c("kint-parent")?g(b):c("kint-ide-link")&&(a.preventDefault(),d=new XMLHttpRequest,d.open("GET",b.href),d.send(null));a.preventDefault();return!1}};