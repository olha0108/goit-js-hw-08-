!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,y=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var r,i,a,u,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(h,t),d?p(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function h(){var e=g();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return s?y(n,a-(e-c)):n}(e))}function w(e){return f=void 0,m&&r?p(e):(r=i=void 0,u)}function T(){var e=g(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(h,t),p(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:w(g())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form"),O="feedback-form-state",h={email:document.querySelector('[name="email"]'),message:document.querySelector('[name="message"]')},w={};if(localStorage.getItem(O)){var T=JSON.parse(localStorage.getItem(O)),k=!0,x=!1,N=void 0;try{for(var I,E=Object.keys(T)[Symbol.iterator]();!(k=(I=E.next()).done);k=!0)key=I.value,w[key]=T[key],h[key].value=T[key]}catch(e){x=!0,N=e}finally{try{k||null==E.return||E.return()}finally{if(x)throw N}}}j.addEventListener("submit",(function(e){console.log(JSON.parse(localStorage.getItem(O))),e.preventDefault(),j.reset(),localStorage.removeItem(O),delete w.email,delete w.message})),j.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(w))}),500))}();
//# sourceMappingURL=03-feedback.4cc5d05b.js.map
