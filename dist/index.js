!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("@feizheng/noop")):"function"==typeof define&&define.amd?define(["react","prop-types","@feizheng/noop"],t):"object"==typeof exports?exports.ReactEventManager=t(require("react"),require("prop-types"),require("@feizheng/noop")):e.ReactEventManager=t(e.react,e["prop-types"],e["@feizheng/noop"])}(window,(function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(t,n){t.exports=e},function(e,t,n){"use strict";var r=n(0);t.a=Object(r.createContext)()},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(1);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}t.default=function(e){var t=function(t){function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=p(this,l(r).call(this,e)))._resources=[],t.attach(),t}var y,b,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(r,t),y=r,(b=[{key:"attach",value:function(){var t=this,n=u.a.props.app;if("function"!=typeof n.on)throw new Error("Plealse install @feizheng/event-mitt for your app.");var r=e.events,o=Object.keys(r||[]);this._resources=o.map((function(e){return n.on(e,(function(n){t.root[r[e]](n)}))}))}},{key:"detach",value:function(){this._resources.forEach((function(e){e.destroy()}))}},{key:"componentWillUnmount",value:function(){this.detach(),this._resources=[]}},{key:"render",value:function(){var t=this,r=this.props,a=r.forwardedRef,p=f(r,["forwardedRef"]),l=c(a);return o.a.createElement(u.a.Consumer,null,(function(r){r.inject;var u=f(r,["inject"]);return o.a.createElement(e,i({ref:function(e){"object"===l&&(n.current=e),"function"===l&&n(e),t.root=e}},u,p))}))}}])&&a(y.prototype,b),d&&a(y,d),r}(r.Component),n=function(e,n){return o.a.createElement(t,i({},e,{forwardedRef:n}))};return n.displayName=r.Component.displayName||r.Component.name,o.a.forwardRef(n)}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(3),i=n.n(u),c=n(1),f=n(2),a=n.n(f);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(){return l(this,t),y(this,b(t).apply(this,arguments))}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.value,n=e.inject,r=e.children;return c.a.props={app:t},n(t),o.a.createElement(c.a.Provider,{value:{$app:t,inject:n}},r)}}])&&s(n.prototype,r),u&&s(n,u),t}(r.Component);v.displayName="react-event-manager",v.version="1.0.1",v.propTypes={className:a.a.string,value:a.a.any,inject:a.a.func},v.defaultProps={inject:i.a},n.d(t,"event",(function(){return m}));t.default=v;var m=n(4).default}])}));