!function r(i,n,c){function s(e,o){if(!n[e]){if(!i[e]){var t="function"==typeof require&&require;if(!o&&t)return t(e,!0);if(f)return f(e,!0);throw new Error("Cannot find module '"+e+"'")}var l=n[e]={exports:{}};i[e][0].call(l.exports,function(o){var t=i[e][1][o];return s(t||o)},l,l.exports,r,i,n,c)}return n[e].exports}for(var f="function"==typeof require&&require,o=0;o<c.length;o++)s(c[o]);return s}({1:[function(o,t,e){!function(){"use strict";function o(){var s=window,f=document;if(!("scrollBehavior"in f.documentElement.style&&!0!==s.__forceSmoothScrollPolyfill__)){var o,t=s.HTMLElement||s.Element,n=468,a={scroll:s.scroll||s.scrollTo,scrollBy:s.scrollBy,elementScroll:t.prototype.scroll||u,scrollIntoView:t.prototype.scrollIntoView},p=s.performance&&s.performance.now?s.performance.now.bind(s.performance):Date.now,e=(o=s.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);s.scroll=s.scrollTo=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?c.call(s,f.body,void 0!==arguments[0].left?~~arguments[0].left:s.scrollX||s.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:s.scrollY||s.pageYOffset):a.scroll.call(s,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:s.scrollX||s.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:s.scrollY||s.pageYOffset))},s.scrollBy=function(){void 0!==arguments[0]&&(l(arguments[0])?a.scrollBy.call(s,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):c.call(s,f.body,~~arguments[0].left+(s.scrollX||s.pageXOffset),~~arguments[0].top+(s.scrollY||s.pageYOffset)))},t.prototype.scroll=t.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==l(arguments[0])){var o=arguments[0].left,t=arguments[0].top;c.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},t.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},t.prototype.scrollIntoView=function(){if(!0!==l(arguments[0])){var o=function(o){for(var t,e,l;!1==((o=o.parentNode)===f.body)&&!1===(e=r(t=o,"Y")&&i(t,"Y"),l=r(t,"X")&&i(t,"X"),e||l););return o}(this),t=o.getBoundingClientRect(),e=this.getBoundingClientRect();o!==f.body?(c.call(this,o,o.scrollLeft+e.left-t.left,o.scrollTop+e.top-t.top),"fixed"!==s.getComputedStyle(o).position&&s.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):s.scrollBy({left:e.left,top:e.top,behavior:"smooth"})}else a.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function u(o,t){this.scrollLeft=o,this.scrollTop=t}function l(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function r(o,t){return"Y"===t?o.clientHeight+e<o.scrollHeight:"X"===t?o.clientWidth+e<o.scrollWidth:void 0}function i(o,t){var e=s.getComputedStyle(o,null)["overflow"+t];return"auto"===e||"scroll"===e}function d(o){var t,e,l,r,i=(p()-o.startTime)/n;r=i=1<i?1:i,t=.5*(1-Math.cos(Math.PI*r)),e=o.startX+(o.x-o.startX)*t,l=o.startY+(o.y-o.startY)*t,o.method.call(o.scrollable,e,l),e===o.x&&l===o.y||s.requestAnimationFrame(d.bind(s,o))}function c(o,t,e){var l,r,i,n,c=p();o===f.body?(r=(l=s).scrollX||s.pageXOffset,i=s.scrollY||s.pageYOffset,n=a.scroll):(r=(l=o).scrollLeft,i=o.scrollTop,n=u),d({scrollable:l,method:n,startTime:c,startX:r,startY:i,x:t,y:e})}}"object"==typeof e&&void 0!==t?t.exports={polyfill:o}:o()}()},{}],2:[function(o,t,e){"use strict";var l,r=o("smoothscroll-polyfill");((l=r)&&l.__esModule?l:{default:l}).default.polyfill();var i={behavior:"smooth"},n=function(o){return document.querySelector(o)};n("#aboutUsLink").addEventListener("click",function(){return n("#aboutUsSection").scrollIntoView(i)}),n("#chevronLink").addEventListener("click",function(){return n("#aboutUsSection").scrollIntoView(i)}),n("#whatWeDoLink").addEventListener("click",function(){return n("#whatWeDoSection").scrollIntoView(i)}),n("#missionLink").addEventListener("click",function(){return n("#missionSection").scrollIntoView(i)}),n("#partnersLink").addEventListener("click",function(){return n("#partnersSection").scrollIntoView(i)}),n("#contactsLink").addEventListener("click",function(){return n("#contactsSection").scrollIntoView(i)})},{"smoothscroll-polyfill":1}]},{},[2]);