!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e,t,n){var r,o,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function O(e){return c=e,f=setTimeout(h,t),s?y(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function h(){var e=g();if(S(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?p(n,u-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?y(e):(r=o=void 0,a)}function T(){var e=g(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(h,t),y(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=j(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?a:w(g())},T}function b(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=a.test(e);return i||f.test(e)?l(e.slice(2),i?2:8):u.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),S="feedback-form-state",h=O.elements,w=h.email,T=h.message;!function(){try{var e=JSON.parse(localStorage.getItem(S));if(null===e)return;Object.keys(e).map((function(t){O.elements[t].value=e[t]}))}catch(e){console.error(e)}}(),O.addEventListener("input",n((function(){var e={email:w.value,message:T.value};localStorage.setItem(S,JSON.stringify(e))}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(S))),localStorage.clear(),O.reset()}))}();
//# sourceMappingURL=03-feedback.a35d9c57.js.map
