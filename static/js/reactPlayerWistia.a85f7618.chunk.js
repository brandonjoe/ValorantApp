(this.webpackJsonpvalorantapp=this.webpackJsonpvalorantapp||[]).push([[10],{136:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=n(41),a=n(67);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(P,e);var t,n,u,i,l=(t=P,function(){var e,n=h(t);if(d()){var r=h(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return y(this,e)});function P(){var e;p(this,P);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(b(e=l.call.apply(l,[this].concat(n))),"callPlayer",o.callPlayer),v(b(e),"onPlay",(function(){var t;return(t=e.props).onPlay.apply(t,arguments)})),v(b(e),"onPause",(function(){var t;return(t=e.props).onPause.apply(t,arguments)})),v(b(e),"onSeek",(function(){var t;return(t=e.props).onSeek.apply(t,arguments)})),v(b(e),"onEnded",(function(){var t;return(t=e.props).onEnded.apply(t,arguments)})),v(b(e),"mute",(function(){e.callPlayer("mute")})),v(b(e),"unmute",(function(){e.callPlayer("unmute")})),e}return n=P,(u=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"getID",value:function(e){return e&&e.match(a.MATCH_URL_WISTIA)[1]}},{key:"load",value:function(e){var t=this,n=this.props,r=n.playing,a=n.muted,u=n.controls,i=n.onReady,l=n.config,p=n.onError;(0,o.getSDK)("https://fast.wistia.com/assets/external/E-v1.js","Wistia").then((function(){window._wq=window._wq||[],window._wq.push({id:t.getID(e),options:c({autoPlay:r,silentAutoPlay:"allow",muted:a,controlsVisibleOnLoad:u},l.options),onReady:function(e){t.player=e,t.unbind(),t.player.bind("play",t.onPlay),t.player.bind("pause",t.onPause),t.player.bind("seek",t.onSeek),t.player.bind("end",t.onEnded),i()}})}),p)}},{key:"unbind",value:function(){this.player.unbind("play",this.onPlay),this.player.unbind("pause",this.onPause),this.player.unbind("seek",this.onSeek),this.player.unbind("end",this.onEnded)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.unbind(),this.callPlayer("remove")}},{key:"seekTo",value:function(e){this.callPlayer("time",e)}},{key:"setVolume",value:function(e){this.callPlayer("volume",e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("playbackRate",e)}},{key:"getDuration",value:function(){return this.callPlayer("duration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("time")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e=this.getID(this.props.url),t="wistia_embed wistia_async_".concat(e);return r.default.createElement("div",{key:e,className:t,style:{width:"100%",height:"100%"}})}}])&&s(n.prototype,u),i&&s(n,i),P}(r.Component);t.default=P,v(P,"displayName","Wistia"),v(P,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerWistia.a85f7618.chunk.js.map