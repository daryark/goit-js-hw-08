var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,c=f||a||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,p=function(){return c.Date.now()};function v(t,e,n){var i,r,o,u,f,a,c=0,l=!1,v=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=i,o=r;return i=r=void 0,c=e,u=t.apply(o,n)}function j(t){return c=t,f=setTimeout(h,e),l?m(t):u}function O(t){var n=t-a;return void 0===a||n>=e||n<0||v&&t-c>=o}function h(){var t=p();if(O(t))return w(t);f=setTimeout(h,function(t){var n=e-(t-a);return v?d(n,o-(t-c)):n}(t))}function w(t){return f=void 0,g&&i?m(t):(i=r=void 0,u)}function T(){var t=p(),n=O(t);if(i=arguments,r=this,a=t,n){if(void 0===f)return j(a);if(v)return f=setTimeout(h,e),m(a)}return void 0===f&&(f=setTimeout(h,e)),u}return e=b(e)||0,y(n)&&(l=!!n.leading,o=(v="maxWait"in n)?s(b(n.maxWait)||0,e):o,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=r=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var f=r.test(t);return f||o.test(t)?u(t.slice(2),f?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(t,e,{leading:i,maxWait:e,trailing:r})};const g=document.querySelector(".feedback-form"),m={};!function(){try{const t=JSON.parse(localStorage.getItem("userDataObj"));if(null===t)return;Object.keys(t).map((e=>{g.elements[e].value=t[e]}))}catch(t){console.error(t)}}(),g.addEventListener("input",e((function(t){m[t.target.name]=t.target.value,localStorage.setItem("userDataObj",JSON.stringify(m))}),500));
//# sourceMappingURL=03-feedback.fb7cd859.js.map
