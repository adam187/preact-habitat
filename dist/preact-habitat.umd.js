!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("preact")):"function"==typeof define&&define.amd?define(["preact"],t):e.preactHabitat=t(e.preact)}(this,function(e){e="default"in e?e.default:e;var t=function(e){return e.replace(/-([a-z])/gi,function(e,t){return t.toUpperCase()})},n=function(){return document.currentScript||function(){var e=document.getElementsByTagName("script");return e[e.length-1]}()},r=function(e,n){void 0===n&&(n={});var r=e.attributes,i=Object.assign({},n);return Object.keys(r).forEach(function(e){if(r.hasOwnProperty(e)){var n=r[e].name;if(!n||"string"!=typeof n)return!1;var a=n.split(/(data-props?-)/).pop()||"";if(a=t(a),n!==a){var o=r[e].nodeValue;i[a]=o}}}),[].forEach.call(e.getElementsByTagName("script"),function(e){var t={};if(e.hasAttribute("type")){if("text/props"!==e.getAttribute("type"))return;try{t=JSON.parse(e.innerHTML)}catch(e){throw new Error(e)}Object.assign(i,t)}}),i},i=function(e){var t=e.attributes,n=null;return Object.keys(t).forEach(function(e){if(t.hasOwnProperty(e)){"data-mount-in"===t[e].name&&(n=t[e].nodeValue)}}),n},a=function(e){var t=e.selector,r=e.inline,a=e.clientSpecified,o=[],c=n();if(!0===r){var u=c.parentNode;o.push(u)}return!0!==a||t||(t=i(c)),t&&[].forEach.call(document.querySelectorAll(t),function(e){o.push(e)}),o},o=function(t,n,i,a,o){n.forEach(function(n){var c=n;if(!c._habitat){c._habitat=!0;var u=r(n,o)||o;return a&&(c.innerHTML=""),e.render(e.h(t,u),c,i)}})};return function(e){var t=e;return{render:function(e){void 0===e&&(e={});var n=e.selector;void 0===n&&(n=null);var r=e.inline;void 0===r&&(r=!1);var i=e.clean;void 0===i&&(i=!1);var c=e.clientSpecified;void 0===c&&(c=!1);var u=e.defaultProps;void 0===u&&(u={});var f=a({selector:n,inline:r,clientSpecified:c}),d=function(){if(f.length>0){var e=a({selector:n,inline:r,clientSpecified:c});return o(t,e,null,i,u)}};d(),document.addEventListener("DOMContentLoaded",d),document.addEventListener("load",d)}}}});
//# sourceMappingURL=preact-habitat.umd.js.map