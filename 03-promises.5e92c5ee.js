!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var i=o("iU1Pc");function u(n,t){var r=Math.random()>.3;new Promise((function(e,o){setTimeout((function(){r?e({position:n,delay:t}):o({position:n,delay:t})}),t)})).then((function(n){var t=n.position,r=n.delay;return e(i).Notify.success("Fulfilled promise ".concat(t," in ").concat(r," ms"))})).catch((function(n){var t=n.position,r=n.delay;return e(i).Notify.failure("Rejected promise ".concat(t," in ").concat(r," ms"))}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(e.currentTarget.amount.value),t=Number(e.currentTarget.delay.value),r=Number(e.currentTarget.step.value),o=1;o<=n;o+=1)u(o,t),t+=r}))}();
//# sourceMappingURL=03-promises.5e92c5ee.js.map
