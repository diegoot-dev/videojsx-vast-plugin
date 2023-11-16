/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@dailymotion/vast-client/dist/vast-client.min.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@dailymotion/vast-client/dist/vast-client.min.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

!function(e,t){ true?t(exports):0}(this,(function(e){"use strict";function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function r(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?t(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=u(e);if(t){var n=u(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return d(this,r)}}function h(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{id:e.id||null,adId:e.adId||null,sequence:e.sequence||null,apiFramework:e.apiFramework||null,universalAdIds:[],creativeExtensions:[]}}var m=["ADCATEGORIES","ADCOUNT","ADPLAYHEAD","ADSERVINGID","ADTYPE","APIFRAMEWORKS","APPBUNDLE","ASSETURI","BLOCKEDADCATEGORIES","BREAKMAXADLENGTH","BREAKMAXADS","BREAKMAXDURATION","BREAKMINADLENGTH","BREAKMINDURATION","BREAKPOSITION","CLICKPOS","CLICKTYPE","CLIENTUA","CONTENTID","CONTENTPLAYHEAD","CONTENTURI","DEVICEIP","DEVICEUA","DOMAIN","EXTENSIONS","GDPRCONSENT","IFA","IFATYPE","INVENTORYSTATE","LATLONG","LIMITADTRACKING","MEDIAMIME","MEDIAPLAYHEAD","OMIDPARTNER","PAGEURL","PLACEMENTTYPE","PLAYERCAPABILITIES","PLAYERSIZE","PLAYERSTATE","PODSEQUENCE","REGULATIONS","SERVERSIDE","SERVERUA","TRANSACTIONID","UNIVERSALADID","VASTVERSIONS","VERIFICATIONVENDORS"];function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=[],n=A(e);for(var a in!t.ERRORCODE||r.isCustomCode||/^[0-9]{3}$/.test(t.ERRORCODE)||(t.ERRORCODE=900),t.CACHEBUSTING=E(Math.round(1e8*Math.random())),t.TIMESTAMP=(new Date).toISOString(),t.RANDOM=t.random=t.CACHEBUSTING,t)t[a]=b(t[a]);for(var o in n){var s=n[o];"string"==typeof s&&i.push(y(s,t))}return i}function y(e,t){var r=(e=T(e,t)).match(/[^[\]]+(?=])/g);if(!r)return e;var i=r.filter((function(e){return m.indexOf(e)>-1}));return 0===i.length?e:T(e,i=i.reduce((function(e,t){return e[t]=-1,e}),{}))}function T(e,t){var r=e;for(var i in t){var n=t[i];r=r.replace(new RegExp("(?:\\[|%%)(".concat(i,")(?:\\]|%%)"),"g"),n)}return r}function A(e){return Array.isArray(e)?e.map((function(e){return e&&e.hasOwnProperty("url")?e.url:e})):e}function k(e,t){for(var r=0;r<t.length;r++)if(R(t[r],e))return!0;return!1}function R(e,t){if(e&&t){var r=Object.getOwnPropertyNames(e),i=Object.getOwnPropertyNames(t);return r.length===i.length&&(e.id===t.id&&e.url===t.url)}return!1}function b(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16))}))}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return e.toString().padStart(t,"0")}var N={track:function(e,t,r){g(e,t,r).forEach((function(e){"undefined"!=typeof window&&null!==window&&((new Image).src=e)}))},resolveURLTemplates:g,extractURLsFromTemplates:A,containsTemplateObject:k,isTemplateObjectEqual:R,encodeURIComponentRFC3986:b,replaceUrlMacros:y,isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},flatten:function e(t){return t.reduce((function(t,r){return t.concat(Array.isArray(r)?e(r):r)}),[])},joinArrayOfUniqueTemplateObjs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Array.isArray(e)?e:[],i=Array.isArray(t)?t:[],n=r.concat(i);return n.reduce((function(e,t){return k(t,e)||e.push(t),e}),[])},isValidTimeValue:function(e){return Number.isFinite(e)&&e>=-2},addLeadingZeros:E};function L(e){return-1!==["true","TRUE","True","1"].indexOf(e)}var w={childByName:function(e,t){var r=e.childNodes;for(var i in r){var n=r[i];if(n.nodeName===t)return n}},childrenByName:function(e,t){var r=[],i=e.childNodes;for(var n in i){var a=i[n];a.nodeName===t&&r.push(a)}return r},resolveVastAdTagURI:function(e,t){if(!t)return e;if(0===e.indexOf("//")){var r=location.protocol;return"".concat(r).concat(e)}if(-1===e.indexOf("://")){var i=t.slice(0,t.lastIndexOf("/"));return"".concat(i,"/").concat(e)}return e},parseBoolean:L,parseNodeText:function(e){return e&&(e.textContent||e.text||"").trim()},copyNodeAttribute:function(e,t,r){var i=t.getAttribute(e);i&&r.setAttribute(e,i)},parseAttributes:function(e){for(var t=e.attributes,r={},i=0;i<t.length;i++)r[t[i].nodeName]=t[i].nodeValue;return r},parseDuration:function(e){if(null==e)return-1;if(N.isNumeric(e))return parseInt(e);var t=e.split(":");if(3!==t.length)return-1;var r=t[2].split("."),i=parseInt(r[0]);2===r.length&&(i+=parseFloat("0.".concat(r[1])));var n=parseInt(60*t[1]),a=parseInt(60*t[0]*60);return isNaN(a)||isNaN(n)||isNaN(i)||n>3600||i>60?-1:a+n+i},splitVAST:function(e){var t=[],r=null;return e.forEach((function(i,n){if(i.sequence&&(i.sequence=parseInt(i.sequence,10)),i.sequence>1){var a=e[n-1];if(a&&a.sequence===i.sequence-1)return void(r&&r.push(i));delete i.sequence}r=[i],t.push(r)})),t},assignAttributes:function(e,t){if(e)for(var r in e){var i=e[r];if(i.nodeName&&i.nodeValue&&t.hasOwnProperty(i.nodeName)){var n=i.nodeValue;"boolean"==typeof t[i.nodeName]&&(n=L(n)),t[i.nodeName]=n}}},mergeWrapperAdData:function(e,t){e.errorURLTemplates=t.errorURLTemplates.concat(e.errorURLTemplates),e.impressionURLTemplates=t.impressionURLTemplates.concat(e.impressionURLTemplates),e.extensions=t.extensions.concat(e.extensions),t.viewableImpression.length>0&&(e.viewableImpression=[].concat(h(e.viewableImpression),h(t.viewableImpression))),e.followAdditionalWrappers=t.followAdditionalWrappers,e.allowMultipleAds=t.allowMultipleAds,e.fallbackOnNoAd=t.fallbackOnNoAd;var r=(t.creatives||[]).filter((function(e){return e&&"companion"===e.type})),i=r.reduce((function(e,t){return(t.variations||[]).forEach((function(t){(t.companionClickTrackingURLTemplates||[]).forEach((function(t){N.containsTemplateObject(t,e)||e.push(t)}))})),e}),[]);e.creatives=r.concat(e.creatives);var n=t.videoClickTrackingURLTemplates&&t.videoClickTrackingURLTemplates.length,a=t.videoCustomClickURLTemplates&&t.videoCustomClickURLTemplates.length;e.creatives.forEach((function(e){if(t.trackingEvents&&t.trackingEvents[e.type])for(var r in t.trackingEvents[e.type]){var o=t.trackingEvents[e.type][r];Array.isArray(e.trackingEvents[r])||(e.trackingEvents[r]=[]),e.trackingEvents[r]=e.trackingEvents[r].concat(o)}"linear"===e.type&&(n&&(e.videoClickTrackingURLTemplates=e.videoClickTrackingURLTemplates.concat(t.videoClickTrackingURLTemplates)),a&&(e.videoCustomClickURLTemplates=e.videoCustomClickURLTemplates.concat(t.videoCustomClickURLTemplates)),!t.videoClickThroughURLTemplate||null!==e.videoClickThroughURLTemplate&&void 0!==e.videoClickThroughURLTemplate||(e.videoClickThroughURLTemplate=t.videoClickThroughURLTemplate)),"companion"===e.type&&i.length&&(e.variations||[]).forEach((function(e){e.companionClickTrackingURLTemplates=N.joinArrayOfUniqueTemplateObjs(e.companionClickTrackingURLTemplates,i)}))})),t.adVerifications&&(e.adVerifications=e.adVerifications.concat(t.adVerifications)),t.blockedAdCategories&&(e.blockedAdCategories=e.blockedAdCategories.concat(t.blockedAdCategories))}};function U(e,t){var r=function(){var e=f(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),t=e.id,r=e.adId,i=e.sequence,n=e.apiFramework;return{id:t,adId:r,sequence:i,apiFramework:n,type:"companion",required:null,variations:[]}}(t);return r.required=e.getAttribute("required")||null,r.variations=w.childrenByName(e,"Companion").map((function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{id:e.id||null,adType:"companionAd",width:e.width||0,height:e.height||0,assetWidth:e.assetWidth||null,assetHeight:e.assetHeight||null,expandedWidth:e.expandedWidth||null,expandedHeight:e.expandedHeight||null,apiFramework:e.apiFramework||null,adSlotID:e.adSlotID||null,pxratio:e.pxratio||"1",renderingMode:e.renderingMode||"default",staticResources:[],htmlResources:[],iframeResources:[],adParameters:null,xmlEncoded:null,altText:null,companionClickThroughURLTemplate:null,companionClickTrackingURLTemplates:[],trackingEvents:{}}}(w.parseAttributes(e));t.htmlResources=w.childrenByName(e,"HTMLResource").reduce((function(e,t){var r=w.parseNodeText(t);return r?e.concat(r):e}),[]),t.iframeResources=w.childrenByName(e,"IFrameResource").reduce((function(e,t){var r=w.parseNodeText(t);return r?e.concat(r):e}),[]),t.staticResources=w.childrenByName(e,"StaticResource").reduce((function(e,t){var r=w.parseNodeText(t);return r?e.concat({url:r,creativeType:t.getAttribute("creativeType")||null}):e}),[]),t.altText=w.parseNodeText(w.childByName(e,"AltText"))||null;var r=w.childByName(e,"TrackingEvents");r&&w.childrenByName(r,"Tracking").forEach((function(e){var r=e.getAttribute("event"),i=w.parseNodeText(e);r&&i&&(Array.isArray(t.trackingEvents[r])||(t.trackingEvents[r]=[]),t.trackingEvents[r].push(i))})),t.companionClickTrackingURLTemplates=w.childrenByName(e,"CompanionClickTracking").map((function(e){return{id:e.getAttribute("id")||null,url:w.parseNodeText(e)}})),t.companionClickThroughURLTemplate=w.parseNodeText(w.childByName(e,"CompanionClickThrough"))||null;var i=w.childByName(e,"AdParameters");return i&&(t.adParameters=w.parseNodeText(i),t.xmlEncoded=i.getAttribute("xmlEncoded")||null),t})),r}function C(e){return"linear"===e.type}function I(e,t){var r,i=function(){var e=f(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),t=e.id,r=e.adId,i=e.sequence,n=e.apiFramework;return{id:t,adId:r,sequence:i,apiFramework:n,type:"linear",duration:0,skipDelay:null,mediaFiles:[],mezzanine:null,interactiveCreativeFile:null,closedCaptionFiles:[],videoClickThroughURLTemplate:null,videoClickTrackingURLTemplates:[],videoCustomClickURLTemplates:[],adParameters:null,icons:[],trackingEvents:{}}}(t);i.duration=w.parseDuration(w.parseNodeText(w.childByName(e,"Duration")));var n=e.getAttribute("skipoffset");if(null==n)i.skipDelay=null;else if("%"===n.charAt(n.length-1)&&-1!==i.duration){var a=parseInt(n,10);i.skipDelay=i.duration*(a/100)}else i.skipDelay=w.parseDuration(n);var o=w.childByName(e,"VideoClicks");if(o){var s=w.childByName(o,"ClickThrough");i.videoClickThroughURLTemplate=s?{id:s.getAttribute("id")||null,url:w.parseNodeText(s)}:null,w.childrenByName(o,"ClickTracking").forEach((function(e){i.videoClickTrackingURLTemplates.push({id:e.getAttribute("id")||null,url:w.parseNodeText(e)})})),w.childrenByName(o,"CustomClick").forEach((function(e){i.videoCustomClickURLTemplates.push({id:e.getAttribute("id")||null,url:w.parseNodeText(e)})}))}var l=w.childByName(e,"AdParameters");l&&(i.adParameters=w.parseNodeText(l)),w.childrenByName(e,"TrackingEvents").forEach((function(e){w.childrenByName(e,"Tracking").forEach((function(e){var t=e.getAttribute("event"),n=w.parseNodeText(e);if(t&&n){if("progress"===t){if(!(r=e.getAttribute("offset")))return;t="%"===r.charAt(r.length-1)?"progress-".concat(r):"progress-".concat(Math.round(w.parseDuration(r)))}Array.isArray(i.trackingEvents[t])||(i.trackingEvents[t]=[]),i.trackingEvents[t].push(n)}}))})),w.childrenByName(e,"MediaFiles").forEach((function(e){w.childrenByName(e,"MediaFile").forEach((function(e){i.mediaFiles.push(function(e){var t={id:null,fileURL:null,fileSize:0,deliveryType:"progressive",mimeType:null,mediaType:null,codec:null,bitrate:0,minBitrate:0,maxBitrate:0,width:0,height:0,apiFramework:null,scalable:null,maintainAspectRatio:null};t.id=e.getAttribute("id"),t.fileURL=w.parseNodeText(e),t.deliveryType=e.getAttribute("delivery"),t.codec=e.getAttribute("codec"),t.mimeType=e.getAttribute("type"),t.mediaType=e.getAttribute("mediaType")||"2D",t.apiFramework=e.getAttribute("apiFramework"),t.fileSize=parseInt(e.getAttribute("fileSize")||0),t.bitrate=parseInt(e.getAttribute("bitrate")||0),t.minBitrate=parseInt(e.getAttribute("minBitrate")||0),t.maxBitrate=parseInt(e.getAttribute("maxBitrate")||0),t.width=parseInt(e.getAttribute("width")||0),t.height=parseInt(e.getAttribute("height")||0);var r=e.getAttribute("scalable");r&&"string"==typeof r&&(t.scalable=w.parseBoolean(r));var i=e.getAttribute("maintainAspectRatio");i&&"string"==typeof i&&(t.maintainAspectRatio=w.parseBoolean(i));return t}(e))}));var t=w.childByName(e,"InteractiveCreativeFile");t&&(i.interactiveCreativeFile=function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:e.type||null,apiFramework:e.apiFramework||null,variableDuration:w.parseBoolean(e.variableDuration),fileURL:null}}(w.parseAttributes(e));return t.fileURL=w.parseNodeText(e),t}(t));var r=w.childByName(e,"ClosedCaptionFiles");r&&w.childrenByName(r,"ClosedCaptionFile").forEach((function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:e.type||null,language:e.language||null,fileURL:null}}(w.parseAttributes(e));t.fileURL=w.parseNodeText(e),i.closedCaptionFiles.push(t)}));var n,a,o,s=w.childByName(e,"Mezzanine"),l=(n=s,a={},o=!1,["delivery","type","width","height"].forEach((function(e){n&&n.getAttribute(e)?a[e]=n.getAttribute(e):o=!0})),o?null:a);if(l){var u={id:null,fileURL:null,delivery:null,codec:null,type:null,width:0,height:0,fileSize:0,mediaType:"2D"};u.id=s.getAttribute("id"),u.fileURL=w.parseNodeText(s),u.delivery=l.delivery,u.codec=s.getAttribute("codec"),u.type=l.type,u.width=parseInt(l.width,10),u.height=parseInt(l.height,10),u.fileSize=parseInt(s.getAttribute("fileSize"),10),u.mediaType=s.getAttribute("mediaType")||"2D",i.mezzanine=u}}));var u=w.childByName(e,"Icons");return u&&w.childrenByName(u,"Icon").forEach((function(e){i.icons.push(function(e){var t={program:null,height:0,width:0,xPosition:0,yPosition:0,apiFramework:null,offset:null,duration:0,type:null,staticResource:null,htmlResource:null,iframeResource:null,pxratio:"1",iconClickThroughURLTemplate:null,iconClickTrackingURLTemplates:[],iconViewTrackingURLTemplate:null};t.program=e.getAttribute("program"),t.height=parseInt(e.getAttribute("height")||0),t.width=parseInt(e.getAttribute("width")||0),t.xPosition=function(e){if(-1!==["left","right"].indexOf(e))return e;return parseInt(e||0)}(e.getAttribute("xPosition")),t.yPosition=function(e){if(-1!==["top","bottom"].indexOf(e))return e;return parseInt(e||0)}(e.getAttribute("yPosition")),t.apiFramework=e.getAttribute("apiFramework"),t.pxratio=e.getAttribute("pxratio")||"1",t.offset=w.parseDuration(e.getAttribute("offset")),t.duration=w.parseDuration(e.getAttribute("duration")),w.childrenByName(e,"HTMLResource").forEach((function(e){t.type=e.getAttribute("creativeType")||"text/html",t.htmlResource=w.parseNodeText(e)})),w.childrenByName(e,"IFrameResource").forEach((function(e){t.type=e.getAttribute("creativeType")||0,t.iframeResource=w.parseNodeText(e)})),w.childrenByName(e,"StaticResource").forEach((function(e){t.type=e.getAttribute("creativeType")||0,t.staticResource=w.parseNodeText(e)}));var r=w.childByName(e,"IconClicks");r&&(t.iconClickThroughURLTemplate=w.parseNodeText(w.childByName(r,"IconClickThrough")),w.childrenByName(r,"IconClickTracking").forEach((function(e){t.iconClickTrackingURLTemplates.push({id:e.getAttribute("id")||null,url:w.parseNodeText(e)})})));return t.iconViewTrackingURLTemplate=w.parseNodeText(w.childByName(e,"IconViewTracking")),t}(e))})),i}function x(e,t){var r=function(){var e=f(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),t=e.id,r=e.adId,i=e.sequence,n=e.apiFramework;return{id:t,adId:r,sequence:i,apiFramework:n,type:"nonlinear",variations:[],trackingEvents:{}}}(t);return w.childrenByName(e,"TrackingEvents").forEach((function(e){var t,i;w.childrenByName(e,"Tracking").forEach((function(e){t=e.getAttribute("event"),i=w.parseNodeText(e),t&&i&&(Array.isArray(r.trackingEvents[t])||(r.trackingEvents[t]=[]),r.trackingEvents[t].push(i))}))})),w.childrenByName(e,"NonLinear").forEach((function(e){var t={id:null,width:0,height:0,expandedWidth:0,expandedHeight:0,scalable:!0,maintainAspectRatio:!0,minSuggestedDuration:0,apiFramework:"static",adType:"nonLinearAd",type:null,staticResource:null,htmlResource:null,iframeResource:null,nonlinearClickThroughURLTemplate:null,nonlinearClickTrackingURLTemplates:[],adParameters:null};t.id=e.getAttribute("id")||null,t.width=e.getAttribute("width"),t.height=e.getAttribute("height"),t.expandedWidth=e.getAttribute("expandedWidth"),t.expandedHeight=e.getAttribute("expandedHeight"),t.scalable=w.parseBoolean(e.getAttribute("scalable")),t.maintainAspectRatio=w.parseBoolean(e.getAttribute("maintainAspectRatio")),t.minSuggestedDuration=w.parseDuration(e.getAttribute("minSuggestedDuration")),t.apiFramework=e.getAttribute("apiFramework"),w.childrenByName(e,"HTMLResource").forEach((function(e){t.type=e.getAttribute("creativeType")||"text/html",t.htmlResource=w.parseNodeText(e)})),w.childrenByName(e,"IFrameResource").forEach((function(e){t.type=e.getAttribute("creativeType")||0,t.iframeResource=w.parseNodeText(e)})),w.childrenByName(e,"StaticResource").forEach((function(e){t.type=e.getAttribute("creativeType")||0,t.staticResource=w.parseNodeText(e)}));var i=w.childByName(e,"AdParameters");i&&(t.adParameters=w.parseNodeText(i)),t.nonlinearClickThroughURLTemplate=w.parseNodeText(w.childByName(e,"NonLinearClickThrough")),w.childrenByName(e,"NonLinearClickTracking").forEach((function(e){t.nonlinearClickTrackingURLTemplates.push({id:e.getAttribute("id")||null,url:w.parseNodeText(e)})})),r.variations.push(t)})),r}function S(e){var t=[];return e.forEach((function(e){var r=O(e);r&&t.push(r)})),t}function O(e){if("#comment"===e.nodeName)return null;var t,r={name:null,value:null,attributes:{},children:[]},i=e.attributes,n=e.childNodes;if(r.name=e.nodeName,e.attributes)for(var a in i)if(i.hasOwnProperty(a)){var o=i[a];o.nodeName&&o.nodeValue&&(r.attributes[o.nodeName]=o.nodeValue)}for(var s in n)if(n.hasOwnProperty(s)){var l=O(n[s]);l&&r.children.push(l)}if(0===r.children.length||1===r.children.length&&["#cdata-section","#text"].indexOf(r.children[0].name)>=0){var u=w.parseNodeText(e);""!==u&&(r.value=u),r.children=[]}return null===(t=r).value&&0===Object.keys(t.attributes).length&&0===t.children.length?null:r}function D(e){var t=[];return e.forEach((function(e){var r,i={id:e.getAttribute("id")||null,adId:V(e),sequence:e.getAttribute("sequence")||null,apiFramework:e.getAttribute("apiFramework")||null},n=[];w.childrenByName(e,"UniversalAdId").forEach((function(e){var t={idRegistry:e.getAttribute("idRegistry")||"unknown",value:w.parseNodeText(e)};n.push(t)}));var a=w.childByName(e,"CreativeExtensions");for(var o in a&&(r=S(w.childrenByName(a,"CreativeExtension"))),e.childNodes){var s=e.childNodes[o],l=void 0;switch(s.nodeName){case"Linear":l=I(s,i);break;case"NonLinearAds":l=x(s,i);break;case"CompanionAds":l=U(s,i)}l&&(n&&(l.universalAdIds=n),r&&(l.creativeExtensions=r),t.push(l))}})),t}function V(e){return e.getAttribute("AdID")||e.getAttribute("adID")||e.getAttribute("adId")||null}var P={Wrapper:{subElements:["VASTAdTagURI","Impression"]},BlockedAdCategories:{attributes:["authority"]},InLine:{subElements:["AdSystem","AdTitle","Impression","AdServingId","Creatives"]},Category:{attributes:["authority"]},Pricing:{attributes:["model","currency"]},Verification:{oneOfinLineResources:["JavaScriptResource","ExecutableResource"],attributes:["vendor"]},UniversalAdId:{attributes:["idRegistry"]},JavaScriptResource:{attributes:["apiFramework","browserOptional"]},ExecutableResource:{attributes:["apiFramework","type"]},Tracking:{attributes:["event"]},Creatives:{subElements:["Creative"]},Creative:{subElements:["UniversalAdId"]},Linear:{subElements:["MediaFiles","Duration"]},MediaFiles:{subElements:["MediaFile"]},MediaFile:{attributes:["delivery","type","width","height"]},Mezzanine:{attributes:["delivery","type","width","height"]},NonLinear:{oneOfinLineResources:["StaticResource","IFrameResource","HTMLResource"],attributes:["width","height"]},Companion:{oneOfinLineResources:["StaticResource","IFrameResource","HTMLResource"],attributes:["width","height"]},StaticResource:{attributes:["creativeType"]},Icons:{subElements:["Icon"]},Icon:{oneOfinLineResources:["StaticResource","IFrameResource","HTMLResource"]}};function B(e,t){if(P[e.nodeName]&&P[e.nodeName].attributes){var r=P[e.nodeName].attributes.filter((function(t){return!e.getAttribute(t)}));r.length>0&&j({name:e.nodeName,parentName:e.parentNode.nodeName,attributes:r},t)}}function F(e,t,r){var i=P[e.nodeName],n=!r&&"Wrapper"!==e.nodeName;if(i&&!n){if(i.subElements){var a=i.subElements.filter((function(t){return!w.childByName(e,t)}));a.length>0&&j({name:e.nodeName,parentName:e.parentNode.nodeName,subElements:a},t)}if(r&&i.oneOfinLineResources)i.oneOfinLineResources.some((function(t){return w.childByName(e,t)}))||j({name:e.nodeName,parentName:e.parentNode.nodeName,oneOfResources:i.oneOfinLineResources},t)}}function M(e){return e.children&&0!==e.children.length}function j(e,t){var r=e.name,i=e.parentName,n=e.attributes,a=e.subElements,o=e.oneOfResources,s="Element '".concat(r,"'");t("VAST-warning",{message:s+=n?" missing required attribute(s) '".concat(n.join(", "),"' "):a?" missing required sub element(s) '".concat(a.join(", "),"' "):o?" must provide one of the following '".concat(o.join(", "),"' "):" is empty",parentElement:i,specVersion:4.1})}var W={verifyRequiredValues:function e(t,r,i){if(t&&t.nodeName)if("InLine"===t.nodeName&&(i=!0),B(t,r),M(t)){F(t,r,i);for(var n=0;n<t.children.length;n++)e(t.children[n],r,i)}else 0===w.parseNodeText(t).length&&j({name:t.nodeName,parentName:t.parentNode.nodeName},r)},hasSubElements:M,emitMissingValueWarning:j,verifyRequiredAttributes:B,verifyRequiredSubElements:F};function q(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.allowMultipleAds,n=r.followAdditionalWrappers,a=e.childNodes;for(var o in a){var s=a[o];if(-1!==["Wrapper","InLine"].indexOf(s.nodeName)&&("Wrapper"!==s.nodeName||!1!==n)){if(w.copyNodeAttribute("id",e,s),w.copyNodeAttribute("sequence",e,s),w.copyNodeAttribute("adType",e,s),"Wrapper"===s.nodeName)return{ad:G(s,t),type:"WRAPPER"};if("InLine"===s.nodeName)return{ad:H(s,t,{allowMultipleAds:i}),type:"INLINE"}}}}function H(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.allowMultipleAds;return!1===i&&e.getAttribute("sequence")?null:_(e,t)}function _(e,t){var r=[];t&&W.verifyRequiredValues(e,t);var i=e.childNodes,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{id:e.id||null,sequence:e.sequence||null,adType:e.adType||null,adServingId:null,categories:[],expires:null,viewableImpression:[],system:null,title:null,description:null,advertiser:null,pricing:null,survey:null,errorURLTemplates:[],impressionURLTemplates:[],creatives:[],extensions:[],adVerifications:[],blockedAdCategories:[],followAdditionalWrappers:!0,allowMultipleAds:!1,fallbackOnNoAd:null}}(w.parseAttributes(e));for(var a in i){var o=i[a];switch(o.nodeName){case"Error":n.errorURLTemplates.push(w.parseNodeText(o));break;case"Impression":n.impressionURLTemplates.push({id:o.getAttribute("id")||null,url:w.parseNodeText(o)});break;case"Creatives":n.creatives=D(w.childrenByName(o,"Creative"));break;case"Extensions":var s=w.childrenByName(o,"Extension");n.extensions=S(s),n.adVerifications.length||(r=Y(s));break;case"AdVerifications":n.adVerifications=z(w.childrenByName(o,"Verification"));break;case"AdSystem":n.system={value:w.parseNodeText(o),version:o.getAttribute("version")||null};break;case"AdTitle":n.title=w.parseNodeText(o);break;case"AdServingId":n.adServingId=w.parseNodeText(o);break;case"Category":n.categories.push({authority:o.getAttribute("authority")||null,value:w.parseNodeText(o)});break;case"Expires":n.expires=parseInt(w.parseNodeText(o),10);break;case"ViewableImpression":n.viewableImpression.push(X(o));break;case"Description":n.description=w.parseNodeText(o);break;case"Advertiser":n.advertiser={id:o.getAttribute("id")||null,value:w.parseNodeText(o)};break;case"Pricing":n.pricing={value:w.parseNodeText(o),model:o.getAttribute("model")||null,currency:o.getAttribute("currency")||null};break;case"Survey":n.survey=w.parseNodeText(o);break;case"BlockedAdCategories":n.blockedAdCategories.push({authority:o.getAttribute("authority")||null,value:w.parseNodeText(o)})}}return r.length&&(n.adVerifications=n.adVerifications.concat(r)),n}function G(e,t){var r=_(e,t),i=e.getAttribute("followAdditionalWrappers"),n=e.getAttribute("allowMultipleAds"),a=e.getAttribute("fallbackOnNoAd");r.followAdditionalWrappers=!i||w.parseBoolean(i),r.allowMultipleAds=!!n&&w.parseBoolean(n),r.fallbackOnNoAd=a?w.parseBoolean(a):null;var o=w.childByName(e,"VASTAdTagURI");if(o?r.nextWrapperURL=w.parseNodeText(o):(o=w.childByName(e,"VASTAdTagURL"))&&(r.nextWrapperURL=w.parseNodeText(w.childByName(o,"URL"))),r.creatives.forEach((function(e){if(-1!==["linear","nonlinear"].indexOf(e.type)){if(e.trackingEvents){r.trackingEvents||(r.trackingEvents={}),r.trackingEvents[e.type]||(r.trackingEvents[e.type]={});var t=function(t){var i=e.trackingEvents[t];Array.isArray(r.trackingEvents[e.type][t])||(r.trackingEvents[e.type][t]=[]),i.forEach((function(i){r.trackingEvents[e.type][t].push(i)}))};for(var i in e.trackingEvents)t(i)}e.videoClickTrackingURLTemplates&&(Array.isArray(r.videoClickTrackingURLTemplates)||(r.videoClickTrackingURLTemplates=[]),e.videoClickTrackingURLTemplates.forEach((function(e){r.videoClickTrackingURLTemplates.push(e)}))),e.videoClickThroughURLTemplate&&(r.videoClickThroughURLTemplate=e.videoClickThroughURLTemplate),e.videoCustomClickURLTemplates&&(Array.isArray(r.videoCustomClickURLTemplates)||(r.videoCustomClickURLTemplates=[]),e.videoCustomClickURLTemplates.forEach((function(e){r.videoCustomClickURLTemplates.push(e)})))}})),r.nextWrapperURL)return r}function z(e){var t=[];return e.forEach((function(e){var r={resource:null,vendor:null,browserOptional:!1,apiFramework:null,type:null,parameters:null,trackingEvents:{}},i=e.childNodes;for(var n in w.assignAttributes(e.attributes,r),i){var a=i[n];switch(a.nodeName){case"JavaScriptResource":case"ExecutableResource":r.resource=w.parseNodeText(a),w.assignAttributes(a.attributes,r);break;case"VerificationParameters":r.parameters=w.parseNodeText(a)}}var o=w.childByName(e,"TrackingEvents");o&&w.childrenByName(o,"Tracking").forEach((function(e){var t=e.getAttribute("event"),i=w.parseNodeText(e);t&&i&&(Array.isArray(r.trackingEvents[t])||(r.trackingEvents[t]=[]),r.trackingEvents[t].push(i))})),t.push(r)})),t}function Y(e){var t=null,r=[];return e.some((function(e){return t=w.childByName(e,"AdVerifications")})),t&&(r=z(w.childrenByName(t,"Verification"))),r}function X(e){var t={};t.id=e.getAttribute("id")||null;var r=e.childNodes;for(var i in r){var n=r[i],a=n.nodeName,o=w.parseNodeText(n);if(("Viewable"===a||"NotViewable"===a||"ViewUndetermined"===a)&&o){var s=a.toLowerCase();Array.isArray(t[s])||(t[s]=[]),t[s].push(o)}}return t}var K=function(){function e(){n(this,e),this._handlers=[]}return o(e,[{key:"on",value:function(e,t){if("function"!=typeof t)throw new TypeError("The handler argument must be of type Function. Received type ".concat(i(t)));if(!e)throw new TypeError("The event argument must be of type String. Received type ".concat(i(e)));return this._handlers.push({event:e,handler:t}),this}},{key:"once",value:function(e,t){return this.on(e,function(e,t,r){var i={fired:!1,wrapFn:void 0};function n(){i.fired||(e.off(t,i.wrapFn),i.fired=!0,r.bind(e).apply(void 0,arguments))}return i.wrapFn=n,n}(this,e,t))}},{key:"off",value:function(e,t){return this._handlers=this._handlers.filter((function(r){return r.event!==e||r.handler!==t})),this}},{key:"emit",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var n=!1;return this._handlers.forEach((function(t){"*"===t.event&&(n=!0,t.handler.apply(t,[e].concat(r))),t.event===e&&(n=!0,t.handler.apply(t,r))})),n}},{key:"removeAllListeners",value:function(e){return e?(this._handlers=this._handlers.filter((function(t){return t.event!==e})),this):(this._handlers=[],this)}},{key:"listenerCount",value:function(e){return this._handlers.filter((function(t){return t.event===e})).length}},{key:"listeners",value:function(e){return this._handlers.reduce((function(t,r){return r.event===e&&t.push(r.handler),t}),[])}},{key:"eventNames",value:function(){return this._handlers.map((function(e){return e.event}))}}]),e}();var Q={get:function(e,t,r){r(new Error("Please bundle the library for node to use the node urlHandler"))}},Z=12e4;function J(){try{var e=new window.XMLHttpRequest;return"withCredentials"in e?e:null}catch(e){return null}}function $(e,t,r){var i=r?408:e.status,n=r?"XHRURLHandler: Request timed out after ".concat(e.timeout," ms (").concat(i,")"):"XHRURLHandler: ".concat(e.statusText," (").concat(i,")");t(new Error(n),null,{statusCode:i})}var ee={get:function(e,t,r){if("https:"===window.location.protocol&&0===e.indexOf("http://"))return r(new Error("XHRURLHandler: Cannot go from HTTPS to HTTP."));try{var i=J();i.open("GET",e),i.timeout=t.timeout||Z,i.withCredentials=t.withCredentials||!1,i.overrideMimeType&&i.overrideMimeType("text/xml"),i.onload=function(){return function(e,t){200===e.status?t(null,e.responseXML,{byteLength:e.response.length,statusCode:e.status}):$(e,t,!1)}(i,r)},i.onerror=function(){return $(i,r,!1)},i.onabort=function(){return $(i,r,!1)},i.ontimeout=function(){return $(i,r,!0)},i.send()}catch(e){r(new Error("XHRURLHandler: Unexpected error"))}},supported:function(){return!!J()}};var te={get:function(e,t,r){return r||("function"==typeof t&&(r=t),t={}),"undefined"==typeof window||null===window?Q.get(e,t,r):ee.supported()?ee.get(e,t,r):r(new Error("Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler"))}};var re=0,ie=0,ne=function(e,t){!e||!t||e<=0||t<=0||(ie=(ie*re+8*e/t)/++re)},ae={ERRORCODE:900,extensions:[]},oe=function(e){l(r,e);var t=p(r);function r(){var e;return n(this,r),(e=t.call(this)).remainingAds=[],e.parentURLs=[],e.errorURLTemplates=[],e.rootErrorURLTemplates=[],e.maxWrapperDepth=null,e.URLTemplateFilters=[],e.fetchingOptions={},e.parsingOptions={},e}return o(r,[{key:"addURLTemplateFilter",value:function(e){"function"==typeof e&&this.URLTemplateFilters.push(e)}},{key:"removeURLTemplateFilter",value:function(){this.URLTemplateFilters.pop()}},{key:"countURLTemplateFilters",value:function(){return this.URLTemplateFilters.length}},{key:"clearURLTemplateFilters",value:function(){this.URLTemplateFilters=[]}},{key:"trackVastError",value:function(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),n=2;n<r;n++)i[n-2]=arguments[n];this.emit("VAST-error",Object.assign.apply(Object,[{},ae,t].concat(i))),N.track(e,t)}},{key:"getErrorURLTemplates",value:function(){return this.rootErrorURLTemplates.concat(this.errorURLTemplates)}},{key:"getEstimatedBitrate",value:function(){return ie}},{key:"fetchVAST",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return new Promise((function(a,o){t.URLTemplateFilters.forEach((function(t){e=t(e)})),t.parentURLs.push(e);var s=Date.now();t.emit("VAST-resolving",{url:e,previousUrl:i,wrapperDepth:r,maxWrapperDepth:t.maxWrapperDepth,timeout:t.fetchingOptions.timeout,wrapperAd:n}),t.urlHandler.get(e,t.fetchingOptions,(function(n,l){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=Math.round(Date.now()-s),d=Object.assign({url:e,previousUrl:i,wrapperDepth:r,error:n,duration:c},u);t.emit("VAST-resolved",d),ne(u.byteLength,c),n?o(n):a(l)}))}))}},{key:"initParsingStatus",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.errorURLTemplates=[],this.fetchingOptions={timeout:e.timeout||Z,withCredentials:e.withCredentials},this.maxWrapperDepth=e.wrapperLimit||10,this.parentURLs=[],this.parsingOptions={allowMultipleAds:e.allowMultipleAds},this.remainingAds=[],this.rootErrorURLTemplates=[],this.rootURL="",this.urlHandler=e.urlHandler||e.urlhandler||te,this.vastVersion=null,ne(e.byteLength,e.requestDuration)}},{key:"getRemainingAds",value:function(e){var t=this;if(0===this.remainingAds.length)return Promise.reject(new Error("No more ads are available for the given VAST"));var r=e?N.flatten(this.remainingAds):this.remainingAds.shift();return this.errorURLTemplates=[],this.parentURLs=[],this.resolveAds(r,{wrapperDepth:0,url:this.rootURL}).then((function(e){return t.buildVASTResponse(e)}))}},{key:"getAndParseVAST",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.initParsingStatus(r),this.URLTemplateFilters.forEach((function(t){e=t(e)})),this.rootURL=e,this.fetchVAST(e).then((function(i){return r.previousUrl=e,r.isRootVAST=!0,r.url=e,t.parse(i,r).then((function(e){return t.buildVASTResponse(e)}))}))}},{key:"parseVAST",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.initParsingStatus(r),r.isRootVAST=!0,this.parse(e,r).then((function(e){return t.buildVASTResponse(e)}))}},{key:"buildVASTResponse",value:function(e){var t,r={ads:(t={ads:e,errorURLTemplates:this.getErrorURLTemplates(),version:this.vastVersion}).ads||[],errorURLTemplates:t.errorURLTemplates||[],version:t.version||null};return this.completeWrapperResolving(r),r}},{key:"parseVastXml",value:function(e,t){var r=t.isRootVAST,i=void 0!==r&&r,n=t.url,a=void 0===n?null:n,o=t.wrapperDepth,s=void 0===o?0:o,l=t.allowMultipleAds,u=t.followAdditionalWrappers;if(!e||!e.documentElement||"VAST"!==e.documentElement.nodeName)throw this.emit("VAST-ad-parsed",{type:"ERROR",url:a,wrapperDepth:s}),new Error("Invalid VAST XMLDocument");var c=[],d=e.documentElement.childNodes,p=e.documentElement.getAttribute("version");for(var h in i&&p&&(this.vastVersion=p),d){var v=d[h];if("Error"===v.nodeName){var f=w.parseNodeText(v);i?this.rootErrorURLTemplates.push(f):this.errorURLTemplates.push(f)}else if("Ad"===v.nodeName){if(this.vastVersion&&parseFloat(this.vastVersion)<3)l=!0;else if(!1===l&&c.length>1)break;var m=q(v,this.emit.bind(this),{allowMultipleAds:l,followAdditionalWrappers:u});m.ad?(c.push(m.ad),this.emit("VAST-ad-parsed",{type:m.type,url:a,wrapperDepth:s,adIndex:c.length-1,vastVersion:p})):this.trackVastError(this.getErrorURLTemplates(),{ERRORCODE:101})}}return c}},{key:"parse",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.url,i=void 0===r?null:r,n=t.resolveAll,a=void 0===n||n,o=t.wrapperSequence,s=void 0===o?null:o,l=t.previousUrl,u=void 0===l?null:l,c=t.wrapperDepth,d=void 0===c?0:c,p=t.isRootVAST,h=void 0!==p&&p,v=t.followAdditionalWrappers,f=t.allowMultipleAds,m=[];this.vastVersion&&parseFloat(this.vastVersion)<3&&h&&(f=!0);try{m=this.parseVastXml(e,{isRootVAST:h,url:i,wrapperDepth:d,allowMultipleAds:f,followAdditionalWrappers:v})}catch(e){return Promise.reject(e)}return 1===m.length&&null!=s&&(m[0].sequence=s),!1===a&&(this.remainingAds=w.splitVAST(m),m=this.remainingAds.shift()),this.resolveAds(m,{wrapperDepth:d,previousUrl:u,url:i})}},{key:"resolveAds",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0,i=r.wrapperDepth,n=r.previousUrl,a=r.url,o=[];return n=a,t.forEach((function(t){var r=e.resolveWrappers(t,i,n);o.push(r)})),Promise.all(o).then((function(t){var r=N.flatten(t);if(!r&&e.remainingAds.length>0){var o=e.remainingAds.shift();return e.resolveAds(o,{wrapperDepth:i,previousUrl:n,url:a})}return r}))}},{key:"resolveWrappers",value:function(e,t,r){var i=this;return new Promise((function(n){var a;if(t++,!e.nextWrapperURL)return delete e.nextWrapperURL,n(e);if(t>=i.maxWrapperDepth||-1!==i.parentURLs.indexOf(e.nextWrapperURL))return e.errorCode=302,delete e.nextWrapperURL,n(e);e.nextWrapperURL=w.resolveVastAdTagURI(e.nextWrapperURL,r),i.URLTemplateFilters.forEach((function(t){e.nextWrapperURL=t(e.nextWrapperURL)}));var o=null!==(a=i.parsingOptions.allowMultipleAds)&&void 0!==a?a:e.allowMultipleAds,s=e.sequence;i.fetchVAST(e.nextWrapperURL,t,r,e).then((function(a){return i.parse(a,{url:e.nextWrapperURL,previousUrl:r,wrapperSequence:s,wrapperDepth:t,followAdditionalWrappers:e.followAdditionalWrappers,allowMultipleAds:o}).then((function(t){if(delete e.nextWrapperURL,0===t.length)return e.creatives=[],n(e);t.forEach((function(t){t&&w.mergeWrapperAdData(t,e)})),n(t)}))})).catch((function(t){e.errorCode=301,e.errorMessage=t.message,n(e)}))}))}},{key:"completeWrapperResolving",value:function(e){if(0===e.ads.length)this.trackVastError(e.errorURLTemplates,{ERRORCODE:303});else for(var t=e.ads.length-1;t>=0;t--){var r=e.ads[t];(r.errorCode||0===r.creatives.length)&&(this.trackVastError(r.errorURLTemplates.concat(e.errorURLTemplates),{ERRORCODE:r.errorCode||303},{ERRORMESSAGE:r.errorMessage||""},{extensions:r.extensions},{system:r.system}),e.ads.splice(t,1))}}}]),r}(K),se=null,le={data:{},length:0,getItem:function(e){return this.data[e]},setItem:function(e,t){this.data[e]=t,this.length=Object.keys(this.data).length},removeItem:function(e){delete this.data[e],this.length=Object.keys(this.data).length},clear:function(){this.data={},this.length=0}},ue=function(){function e(){n(this,e),this.storage=this.initStorage()}return o(e,[{key:"initStorage",value:function(){if(se)return se;try{se="undefined"!=typeof window&&null!==window?window.localStorage||window.sessionStorage:null}catch(e){se=null}return se&&!this.isStorageDisabled(se)||(se=le).clear(),se}},{key:"isStorageDisabled",value:function(e){var t="__VASTStorage__";try{if(e.setItem(t,t),e.getItem(t)!==t)return e.removeItem(t),!0}catch(e){return!0}return e.removeItem(t),!1}},{key:"getItem",value:function(e){return this.storage.getItem(e)}},{key:"setItem",value:function(e,t){return this.storage.setItem(e,t)}},{key:"removeItem",value:function(e){return this.storage.removeItem(e)}},{key:"clear",value:function(){return this.storage.clear()}}]),e}(),ce=function(){function e(t,r,i){n(this,e),this.cappingFreeLunch=t||0,this.cappingMinimumTimeInterval=r||0,this.defaultOptions={withCredentials:!1,timeout:0},this.vastParser=new oe,this.storage=i||new ue,void 0===this.lastSuccessfulAd&&(this.lastSuccessfulAd=0),void 0===this.totalCalls&&(this.totalCalls=0),void 0===this.totalCallsTimeout&&(this.totalCallsTimeout=0)}return o(e,[{key:"getParser",value:function(){return this.vastParser}},{key:"lastSuccessfulAd",get:function(){return this.storage.getItem("vast-client-last-successful-ad")},set:function(e){this.storage.setItem("vast-client-last-successful-ad",e)}},{key:"totalCalls",get:function(){return this.storage.getItem("vast-client-total-calls")},set:function(e){this.storage.setItem("vast-client-total-calls",e)}},{key:"totalCallsTimeout",get:function(){return this.storage.getItem("vast-client-total-calls-timeout")},set:function(e){this.storage.setItem("vast-client-total-calls-timeout",e)}},{key:"hasRemainingAds",value:function(){return this.vastParser.remainingAds.length>0}},{key:"getNextAds",value:function(e){return this.vastParser.getRemainingAds(e)}},{key:"get",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=Date.now();return(r=Object.assign({},this.defaultOptions,r)).hasOwnProperty("resolveAll")||(r.resolveAll=!1),this.totalCallsTimeout<i?(this.totalCalls=1,this.totalCallsTimeout=i+36e5):this.totalCalls++,new Promise((function(n,a){if(t.cappingFreeLunch>=t.totalCalls)return a(new Error("VAST call canceled – FreeLunch capping not reached yet ".concat(t.totalCalls,"/").concat(t.cappingFreeLunch)));var o=i-t.lastSuccessfulAd;if(o<0)t.lastSuccessfulAd=0;else if(o<t.cappingMinimumTimeInterval)return a(new Error("VAST call canceled – (".concat(t.cappingMinimumTimeInterval,")ms minimum interval reached")));t.vastParser.getAndParseVAST(e,r).then((function(e){return n(e)})).catch((function(e){return a(e)}))}))}}]),e}(),de=function(e){l(a,e);var t=p(a);function a(e,r,i){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;for(var l in n(this,a),(o=t.call(this)).ad=r,o.creative=i,o.variation=s,o.muted=!1,o.impressed=!1,o.skippable=!1,o.trackingEvents={},o.lastPercentage=0,o._alreadyTriggeredQuartiles={},o.emitAlwaysEvents=["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","resume","pause","rewind","skip","closeLinear","close"],o.creative.trackingEvents){var u=o.creative.trackingEvents[l];o.trackingEvents[l]=u.slice(0)}return C(o.creative)?o._initLinearTracking():o._initVariationTracking(),e&&o.on("start",(function(){e.lastSuccessfulAd=Date.now()})),o}return o(a,[{key:"_initLinearTracking",value:function(){this.linear=!0,this.skipDelay=this.creative.skipDelay,this.setDuration(this.creative.duration),this.clickThroughURLTemplate=this.creative.videoClickThroughURLTemplate,this.clickTrackingURLTemplates=this.creative.videoClickTrackingURLTemplates}},{key:"_initVariationTracking",value:function(){if(this.linear=!1,this.skipDelay=-1,this.variation){for(var e in this.variation.trackingEvents){var t=this.variation.trackingEvents[e];this.trackingEvents[e]?this.trackingEvents[e]=this.trackingEvents[e].concat(t.slice(0)):this.trackingEvents[e]=t.slice(0)}"nonLinearAd"===this.variation.adType?(this.clickThroughURLTemplate=this.variation.nonlinearClickThroughURLTemplate,this.clickTrackingURLTemplates=this.variation.nonlinearClickTrackingURLTemplates,this.setDuration(this.variation.minSuggestedDuration)):function(e){return"companionAd"===e.adType}(this.variation)&&(this.clickThroughURLTemplate=this.variation.companionClickThroughURLTemplate,this.clickTrackingURLTemplates=this.variation.companionClickTrackingURLTemplates)}}},{key:"setDuration",value:function(e){N.isValidTimeValue(e)&&(this.assetDuration=e,this.quartiles={firstQuartile:Math.round(25*this.assetDuration)/100,midpoint:Math.round(50*this.assetDuration)/100,thirdQuartile:Math.round(75*this.assetDuration)/100})}},{key:"setProgress",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(N.isValidTimeValue(e)&&"object"===i(r)){var n=this.skipDelay||-1;if(-1===n||this.skippable||(n>e?this.emit("skip-countdown",n-e):(this.skippable=!0,this.emit("skip-countdown",0))),this.assetDuration>0){var a=Math.round(e/this.assetDuration*100),o=[];if(e>0){o.push("start");for(var s=this.lastPercentage;s<a;s++)o.push("progress-".concat(s+1,"%"));for(var l in o.push("progress-".concat(Math.round(e))),this.quartiles)this.isQuartileReached(l,this.quartiles[l],e)&&(o.push(l),this._alreadyTriggeredQuartiles[l]=!0);this.lastPercentage=a}o.forEach((function(e){t.track(e,{macros:r,once:!0})})),e<this.progress&&this.track("rewind",{macros:r})}this.progress=e}}},{key:"isQuartileReached",value:function(e,t,r){var i=!1;return t<=r&&!this._alreadyTriggeredQuartiles[e]&&(i=!0),i}},{key:"setMuted",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"boolean"==typeof e&&"object"===i(t)&&(this.muted!==e&&this.track(e?"mute":"unmute",{macros:t}),this.muted=e)}},{key:"setPaused",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"boolean"==typeof e&&"object"===i(t)&&(this.paused!==e&&this.track(e?"pause":"resume",{macros:t}),this.paused=e)}},{key:"setFullscreen",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"boolean"==typeof e&&"object"===i(t)&&(this.fullscreen!==e&&this.track(e?"fullscreen":"exitFullscreen",{macros:t}),this.fullscreen=e)}},{key:"setExpand",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"boolean"==typeof e&&"object"===i(t)&&(this.expanded!==e&&(this.track(e?"expand":"collapse",{macros:t}),this.track(e?"playerExpand":"playerCollapse",{macros:t})),this.expanded=e)}},{key:"setSkipDelay",value:function(e){N.isValidTimeValue(e)&&(this.skipDelay=e)}},{key:"trackImpression",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&(this.impressed||(this.impressed=!0,this.trackURLs(this.ad.impressionURLTemplates,e),this.track("creativeView",{macros:e})))}},{key:"error",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];"object"===i(e)&&"boolean"==typeof t&&this.trackURLs(this.ad.errorURLTemplates,e,{isCustomCode:t})}},{key:"errorWithCode",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];"string"==typeof e&&"boolean"==typeof t&&(this.error({ERRORCODE:e},t),console.log("The method errorWithCode is deprecated, please use vast tracker error method instead"))}},{key:"complete",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("complete",{macros:e})}},{key:"notUsed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&(this.track("notUsed",{macros:e}),this.trackingEvents=[])}},{key:"otherAdInteraction",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("otherAdInteraction",{macros:e})}},{key:"acceptInvitation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("acceptInvitation",{macros:e})}},{key:"adExpand",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("adExpand",{macros:e})}},{key:"adCollapse",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("adCollapse",{macros:e})}},{key:"minimize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("minimize",{macros:e})}},{key:"verificationNotExecuted",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof e&&"object"===i(t)){if(!this.ad||!this.ad.adVerifications||!this.ad.adVerifications.length)throw new Error("No adVerifications provided");if(!e)throw new Error("No vendor provided, unable to find associated verificationNotExecuted");var r=this.ad.adVerifications.find((function(t){return t.vendor===e}));if(!r)throw new Error("No associated verification element found for vendor: ".concat(e));var n=r.trackingEvents;if(n&&n.verificationNotExecuted){var a=n.verificationNotExecuted;this.trackURLs(a,t),this.emit("verificationNotExecuted",{trackingURLTemplates:a})}}}},{key:"overlayViewDuration",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"string"==typeof e&&"object"===i(t)&&(t.ADPLAYHEAD=e,this.track("overlayViewDuration",{macros:t}))}},{key:"close",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track(this.linear?"closeLinear":"close",{macros:e})}},{key:"skip",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("skip",{macros:e})}},{key:"load",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("loaded",{macros:e})}},{key:"click",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((null===e||"string"==typeof e)&&"object"===i(t)){this.clickTrackingURLTemplates&&this.clickTrackingURLTemplates.length&&this.trackURLs(this.clickTrackingURLTemplates,t);var n=this.clickThroughURLTemplate||e,a=r({},t);if(n){this.progress&&(a.ADPLAYHEAD=this.progressFormatted());var o=N.resolveURLTemplates([n],a)[0];this.emit("clickthrough",o)}}}},{key:"track",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.macros,n=void 0===r?{}:r,a=t.once,o=void 0!==a&&a;if("object"===i(n)){"closeLinear"===e&&!this.trackingEvents[e]&&this.trackingEvents.close&&(e="close");var s=this.trackingEvents[e],l=this.emitAlwaysEvents.indexOf(e)>-1;s?(this.emit(e,{trackingURLTemplates:s}),this.trackURLs(s,n)):l&&this.emit(e,null),o&&(delete this.trackingEvents[e],l&&this.emitAlwaysEvents.splice(this.emitAlwaysEvents.indexOf(e),1))}}},{key:"trackURLs",value:function(e){var t,i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r({},n);this.linear&&(this.creative&&this.creative.mediaFiles&&this.creative.mediaFiles[0]&&this.creative.mediaFiles[0].fileURL&&(o.ASSETURI=this.creative.mediaFiles[0].fileURL),this.progress&&(o.ADPLAYHEAD=this.progressFormatted())),null!==(t=this.creative)&&void 0!==t&&null!==(i=t.universalAdIds)&&void 0!==i&&i.length&&(o.UNIVERSALADID=this.creative.universalAdIds.map((function(e){return e.idRegistry.concat(" ",e.value)})).join(",")),this.ad&&(this.ad.sequence&&(o.PODSEQUENCE=this.ad.sequence),this.ad.adType&&(o.ADTYPE=this.ad.adType),this.ad.adServingId&&(o.ADSERVINGID=this.ad.adServingId),this.ad.categories&&this.ad.categories.length&&(o.ADCATEGORIES=this.ad.categories.map((function(e){return e.value})).join(",")),this.ad.blockedAdCategories&&this.ad.blockedAdCategories.length&&(o.BLOCKEDADCATEGORIES=this.ad.blockedAdCategories)),N.track(e,o,a)}},{key:"convertToTimecode",value:function(e){if(!N.isValidTimeValue(e))return"";var t=1e3*e,r=Math.floor(t/36e5),i=Math.floor(t/6e4%60),n=Math.floor(t/1e3%60),a=Math.floor(t%1e3);return"".concat(N.addLeadingZeros(r,2),":").concat(N.addLeadingZeros(i,2),":").concat(N.addLeadingZeros(n,2),".").concat(N.addLeadingZeros(a,3))}},{key:"progressFormatted",value:function(){return this.convertToTimecode(this.progress)}}]),a}(K);e.VASTClient=ce,e.VASTParser=oe,e.VASTTracker=de,Object.defineProperty(e,"__esModule",{value:!0})}));


/***/ }),

/***/ "./src/ad-loader.js":
/*!**************************!*\
  !*** ./src/ad-loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdLoader": () => (/* binding */ AdLoader)
/* harmony export */ });
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! global */ "./node_modules/global/window.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dailymotion/vast-client */ "./node_modules/@dailymotion/vast-client/dist/vast-client.min.js");
/* harmony import */ var _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tracked_ad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracked-ad */ "./src/tracked-ad.js");




class AdLoader {
  #vastClient;
  #vastParser;
  #options;
  #adSelector;

  /**
   *
   * @param {VASTClient} vastClient
   * @param {VASTParser} vastParser
   * @param {AdSelector} adSelector
   * @param {object} options
   */
  constructor(vastClient, vastParser, adSelector, options) {
    this.#vastClient = vastClient;
    this.#vastParser = vastParser;
    this.#adSelector = adSelector;
    this.#options = options;
  }
  loadAds() {
    return new Promise((accept, reject) => {
      const {
        url,
        xml
      } = this.#options;
      if (!url && !xml) {
        throw new Error('xml or url option must be set');
      }
      const ads = url ? this.loadAdsWithUrl(url) : this.loadAdsWithXml(xml);
      ads.then(accept).catch(reject);
    });
  }

  /**
   *
   * @param {XMLDocument|string} xml
   */
  loadAdsWithXml(xml) {
    return new Promise((accept, reject) => {
      let xmlDocument;
      if (xml.constructor === (global__WEBPACK_IMPORTED_MODULE_0___default().XMLDocument)) {
        xmlDocument = xml;
      } else if (xml.constructor === String) {
        xmlDocument = new (global__WEBPACK_IMPORTED_MODULE_0___default().DOMParser)().parseFromString(xml, 'text/xml');
      } else {
        throw new Error('xml config option must be a String or XMLDocument');
      }
      this.#vastParser.parseVAST(xmlDocument).then(this.#adSelector.selectAds).then(this.#createTrackedAds).then(accept).catch(reject);
    });
  }
  loadAdsWithUrl(url) {
    return new Promise((accept, reject) => {
      this.#vastClient.get(url, {
        withCredentials: this.#options.withCredentials,
        wrapperLimit: this.#options.wrapperLimit
      }).then(this.#adSelector.selectAds).then(this.#createTrackedAds).then(accept).catch(reject);
    });
  }

  /*** private methods ***/

  #createTrackedAds = ads => {
    const createTrackedAd = ad => {
      const linearAdTracker = new _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_2__.VASTTracker(this.#vastClient, ad, ad.creatives.find(_utils__WEBPACK_IMPORTED_MODULE_1__.linearFn), ad.creatives.find(_utils__WEBPACK_IMPORTED_MODULE_1__.companionFn));
      linearAdTracker.on('clickthrough', onClickThrough);
      let companionAdTracker = null;
      const companionCreative = ad.creatives.find(_utils__WEBPACK_IMPORTED_MODULE_1__.companionFn);
      if (companionCreative) {
        // Just pick the first suitable companion ad for now
        const options = this.#options;
        const variation = companionCreative.variations.filter(v => v.staticResource).filter(v => v.type.indexOf('image') === 0).find(v => parseInt(v.width, 10) <= options.companion.maxWidth && parseInt(v.height, 10) <= options.companion.maxHeight);
        if (variation) {
          companionAdTracker = new _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_2__.VASTTracker(this.#vastClient, ad, companionCreative, variation);
          companionAdTracker.on('clickthrough', onClickThrough);
        }
      }
      return new _tracked_ad__WEBPACK_IMPORTED_MODULE_3__.TrackedAd(linearAdTracker, companionAdTracker);
    };
    return ads.map(createTrackedAd);
  };
}
function onClickThrough(url) {
  global__WEBPACK_IMPORTED_MODULE_0___default().open(url, '_blank');
}

/***/ }),

/***/ "./src/ad-selector.js":
/*!****************************!*\
  !*** ./src/ad-selector.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdSelector": () => (/* binding */ AdSelector)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");

class AdSelector {
  /**
   *
   * @param {object} vastResponse
   * @return {object[]}
   */
  selectAds(vastResponse) {
    if (!vastResponse.ads || vastResponse.ads.length === 0) {
      throw new Error('no ads found in VAST');
    }
    const adsWithLinear = vastResponse.ads.filter(ad => ad.creatives.some(_utils__WEBPACK_IMPORTED_MODULE_0__.linearFn));
    if (!adsWithLinear.length) {
      throw new Error('no linear ads found in VAST');
    }
    const adPod = adsWithLinear.filter(ad => ad.sequence);
    if (adPod.length) {
      return adPod.sort((ad1, ad2) => ad1.sequence - ad2.sequence);
    } else {
      const standaloneAds = adsWithLinear.filter(ad => !adPod.includes(ad));
      return standaloneAds.slice(0, 1);
    }
  }
}

/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createVASTContext": () => (/* binding */ createVASTContext)
/* harmony export */ });
/**
 *
 * @param {VASTTracker} vastTracker
 * @return {object|undefined}
 */
function createVASTContext(vastTracker) {
  if (vastTracker) {
    const ad = vastTracker.ad;
    const creative = vastTracker.creative;
    return {
      mediaFiles: creative.mediaFiles.map(mediaFile => Object.assign({}, mediaFile)),
      adSequenceId: ad.sequence,
      adId: ad.id,
      creativeAdId: creative.id
    };
  }
}

/***/ }),

/***/ "./src/tracked-ad.js":
/*!***************************!*\
  !*** ./src/tracked-ad.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackedAd": () => (/* binding */ TrackedAd)
/* harmony export */ });
class TrackedAd {
  #linearAdTracker;
  #companionTracker;
  #skipAfterDuration;
  /**
   *
   * @param {VASTTracker} linearAdTracker
   * @param {VASTTracker} companionTracker
   */
  constructor(linearAdTracker, companionTracker) {
    this.#linearAdTracker = linearAdTracker;
    this.#companionTracker = companionTracker;
    this.#skipAfterDuration = false;
  }
  get linearCreative() {
    return this.#linearAdTracker.creative;
  }
  get linearAdTracker() {
    return this.#linearAdTracker;
  }
  get companionTracker() {
    return this.#companionTracker;
  }

  /**
   *
   * @return {boolean}
   */
  get skipAfterDuration() {
    return this.#skipAfterDuration;
  }

  /**
   * @param {boolean} value
   */
  set skipAfterDuration(value) {
    this.#skipAfterDuration = value;
  }

  /**
   *
   * @return {boolean}
   */
  hasVideoMedia() {
    return this.linearCreative.mediaFiles.some(mediaFile => mediaFile && mediaFile.apiFramework == null);
  }
}

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! global */ "./node_modules/global/window.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! video.js */ "video.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_1__);


class UI extends (video_js__WEBPACK_IMPORTED_MODULE_1___default().EventTarget) {
  constructor(player, options) {
    super();
    this.player = player;
    this.options = options;
    // duration in seconds. useful for streaming ads where `player.duration()` will always give 0.
    this.duration = 0;

    /** @type {Object} */
    this.originalState = {
      controlsEnabled: player.controls(),
      seekEnabled: player.controlBar.progressControl.enabled()
    };
  }
  setUp() {
    const player = this.player;
    const options = this.options;
    const setupProgressControl = () => {
      player.controls(options.controlsEnabled);
      if (options.seekEnabled) {
        player.controlBar.progressControl.enable();
      } else {
        player.controlBar.progressControl.disable();
      }
    };
    const setupBlocker = () => {
      const blocker = this.blocker = global__WEBPACK_IMPORTED_MODULE_0___default().document.createElement('div');
      blocker.className = 'vast-blocker';
      blocker.onclick = () => {
        if (player.paused()) {
          player.play();
          return false;
        }
        this.trigger('click');
      };
      player.el().insertBefore(blocker, player.controlBar.el());
    };
    const setupSkipButton = () => {
      const skipButtonElement = this.skipButtonElement = global__WEBPACK_IMPORTED_MODULE_0___default().document.createElement('div');
      skipButtonElement.className = 'vast-skip-button';
      skipButtonElement.style.display = 'none';
      player.el().appendChild(skipButtonElement);
      player.one('adplay', this.#onAdPlay);
      skipButtonElement.onclick = e => {
        if ((' ' + skipButtonElement.className + ' ').indexOf(' enabled ') >= 0) {
          this.trigger('skip');
        }
        if ((global__WEBPACK_IMPORTED_MODULE_0___default().Event.prototype.stopPropagation) !== undefined) {
          e.stopPropagation();
        } else {
          return false;
        }
      };
    };
    setupProgressControl();
    setupBlocker();
    setupSkipButton();
  }
  tearDown() {
    const player = this.player;
    const originalState = this.originalState;
    player.controls(originalState.controlsEnabled);
    if (originalState.seekEnabled) {
      player.controlBar.progressControl.enable();
    } else {
      player.controlBar.progressControl.disable();
    }
    this.blocker.parentElement.removeChild(this.blocker);
    this.skipButtonElement.parentElement.removeChild(this.skipButtonElement);
    player.off('adtimeupdate', this.#onTimeUpdate);
    player.off('adplay', this.#onAdPlay);
  }
  #onAdPlay = () => {
    const skip = this.options.skip;
    const player = this.player;
    if (skip > 0 && (player.duration() || this.duration) >= skip) {
      this.skipButtonElement.style.display = 'block';
      player.on('adtimeupdate', this.#onTimeUpdate);
    }
    player.loadingSpinner.el().style.display = 'none';
  };
  #onTimeUpdate = () => {
    this.player.loadingSpinner.el().style.display = 'none';
    const timeLeft = Math.ceil(this.options.skip - this.player.currentTime());
    if (timeLeft > 0) {
      disableSkip(this.skipButtonElement);
      this.skipButtonElement.innerHTML = 'Skip in ' + timeLeft + '...';
    } else {
      enableSkip(this.skipButtonElement);
      this.skipButtonElement.innerHTML = 'Skip';
    }
  };
}

/**
 *
 * @param {HTMLElement} skipButtonElement
 */
function isSkipEnabled(skipButtonElement) {
  return (' ' + skipButtonElement.className + ' ').indexOf(' enabled ') > -1;
}

/**
 *
 * @param {HTMLElement} skipButtonElement
 */
function disableSkip(skipButtonElement) {
  if (isSkipEnabled(skipButtonElement)) {
    skipButtonElement.className = skipButtonElement.className.replace(' enabled ', '');
  }
}

/**
 *
 * @param {HTMLElement} skipButtonElement
 */
function enableSkip(skipButtonElement) {
  if (!isSkipEnabled(skipButtonElement)) {
    skipButtonElement.className += ' enabled ';
  }
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "companionFn": () => (/* binding */ companionFn),
/* harmony export */   "linearFn": () => (/* binding */ linearFn),
/* harmony export */   "once": () => (/* binding */ once)
/* harmony export */ });
/**
 *
 * @param {function} fn
 * @param {object|null} context
 * @return {function(): *}
 */
function once(fn, context = null) {
  let result;
  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }
    return result;
  };
}
function linearFn(creative) {
  return creative.type === 'linear' && creative.mediaFiles.length;
}
function companionFn(creative) {
  return creative.type === 'companion';
}

/***/ }),

/***/ "./src/vpaid-handler.js":
/*!******************************!*\
  !*** ./src/vpaid-handler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VPAIDHandler": () => (/* binding */ VPAIDHandler)
/* harmony export */ });
/* harmony import */ var vpaid_html5_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vpaid-html5-client */ "./node_modules/vpaid-html5-client/js/VPAIDHTML5Client.js");
/* harmony import */ var vpaid_html5_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vpaid_html5_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! global/window */ "./node_modules/global/window.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var global_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! global/document */ "./node_modules/global/document.js");
/* harmony import */ var global_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(global_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event */ "./src/event.js");





const VALID_TYPES = ['application/x-javascript', 'text/javascript', 'application/javascript'];
class VPAIDHandler {
  #forceStopDone;
  #cancelled;
  #started;
  #player;
  #options;
  #eventTarget;
  constructor(player, options) {
    this.#player = player;
    this.#options = options;
    this.#eventTarget = new videojs.EventTarget();
  }
  handle(tracker) {
    this.#cancelled = false;
    this.#started = false;
    this.#forceStopDone = false;
    return new Promise((resolve, reject) => {
      const options = this.#options;
      const player = this.#player;
      /**
       *
       * @type {HTMLElement|null}
       */
      let container = null;
      let containerAttributes = {};
      let containerIsFixed = false;

      /**
       * "timeout" | Error
       * @param {string|Error} err
       * @param adUnit
       */
      const adUnitLoad = (err, adUnit) => {
        let videoElement;
        if (err) {
          reject(err);
          return;
        }
        const onAdComplete = () => {
          cleanUp();
          resolve();
          player.trigger('vpaid.AdStopped');
          player.trigger({
            type: 'vast.adEnd',
            vast: (0,_event__WEBPACK_IMPORTED_MODULE_4__.createVASTContext)(tracker)
          });
        };
        adUnit.subscribe('AdStopped', onAdComplete);
        const forceStopAd = err => {
          if (adUnit && !this.#forceStopDone) {
            adUnit.unsubscribe('AdStopped', onAdComplete);
            const onAdCancel = () => {
              this.#forceStopDone = true;
              cleanUp();
              reject(err);
              player.trigger('vpaid.AdStopped');
            };
            subscribeWithTimeout(adUnit, 'AdStopped', onAdCancel, onAdCancel);
            adUnit.stopAd();
          } else {
            this.#forceStopDone = true;
            reject(err);
          }
        };
        this.#eventTarget.on('forceStopAd', forceStopAd);
        if (this.#cancelled) {
          forceStopAd('Received cancel signal from player');
          return;
        }
        function cleanUp() {
          player.controlBar.show();
          player.off('playerresize', resizeAd);
          if (options.vpaid.videoInstance === 'new' && videoElement.parentElement) {
            videoElement.parentElement.removeChild(videoElement);
          }
          vpaidClient.destroy();

          // Some VPAID creatives don't clean up after themselves
          if (container) {
            if (containerIsFixed) {
              container.innerHTML = '';
              const before = containerAttributes;
              const after = getAttributes(container);
              for (const [key, value] of Object.entries(after)) {
                if (before.hasOwnProperty(key)) {
                  if (before[key] !== value) {
                    // restore changed
                    container.setAttribute(key, before[key]);
                  }
                } else {
                  // removed added
                  container.removeAttribute(key);
                }
              }
              for (const [key, value] of Object.entries(before)) {
                if (!after.hasOwnProperty(key)) {
                  // restore removed
                  container.setAttribute(key, value);
                }
              }
            } else if (container.parentElement) {
              container.parentElement.removeChild(container);
            }
            container = null;
          }
        }
        const onHandShake = (error, version) => {
          if (error) {
            log.console(error);
            forceStopAd('Error on VPAID handshake');
            return;
          }
          const creativeData = {
            AdParameters: creative.adParameters || ''
          };
          const videoInstance = options.vpaid.videoInstance;
          if (videoInstance === 'same') {
            videoElement = player.tech({
              kindaKnowWhatImDoing: true
            }).el();
          } else if (videoInstance === 'new') {
            videoElement = global_window__WEBPACK_IMPORTED_MODULE_1___default().document.createElement('video');
            videoElement.style.cssText = 'position:absolute; top:0; left:0; z-index:2 !important;';
            container.appendChild(videoElement);
          } else {
            if (videoInstance !== 'none') {
              console.log(`${videoInstance} is an invalid videoInstance value. Defaulting to \'none\'.`);
            }
            videoElement = null;
          }
          const environmentVars = {
            slot: container,
            videoSlot: videoElement
            // videoSlotCanAutoPlay: true
          };

          subscribeWithTimeout(adUnit, 'AdLoaded', onAdLoaded, forceStopAd);
          const viewMode = player.isFullscreen() ? 'fullscreen' : 'normal';
          adUnit.subscribe('AdError', message => {
            // General VPAID Error = 901 (in VAST 3 spec)
            tracker.error({
              ERRORCODE: 901
            });
            this.#forceStopDone = true;
            cleanUp();
            reject(`Fatal VPAID Error: ${typeof message === 'object' ? JSON.stringify(message) : message}`);
            player.trigger({
              type: 'vpaid.AdError',
              error: message
            });
          });
          adUnit.initAd(player.currentWidth(), player.currentHeight(), viewMode, -1, creativeData, environmentVars);
        };
        const onAdLoaded = () => {
          if (this.#cancelled) {
            forceStopAd('Received cancel signal');
            return;
          }
          adUnit.subscribe('AdSkipped', () => {
            tracker.skip();
            player.trigger('vpaid.AdSkipped');
            player.trigger({
              type: 'vast.adSkip',
              vast: (0,_event__WEBPACK_IMPORTED_MODULE_4__.createVASTContext)(tracker)
            });
          });
          adUnit.subscribe('AdVolumeChange', () => {
            const lastVolume = player.volume();
            adUnit.getAdVolume((error, currentVolume) => {
              if (error) return;
              if (currentVolume === 0 && lastVolume > 0) {
                tracker.setMuted(true);
              } else if (currentVolume > 0 && lastVolume === 0) {
                tracker.setMuted(false);
              }
              player.volume(currentVolume);
              player.trigger('vpaid.AdVolumeChange');
            });
          });
          adUnit.subscribe('AdImpression', () => {
            // will also trigger createView
            tracker.trackImpression();
            player.trigger('vpaid.AdImpression');
          });
          adUnit.subscribe('AdClickThru',
          /**
           *
           * @param {string} url
           * @param {string} id
           * @param {boolean} playerHandles
           */
          (url, id, playerHandles) => {
            if (playerHandles) {
              tracker.once('clickthrough', resolvedUrl => {
                global_window__WEBPACK_IMPORTED_MODULE_1___default().open(resolvedUrl, '_blank');
              });
            }
            // The url here is a fallback - the tracker will use VAST click url if it exists.
            tracker.click(url);
            player.trigger('vpaid.AdClickThru');
          });
          adUnit.subscribe('AdVideoFirstQuartile', () => {
            tracker.track('firstQuartile');
            player.trigger('vpaid.AdVideoFirstQuartile');
          });
          adUnit.subscribe('AdVideoMidpoint', () => {
            tracker.track('midpoint');
            player.trigger('vpaid.AdVideoMidpoint');
          });
          adUnit.subscribe('AdVideoThirdQuartile', () => {
            tracker.track('thirdQuartile');
            player.trigger('vpaid.AdVideoThirdQuartile');
          });
          adUnit.subscribe('AdVideoComplete', () => {
            tracker.track('complete');
            player.trigger('vpaid.AdVideoComplete');
          });
          adUnit.subscribe('AdUserAcceptInvitation', () => {
            tracker.acceptInvitation();
            player.trigger('vpaid.AdUserAcceptInvitation');
          });
          adUnit.subscribe('AdUserMinimize', () => {
            tracker.minimize();
            player.trigger('vpaid.AdUserMinimize');
          });
          adUnit.subscribe('AdUserClose', () => {
            tracker.close();
            player.trigger('vpaid.AdUserClose');
          });
          adUnit.subscribe('AdPaused', () => {
            tracker.setPaused(true);
            player.trigger('vpaid.AdPaused');
          });
          adUnit.subscribe('AdPlaying', () => {
            tracker.setPaused(false);
            player.trigger('vpaid.AdPlaying');
          });
          adUnit.getAdLinear(withTimeout((err, isLinear) => {
            if (this.#cancelled) {
              forceStopAd('Received cancel signal');
              return;
            }
            if (err) {
              forceStopAd(err);
            } else if (!isLinear) {
              // TODO: support overlay banner
              forceStopAd('Non-linear not supported');
            } else {
              startLinearAd();
            }
          }, () => {
            forceStopAd('Unable to get mode of operation: linear or non-linear');
          }));
          const startLinearAd = () => {
            player.controlBar.hide();

            // A VPAID adunit may (incorrectly?) call AdStarted again for the first quartile event
            const onAdStartedOnce = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.once)(onAdStarted);
            subscribeWithTimeout(adUnit, 'AdStarted', onAdStartedOnce, forceStopAd);
            adUnit.startAd();
          };
        };
        const onAdStarted = () => {
          if (!this.#cancelled) {
            this.#started = true;
            tracker.track('start');
            player.on('playerresize', resizeAd);
            player.trigger('ads-ad-started'); // notify videojs-contrib-ads
            player.trigger({
              type: 'vast.adStart',
              vast: (0,_event__WEBPACK_IMPORTED_MODULE_4__.createVASTContext)(tracker)
            });
          } else {
            forceStopAd('Received cancel signal');
          }
        };
        const resizeAd = () => {
          adUnit.resizeAd(player.currentWidth(), player.currentHeight(), player.isFullscreen() ? 'fullscreen' : 'normal');
        };

        // not async so no timeout is required
        adUnit.handshakeVersion('2.0', onHandShake);
      };
      const creative = tracker.creative;
      const vpaidMediaFile = creative.mediaFiles.find(mediaFile => mediaFile.apiFramework === 'VPAID' && validMime(mediaFile));
      if (!vpaidMediaFile) {
        throw new Error('Invalid VPAID media file: only JavaScript is supported');
      }
      const techScreen = player.el().querySelector('.vjs-tech');
      container = findHtmlContainer(options);
      if (!container) {
        // ideally we want to create a fresh container element (no state attributes (i.e. 'data-ad-processed') or
        // event listeners attached by previous ad)
        container = createHtmlContainer(options);
        containerIsFixed = false;
      } else {
        containerIsFixed = true;
      }
      containerAttributes = getAttributes(container);
      player.el().insertBefore(container, player.controlBar.el());
      const vpaidClient = new (vpaid_html5_client__WEBPACK_IMPORTED_MODULE_0___default())(container, techScreen, {});
      vpaidClient.loadAdUnit(vpaidMediaFile.fileURL, adUnitLoad);
    });
  }

  // TODO: review. may not need.
  cancel() {
    this.#cancelled = true;
    if (this.#started) {
      this.#eventTarget.trigger('forceStopAd');
    }
  }
}
function validMime(mediaFile) {
  return VALID_TYPES.indexOf(mediaFile.mimeType.trim()) > -1;
}
function createHtmlContainer(options) {
  const containerId = options.vpaid.containerId;
  const containerClass = options.vpaid.containerClass;
  const vpaidContainerElement = global_document__WEBPACK_IMPORTED_MODULE_2___default().createElement('div');
  if (containerId) {
    vpaidContainerElement.setAttribute('id', containerId);
  }
  if (containerClass) {
    vpaidContainerElement.classList.add(containerClass);
  }
  return vpaidContainerElement;
}
function findHtmlContainer(options) {
  const containerId = options.vpaid.containerId;
  const containerClass = options.vpaid.containerClass;
  let vpaidContainerElement = global_document__WEBPACK_IMPORTED_MODULE_2___default().getElementById(containerId);
  if (!vpaidContainerElement) {
    vpaidContainerElement = global_document__WEBPACK_IMPORTED_MODULE_2___default().getElementsByClassName(containerClass)[0];
  }
  return vpaidContainerElement;
}

/**
 *
 * @param {HTMLElement} element
 * @return {{}}
 */
function getAttributes(element) {
  const obj = {};
  for (const attr of element.attributes) {
    obj[attr.name] = attr.value;
  }
  return obj;
}

/**
 *
 * @param {function} handler
 * @param {function()|null} timeoutFn
 * @return {function(): void}
 */

function withTimeout(handler, timeoutFn = null) {
  // TODO: configurable timeout
  const id = setTimeout(() => {
    handler = () => {};
    if (timeoutFn) {
      timeoutFn();
    }
  }, 10000);
  return function () {
    clearTimeout(id);
    handler.apply(null, arguments);
  };
}

/**
 * @param {object} adUnit
 * @param {string} evtName
 * @param {function} handler
 * @param {function(Error)} timeoutFn
 */
function subscribeWithTimeout(adUnit, evtName, handler, timeoutFn) {
  const fn = withTimeout(handler, () => {
    if (timeoutFn) {
      timeoutFn(new Error(`Timeout while waiting for ${evtName} event.`));
    }
  });
  adUnit.subscribe(evtName, fn);
}

/***/ }),

/***/ "./node_modules/global/document.js":
/*!*****************************************!*\
  !*** ./node_modules/global/document.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var topLevel = typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g :
    typeof window !== 'undefined' ? window : {}
var minDoc = __webpack_require__(/*! min-document */ "?34aa");

var doccy;

if (typeof document !== 'undefined') {
    doccy = document;
} else {
    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }
}

module.exports = doccy;


/***/ }),

/***/ "./node_modules/global/window.js":
/*!***************************************!*\
  !*** ./node_modules/global/window.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof __webpack_require__.g !== "undefined") {
    win = __webpack_require__.g;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;


/***/ }),

/***/ "./node_modules/vpaid-html5-client/js/IVPAIDAdUnit.js":
/*!************************************************************!*\
  !*** ./node_modules/vpaid-html5-client/js/IVPAIDAdUnit.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


var METHODS = [
    'handshakeVersion',
    'initAd',
    'startAd',
    'stopAd',
    'skipAd', // VPAID 2.0 new method
    'resizeAd',
    'pauseAd',
    'resumeAd',
    'expandAd',
    'collapseAd',
    'subscribe',
    'unsubscribe'
];

var EVENTS = [
    'AdLoaded',
    'AdStarted',
    'AdStopped',
    'AdSkipped',
    'AdSkippableStateChange', // VPAID 2.0 new event
    'AdSizeChange', // VPAID 2.0 new event
    'AdLinearChange',
    'AdDurationChange', // VPAID 2.0 new event
    'AdExpandedChange',
    'AdRemainingTimeChange', // [Deprecated in 2.0] but will be still fired for backwards compatibility
    'AdVolumeChange',
    'AdImpression',
    'AdVideoStart',
    'AdVideoFirstQuartile',
    'AdVideoMidpoint',
    'AdVideoThirdQuartile',
    'AdVideoComplete',
    'AdClickThru',
    'AdInteraction', // VPAID 2.0 new event
    'AdUserAcceptInvitation',
    'AdUserMinimize',
    'AdUserClose',
    'AdPaused',
    'AdPlaying',
    'AdLog',
    'AdError'
];

var GETTERS = [
    'getAdLinear',
    'getAdWidth', // VPAID 2.0 new getter
    'getAdHeight', // VPAID 2.0 new getter
    'getAdExpanded',
    'getAdSkippableState', // VPAID 2.0 new getter
    'getAdRemainingTime',
    'getAdDuration', // VPAID 2.0 new getter
    'getAdVolume',
    'getAdCompanions', // VPAID 2.0 new getter
    'getAdIcons' // VPAID 2.0 new getter
];

var SETTERS = [
    'setAdVolume'
];


/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */


/**
 * IVPAIDAdUnit
 *
 * @class
 *
 * @param {object} creative
 * @param {HTMLElement} el
 * @param {HTMLVideoElement} video
 */
function IVPAIDAdUnit(creative, el, video) {}


/**
 * handshakeVersion
 *
 * @param {string} VPAIDVersion
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.handshakeVersion = function (VPAIDVersion, callback) {};

/**
 * initAd
 *
 * @param {number} width
 * @param {number} height
 * @param {string} viewMode can be 'normal', 'thumbnail' or 'fullscreen'
 * @param {number} desiredBitrate indicates the desired bitrate in kbps
 * @param {object} [creativeData] used for additional initialization data
 * @param {object} [environmentVars] used for passing implementation-specific of js version
 * @param {NodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.initAd = function(width, height, viewMode, desiredBitrate, creativeData, environmentVars, callback) {};

/**
 * startAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.startAd = function(callback) {};

/**
 * stopAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.stopAd = function(callback) {};

/**
 * skipAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.skipAd = function(callback) {};

/**
 * resizeAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.resizeAd = function(width, height, viewMode, callback) {};

/**
 * pauseAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.pauseAd = function(callback) {};

/**
 * resumeAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.resumeAd = function(callback) {};

/**
 * expandAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.expandAd = function(callback) {};

/**
 * collapseAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.collapseAd = function(callback) {};

/**
 * subscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 * @param {object} context
 */
IVPAIDAdUnit.prototype.subscribe = function(event, handler, context) {};

/**
 * startAd
 *
 * @param {string} event
 * @param {function} handler
 */
IVPAIDAdUnit.prototype.unsubscribe = function(event, handler) {};



/**
 * getAdLinear
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdLinear = function(callback) {};

/**
 * getAdWidth
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdWidth = function(callback) {};

/**
 * getAdHeight
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdHeight = function(callback) {};

/**
 * getAdExpanded
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdExpanded = function(callback) {};

/**
 * getAdSkippableState
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdSkippableState = function(callback) {};

/**
 * getAdRemainingTime
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdRemainingTime = function(callback) {};

/**
 * getAdDuration
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdDuration = function(callback) {};

/**
 * getAdVolume
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdVolume = function(callback) {};

/**
 * getAdCompanions
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdCompanions = function(callback) {};

/**
 * getAdIcons
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdIcons = function(callback) {};

/**
 * setAdVolume
 *
 * @param {number} volume
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.setAdVolume = function(volume, callback) {};

addStaticToInterface(IVPAIDAdUnit, 'METHODS', METHODS);
addStaticToInterface(IVPAIDAdUnit, 'GETTERS', GETTERS);
addStaticToInterface(IVPAIDAdUnit, 'SETTERS', SETTERS);
addStaticToInterface(IVPAIDAdUnit, 'EVENTS',  EVENTS);


var VPAID1_METHODS = METHODS.filter(function(method) {
    return ['skipAd'].indexOf(method) === -1;
});

addStaticToInterface(IVPAIDAdUnit, 'checkVPAIDInterface', function checkVPAIDInterface (creative) {
    var result = VPAID1_METHODS.every(function(key) {
        return typeof creative[key] === 'function';
    });
    return result;
});

module.exports = IVPAIDAdUnit;

function addStaticToInterface(Interface, name, value) {
    Object.defineProperty(Interface, name, {
        writable: false,
        configurable: false,
        value: value
    });
}



/***/ }),

/***/ "./node_modules/vpaid-html5-client/js/VPAIDAdUnit.js":
/*!***********************************************************!*\
  !*** ./node_modules/vpaid-html5-client/js/VPAIDAdUnit.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var IVPAIDAdUnit = __webpack_require__(/*! ./IVPAIDAdUnit */ "./node_modules/vpaid-html5-client/js/IVPAIDAdUnit.js");
var Subscriber = __webpack_require__(/*! ./subscriber */ "./node_modules/vpaid-html5-client/js/subscriber.js");
var checkVPAIDInterface = IVPAIDAdUnit.checkVPAIDInterface;
var utils = __webpack_require__(/*! ./utils */ "./node_modules/vpaid-html5-client/js/utils.js");
var METHODS = IVPAIDAdUnit.METHODS;
var ERROR = 'AdError';
var AD_CLICK = 'AdClickThru';
var FILTERED_EVENTS = IVPAIDAdUnit.EVENTS.filter(function (event) {
    return event != AD_CLICK;
});

/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */


/**
 * VPAIDAdUnit
 * @class
 *
 * @param VPAIDCreative
 * @param {HTMLElement} [el] this will be used in initAd environmentVars.slot if defined
 * @param {HTMLVideoElement} [video] this will be used in initAd environmentVars.videoSlot if defined
 */
function VPAIDAdUnit(VPAIDCreative, el, video, iframe) {
    this._isValid = checkVPAIDInterface(VPAIDCreative);
    if (this._isValid) {
        this._creative = VPAIDCreative;
        this._el = el;
        this._videoEl = video;
        this._iframe = iframe;
        this._subscribers = new Subscriber();
        utils.setFullSizeStyle(el);
        $addEventsSubscribers.call(this);
    }
}

VPAIDAdUnit.prototype = Object.create(IVPAIDAdUnit.prototype);

/**
 * isValidVPAIDAd will return if the VPAIDCreative passed in constructor is valid or not
 *
 * @return {boolean}
 */
VPAIDAdUnit.prototype.isValidVPAIDAd = function isValidVPAIDAd() {
    return this._isValid;
};

IVPAIDAdUnit.METHODS.forEach(function(method) {
    //NOTE: this methods arguments order are implemented differently from the spec
    var ignores = [
        'subscribe',
        'unsubscribe',
        'initAd'
    ];

    if (ignores.indexOf(method) !== -1) return;

    VPAIDAdUnit.prototype[method] = function () {
        var ariaty = IVPAIDAdUnit.prototype[method].length;
        // TODO avoid leaking arguments
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        var args = Array.prototype.slice.call(arguments);
        var callback = (ariaty === args.length) ? args.pop() : undefined;

        setTimeout(function () {
            var result, error = null;
            try {
                result = this._creative[method].apply(this._creative, args);
            } catch(e) {
                error = e;
            }

            callOrTriggerEvent(callback, this._subscribers, error, result);
        }.bind(this), 0);
    };
});


/**
 * initAd concreate implementation
 *
 * @param {number} width
 * @param {number} height
 * @param {string} viewMode can be 'normal', 'thumbnail' or 'fullscreen'
 * @param {number} desiredBitrate indicates the desired bitrate in kbps
 * @param {object} [creativeData] used for additional initialization data
 * @param {object} [environmentVars] used for passing implementation-specific of js version, if el & video was used in constructor slot & videoSlot will be added to the object
 * @param {NodeStyleCallback} callback
 */
VPAIDAdUnit.prototype.initAd = function initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars, callback) {
    creativeData = creativeData || {};
    environmentVars = utils.extend({
        slot: this._el,
        videoSlot: this._videoEl
    }, environmentVars || {});

    setTimeout(function () {
        var error;
        try {
            this._creative.initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars);
        } catch (e) {
            error = e;
        }

        callOrTriggerEvent(callback, this._subscribers, error);
    }.bind(this), 0);
};

/**
 * subscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 * @param {object} context
 */
VPAIDAdUnit.prototype.subscribe = function subscribe(event, handler, context) {
    this._subscribers.subscribe(handler, event, context);
};


/**
 * unsubscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 */
VPAIDAdUnit.prototype.unsubscribe = function unsubscribe(event, handler) {
    this._subscribers.unsubscribe(handler, event);
};

//alias
VPAIDAdUnit.prototype.on = VPAIDAdUnit.prototype.subscribe;
VPAIDAdUnit.prototype.off = VPAIDAdUnit.prototype.unsubscribe;

IVPAIDAdUnit.GETTERS.forEach(function(getter) {
    VPAIDAdUnit.prototype[getter] = function (callback) {
        setTimeout(function () {

            var result, error = null;
            try {
                result = this._creative[getter]();
            } catch(e) {
                error = e;
            }

            callOrTriggerEvent(callback, this._subscribers, error, result);
        }.bind(this), 0);
    };
});

/**
 * setAdVolume
 *
 * @param volume
 * @param {nodeStyleCallback} callback
 */
VPAIDAdUnit.prototype.setAdVolume = function setAdVolume(volume, callback) {
    setTimeout(function () {

        var result, error = null;
        try {
            this._creative.setAdVolume(volume);
            result = this._creative.getAdVolume();
        } catch(e) {
            error = e;
        }

        if (!error) {
            error = utils.validate(result === volume, 'failed to apply volume: ' + volume);
        }
        callOrTriggerEvent(callback, this._subscribers, error, result);
    }.bind(this), 0);
};

VPAIDAdUnit.prototype._destroy = function destroy() {
    this.stopAd();
    this._subscribers.unsubscribeAll();
};

function $addEventsSubscribers() {
    // some ads implement
    // so they only handle one subscriber
    // to handle this we create our one
    FILTERED_EVENTS.forEach(function (event) {
        this._creative.subscribe($trigger.bind(this, event), event);
    }.bind(this));

    // map the click event to be an object instead of depending of the order of the arguments
    // and to be consistent with the flash
    this._creative.subscribe($clickThruHook.bind(this), AD_CLICK);

    // because we are adding the element inside the iframe
    // the user is not able to click in the video
    if (this._videoEl) {
        var documentElement = this._iframe.contentDocument.documentElement;
        var videoEl = this._videoEl;
        documentElement.addEventListener('click', function(e) {
            if (e.target === documentElement) {
                videoEl.click();
            }
        });
    }
}

function $clickThruHook(url, id, playerHandles) {
    this._subscribers.triggerSync(AD_CLICK, {url: url, id: id, playerHandles: playerHandles});
}

function $trigger(event) {
    // TODO avoid leaking arguments
    // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
    this._subscribers.trigger.apply(this._subscribers, Array.prototype.slice.call(arguments));
}

function callOrTriggerEvent(callback, subscribers, error, result) {
    if (callback) {
        callback(error, result);
    } else if (error) {
        subscribers.trigger(ERROR, error);
    }
}

module.exports = VPAIDAdUnit;



/***/ }),

/***/ "./node_modules/vpaid-html5-client/js/VPAIDHTML5Client.js":
/*!****************************************************************!*\
  !*** ./node_modules/vpaid-html5-client/js/VPAIDHTML5Client.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/vpaid-html5-client/js/utils.js");
var unique = utils.unique('vpaidIframe');
var VPAIDAdUnit = __webpack_require__(/*! ./VPAIDAdUnit */ "./node_modules/vpaid-html5-client/js/VPAIDAdUnit.js");

var defaultTemplate = '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head><meta charset="UTF-8"></head>' +
    '<body style="margin:0;padding:0"><div class="ad-element"></div>' +
    '<script type="text/javascript" src="{{iframeURL_JS}}"></script>' +
    '<script type="text/javascript">' +
    'window.parent.postMessage(\'{"event": "ready", "id": "{{iframeID}}"}\', \'{{origin}}\');' +
    '</script>' +
    '</body>' +
    '</html>';

var AD_STOPPED = 'AdStopped';

/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */

/**
 * VPAIDHTML5Client
 * @class
 *
 * @param {HTMLElement} el that will contain the iframe to load adUnit and a el to add to adUnit slot
 * @param {HTMLVideoElement} video default video element to be used by adUnit
 * @param {object} [templateConfig] template: html template to be used instead of the default, extraOptions: to be used when rendering the template
 * @param {object} [vpaidOptions] timeout: when loading adUnit
 */
function VPAIDHTML5Client(el, video, templateConfig, vpaidOptions) {
    templateConfig = templateConfig || {};

    this._id = unique();
    this._destroyed = false;

    this._frameContainer = utils.createElementInEl(el, 'div');
    this._videoEl = video;
    this._vpaidOptions = vpaidOptions || {timeout: 10000};

    this._templateConfig = {
        template: templateConfig.template || defaultTemplate,
        extraOptions: templateConfig.extraOptions || {}
    };
}

/**
 * destroy
 *
 */
VPAIDHTML5Client.prototype.destroy = function destroy() {
    if (this._destroyed) {
        return;
    }
    this._destroyed = true;
    $unloadPreviousAdUnit.call(this);
};

/**
 * isDestroyed
 *
 * @return {boolean}
 */
VPAIDHTML5Client.prototype.isDestroyed = function isDestroyed() {
    return this._destroyed;
};

/**
 * loadAdUnit
 *
 * @param {string} adURL url of the js of the adUnit
 * @param {nodeStyleCallback} callback
 */
VPAIDHTML5Client.prototype.loadAdUnit = function loadAdUnit(adURL, callback) {
    if(this._onLoad){ return }

    $throwIfDestroyed.call(this);
    $unloadPreviousAdUnit.call(this);
    var that = this;

    var frame = utils.createIframeWithContent(
        this._frameContainer,
        this._templateConfig.template,
        utils.extend({
            iframeURL_JS: adURL,
            iframeID: this.getID(),
            origin: getOrigin()
        }, this._templateConfig.extraOptions)
    );

    this._frame = frame;

    this._onLoad = utils.callbackTimeout(
        this._vpaidOptions.timeout,
        onLoad.bind(this),
        onTimeout.bind(this)
    );

    window.addEventListener('message', this._onLoad);

    function onLoad (e) {
        /*jshint validthis: false */
        //don't clear timeout
        if (e.origin !== getOrigin()) return;
        var result;

        try {
            result = JSON.parse(e.data);
        }
        catch (exception) {
            throw exception;
        }

        //don't clear timeout
        if (result.id !== that.getID()) return;

        var adUnit, error, createAd;
        if (!that._frame.contentWindow) {

            error = 'the iframe is not anymore in the DOM tree';

        } else {
            createAd = that._frame.contentWindow.getVPAIDAd;
            error = utils.validate(typeof createAd === 'function', 'the ad didn\'t return a function to create an ad');
        }

        if (!error) {
            var adEl = that._frame.contentWindow.document.querySelector('.ad-element');
            adUnit = new VPAIDAdUnit(createAd(), adEl, that._videoEl, that._frame);
            adUnit.subscribe(AD_STOPPED, $adDestroyed.bind(that));
            error = utils.validate(adUnit.isValidVPAIDAd(), 'the add is not fully complaint with VPAID specification');
        }

        that._adUnit = adUnit;
        $destroyLoadListener.call(that);
        callback(error, error ? null : adUnit);

        //clear timeout
        return true;
    }

    function onTimeout() {
        callback('timeout', null);
    }
};

/**
 * unloadAdUnit
 *
 */
VPAIDHTML5Client.prototype.unloadAdUnit = function unloadAdUnit() {
    $unloadPreviousAdUnit.call(this);
};

/**
 * getID will return the unique id
 *
 * @return {string}
 */
VPAIDHTML5Client.prototype.getID = function () {
    return this._id;
};


/**
 * $removeEl
 *
 * @param {string} key
 */
function $removeEl(key) {
    var el = this[key];
    if (el && el.parentNode) {
        el.parentNode.removeChild(el);
        delete this[key];
    }
}

function $adDestroyed() {
    $removeAdElements.call(this);
    delete this._adUnit;
}

function $unloadPreviousAdUnit() {
    $removeAdElements.call(this);
    $destroyAdUnit.call(this);
}

function $removeAdElements() {
    $removeEl.call(this, '_frame');
    $destroyLoadListener.call(this);
}

/**
 * $destroyLoadListener
 *
 */
function $destroyLoadListener() {
    if (this._onLoad) {
        window.removeEventListener('message', this._onLoad);
        delete this._onLoad;
    }
}


function $destroyAdUnit() {
    if (this._adUnit) {
        this._adUnit.stopAd();
        delete this._adUnit;
    }
}

/**
 * $throwIfDestroyed
 *
 */
function $throwIfDestroyed() {
    if (this._destroyed) {
        throw new Error ('VPAIDHTML5Client already destroyed!');
    }
}

function getOrigin() {
    if( window.location.origin ) {
        return window.location.origin;
    }
    else {
        return window.location.protocol + "//" +
            window.location.hostname +
            (window.location.port ? ':' + window.location.port: '');
    }
}

module.exports = VPAIDHTML5Client;
window.VPAIDHTML5Client = VPAIDHTML5Client;


/***/ }),

/***/ "./node_modules/vpaid-html5-client/js/subscriber.js":
/*!**********************************************************!*\
  !*** ./node_modules/vpaid-html5-client/js/subscriber.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


function Subscriber() {
    this._subscribers = {};
}

Subscriber.prototype.subscribe = function subscribe(handler, eventName, context) {
    if (!this.isHandlerAttached(handler, eventName)) {
        this.get(eventName).push({handler: handler, context: context, eventName: eventName});
    }
};

Subscriber.prototype.unsubscribe = function unsubscribe(handler, eventName) {
    this._subscribers[eventName] = this.get(eventName).filter(function (subscriber) {
        return handler !== subscriber.handler;
    });
};

Subscriber.prototype.unsubscribeAll = function unsubscribeAll() {
    this._subscribers = {};
};

Subscriber.prototype.trigger = function(eventName, data) {
    var that = this;
    var subscribers = this.get(eventName)
        .concat(this.get('*'));

    subscribers.forEach(function (subscriber) {
        setTimeout(function () {
            if (that.isHandlerAttached(subscriber.handler, subscriber.eventName)) {
                subscriber.handler.call(subscriber.context, data);
            }
        }, 0);
    });
};

Subscriber.prototype.triggerSync = function(eventName, data) {
    var subscribers = this.get(eventName)
        .concat(this.get('*'));

    subscribers.forEach(function (subscriber) {
        subscriber.handler.call(subscriber.context, data);
    });
};

Subscriber.prototype.get = function get(eventName) {
    if (!this._subscribers[eventName]) {
        this._subscribers[eventName] = [];
    }
    return this._subscribers[eventName];
};

Subscriber.prototype.isHandlerAttached = function isHandlerAttached(handler, eventName) {
    return this.get(eventName).some(function(subscriber) {
        return handler === subscriber.handler;
    })
};

module.exports = Subscriber;



/***/ }),

/***/ "./node_modules/vpaid-html5-client/js/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/vpaid-html5-client/js/utils.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/**
 * noop a empty function
 */
function noop() {}

/**
 * validate if is not validate will return an Error with the message
 *
 * @param {boolean} isValid
 * @param {string} message
 */
function validate(isValid, message) {
    return isValid ? null : new Error(message);
}

/**
 * callbackTimeout if the onSuccess is not called and returns true in the timelimit then onTimeout will be called
 *
 * @param {number} timer
 * @param {function} onSuccess
 * @param {function} onTimeout
 */
function callbackTimeout(timer, onSuccess, onTimeout) {
    var callback, timeout;

    timeout = setTimeout(function () {
        onSuccess = noop;
        onTimeout();
    }, timer);

    callback = function () {
        // TODO avoid leaking arguments
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        var args = Array.prototype.slice.call(arguments);
        if (onSuccess.apply(this, args)) {
            clearTimeout(timeout);
        }
    };

    return callback;
}


/**
 * createElementInEl
 *
 * @param {HTMLElement} parent
 * @param {string} tagName
 * @param {string} id
 */
function createElementInEl(parent, tagName, id) {
    var nEl = document.createElement(tagName);
    if (id) nEl.id = id;
    parent.appendChild(nEl);
    return nEl;
}

/**
 * createIframeWithContent
 *
 * @param {HTMLElement} parent
 * @param {string} template simple template using {{var}}
 * @param {object} data
 */
function createIframeWithContent(parent, template, data) {
    var iframe = createIframe(parent, null, data.zIndex);
    if (!setIframeContent(iframe, simpleTemplate(template, data))) return;
    return iframe;
}

/**
 * createIframe
 *
 * @param {HTMLElement} parent
 * @param {string} url
 */
function createIframe(parent, url, zIndex) {
    var nEl = document.createElement('iframe');
    nEl.src = url || 'about:blank';
    nEl.marginWidth = '0';
    nEl.marginHeight = '0';
    nEl.frameBorder = '0';
    nEl.width = '100%';
    nEl.height = '100%';
    setFullSizeStyle(nEl);

    if(zIndex){
        nEl.style.zIndex = zIndex;
    }

    nEl.setAttribute('SCROLLING','NO');
    parent.innerHTML = '';
    parent.appendChild(nEl);
    return nEl;
}

function setFullSizeStyle(element) {
    if(element) {
        element.style.position = 'absolute';
        element.style.left = '0';
        element.style.top = '0';
        element.style.margin = '0px';
        element.style.padding = '0px';
        element.style.border = 'none';
        element.style.width = '100%';
        element.style.height = '100%';
    }
}

/**
 * simpleTemplate
 *
 * @param {string} template
 * @param {object} data
 */
function simpleTemplate(template, data) {
    Object.keys(data).forEach(function (key) {
        var value = (typeof value === 'object') ? JSON.stringify(data[key]) : data[key];
        template = template.replace(new RegExp('{{' + key + '}}', 'g'), value);
    });
    return template;
}

/**
 * setIframeContent
 *
 * @param {HTMLIframeElement} iframeEl
 * @param content
 */
function setIframeContent(iframeEl, content) {
    var iframeDoc = iframeEl.contentWindow && iframeEl.contentWindow.document;
    if (!iframeDoc) return false;

    iframeDoc.write(content);

    return true;
}


/**
 * extend object with keys from another object
 *
 * @param {object} toExtend
 * @param {object} fromSource
 */
function extend(toExtend, fromSource) {
    Object.keys(fromSource).forEach(function(key) {
        toExtend[key] = fromSource[key];
    });
    return toExtend;
}


/**
 * unique will create a unique string everytime is called, sequentially and prefixed
 *
 * @param {string} prefix
 */
function unique(prefix) {
    var count = -1;
    return function () {
        return prefix + '_' + (++count);
    };
}

module.exports = {
    noop: noop,
    validate: validate,
    callbackTimeout: callbackTimeout,
    createElementInEl: createElementInEl,
    createIframeWithContent: createIframeWithContent,
    createIframe: createIframe,
    setFullSizeStyle: setFullSizeStyle,
    simpleTemplate: simpleTemplate,
    setIframeContent: setIframeContent,
    extend: extend,
    unique: unique
};



/***/ }),

/***/ "video.js":
/*!**************************!*\
  !*** external "videojs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = videojs;

/***/ }),

/***/ "?34aa":
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/vast-plugin.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video.js */ "video.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dailymotion/vast-client */ "./node_modules/@dailymotion/vast-client/dist/vast-client.min.js");
/* harmony import */ var _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var global_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! global/document */ "./node_modules/global/document.js");
/* harmony import */ var global_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(global_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _ad_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ad-loader */ "./src/ad-loader.js");
/* harmony import */ var _ad_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ad-selector */ "./src/ad-selector.js");
/* harmony import */ var _vpaid_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vpaid-handler */ "./src/vpaid-handler.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event */ "./src/event.js");








const Plugin = video_js__WEBPACK_IMPORTED_MODULE_0___default().getPlugin('plugin');
const DEFAULT_OPTIONS = Object.freeze({
  seekEnabled: false,
  controlsEnabled: false,
  wrapperLimit: 10,
  withCredentials: true,
  skip: 0,
  vpaid: {
    containerId: undefined,
    containerClass: 'vjs-vpaid-container',
    videoInstance: 'none'
  },
  companion: {
    elementId: null,
    maxWidth: 0,
    maxHeight: 0
  }
});

/**
 * VastPlugin
 */
class VastPlugin extends Plugin {
  /**
   * Constructor
   *
   * @param {Object} player The videojs object
   * @param {Object} options Plugin config
   */
  constructor(player, options) {
    super(player);
    // Could be initialized already by user
    if (typeof player.ads === 'function') {
      player.ads({
        debug: false,
        liveCuePoints: false
      });
    }
    console.log(`videojsx-vast-plugin running`);
    options = video_js__WEBPACK_IMPORTED_MODULE_0___default().mergeOptions(DEFAULT_OPTIONS, options || {});

    /** @type {VASTClient} */
    const vastClient = new _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_1__.VASTClient();
    /** @type {TrackedAd[]} */
    const ads = [];
    /** @type {TrackedAd|null} */
    let currentAd = null;
    /** @type {Number} */
    let currentAdIndex = -1;
    /** @type {VPAIDHandler} */
    const vpaidHandler = new _vpaid_handler__WEBPACK_IMPORTED_MODULE_6__.VPAIDHandler(player, options);
    /** @type {boolean} */
    let timedOut = false;
    const autoplay = player.autoplay();
    player.on('adtimeout', () => {
      timedOut = true;
    });
    const ui = new _ui__WEBPACK_IMPORTED_MODULE_3__.UI(player, options);
    function skip() {
      if (currentAd?.hasVideoMedia()) {
        currentAd.linearAdTracker.skip();
        player.trigger({
          type: 'vast.skipAd',
          vast: (0,_event__WEBPACK_IMPORTED_MODULE_7__.createVASTContext)(currentAd.linearAdTracker)
        });
        playNextAd();
      }
    }
    ui.on('skip', skip);
    ui.on('click', () => {
      currentAd.linearAdTracker.click();
    });
    player.on('readyforpreroll', () => {
      startPreRoll();
    });
    const adLoader = new _ad_loader__WEBPACK_IMPORTED_MODULE_4__.AdLoader(vastClient, new _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_1__.VASTParser(), new _ad_selector__WEBPACK_IMPORTED_MODULE_5__.AdSelector(), options);
    adLoader.loadAds().then(trackedAds => {
      // TODO: document this timeout
      if (!timedOut) {
        ads.push(...trackedAds);
        currentAd = null;
        player.trigger('adsready');
      } else {
        // avoid interrupting content playback
        // TODO: option to allow this interruption
        throw new Error('Ad load took too long.');
      }
    }).catch(err => {
      // eslint-disable-next-line no-console
      console.log(`Ad cancelled: ${err.message}`);
      player.trigger('nopreroll');
    }).finally(() => {
      if (autoplay) {
        player.play();
      }
    });

    /**
     * Create Source Objects
     *
     * @param {Array<MediaFile>} mediaFiles  Array of media files
     * @return {Array} Array of source objects
     */
    const createSourceObjects = mediaFiles => {
      return mediaFiles.filter(mediaFile => mediaFile.apiFramework == null).map(mediaFile => ({
        type: mediaFile.mimeType,
        src: mediaFile.fileURL
      }));
    };
    const playNextAd = () => {
      const nextAd = ads[currentAdIndex + 1];

      // do not change ui for vpaid
      if (nextAd?.hasVideoMedia()) {
        if (!currentAd?.hasVideoMedia()) {
          ui.setUp();
        }
      } else {
        if (currentAd?.hasVideoMedia()) {
          ui.tearDown();
        }
      }
      if (nextAd) {
        currentAd = nextAd;
        currentAdIndex++;
        console.log(`Playing ad ${currentAdIndex + 1}/${ads.length}`);
        if (currentAd.hasVideoMedia()) {
          const allMediaFiles = currentAd.linearCreative.mediaFiles;
          const streamingMediaFiles = allMediaFiles.filter(mediaFile => mediaFile.deliveryType === 'streaming');
          const nonStreamingMediaFiles = allMediaFiles.filter(mediaFile => mediaFile.deliveryType !== 'streaming');
          if (nonStreamingMediaFiles.length > 0) {
            player.src(createSourceObjects(nonStreamingMediaFiles));
          } else if (streamingMediaFiles.length > 0) {
            let assetDuration = currentAd.linearAdTracker.assetDuration;
            if (assetDuration == null || assetDuration < 1) {
              console.log('Streaming ads must have a duration');
              playNextAd();
              return;
            }
            player.src(createSourceObjects(streamingMediaFiles));
            currentAd.skipAfterDuration = true;
          }
          ui.duration = currentAd.linearAdTracker.assetDuration || 0;
        } else {
          vpaidHandler.handle(currentAd.linearAdTracker).then(() => {
            playNextAd();
          }).catch(err => {
            console.log(err);
            playNextAd();
          });
        }
        showCompanionAd();
      } else {
        currentAd = null;
        currentAdIndex = -1;
        endPreRoll();
      }
    };
    const {
      setUpEvents,
      tearDownEvents
    } = (() => {
      const adPlayFn = () => {
        if (currentAd.skipAfterDuration) {
          const ad = currentAd;
          setTimeout(() => {
            if (currentAd === ad) {
              skip();
            }
          }, ad.linearAdTracker.assetDuration * 1000);
        }
        if (!currentAd.linearAdTracker.impressed && currentAd.hasVideoMedia()) {
          currentAd.linearAdTracker.trackImpression();
          player.trigger({
            type: 'vast.adStart',
            vast: (0,_event__WEBPACK_IMPORTED_MODULE_7__.createVASTContext)(currentAd.linearAdTracker)
          });
        }
      };
      const timeupdateFn = () => {
        if (currentAd) {
          if (isNaN(currentAd.linearAdTracker.assetDuration)) {
            currentAd.linearAdTracker.assetDuration = player.duration();
          }
          currentAd.linearAdTracker.setProgress(player.currentTime());
        }
      };
      const pauseFn = () => {
        if (player.remainingTime() > 0) {
          currentAd.linearAdTracker.setPaused(true);
          player.one('adplay', () => {
            currentAd.linearAdTracker.setPaused(false);
          });
        }
      };

      // args: err
      const adErrorFn = () => {
        const MEDIAFILE_PLAYBACK_ERROR = 405;
        currentAd.linearAdTracker.error({
          ERRORCODE: MEDIAFILE_PLAYBACK_ERROR
        });
        // Do not want to show VAST related errors to the user
        player.error(null);
        playNextAd();
      };
      const fullScreenFn = () => {
        // for 'fullscreen' & 'exitfullscreen'
        currentAd.linearAdTracker.setFullscreen(player.isFullscreen());
      };
      const muteFn = (() => {
        let previousMuted = player.muted();
        let previousVolume = player.volume();
        return () => {
          const volumeNow = player.volume();
          const mutedNow = player.muted();
          if (previousMuted !== mutedNow) {
            currentAd.linearAdTracker.setMuted(mutedNow);
            previousMuted = mutedNow;
          } else if (previousVolume !== volumeNow) {
            if (previousVolume > 0 && volumeNow === 0) {
              currentAd.linearAdTracker.setMuted(true);
            } else if (previousVolume === 0 && volumeNow > 0) {
              currentAd.linearAdTracker.setMuted(false);
            }
            previousVolume = volumeNow;
          }
        };
      })();
      const adEndedFn = () => {
        // Ad ended, not skipped
        if (currentAd.hasVideoMedia()) {
          currentAd.linearAdTracker.complete();
          player.trigger({
            type: 'vast.adEnd',
            vast: (0,_event__WEBPACK_IMPORTED_MODULE_7__.createVASTContext)(currentAd.linearAdTracker)
          });
          playNextAd();
        }
      };
      return {
        setUpEvents: () => {
          player.on('adended', adEndedFn);
          player.on('adplay', adPlayFn);
          player.on('adtimeupdate', timeupdateFn);
          player.on('adpause', pauseFn);
          player.on('aderror', adErrorFn);
          player.on('advolumechange', muteFn);
          player.on('fullscreenchange', fullScreenFn);
        },
        tearDownEvents: () => {
          player.off('adended', adEndedFn);
          player.off('adplay', adPlayFn);
          player.off('adtimeupdate', timeupdateFn);
          player.off('adpause', pauseFn);
          player.off('aderror', adErrorFn);
          player.off('advolumechange', muteFn);
          player.off('fullscreenchange', fullScreenFn);
        }
      };
    })();
    const showCompanionAd = () => {
      const companionTracker = currentAd.companionTracker;
      const dest = global_document__WEBPACK_IMPORTED_MODULE_2___default().getElementById(options.companion.elementId);
      if (companionTracker && companionTracker.variation && dest) {
        const variation = companionTracker.variation;
        const onClick = () => {
          companionTracker.click();
        };
        const hyperLink = global_document__WEBPACK_IMPORTED_MODULE_2___default().createElement('a');
        hyperLink.src = '#';
        hyperLink.addEventListener('click', onClick);
        const image = global_document__WEBPACK_IMPORTED_MODULE_2___default().createElement('img');
        image.src = variation.staticResource;
        hyperLink.appendChild(image);
        dest.innerHTML = '';
        dest.appendChild(hyperLink);
      } else if (dest) {
        // TODO: option to remove last companion ad when content plays?
        dest.innerHTML = '';
      }
    };
    const startPreRoll = () => {
      console.log(`Playing ${ads.length} ads`);
      player.ads.startLinearAdMode();
      setUpEvents();
      playNextAd();
    };
    const endPreRoll = () => {
      player.ads.endLinearAdMode();
      tearDownEvents();
      console.log('Playing content');
    };
  }
}
video_js__WEBPACK_IMPORTED_MODULE_0___default().registerPlugin('vast', VastPlugin);
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/vast-player.css ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLG1CQUFtQjtBQUM5QixXQUFXLFFBQVE7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBOztB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NUMsTUFBTUcsS0FBSyxHQUFHeE4sb0VBQXNCLENBQUMsS0FBSyxDQUFDO1FBRTNDd04sS0FBSyxDQUFDbEMsR0FBRyxHQUFHclAsU0FBUyxDQUFDSSxjQUFjO1FBRXBDaVIsU0FBUyxDQUFDek0sV0FBVyxDQUFDMk0sS0FBSyxDQUFDO1FBRTVCSixJQUFJLENBQUNqTCxTQUFTLEdBQUcsRUFBRTtRQUNuQmlMLElBQUksQ0FBQ3ZNLFdBQVcsQ0FBQ3lNLFNBQVMsQ0FBQztNQUM3QixDQUFDLE1BQU0sSUFBSUYsSUFBSSxFQUFFO1FBQ2Y7UUFDQUEsSUFBSSxDQUFDakwsU0FBUyxHQUFHLEVBQUU7TUFDckI7SUFDRixDQUFDO0lBRUQsTUFBTTZJLFlBQVksR0FBR0EsQ0FBQSxLQUFNO01BQ3pCdkYsT0FBTyxDQUFDRCxHQUFHLENBQUUsV0FBVWhMLEdBQUcsQ0FBQzBDLE1BQU8sTUFBSyxDQUFDO01BQ3hDK0IsTUFBTSxDQUFDekUsR0FBRyxDQUFDaVQsaUJBQWlCLEVBQUU7TUFDOUIxQixXQUFXLEVBQUU7TUFDYmhCLFVBQVUsRUFBRTtJQUNkLENBQUM7SUFFRCxNQUFNZSxVQUFVLEdBQUdBLENBQUEsS0FBTTtNQUN2QjdNLE1BQU0sQ0FBQ3pFLEdBQUcsQ0FBQ2tULGVBQWUsRUFBRTtNQUM1QjFCLGNBQWMsRUFBRTtNQUNoQnZHLE9BQU8sQ0FBQ0QsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7RUFDSDtBQUNGO0FBRUExRyw4REFBc0IsQ0FBQyxNQUFNLEVBQUV1TCxVQUFVLENBQUMsQzs7Ozs7Ozs7OztBQ3ZWMUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi8uL25vZGVfbW9kdWxlcy9AZGFpbHltb3Rpb24vdmFzdC1jbGllbnQvZGlzdC92YXN0LWNsaWVudC5taW4uanMiLCJ3ZWJwYWNrOi8vdmlkZW9qc3gtdmFzdC1wbHVnaW4vLi9zcmMvYWQtbG9hZGVyLmpzIiwid2VicGFjazovL3ZpZGVvanN4LXZhc3QtcGx1Z2luLy4vc3JjL2FkLXNlbGVjdG9yLmpzIiwid2VicGFjazovL3ZpZGVvanN4LXZhc3QtcGx1Z2luLy4vc3JjL2V2ZW50LmpzIiwid2VicGFjazovL3ZpZGVvanN4LXZhc3QtcGx1Z2luLy4vc3JjL3RyYWNrZWQtYWQuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qc3gtdmFzdC1wbHVnaW4vLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qc3gtdmFzdC1wbHVnaW4vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qc3gtdmFzdC1wbHVnaW4vLi9zcmMvdnBhaWQtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi8uL25vZGVfbW9kdWxlcy9nbG9iYWwvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qc3gtdmFzdC1wbHVnaW4vLi9ub2RlX21vZHVsZXMvZ2xvYmFsL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi8uL25vZGVfbW9kdWxlcy92cGFpZC1odG1sNS1jbGllbnQvanMvSVZQQUlEQWRVbml0LmpzIiwid2VicGFjazovL3ZpZGVvanN4LXZhc3QtcGx1Z2luLy4vbm9kZV9tb2R1bGVzL3ZwYWlkLWh0bWw1LWNsaWVudC9qcy9WUEFJREFkVW5pdC5qcyIsIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi8uL25vZGVfbW9kdWxlcy92cGFpZC1odG1sNS1jbGllbnQvanMvVlBBSURIVE1MNUNsaWVudC5qcyIsIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi8uL25vZGVfbW9kdWxlcy92cGFpZC1odG1sNS1jbGllbnQvanMvc3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi8uL25vZGVfbW9kdWxlcy92cGFpZC1odG1sNS1jbGllbnQvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qc3gtdmFzdC1wbHVnaW4vZXh0ZXJuYWwgdmFyIFwidmlkZW9qc1wiIiwid2VicGFjazovL3ZpZGVvanN4LXZhc3QtcGx1Z2luL2lnbm9yZWR8L1VzZXJzL2RpZWdvL0Rvd25sb2Fkcy92aWRlb2pzeC12YXN0LXBsdWdpbi9ub2RlX21vZHVsZXMvZ2xvYmFsfG1pbi1kb2N1bWVudCIsIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdmlkZW9qc3gtdmFzdC1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ZpZGVvanN4LXZhc3QtcGx1Z2luL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmlkZW9qc3gtdmFzdC1wbHVnaW4vLi9zcmMvdmFzdC1wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vdmlkZW9qc3gtdmFzdC1wbHVnaW4vLi9zcmMvdmFzdC1wbGF5ZXIuY3NzP2I4ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/dChleHBvcnRzKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImV4cG9ydHNcIl0sdCk6dCgoZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOmV8fHNlbGYpLlZBU1Q9e30pfSh0aGlzLChmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIGk9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYoaT1pLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixpKX1yZXR1cm4gcn1mdW5jdGlvbiByKGUpe2Zvcih2YXIgcj0xO3I8YXJndW1lbnRzLmxlbmd0aDtyKyspe3ZhciBpPW51bGwhPWFyZ3VtZW50c1tyXT9hcmd1bWVudHNbcl06e307ciUyP3QoT2JqZWN0KGkpLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtzKGUsdCxpW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKGkpKTp0KE9iamVjdChpKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGksdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIGkoZSl7cmV0dXJuIGk9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0saShlKX1mdW5jdGlvbiBuKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBhKGUsdCl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBpPXRbcl07aS5lbnVtZXJhYmxlPWkuZW51bWVyYWJsZXx8ITEsaS5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gaSYmKGkud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGkua2V5LGkpfX1mdW5jdGlvbiBvKGUsdCxyKXtyZXR1cm4gdCYmYShlLnByb3RvdHlwZSx0KSxyJiZhKGUsciksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJwcm90b3R5cGVcIix7d3JpdGFibGU6ITF9KSxlfWZ1bmN0aW9uIHMoZSx0LHIpe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfWZ1bmN0aW9uIGwoZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwicHJvdG90eXBlXCIse3dyaXRhYmxlOiExfSksdCYmYyhlLHQpfWZ1bmN0aW9uIHUoZSl7cmV0dXJuIHU9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbihlKXtyZXR1cm4gZS5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZihlKX0sdShlKX1mdW5jdGlvbiBjKGUsdCl7cmV0dXJuIGM9T2JqZWN0LnNldFByb3RvdHlwZU9mfHxmdW5jdGlvbihlLHQpe3JldHVybiBlLl9fcHJvdG9fXz10LGV9LGMoZSx0KX1mdW5jdGlvbiBkKGUsdCl7aWYodCYmKFwib2JqZWN0XCI9PXR5cGVvZiB0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KSlyZXR1cm4gdDtpZih2b2lkIDAhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtyZXR1cm4gZnVuY3Rpb24oZSl7aWYodm9pZCAwPT09ZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIGV9KGUpfWZ1bmN0aW9uIHAoZSl7dmFyIHQ9ZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgUmVmbGVjdHx8IVJlZmxlY3QuY29uc3RydWN0KXJldHVybiExO2lmKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pcmV0dXJuITE7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUHJveHkpcmV0dXJuITA7dHJ5e3JldHVybiBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbixbXSwoZnVuY3Rpb24oKXt9KSkpLCEwfWNhdGNoKGUpe3JldHVybiExfX0oKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgcixpPXUoZSk7aWYodCl7dmFyIG49dSh0aGlzKS5jb25zdHJ1Y3RvcjtyPVJlZmxlY3QuY29uc3RydWN0KGksYXJndW1lbnRzLG4pfWVsc2Ugcj1pLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gZCh0aGlzLHIpfX1mdW5jdGlvbiBoKGUpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiB2KGUpfShlKXx8ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmbnVsbCE9ZVtTeW1ib2wuaXRlcmF0b3JdfHxudWxsIT1lW1wiQEBpdGVyYXRvclwiXSlyZXR1cm4gQXJyYXkuZnJvbShlKX0oZSl8fGZ1bmN0aW9uKGUsdCl7aWYoIWUpcmV0dXJuO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiB2KGUsdCk7dmFyIHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO1wiT2JqZWN0XCI9PT1yJiZlLmNvbnN0cnVjdG9yJiYocj1lLmNvbnN0cnVjdG9yLm5hbWUpO2lmKFwiTWFwXCI9PT1yfHxcIlNldFwiPT09cilyZXR1cm4gQXJyYXkuZnJvbShlKTtpZihcIkFyZ3VtZW50c1wiPT09cnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QocikpcmV0dXJuIHYoZSx0KX0oZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gdihlLHQpeyhudWxsPT10fHx0PmUubGVuZ3RoKSYmKHQ9ZS5sZW5ndGgpO2Zvcih2YXIgcj0wLGk9bmV3IEFycmF5KHQpO3I8dDtyKyspaVtyXT1lW3JdO3JldHVybiBpfWZ1bmN0aW9uIGYoKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307cmV0dXJue2lkOmUuaWR8fG51bGwsYWRJZDplLmFkSWR8fG51bGwsc2VxdWVuY2U6ZS5zZXF1ZW5jZXx8bnVsbCxhcGlGcmFtZXdvcms6ZS5hcGlGcmFtZXdvcmt8fG51bGwsdW5pdmVyc2FsQWRJZHM6W10sY3JlYXRpdmVFeHRlbnNpb25zOltdfX12YXIgbT1bXCJBRENBVEVHT1JJRVNcIixcIkFEQ09VTlRcIixcIkFEUExBWUhFQURcIixcIkFEU0VSVklOR0lEXCIsXCJBRFRZUEVcIixcIkFQSUZSQU1FV09SS1NcIixcIkFQUEJVTkRMRVwiLFwiQVNTRVRVUklcIixcIkJMT0NLRURBRENBVEVHT1JJRVNcIixcIkJSRUFLTUFYQURMRU5HVEhcIixcIkJSRUFLTUFYQURTXCIsXCJCUkVBS01BWERVUkFUSU9OXCIsXCJCUkVBS01JTkFETEVOR1RIXCIsXCJCUkVBS01JTkRVUkFUSU9OXCIsXCJCUkVBS1BPU0lUSU9OXCIsXCJDTElDS1BPU1wiLFwiQ0xJQ0tUWVBFXCIsXCJDTElFTlRVQVwiLFwiQ09OVEVOVElEXCIsXCJDT05URU5UUExBWUhFQURcIixcIkNPTlRFTlRVUklcIixcIkRFVklDRUlQXCIsXCJERVZJQ0VVQVwiLFwiRE9NQUlOXCIsXCJFWFRFTlNJT05TXCIsXCJHRFBSQ09OU0VOVFwiLFwiSUZBXCIsXCJJRkFUWVBFXCIsXCJJTlZFTlRPUllTVEFURVwiLFwiTEFUTE9OR1wiLFwiTElNSVRBRFRSQUNLSU5HXCIsXCJNRURJQU1JTUVcIixcIk1FRElBUExBWUhFQURcIixcIk9NSURQQVJUTkVSXCIsXCJQQUdFVVJMXCIsXCJQTEFDRU1FTlRUWVBFXCIsXCJQTEFZRVJDQVBBQklMSVRJRVNcIixcIlBMQVlFUlNJWkVcIixcIlBMQVlFUlNUQVRFXCIsXCJQT0RTRVFVRU5DRVwiLFwiUkVHVUxBVElPTlNcIixcIlNFUlZFUlNJREVcIixcIlNFUlZFUlVBXCIsXCJUUkFOU0FDVElPTklEXCIsXCJVTklWRVJTQUxBRElEXCIsXCJWQVNUVkVSU0lPTlNcIixcIlZFUklGSUNBVElPTlZFTkRPUlNcIl07ZnVuY3Rpb24gZyhlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30scj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06e30saT1bXSxuPUEoZSk7Zm9yKHZhciBhIGluIXQuRVJST1JDT0RFfHxyLmlzQ3VzdG9tQ29kZXx8L15bMC05XXszfSQvLnRlc3QodC5FUlJPUkNPREUpfHwodC5FUlJPUkNPREU9OTAwKSx0LkNBQ0hFQlVTVElORz1FKE1hdGgucm91bmQoMWU4Kk1hdGgucmFuZG9tKCkpKSx0LlRJTUVTVEFNUD0obmV3IERhdGUpLnRvSVNPU3RyaW5nKCksdC5SQU5ET009dC5yYW5kb209dC5DQUNIRUJVU1RJTkcsdCl0W2FdPWIodFthXSk7Zm9yKHZhciBvIGluIG4pe3ZhciBzPW5bb107XCJzdHJpbmdcIj09dHlwZW9mIHMmJmkucHVzaCh5KHMsdCkpfXJldHVybiBpfWZ1bmN0aW9uIHkoZSx0KXt2YXIgcj0oZT1UKGUsdCkpLm1hdGNoKC9bXltcXF1dKyg/PV0pL2cpO2lmKCFyKXJldHVybiBlO3ZhciBpPXIuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gbS5pbmRleE9mKGUpPi0xfSkpO3JldHVybiAwPT09aS5sZW5ndGg/ZTpUKGUsaT1pLnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZVt0XT0tMSxlfSkse30pKX1mdW5jdGlvbiBUKGUsdCl7dmFyIHI9ZTtmb3IodmFyIGkgaW4gdCl7dmFyIG49dFtpXTtyPXIucmVwbGFjZShuZXcgUmVnRXhwKFwiKD86XFxcXFt8JSUpKFwiLmNvbmNhdChpLFwiKSg/OlxcXFxdfCUlKVwiKSxcImdcIiksbil9cmV0dXJuIHJ9ZnVuY3Rpb24gQShlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT9lLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuaGFzT3duUHJvcGVydHkoXCJ1cmxcIik/ZS51cmw6ZX0pKTplfWZ1bmN0aW9uIGsoZSx0KXtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKylpZihSKHRbcl0sZSkpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gUihlLHQpe2lmKGUmJnQpe3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUpLGk9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModCk7cmV0dXJuIHIubGVuZ3RoPT09aS5sZW5ndGgmJihlLmlkPT09dC5pZCYmZS51cmw9PT10LnVybCl9cmV0dXJuITF9ZnVuY3Rpb24gYihlKXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGUpLnJlcGxhY2UoL1shJygpKl0vZywoZnVuY3Rpb24oZSl7cmV0dXJuXCIlXCIuY29uY2F0KGUuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpfSkpfWZ1bmN0aW9uIEUoZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOjg7cmV0dXJuIGUudG9TdHJpbmcoKS5wYWRTdGFydCh0LFwiMFwiKX12YXIgTj17dHJhY2s6ZnVuY3Rpb24oZSx0LHIpe2coZSx0LHIpLmZvckVhY2goKGZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJm51bGwhPT13aW5kb3cmJigobmV3IEltYWdlKS5zcmM9ZSl9KSl9LHJlc29sdmVVUkxUZW1wbGF0ZXM6ZyxleHRyYWN0VVJMc0Zyb21UZW1wbGF0ZXM6QSxjb250YWluc1RlbXBsYXRlT2JqZWN0OmssaXNUZW1wbGF0ZU9iamVjdEVxdWFsOlIsZW5jb2RlVVJJQ29tcG9uZW50UkZDMzk4NjpiLHJlcGxhY2VVcmxNYWNyb3M6eSxpc051bWVyaWM6ZnVuY3Rpb24oZSl7cmV0dXJuIWlzTmFOKHBhcnNlRmxvYXQoZSkpJiZpc0Zpbml0ZShlKX0sZmxhdHRlbjpmdW5jdGlvbiBlKHQpe3JldHVybiB0LnJlZHVjZSgoZnVuY3Rpb24odCxyKXtyZXR1cm4gdC5jb25jYXQoQXJyYXkuaXNBcnJheShyKT9lKHIpOnIpfSksW10pfSxqb2luQXJyYXlPZlVuaXF1ZVRlbXBsYXRlT2JqczpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpbXSx0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpbXSxyPUFycmF5LmlzQXJyYXkoZSk/ZTpbXSxpPUFycmF5LmlzQXJyYXkodCk/dDpbXSxuPXIuY29uY2F0KGkpO3JldHVybiBuLnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gayh0LGUpfHxlLnB1c2godCksZX0pLFtdKX0saXNWYWxpZFRpbWVWYWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gTnVtYmVyLmlzRmluaXRlKGUpJiZlPj0tMn0sYWRkTGVhZGluZ1plcm9zOkV9O2Z1bmN0aW9uIEwoZSl7cmV0dXJuLTEhPT1bXCJ0cnVlXCIsXCJUUlVFXCIsXCJUcnVlXCIsXCIxXCJdLmluZGV4T2YoZSl9dmFyIHc9e2NoaWxkQnlOYW1lOmZ1bmN0aW9uKGUsdCl7dmFyIHI9ZS5jaGlsZE5vZGVzO2Zvcih2YXIgaSBpbiByKXt2YXIgbj1yW2ldO2lmKG4ubm9kZU5hbWU9PT10KXJldHVybiBufX0sY2hpbGRyZW5CeU5hbWU6ZnVuY3Rpb24oZSx0KXt2YXIgcj1bXSxpPWUuY2hpbGROb2Rlcztmb3IodmFyIG4gaW4gaSl7dmFyIGE9aVtuXTthLm5vZGVOYW1lPT09dCYmci5wdXNoKGEpfXJldHVybiByfSxyZXNvbHZlVmFzdEFkVGFnVVJJOmZ1bmN0aW9uKGUsdCl7aWYoIXQpcmV0dXJuIGU7aWYoMD09PWUuaW5kZXhPZihcIi8vXCIpKXt2YXIgcj1sb2NhdGlvbi5wcm90b2NvbDtyZXR1cm5cIlwiLmNvbmNhdChyKS5jb25jYXQoZSl9aWYoLTE9PT1lLmluZGV4T2YoXCI6Ly9cIikpe3ZhciBpPXQuc2xpY2UoMCx0Lmxhc3RJbmRleE9mKFwiL1wiKSk7cmV0dXJuXCJcIi5jb25jYXQoaSxcIi9cIikuY29uY2F0KGUpfXJldHVybiBlfSxwYXJzZUJvb2xlYW46TCxwYXJzZU5vZGVUZXh0OmZ1bmN0aW9uKGUpe3JldHVybiBlJiYoZS50ZXh0Q29udGVudHx8ZS50ZXh0fHxcIlwiKS50cmltKCl9LGNvcHlOb2RlQXR0cmlidXRlOmZ1bmN0aW9uKGUsdCxyKXt2YXIgaT10LmdldEF0dHJpYnV0ZShlKTtpJiZyLnNldEF0dHJpYnV0ZShlLGkpfSxwYXJzZUF0dHJpYnV0ZXM6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuYXR0cmlidXRlcyxyPXt9LGk9MDtpPHQubGVuZ3RoO2krKylyW3RbaV0ubm9kZU5hbWVdPXRbaV0ubm9kZVZhbHVlO3JldHVybiByfSxwYXJzZUR1cmF0aW9uOmZ1bmN0aW9uKGUpe2lmKG51bGw9PWUpcmV0dXJuLTE7aWYoTi5pc051bWVyaWMoZSkpcmV0dXJuIHBhcnNlSW50KGUpO3ZhciB0PWUuc3BsaXQoXCI6XCIpO2lmKDMhPT10Lmxlbmd0aClyZXR1cm4tMTt2YXIgcj10WzJdLnNwbGl0KFwiLlwiKSxpPXBhcnNlSW50KHJbMF0pOzI9PT1yLmxlbmd0aCYmKGkrPXBhcnNlRmxvYXQoXCIwLlwiLmNvbmNhdChyWzFdKSkpO3ZhciBuPXBhcnNlSW50KDYwKnRbMV0pLGE9cGFyc2VJbnQoNjAqdFswXSo2MCk7cmV0dXJuIGlzTmFOKGEpfHxpc05hTihuKXx8aXNOYU4oaSl8fG4+MzYwMHx8aT42MD8tMTphK24raX0sc3BsaXRWQVNUOmZ1bmN0aW9uKGUpe3ZhciB0PVtdLHI9bnVsbDtyZXR1cm4gZS5mb3JFYWNoKChmdW5jdGlvbihpLG4pe2lmKGkuc2VxdWVuY2UmJihpLnNlcXVlbmNlPXBhcnNlSW50KGkuc2VxdWVuY2UsMTApKSxpLnNlcXVlbmNlPjEpe3ZhciBhPWVbbi0xXTtpZihhJiZhLnNlcXVlbmNlPT09aS5zZXF1ZW5jZS0xKXJldHVybiB2b2lkKHImJnIucHVzaChpKSk7ZGVsZXRlIGkuc2VxdWVuY2V9cj1baV0sdC5wdXNoKHIpfSkpLHR9LGFzc2lnbkF0dHJpYnV0ZXM6ZnVuY3Rpb24oZSx0KXtpZihlKWZvcih2YXIgciBpbiBlKXt2YXIgaT1lW3JdO2lmKGkubm9kZU5hbWUmJmkubm9kZVZhbHVlJiZ0Lmhhc093blByb3BlcnR5KGkubm9kZU5hbWUpKXt2YXIgbj1pLm5vZGVWYWx1ZTtcImJvb2xlYW5cIj09dHlwZW9mIHRbaS5ub2RlTmFtZV0mJihuPUwobikpLHRbaS5ub2RlTmFtZV09bn19fSxtZXJnZVdyYXBwZXJBZERhdGE6ZnVuY3Rpb24oZSx0KXtlLmVycm9yVVJMVGVtcGxhdGVzPXQuZXJyb3JVUkxUZW1wbGF0ZXMuY29uY2F0KGUuZXJyb3JVUkxUZW1wbGF0ZXMpLGUuaW1wcmVzc2lvblVSTFRlbXBsYXRlcz10LmltcHJlc3Npb25VUkxUZW1wbGF0ZXMuY29uY2F0KGUuaW1wcmVzc2lvblVSTFRlbXBsYXRlcyksZS5leHRlbnNpb25zPXQuZXh0ZW5zaW9ucy5jb25jYXQoZS5leHRlbnNpb25zKSx0LnZpZXdhYmxlSW1wcmVzc2lvbi5sZW5ndGg+MCYmKGUudmlld2FibGVJbXByZXNzaW9uPVtdLmNvbmNhdChoKGUudmlld2FibGVJbXByZXNzaW9uKSxoKHQudmlld2FibGVJbXByZXNzaW9uKSkpLGUuZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzPXQuZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzLGUuYWxsb3dNdWx0aXBsZUFkcz10LmFsbG93TXVsdGlwbGVBZHMsZS5mYWxsYmFja09uTm9BZD10LmZhbGxiYWNrT25Ob0FkO3ZhciByPSh0LmNyZWF0aXZlc3x8W10pLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiY29tcGFuaW9uXCI9PT1lLnR5cGV9KSksaT1yLnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4odC52YXJpYXRpb25zfHxbXSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7KHQuY29tcGFuaW9uQ2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlc3x8W10pLmZvckVhY2goKGZ1bmN0aW9uKHQpe04uY29udGFpbnNUZW1wbGF0ZU9iamVjdCh0LGUpfHxlLnB1c2godCl9KSl9KSksZX0pLFtdKTtlLmNyZWF0aXZlcz1yLmNvbmNhdChlLmNyZWF0aXZlcyk7dmFyIG49dC52aWRlb0NsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXMmJnQudmlkZW9DbGlja1RyYWNraW5nVVJMVGVtcGxhdGVzLmxlbmd0aCxhPXQudmlkZW9DdXN0b21DbGlja1VSTFRlbXBsYXRlcyYmdC52aWRlb0N1c3RvbUNsaWNrVVJMVGVtcGxhdGVzLmxlbmd0aDtlLmNyZWF0aXZlcy5mb3JFYWNoKChmdW5jdGlvbihlKXtpZih0LnRyYWNraW5nRXZlbnRzJiZ0LnRyYWNraW5nRXZlbnRzW2UudHlwZV0pZm9yKHZhciByIGluIHQudHJhY2tpbmdFdmVudHNbZS50eXBlXSl7dmFyIG89dC50cmFja2luZ0V2ZW50c1tlLnR5cGVdW3JdO0FycmF5LmlzQXJyYXkoZS50cmFja2luZ0V2ZW50c1tyXSl8fChlLnRyYWNraW5nRXZlbnRzW3JdPVtdKSxlLnRyYWNraW5nRXZlbnRzW3JdPWUudHJhY2tpbmdFdmVudHNbcl0uY29uY2F0KG8pfVwibGluZWFyXCI9PT1lLnR5cGUmJihuJiYoZS52aWRlb0NsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXM9ZS52aWRlb0NsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXMuY29uY2F0KHQudmlkZW9DbGlja1RyYWNraW5nVVJMVGVtcGxhdGVzKSksYSYmKGUudmlkZW9DdXN0b21DbGlja1VSTFRlbXBsYXRlcz1lLnZpZGVvQ3VzdG9tQ2xpY2tVUkxUZW1wbGF0ZXMuY29uY2F0KHQudmlkZW9DdXN0b21DbGlja1VSTFRlbXBsYXRlcykpLCF0LnZpZGVvQ2xpY2tUaHJvdWdoVVJMVGVtcGxhdGV8fG51bGwhPT1lLnZpZGVvQ2xpY2tUaHJvdWdoVVJMVGVtcGxhdGUmJnZvaWQgMCE9PWUudmlkZW9DbGlja1Rocm91Z2hVUkxUZW1wbGF0ZXx8KGUudmlkZW9DbGlja1Rocm91Z2hVUkxUZW1wbGF0ZT10LnZpZGVvQ2xpY2tUaHJvdWdoVVJMVGVtcGxhdGUpKSxcImNvbXBhbmlvblwiPT09ZS50eXBlJiZpLmxlbmd0aCYmKGUudmFyaWF0aW9uc3x8W10pLmZvckVhY2goKGZ1bmN0aW9uKGUpe2UuY29tcGFuaW9uQ2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlcz1OLmpvaW5BcnJheU9mVW5pcXVlVGVtcGxhdGVPYmpzKGUuY29tcGFuaW9uQ2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlcyxpKX0pKX0pKSx0LmFkVmVyaWZpY2F0aW9ucyYmKGUuYWRWZXJpZmljYXRpb25zPWUuYWRWZXJpZmljYXRpb25zLmNvbmNhdCh0LmFkVmVyaWZpY2F0aW9ucykpLHQuYmxvY2tlZEFkQ2F0ZWdvcmllcyYmKGUuYmxvY2tlZEFkQ2F0ZWdvcmllcz1lLmJsb2NrZWRBZENhdGVnb3JpZXMuY29uY2F0KHQuYmxvY2tlZEFkQ2F0ZWdvcmllcykpfX07ZnVuY3Rpb24gVShlLHQpe3ZhciByPWZ1bmN0aW9uKCl7dmFyIGU9Zihhcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30pLHQ9ZS5pZCxyPWUuYWRJZCxpPWUuc2VxdWVuY2Usbj1lLmFwaUZyYW1ld29yaztyZXR1cm57aWQ6dCxhZElkOnIsc2VxdWVuY2U6aSxhcGlGcmFtZXdvcms6bix0eXBlOlwiY29tcGFuaW9uXCIscmVxdWlyZWQ6bnVsbCx2YXJpYXRpb25zOltdfX0odCk7cmV0dXJuIHIucmVxdWlyZWQ9ZS5nZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiKXx8bnVsbCxyLnZhcmlhdGlvbnM9dy5jaGlsZHJlbkJ5TmFtZShlLFwiQ29tcGFuaW9uXCIpLm1hcCgoZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307cmV0dXJue2lkOmUuaWR8fG51bGwsYWRUeXBlOlwiY29tcGFuaW9uQWRcIix3aWR0aDplLndpZHRofHwwLGhlaWdodDplLmhlaWdodHx8MCxhc3NldFdpZHRoOmUuYXNzZXRXaWR0aHx8bnVsbCxhc3NldEhlaWdodDplLmFzc2V0SGVpZ2h0fHxudWxsLGV4cGFuZGVkV2lkdGg6ZS5leHBhbmRlZFdpZHRofHxudWxsLGV4cGFuZGVkSGVpZ2h0OmUuZXhwYW5kZWRIZWlnaHR8fG51bGwsYXBpRnJhbWV3b3JrOmUuYXBpRnJhbWV3b3JrfHxudWxsLGFkU2xvdElEOmUuYWRTbG90SUR8fG51bGwscHhyYXRpbzplLnB4cmF0aW98fFwiMVwiLHJlbmRlcmluZ01vZGU6ZS5yZW5kZXJpbmdNb2RlfHxcImRlZmF1bHRcIixzdGF0aWNSZXNvdXJjZXM6W10saHRtbFJlc291cmNlczpbXSxpZnJhbWVSZXNvdXJjZXM6W10sYWRQYXJhbWV0ZXJzOm51bGwseG1sRW5jb2RlZDpudWxsLGFsdFRleHQ6bnVsbCxjb21wYW5pb25DbGlja1Rocm91Z2hVUkxUZW1wbGF0ZTpudWxsLGNvbXBhbmlvbkNsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXM6W10sdHJhY2tpbmdFdmVudHM6e319fSh3LnBhcnNlQXR0cmlidXRlcyhlKSk7dC5odG1sUmVzb3VyY2VzPXcuY2hpbGRyZW5CeU5hbWUoZSxcIkhUTUxSZXNvdXJjZVwiKS5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7dmFyIHI9dy5wYXJzZU5vZGVUZXh0KHQpO3JldHVybiByP2UuY29uY2F0KHIpOmV9KSxbXSksdC5pZnJhbWVSZXNvdXJjZXM9dy5jaGlsZHJlbkJ5TmFtZShlLFwiSUZyYW1lUmVzb3VyY2VcIikucmVkdWNlKChmdW5jdGlvbihlLHQpe3ZhciByPXcucGFyc2VOb2RlVGV4dCh0KTtyZXR1cm4gcj9lLmNvbmNhdChyKTplfSksW10pLHQuc3RhdGljUmVzb3VyY2VzPXcuY2hpbGRyZW5CeU5hbWUoZSxcIlN0YXRpY1Jlc291cmNlXCIpLnJlZHVjZSgoZnVuY3Rpb24oZSx0KXt2YXIgcj13LnBhcnNlTm9kZVRleHQodCk7cmV0dXJuIHI/ZS5jb25jYXQoe3VybDpyLGNyZWF0aXZlVHlwZTp0LmdldEF0dHJpYnV0ZShcImNyZWF0aXZlVHlwZVwiKXx8bnVsbH0pOmV9KSxbXSksdC5hbHRUZXh0PXcucGFyc2VOb2RlVGV4dCh3LmNoaWxkQnlOYW1lKGUsXCJBbHRUZXh0XCIpKXx8bnVsbDt2YXIgcj13LmNoaWxkQnlOYW1lKGUsXCJUcmFja2luZ0V2ZW50c1wiKTtyJiZ3LmNoaWxkcmVuQnlOYW1lKHIsXCJUcmFja2luZ1wiKS5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgcj1lLmdldEF0dHJpYnV0ZShcImV2ZW50XCIpLGk9dy5wYXJzZU5vZGVUZXh0KGUpO3ImJmkmJihBcnJheS5pc0FycmF5KHQudHJhY2tpbmdFdmVudHNbcl0pfHwodC50cmFja2luZ0V2ZW50c1tyXT1bXSksdC50cmFja2luZ0V2ZW50c1tyXS5wdXNoKGkpKX0pKSx0LmNvbXBhbmlvbkNsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXM9dy5jaGlsZHJlbkJ5TmFtZShlLFwiQ29tcGFuaW9uQ2xpY2tUcmFja2luZ1wiKS5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybntpZDplLmdldEF0dHJpYnV0ZShcImlkXCIpfHxudWxsLHVybDp3LnBhcnNlTm9kZVRleHQoZSl9fSkpLHQuY29tcGFuaW9uQ2xpY2tUaHJvdWdoVVJMVGVtcGxhdGU9dy5wYXJzZU5vZGVUZXh0KHcuY2hpbGRCeU5hbWUoZSxcIkNvbXBhbmlvbkNsaWNrVGhyb3VnaFwiKSl8fG51bGw7dmFyIGk9dy5jaGlsZEJ5TmFtZShlLFwiQWRQYXJhbWV0ZXJzXCIpO3JldHVybiBpJiYodC5hZFBhcmFtZXRlcnM9dy5wYXJzZU5vZGVUZXh0KGkpLHQueG1sRW5jb2RlZD1pLmdldEF0dHJpYnV0ZShcInhtbEVuY29kZWRcIil8fG51bGwpLHR9KSkscn1mdW5jdGlvbiBDKGUpe3JldHVyblwibGluZWFyXCI9PT1lLnR5cGV9ZnVuY3Rpb24gSShlLHQpe3ZhciByLGk9ZnVuY3Rpb24oKXt2YXIgZT1mKGFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSksdD1lLmlkLHI9ZS5hZElkLGk9ZS5zZXF1ZW5jZSxuPWUuYXBpRnJhbWV3b3JrO3JldHVybntpZDp0LGFkSWQ6cixzZXF1ZW5jZTppLGFwaUZyYW1ld29yazpuLHR5cGU6XCJsaW5lYXJcIixkdXJhdGlvbjowLHNraXBEZWxheTpudWxsLG1lZGlhRmlsZXM6W10sbWV6emFuaW5lOm51bGwsaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGU6bnVsbCxjbG9zZWRDYXB0aW9uRmlsZXM6W10sdmlkZW9DbGlja1Rocm91Z2hVUkxUZW1wbGF0ZTpudWxsLHZpZGVvQ2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlczpbXSx2aWRlb0N1c3RvbUNsaWNrVVJMVGVtcGxhdGVzOltdLGFkUGFyYW1ldGVyczpudWxsLGljb25zOltdLHRyYWNraW5nRXZlbnRzOnt9fX0odCk7aS5kdXJhdGlvbj13LnBhcnNlRHVyYXRpb24ody5wYXJzZU5vZGVUZXh0KHcuY2hpbGRCeU5hbWUoZSxcIkR1cmF0aW9uXCIpKSk7dmFyIG49ZS5nZXRBdHRyaWJ1dGUoXCJza2lwb2Zmc2V0XCIpO2lmKG51bGw9PW4paS5za2lwRGVsYXk9bnVsbDtlbHNlIGlmKFwiJVwiPT09bi5jaGFyQXQobi5sZW5ndGgtMSkmJi0xIT09aS5kdXJhdGlvbil7dmFyIGE9cGFyc2VJbnQobiwxMCk7aS5za2lwRGVsYXk9aS5kdXJhdGlvbiooYS8xMDApfWVsc2UgaS5za2lwRGVsYXk9dy5wYXJzZUR1cmF0aW9uKG4pO3ZhciBvPXcuY2hpbGRCeU5hbWUoZSxcIlZpZGVvQ2xpY2tzXCIpO2lmKG8pe3ZhciBzPXcuY2hpbGRCeU5hbWUobyxcIkNsaWNrVGhyb3VnaFwiKTtpLnZpZGVvQ2xpY2tUaHJvdWdoVVJMVGVtcGxhdGU9cz97aWQ6cy5nZXRBdHRyaWJ1dGUoXCJpZFwiKXx8bnVsbCx1cmw6dy5wYXJzZU5vZGVUZXh0KHMpfTpudWxsLHcuY2hpbGRyZW5CeU5hbWUobyxcIkNsaWNrVHJhY2tpbmdcIikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7aS52aWRlb0NsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXMucHVzaCh7aWQ6ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKXx8bnVsbCx1cmw6dy5wYXJzZU5vZGVUZXh0KGUpfSl9KSksdy5jaGlsZHJlbkJ5TmFtZShvLFwiQ3VzdG9tQ2xpY2tcIikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7aS52aWRlb0N1c3RvbUNsaWNrVVJMVGVtcGxhdGVzLnB1c2goe2lkOmUuZ2V0QXR0cmlidXRlKFwiaWRcIil8fG51bGwsdXJsOncucGFyc2VOb2RlVGV4dChlKX0pfSkpfXZhciBsPXcuY2hpbGRCeU5hbWUoZSxcIkFkUGFyYW1ldGVyc1wiKTtsJiYoaS5hZFBhcmFtZXRlcnM9dy5wYXJzZU5vZGVUZXh0KGwpKSx3LmNoaWxkcmVuQnlOYW1lKGUsXCJUcmFja2luZ0V2ZW50c1wiKS5mb3JFYWNoKChmdW5jdGlvbihlKXt3LmNoaWxkcmVuQnlOYW1lKGUsXCJUcmFja2luZ1wiKS5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdD1lLmdldEF0dHJpYnV0ZShcImV2ZW50XCIpLG49dy5wYXJzZU5vZGVUZXh0KGUpO2lmKHQmJm4pe2lmKFwicHJvZ3Jlc3NcIj09PXQpe2lmKCEocj1lLmdldEF0dHJpYnV0ZShcIm9mZnNldFwiKSkpcmV0dXJuO3Q9XCIlXCI9PT1yLmNoYXJBdChyLmxlbmd0aC0xKT9cInByb2dyZXNzLVwiLmNvbmNhdChyKTpcInByb2dyZXNzLVwiLmNvbmNhdChNYXRoLnJvdW5kKHcucGFyc2VEdXJhdGlvbihyKSkpfUFycmF5LmlzQXJyYXkoaS50cmFja2luZ0V2ZW50c1t0XSl8fChpLnRyYWNraW5nRXZlbnRzW3RdPVtdKSxpLnRyYWNraW5nRXZlbnRzW3RdLnB1c2gobil9fSkpfSkpLHcuY2hpbGRyZW5CeU5hbWUoZSxcIk1lZGlhRmlsZXNcIikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dy5jaGlsZHJlbkJ5TmFtZShlLFwiTWVkaWFGaWxlXCIpLmZvckVhY2goKGZ1bmN0aW9uKGUpe2kubWVkaWFGaWxlcy5wdXNoKGZ1bmN0aW9uKGUpe3ZhciB0PXtpZDpudWxsLGZpbGVVUkw6bnVsbCxmaWxlU2l6ZTowLGRlbGl2ZXJ5VHlwZTpcInByb2dyZXNzaXZlXCIsbWltZVR5cGU6bnVsbCxtZWRpYVR5cGU6bnVsbCxjb2RlYzpudWxsLGJpdHJhdGU6MCxtaW5CaXRyYXRlOjAsbWF4Qml0cmF0ZTowLHdpZHRoOjAsaGVpZ2h0OjAsYXBpRnJhbWV3b3JrOm51bGwsc2NhbGFibGU6bnVsbCxtYWludGFpbkFzcGVjdFJhdGlvOm51bGx9O3QuaWQ9ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSx0LmZpbGVVUkw9dy5wYXJzZU5vZGVUZXh0KGUpLHQuZGVsaXZlcnlUeXBlPWUuZ2V0QXR0cmlidXRlKFwiZGVsaXZlcnlcIiksdC5jb2RlYz1lLmdldEF0dHJpYnV0ZShcImNvZGVjXCIpLHQubWltZVR5cGU9ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpLHQubWVkaWFUeXBlPWUuZ2V0QXR0cmlidXRlKFwibWVkaWFUeXBlXCIpfHxcIjJEXCIsdC5hcGlGcmFtZXdvcms9ZS5nZXRBdHRyaWJ1dGUoXCJhcGlGcmFtZXdvcmtcIiksdC5maWxlU2l6ZT1wYXJzZUludChlLmdldEF0dHJpYnV0ZShcImZpbGVTaXplXCIpfHwwKSx0LmJpdHJhdGU9cGFyc2VJbnQoZS5nZXRBdHRyaWJ1dGUoXCJiaXRyYXRlXCIpfHwwKSx0Lm1pbkJpdHJhdGU9cGFyc2VJbnQoZS5nZXRBdHRyaWJ1dGUoXCJtaW5CaXRyYXRlXCIpfHwwKSx0Lm1heEJpdHJhdGU9cGFyc2VJbnQoZS5nZXRBdHRyaWJ1dGUoXCJtYXhCaXRyYXRlXCIpfHwwKSx0LndpZHRoPXBhcnNlSW50KGUuZ2V0QXR0cmlidXRlKFwid2lkdGhcIil8fDApLHQuaGVpZ2h0PXBhcnNlSW50KGUuZ2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIpfHwwKTt2YXIgcj1lLmdldEF0dHJpYnV0ZShcInNjYWxhYmxlXCIpO3ImJlwic3RyaW5nXCI9PXR5cGVvZiByJiYodC5zY2FsYWJsZT13LnBhcnNlQm9vbGVhbihyKSk7dmFyIGk9ZS5nZXRBdHRyaWJ1dGUoXCJtYWludGFpbkFzcGVjdFJhdGlvXCIpO2kmJlwic3RyaW5nXCI9PXR5cGVvZiBpJiYodC5tYWludGFpbkFzcGVjdFJhdGlvPXcucGFyc2VCb29sZWFuKGkpKTtyZXR1cm4gdH0oZSkpfSkpO3ZhciB0PXcuY2hpbGRCeU5hbWUoZSxcIkludGVyYWN0aXZlQ3JlYXRpdmVGaWxlXCIpO3QmJihpLmludGVyYWN0aXZlQ3JlYXRpdmVGaWxlPWZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O3JldHVybnt0eXBlOmUudHlwZXx8bnVsbCxhcGlGcmFtZXdvcms6ZS5hcGlGcmFtZXdvcmt8fG51bGwsdmFyaWFibGVEdXJhdGlvbjp3LnBhcnNlQm9vbGVhbihlLnZhcmlhYmxlRHVyYXRpb24pLGZpbGVVUkw6bnVsbH19KHcucGFyc2VBdHRyaWJ1dGVzKGUpKTtyZXR1cm4gdC5maWxlVVJMPXcucGFyc2VOb2RlVGV4dChlKSx0fSh0KSk7dmFyIHI9dy5jaGlsZEJ5TmFtZShlLFwiQ2xvc2VkQ2FwdGlvbkZpbGVzXCIpO3ImJncuY2hpbGRyZW5CeU5hbWUocixcIkNsb3NlZENhcHRpb25GaWxlXCIpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O3JldHVybnt0eXBlOmUudHlwZXx8bnVsbCxsYW5ndWFnZTplLmxhbmd1YWdlfHxudWxsLGZpbGVVUkw6bnVsbH19KHcucGFyc2VBdHRyaWJ1dGVzKGUpKTt0LmZpbGVVUkw9dy5wYXJzZU5vZGVUZXh0KGUpLGkuY2xvc2VkQ2FwdGlvbkZpbGVzLnB1c2godCl9KSk7dmFyIG4sYSxvLHM9dy5jaGlsZEJ5TmFtZShlLFwiTWV6emFuaW5lXCIpLGw9KG49cyxhPXt9LG89ITEsW1wiZGVsaXZlcnlcIixcInR5cGVcIixcIndpZHRoXCIsXCJoZWlnaHRcIl0uZm9yRWFjaCgoZnVuY3Rpb24oZSl7biYmbi5nZXRBdHRyaWJ1dGUoZSk/YVtlXT1uLmdldEF0dHJpYnV0ZShlKTpvPSEwfSkpLG8/bnVsbDphKTtpZihsKXt2YXIgdT17aWQ6bnVsbCxmaWxlVVJMOm51bGwsZGVsaXZlcnk6bnVsbCxjb2RlYzpudWxsLHR5cGU6bnVsbCx3aWR0aDowLGhlaWdodDowLGZpbGVTaXplOjAsbWVkaWFUeXBlOlwiMkRcIn07dS5pZD1zLmdldEF0dHJpYnV0ZShcImlkXCIpLHUuZmlsZVVSTD13LnBhcnNlTm9kZVRleHQocyksdS5kZWxpdmVyeT1sLmRlbGl2ZXJ5LHUuY29kZWM9cy5nZXRBdHRyaWJ1dGUoXCJjb2RlY1wiKSx1LnR5cGU9bC50eXBlLHUud2lkdGg9cGFyc2VJbnQobC53aWR0aCwxMCksdS5oZWlnaHQ9cGFyc2VJbnQobC5oZWlnaHQsMTApLHUuZmlsZVNpemU9cGFyc2VJbnQocy5nZXRBdHRyaWJ1dGUoXCJmaWxlU2l6ZVwiKSwxMCksdS5tZWRpYVR5cGU9cy5nZXRBdHRyaWJ1dGUoXCJtZWRpYVR5cGVcIil8fFwiMkRcIixpLm1lenphbmluZT11fX0pKTt2YXIgdT13LmNoaWxkQnlOYW1lKGUsXCJJY29uc1wiKTtyZXR1cm4gdSYmdy5jaGlsZHJlbkJ5TmFtZSh1LFwiSWNvblwiKS5mb3JFYWNoKChmdW5jdGlvbihlKXtpLmljb25zLnB1c2goZnVuY3Rpb24oZSl7dmFyIHQ9e3Byb2dyYW06bnVsbCxoZWlnaHQ6MCx3aWR0aDowLHhQb3NpdGlvbjowLHlQb3NpdGlvbjowLGFwaUZyYW1ld29yazpudWxsLG9mZnNldDpudWxsLGR1cmF0aW9uOjAsdHlwZTpudWxsLHN0YXRpY1Jlc291cmNlOm51bGwsaHRtbFJlc291cmNlOm51bGwsaWZyYW1lUmVzb3VyY2U6bnVsbCxweHJhdGlvOlwiMVwiLGljb25DbGlja1Rocm91Z2hVUkxUZW1wbGF0ZTpudWxsLGljb25DbGlja1RyYWNraW5nVVJMVGVtcGxhdGVzOltdLGljb25WaWV3VHJhY2tpbmdVUkxUZW1wbGF0ZTpudWxsfTt0LnByb2dyYW09ZS5nZXRBdHRyaWJ1dGUoXCJwcm9ncmFtXCIpLHQuaGVpZ2h0PXBhcnNlSW50KGUuZ2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIpfHwwKSx0LndpZHRoPXBhcnNlSW50KGUuZ2V0QXR0cmlidXRlKFwid2lkdGhcIil8fDApLHQueFBvc2l0aW9uPWZ1bmN0aW9uKGUpe2lmKC0xIT09W1wibGVmdFwiLFwicmlnaHRcIl0uaW5kZXhPZihlKSlyZXR1cm4gZTtyZXR1cm4gcGFyc2VJbnQoZXx8MCl9KGUuZ2V0QXR0cmlidXRlKFwieFBvc2l0aW9uXCIpKSx0LnlQb3NpdGlvbj1mdW5jdGlvbihlKXtpZigtMSE9PVtcInRvcFwiLFwiYm90dG9tXCJdLmluZGV4T2YoZSkpcmV0dXJuIGU7cmV0dXJuIHBhcnNlSW50KGV8fDApfShlLmdldEF0dHJpYnV0ZShcInlQb3NpdGlvblwiKSksdC5hcGlGcmFtZXdvcms9ZS5nZXRBdHRyaWJ1dGUoXCJhcGlGcmFtZXdvcmtcIiksdC5weHJhdGlvPWUuZ2V0QXR0cmlidXRlKFwicHhyYXRpb1wiKXx8XCIxXCIsdC5vZmZzZXQ9dy5wYXJzZUR1cmF0aW9uKGUuZ2V0QXR0cmlidXRlKFwib2Zmc2V0XCIpKSx0LmR1cmF0aW9uPXcucGFyc2VEdXJhdGlvbihlLmdldEF0dHJpYnV0ZShcImR1cmF0aW9uXCIpKSx3LmNoaWxkcmVuQnlOYW1lKGUsXCJIVE1MUmVzb3VyY2VcIikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dC50eXBlPWUuZ2V0QXR0cmlidXRlKFwiY3JlYXRpdmVUeXBlXCIpfHxcInRleHQvaHRtbFwiLHQuaHRtbFJlc291cmNlPXcucGFyc2VOb2RlVGV4dChlKX0pKSx3LmNoaWxkcmVuQnlOYW1lKGUsXCJJRnJhbWVSZXNvdXJjZVwiKS5mb3JFYWNoKChmdW5jdGlvbihlKXt0LnR5cGU9ZS5nZXRBdHRyaWJ1dGUoXCJjcmVhdGl2ZVR5cGVcIil8fDAsdC5pZnJhbWVSZXNvdXJjZT13LnBhcnNlTm9kZVRleHQoZSl9KSksdy5jaGlsZHJlbkJ5TmFtZShlLFwiU3RhdGljUmVzb3VyY2VcIikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dC50eXBlPWUuZ2V0QXR0cmlidXRlKFwiY3JlYXRpdmVUeXBlXCIpfHwwLHQuc3RhdGljUmVzb3VyY2U9dy5wYXJzZU5vZGVUZXh0KGUpfSkpO3ZhciByPXcuY2hpbGRCeU5hbWUoZSxcIkljb25DbGlja3NcIik7ciYmKHQuaWNvbkNsaWNrVGhyb3VnaFVSTFRlbXBsYXRlPXcucGFyc2VOb2RlVGV4dCh3LmNoaWxkQnlOYW1lKHIsXCJJY29uQ2xpY2tUaHJvdWdoXCIpKSx3LmNoaWxkcmVuQnlOYW1lKHIsXCJJY29uQ2xpY2tUcmFja2luZ1wiKS5mb3JFYWNoKChmdW5jdGlvbihlKXt0Lmljb25DbGlja1RyYWNraW5nVVJMVGVtcGxhdGVzLnB1c2goe2lkOmUuZ2V0QXR0cmlidXRlKFwiaWRcIil8fG51bGwsdXJsOncucGFyc2VOb2RlVGV4dChlKX0pfSkpKTtyZXR1cm4gdC5pY29uVmlld1RyYWNraW5nVVJMVGVtcGxhdGU9dy5wYXJzZU5vZGVUZXh0KHcuY2hpbGRCeU5hbWUoZSxcIkljb25WaWV3VHJhY2tpbmdcIikpLHR9KGUpKX0pKSxpfWZ1bmN0aW9uIHgoZSx0KXt2YXIgcj1mdW5jdGlvbigpe3ZhciBlPWYoYXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9KSx0PWUuaWQscj1lLmFkSWQsaT1lLnNlcXVlbmNlLG49ZS5hcGlGcmFtZXdvcms7cmV0dXJue2lkOnQsYWRJZDpyLHNlcXVlbmNlOmksYXBpRnJhbWV3b3JrOm4sdHlwZTpcIm5vbmxpbmVhclwiLHZhcmlhdGlvbnM6W10sdHJhY2tpbmdFdmVudHM6e319fSh0KTtyZXR1cm4gdy5jaGlsZHJlbkJ5TmFtZShlLFwiVHJhY2tpbmdFdmVudHNcIikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dmFyIHQsaTt3LmNoaWxkcmVuQnlOYW1lKGUsXCJUcmFja2luZ1wiKS5mb3JFYWNoKChmdW5jdGlvbihlKXt0PWUuZ2V0QXR0cmlidXRlKFwiZXZlbnRcIiksaT13LnBhcnNlTm9kZVRleHQoZSksdCYmaSYmKEFycmF5LmlzQXJyYXkoci50cmFja2luZ0V2ZW50c1t0XSl8fChyLnRyYWNraW5nRXZlbnRzW3RdPVtdKSxyLnRyYWNraW5nRXZlbnRzW3RdLnB1c2goaSkpfSkpfSkpLHcuY2hpbGRyZW5CeU5hbWUoZSxcIk5vbkxpbmVhclwiKS5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdD17aWQ6bnVsbCx3aWR0aDowLGhlaWdodDowLGV4cGFuZGVkV2lkdGg6MCxleHBhbmRlZEhlaWdodDowLHNjYWxhYmxlOiEwLG1haW50YWluQXNwZWN0UmF0aW86ITAsbWluU3VnZ2VzdGVkRHVyYXRpb246MCxhcGlGcmFtZXdvcms6XCJzdGF0aWNcIixhZFR5cGU6XCJub25MaW5lYXJBZFwiLHR5cGU6bnVsbCxzdGF0aWNSZXNvdXJjZTpudWxsLGh0bWxSZXNvdXJjZTpudWxsLGlmcmFtZVJlc291cmNlOm51bGwsbm9ubGluZWFyQ2xpY2tUaHJvdWdoVVJMVGVtcGxhdGU6bnVsbCxub25saW5lYXJDbGlja1RyYWNraW5nVVJMVGVtcGxhdGVzOltdLGFkUGFyYW1ldGVyczpudWxsfTt0LmlkPWUuZ2V0QXR0cmlidXRlKFwiaWRcIil8fG51bGwsdC53aWR0aD1lLmdldEF0dHJpYnV0ZShcIndpZHRoXCIpLHQuaGVpZ2h0PWUuZ2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIpLHQuZXhwYW5kZWRXaWR0aD1lLmdldEF0dHJpYnV0ZShcImV4cGFuZGVkV2lkdGhcIiksdC5leHBhbmRlZEhlaWdodD1lLmdldEF0dHJpYnV0ZShcImV4cGFuZGVkSGVpZ2h0XCIpLHQuc2NhbGFibGU9dy5wYXJzZUJvb2xlYW4oZS5nZXRBdHRyaWJ1dGUoXCJzY2FsYWJsZVwiKSksdC5tYWludGFpbkFzcGVjdFJhdGlvPXcucGFyc2VCb29sZWFuKGUuZ2V0QXR0cmlidXRlKFwibWFpbnRhaW5Bc3BlY3RSYXRpb1wiKSksdC5taW5TdWdnZXN0ZWREdXJhdGlvbj13LnBhcnNlRHVyYXRpb24oZS5nZXRBdHRyaWJ1dGUoXCJtaW5TdWdnZXN0ZWREdXJhdGlvblwiKSksdC5hcGlGcmFtZXdvcms9ZS5nZXRBdHRyaWJ1dGUoXCJhcGlGcmFtZXdvcmtcIiksdy5jaGlsZHJlbkJ5TmFtZShlLFwiSFRNTFJlc291cmNlXCIpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3QudHlwZT1lLmdldEF0dHJpYnV0ZShcImNyZWF0aXZlVHlwZVwiKXx8XCJ0ZXh0L2h0bWxcIix0Lmh0bWxSZXNvdXJjZT13LnBhcnNlTm9kZVRleHQoZSl9KSksdy5jaGlsZHJlbkJ5TmFtZShlLFwiSUZyYW1lUmVzb3VyY2VcIikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dC50eXBlPWUuZ2V0QXR0cmlidXRlKFwiY3JlYXRpdmVUeXBlXCIpfHwwLHQuaWZyYW1lUmVzb3VyY2U9dy5wYXJzZU5vZGVUZXh0KGUpfSkpLHcuY2hpbGRyZW5CeU5hbWUoZSxcIlN0YXRpY1Jlc291cmNlXCIpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3QudHlwZT1lLmdldEF0dHJpYnV0ZShcImNyZWF0aXZlVHlwZVwiKXx8MCx0LnN0YXRpY1Jlc291cmNlPXcucGFyc2VOb2RlVGV4dChlKX0pKTt2YXIgaT13LmNoaWxkQnlOYW1lKGUsXCJBZFBhcmFtZXRlcnNcIik7aSYmKHQuYWRQYXJhbWV0ZXJzPXcucGFyc2VOb2RlVGV4dChpKSksdC5ub25saW5lYXJDbGlja1Rocm91Z2hVUkxUZW1wbGF0ZT13LnBhcnNlTm9kZVRleHQody5jaGlsZEJ5TmFtZShlLFwiTm9uTGluZWFyQ2xpY2tUaHJvdWdoXCIpKSx3LmNoaWxkcmVuQnlOYW1lKGUsXCJOb25MaW5lYXJDbGlja1RyYWNraW5nXCIpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3Qubm9ubGluZWFyQ2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlcy5wdXNoKHtpZDplLmdldEF0dHJpYnV0ZShcImlkXCIpfHxudWxsLHVybDp3LnBhcnNlTm9kZVRleHQoZSl9KX0pKSxyLnZhcmlhdGlvbnMucHVzaCh0KX0pKSxyfWZ1bmN0aW9uIFMoZSl7dmFyIHQ9W107cmV0dXJuIGUuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dmFyIHI9TyhlKTtyJiZ0LnB1c2gocil9KSksdH1mdW5jdGlvbiBPKGUpe2lmKFwiI2NvbW1lbnRcIj09PWUubm9kZU5hbWUpcmV0dXJuIG51bGw7dmFyIHQscj17bmFtZTpudWxsLHZhbHVlOm51bGwsYXR0cmlidXRlczp7fSxjaGlsZHJlbjpbXX0saT1lLmF0dHJpYnV0ZXMsbj1lLmNoaWxkTm9kZXM7aWYoci5uYW1lPWUubm9kZU5hbWUsZS5hdHRyaWJ1dGVzKWZvcih2YXIgYSBpbiBpKWlmKGkuaGFzT3duUHJvcGVydHkoYSkpe3ZhciBvPWlbYV07by5ub2RlTmFtZSYmby5ub2RlVmFsdWUmJihyLmF0dHJpYnV0ZXNbby5ub2RlTmFtZV09by5ub2RlVmFsdWUpfWZvcih2YXIgcyBpbiBuKWlmKG4uaGFzT3duUHJvcGVydHkocykpe3ZhciBsPU8obltzXSk7bCYmci5jaGlsZHJlbi5wdXNoKGwpfWlmKDA9PT1yLmNoaWxkcmVuLmxlbmd0aHx8MT09PXIuY2hpbGRyZW4ubGVuZ3RoJiZbXCIjY2RhdGEtc2VjdGlvblwiLFwiI3RleHRcIl0uaW5kZXhPZihyLmNoaWxkcmVuWzBdLm5hbWUpPj0wKXt2YXIgdT13LnBhcnNlTm9kZVRleHQoZSk7XCJcIiE9PXUmJihyLnZhbHVlPXUpLHIuY2hpbGRyZW49W119cmV0dXJuIG51bGw9PT0odD1yKS52YWx1ZSYmMD09PU9iamVjdC5rZXlzKHQuYXR0cmlidXRlcykubGVuZ3RoJiYwPT09dC5jaGlsZHJlbi5sZW5ndGg/bnVsbDpyfWZ1bmN0aW9uIEQoZSl7dmFyIHQ9W107cmV0dXJuIGUuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dmFyIHIsaT17aWQ6ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKXx8bnVsbCxhZElkOlYoZSksc2VxdWVuY2U6ZS5nZXRBdHRyaWJ1dGUoXCJzZXF1ZW5jZVwiKXx8bnVsbCxhcGlGcmFtZXdvcms6ZS5nZXRBdHRyaWJ1dGUoXCJhcGlGcmFtZXdvcmtcIil8fG51bGx9LG49W107dy5jaGlsZHJlbkJ5TmFtZShlLFwiVW5pdmVyc2FsQWRJZFwiKS5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdD17aWRSZWdpc3RyeTplLmdldEF0dHJpYnV0ZShcImlkUmVnaXN0cnlcIil8fFwidW5rbm93blwiLHZhbHVlOncucGFyc2VOb2RlVGV4dChlKX07bi5wdXNoKHQpfSkpO3ZhciBhPXcuY2hpbGRCeU5hbWUoZSxcIkNyZWF0aXZlRXh0ZW5zaW9uc1wiKTtmb3IodmFyIG8gaW4gYSYmKHI9Uyh3LmNoaWxkcmVuQnlOYW1lKGEsXCJDcmVhdGl2ZUV4dGVuc2lvblwiKSkpLGUuY2hpbGROb2Rlcyl7dmFyIHM9ZS5jaGlsZE5vZGVzW29dLGw9dm9pZCAwO3N3aXRjaChzLm5vZGVOYW1lKXtjYXNlXCJMaW5lYXJcIjpsPUkocyxpKTticmVhaztjYXNlXCJOb25MaW5lYXJBZHNcIjpsPXgocyxpKTticmVhaztjYXNlXCJDb21wYW5pb25BZHNcIjpsPVUocyxpKX1sJiYobiYmKGwudW5pdmVyc2FsQWRJZHM9biksciYmKGwuY3JlYXRpdmVFeHRlbnNpb25zPXIpLHQucHVzaChsKSl9fSkpLHR9ZnVuY3Rpb24gVihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJBZElEXCIpfHxlLmdldEF0dHJpYnV0ZShcImFkSURcIil8fGUuZ2V0QXR0cmlidXRlKFwiYWRJZFwiKXx8bnVsbH12YXIgUD17V3JhcHBlcjp7c3ViRWxlbWVudHM6W1wiVkFTVEFkVGFnVVJJXCIsXCJJbXByZXNzaW9uXCJdfSxCbG9ja2VkQWRDYXRlZ29yaWVzOnthdHRyaWJ1dGVzOltcImF1dGhvcml0eVwiXX0sSW5MaW5lOntzdWJFbGVtZW50czpbXCJBZFN5c3RlbVwiLFwiQWRUaXRsZVwiLFwiSW1wcmVzc2lvblwiLFwiQWRTZXJ2aW5nSWRcIixcIkNyZWF0aXZlc1wiXX0sQ2F0ZWdvcnk6e2F0dHJpYnV0ZXM6W1wiYXV0aG9yaXR5XCJdfSxQcmljaW5nOnthdHRyaWJ1dGVzOltcIm1vZGVsXCIsXCJjdXJyZW5jeVwiXX0sVmVyaWZpY2F0aW9uOntvbmVPZmluTGluZVJlc291cmNlczpbXCJKYXZhU2NyaXB0UmVzb3VyY2VcIixcIkV4ZWN1dGFibGVSZXNvdXJjZVwiXSxhdHRyaWJ1dGVzOltcInZlbmRvclwiXX0sVW5pdmVyc2FsQWRJZDp7YXR0cmlidXRlczpbXCJpZFJlZ2lzdHJ5XCJdfSxKYXZhU2NyaXB0UmVzb3VyY2U6e2F0dHJpYnV0ZXM6W1wiYXBpRnJhbWV3b3JrXCIsXCJicm93c2VyT3B0aW9uYWxcIl19LEV4ZWN1dGFibGVSZXNvdXJjZTp7YXR0cmlidXRlczpbXCJhcGlGcmFtZXdvcmtcIixcInR5cGVcIl19LFRyYWNraW5nOnthdHRyaWJ1dGVzOltcImV2ZW50XCJdfSxDcmVhdGl2ZXM6e3N1YkVsZW1lbnRzOltcIkNyZWF0aXZlXCJdfSxDcmVhdGl2ZTp7c3ViRWxlbWVudHM6W1wiVW5pdmVyc2FsQWRJZFwiXX0sTGluZWFyOntzdWJFbGVtZW50czpbXCJNZWRpYUZpbGVzXCIsXCJEdXJhdGlvblwiXX0sTWVkaWFGaWxlczp7c3ViRWxlbWVudHM6W1wiTWVkaWFGaWxlXCJdfSxNZWRpYUZpbGU6e2F0dHJpYnV0ZXM6W1wiZGVsaXZlcnlcIixcInR5cGVcIixcIndpZHRoXCIsXCJoZWlnaHRcIl19LE1lenphbmluZTp7YXR0cmlidXRlczpbXCJkZWxpdmVyeVwiLFwidHlwZVwiLFwid2lkdGhcIixcImhlaWdodFwiXX0sTm9uTGluZWFyOntvbmVPZmluTGluZVJlc291cmNlczpbXCJTdGF0aWNSZXNvdXJjZVwiLFwiSUZyYW1lUmVzb3VyY2VcIixcIkhUTUxSZXNvdXJjZVwiXSxhdHRyaWJ1dGVzOltcIndpZHRoXCIsXCJoZWlnaHRcIl19LENvbXBhbmlvbjp7b25lT2ZpbkxpbmVSZXNvdXJjZXM6W1wiU3RhdGljUmVzb3VyY2VcIixcIklGcmFtZVJlc291cmNlXCIsXCJIVE1MUmVzb3VyY2VcIl0sYXR0cmlidXRlczpbXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdfSxTdGF0aWNSZXNvdXJjZTp7YXR0cmlidXRlczpbXCJjcmVhdGl2ZVR5cGVcIl19LEljb25zOntzdWJFbGVtZW50czpbXCJJY29uXCJdfSxJY29uOntvbmVPZmluTGluZVJlc291cmNlczpbXCJTdGF0aWNSZXNvdXJjZVwiLFwiSUZyYW1lUmVzb3VyY2VcIixcIkhUTUxSZXNvdXJjZVwiXX19O2Z1bmN0aW9uIEIoZSx0KXtpZihQW2Uubm9kZU5hbWVdJiZQW2Uubm9kZU5hbWVdLmF0dHJpYnV0ZXMpe3ZhciByPVBbZS5ub2RlTmFtZV0uYXR0cmlidXRlcy5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiFlLmdldEF0dHJpYnV0ZSh0KX0pKTtyLmxlbmd0aD4wJiZqKHtuYW1lOmUubm9kZU5hbWUscGFyZW50TmFtZTplLnBhcmVudE5vZGUubm9kZU5hbWUsYXR0cmlidXRlczpyfSx0KX19ZnVuY3Rpb24gRihlLHQscil7dmFyIGk9UFtlLm5vZGVOYW1lXSxuPSFyJiZcIldyYXBwZXJcIiE9PWUubm9kZU5hbWU7aWYoaSYmIW4pe2lmKGkuc3ViRWxlbWVudHMpe3ZhciBhPWkuc3ViRWxlbWVudHMuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4hdy5jaGlsZEJ5TmFtZShlLHQpfSkpO2EubGVuZ3RoPjAmJmooe25hbWU6ZS5ub2RlTmFtZSxwYXJlbnROYW1lOmUucGFyZW50Tm9kZS5ub2RlTmFtZSxzdWJFbGVtZW50czphfSx0KX1pZihyJiZpLm9uZU9maW5MaW5lUmVzb3VyY2VzKWkub25lT2ZpbkxpbmVSZXNvdXJjZXMuc29tZSgoZnVuY3Rpb24odCl7cmV0dXJuIHcuY2hpbGRCeU5hbWUoZSx0KX0pKXx8aih7bmFtZTplLm5vZGVOYW1lLHBhcmVudE5hbWU6ZS5wYXJlbnROb2RlLm5vZGVOYW1lLG9uZU9mUmVzb3VyY2VzOmkub25lT2ZpbkxpbmVSZXNvdXJjZXN9LHQpfX1mdW5jdGlvbiBNKGUpe3JldHVybiBlLmNoaWxkcmVuJiYwIT09ZS5jaGlsZHJlbi5sZW5ndGh9ZnVuY3Rpb24gaihlLHQpe3ZhciByPWUubmFtZSxpPWUucGFyZW50TmFtZSxuPWUuYXR0cmlidXRlcyxhPWUuc3ViRWxlbWVudHMsbz1lLm9uZU9mUmVzb3VyY2VzLHM9XCJFbGVtZW50ICdcIi5jb25jYXQocixcIidcIik7dChcIlZBU1Qtd2FybmluZ1wiLHttZXNzYWdlOnMrPW4/XCIgbWlzc2luZyByZXF1aXJlZCBhdHRyaWJ1dGUocykgJ1wiLmNvbmNhdChuLmpvaW4oXCIsIFwiKSxcIicgXCIpOmE/XCIgbWlzc2luZyByZXF1aXJlZCBzdWIgZWxlbWVudChzKSAnXCIuY29uY2F0KGEuam9pbihcIiwgXCIpLFwiJyBcIik6bz9cIiBtdXN0IHByb3ZpZGUgb25lIG9mIHRoZSBmb2xsb3dpbmcgJ1wiLmNvbmNhdChvLmpvaW4oXCIsIFwiKSxcIicgXCIpOlwiIGlzIGVtcHR5XCIscGFyZW50RWxlbWVudDppLHNwZWNWZXJzaW9uOjQuMX0pfXZhciBXPXt2ZXJpZnlSZXF1aXJlZFZhbHVlczpmdW5jdGlvbiBlKHQscixpKXtpZih0JiZ0Lm5vZGVOYW1lKWlmKFwiSW5MaW5lXCI9PT10Lm5vZGVOYW1lJiYoaT0hMCksQih0LHIpLE0odCkpe0YodCxyLGkpO2Zvcih2YXIgbj0wO248dC5jaGlsZHJlbi5sZW5ndGg7bisrKWUodC5jaGlsZHJlbltuXSxyLGkpfWVsc2UgMD09PXcucGFyc2VOb2RlVGV4dCh0KS5sZW5ndGgmJmooe25hbWU6dC5ub2RlTmFtZSxwYXJlbnROYW1lOnQucGFyZW50Tm9kZS5ub2RlTmFtZX0scil9LGhhc1N1YkVsZW1lbnRzOk0sZW1pdE1pc3NpbmdWYWx1ZVdhcm5pbmc6aix2ZXJpZnlSZXF1aXJlZEF0dHJpYnV0ZXM6Qix2ZXJpZnlSZXF1aXJlZFN1YkVsZW1lbnRzOkZ9O2Z1bmN0aW9uIHEoZSx0KXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06e30saT1yLmFsbG93TXVsdGlwbGVBZHMsbj1yLmZvbGxvd0FkZGl0aW9uYWxXcmFwcGVycyxhPWUuY2hpbGROb2Rlcztmb3IodmFyIG8gaW4gYSl7dmFyIHM9YVtvXTtpZigtMSE9PVtcIldyYXBwZXJcIixcIkluTGluZVwiXS5pbmRleE9mKHMubm9kZU5hbWUpJiYoXCJXcmFwcGVyXCIhPT1zLm5vZGVOYW1lfHwhMSE9PW4pKXtpZih3LmNvcHlOb2RlQXR0cmlidXRlKFwiaWRcIixlLHMpLHcuY29weU5vZGVBdHRyaWJ1dGUoXCJzZXF1ZW5jZVwiLGUscyksdy5jb3B5Tm9kZUF0dHJpYnV0ZShcImFkVHlwZVwiLGUscyksXCJXcmFwcGVyXCI9PT1zLm5vZGVOYW1lKXJldHVybnthZDpHKHMsdCksdHlwZTpcIldSQVBQRVJcIn07aWYoXCJJbkxpbmVcIj09PXMubm9kZU5hbWUpcmV0dXJue2FkOkgocyx0LHthbGxvd011bHRpcGxlQWRzOml9KSx0eXBlOlwiSU5MSU5FXCJ9fX19ZnVuY3Rpb24gSChlLHQpe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTp7fSxpPXIuYWxsb3dNdWx0aXBsZUFkcztyZXR1cm4hMT09PWkmJmUuZ2V0QXR0cmlidXRlKFwic2VxdWVuY2VcIik/bnVsbDpfKGUsdCl9ZnVuY3Rpb24gXyhlLHQpe3ZhciByPVtdO3QmJlcudmVyaWZ5UmVxdWlyZWRWYWx1ZXMoZSx0KTt2YXIgaT1lLmNoaWxkTm9kZXMsbj1mdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fTtyZXR1cm57aWQ6ZS5pZHx8bnVsbCxzZXF1ZW5jZTplLnNlcXVlbmNlfHxudWxsLGFkVHlwZTplLmFkVHlwZXx8bnVsbCxhZFNlcnZpbmdJZDpudWxsLGNhdGVnb3JpZXM6W10sZXhwaXJlczpudWxsLHZpZXdhYmxlSW1wcmVzc2lvbjpbXSxzeXN0ZW06bnVsbCx0aXRsZTpudWxsLGRlc2NyaXB0aW9uOm51bGwsYWR2ZXJ0aXNlcjpudWxsLHByaWNpbmc6bnVsbCxzdXJ2ZXk6bnVsbCxlcnJvclVSTFRlbXBsYXRlczpbXSxpbXByZXNzaW9uVVJMVGVtcGxhdGVzOltdLGNyZWF0aXZlczpbXSxleHRlbnNpb25zOltdLGFkVmVyaWZpY2F0aW9uczpbXSxibG9ja2VkQWRDYXRlZ29yaWVzOltdLGZvbGxvd0FkZGl0aW9uYWxXcmFwcGVyczohMCxhbGxvd011bHRpcGxlQWRzOiExLGZhbGxiYWNrT25Ob0FkOm51bGx9fSh3LnBhcnNlQXR0cmlidXRlcyhlKSk7Zm9yKHZhciBhIGluIGkpe3ZhciBvPWlbYV07c3dpdGNoKG8ubm9kZU5hbWUpe2Nhc2VcIkVycm9yXCI6bi5lcnJvclVSTFRlbXBsYXRlcy5wdXNoKHcucGFyc2VOb2RlVGV4dChvKSk7YnJlYWs7Y2FzZVwiSW1wcmVzc2lvblwiOm4uaW1wcmVzc2lvblVSTFRlbXBsYXRlcy5wdXNoKHtpZDpvLmdldEF0dHJpYnV0ZShcImlkXCIpfHxudWxsLHVybDp3LnBhcnNlTm9kZVRleHQobyl9KTticmVhaztjYXNlXCJDcmVhdGl2ZXNcIjpuLmNyZWF0aXZlcz1EKHcuY2hpbGRyZW5CeU5hbWUobyxcIkNyZWF0aXZlXCIpKTticmVhaztjYXNlXCJFeHRlbnNpb25zXCI6dmFyIHM9dy5jaGlsZHJlbkJ5TmFtZShvLFwiRXh0ZW5zaW9uXCIpO24uZXh0ZW5zaW9ucz1TKHMpLG4uYWRWZXJpZmljYXRpb25zLmxlbmd0aHx8KHI9WShzKSk7YnJlYWs7Y2FzZVwiQWRWZXJpZmljYXRpb25zXCI6bi5hZFZlcmlmaWNhdGlvbnM9eih3LmNoaWxkcmVuQnlOYW1lKG8sXCJWZXJpZmljYXRpb25cIikpO2JyZWFrO2Nhc2VcIkFkU3lzdGVtXCI6bi5zeXN0ZW09e3ZhbHVlOncucGFyc2VOb2RlVGV4dChvKSx2ZXJzaW9uOm8uZ2V0QXR0cmlidXRlKFwidmVyc2lvblwiKXx8bnVsbH07YnJlYWs7Y2FzZVwiQWRUaXRsZVwiOm4udGl0bGU9dy5wYXJzZU5vZGVUZXh0KG8pO2JyZWFrO2Nhc2VcIkFkU2VydmluZ0lkXCI6bi5hZFNlcnZpbmdJZD13LnBhcnNlTm9kZVRleHQobyk7YnJlYWs7Y2FzZVwiQ2F0ZWdvcnlcIjpuLmNhdGVnb3JpZXMucHVzaCh7YXV0aG9yaXR5Om8uZ2V0QXR0cmlidXRlKFwiYXV0aG9yaXR5XCIpfHxudWxsLHZhbHVlOncucGFyc2VOb2RlVGV4dChvKX0pO2JyZWFrO2Nhc2VcIkV4cGlyZXNcIjpuLmV4cGlyZXM9cGFyc2VJbnQody5wYXJzZU5vZGVUZXh0KG8pLDEwKTticmVhaztjYXNlXCJWaWV3YWJsZUltcHJlc3Npb25cIjpuLnZpZXdhYmxlSW1wcmVzc2lvbi5wdXNoKFgobykpO2JyZWFrO2Nhc2VcIkRlc2NyaXB0aW9uXCI6bi5kZXNjcmlwdGlvbj13LnBhcnNlTm9kZVRleHQobyk7YnJlYWs7Y2FzZVwiQWR2ZXJ0aXNlclwiOm4uYWR2ZXJ0aXNlcj17aWQ6by5nZXRBdHRyaWJ1dGUoXCJpZFwiKXx8bnVsbCx2YWx1ZTp3LnBhcnNlTm9kZVRleHQobyl9O2JyZWFrO2Nhc2VcIlByaWNpbmdcIjpuLnByaWNpbmc9e3ZhbHVlOncucGFyc2VOb2RlVGV4dChvKSxtb2RlbDpvLmdldEF0dHJpYnV0ZShcIm1vZGVsXCIpfHxudWxsLGN1cnJlbmN5Om8uZ2V0QXR0cmlidXRlKFwiY3VycmVuY3lcIil8fG51bGx9O2JyZWFrO2Nhc2VcIlN1cnZleVwiOm4uc3VydmV5PXcucGFyc2VOb2RlVGV4dChvKTticmVhaztjYXNlXCJCbG9ja2VkQWRDYXRlZ29yaWVzXCI6bi5ibG9ja2VkQWRDYXRlZ29yaWVzLnB1c2goe2F1dGhvcml0eTpvLmdldEF0dHJpYnV0ZShcImF1dGhvcml0eVwiKXx8bnVsbCx2YWx1ZTp3LnBhcnNlTm9kZVRleHQobyl9KX19cmV0dXJuIHIubGVuZ3RoJiYobi5hZFZlcmlmaWNhdGlvbnM9bi5hZFZlcmlmaWNhdGlvbnMuY29uY2F0KHIpKSxufWZ1bmN0aW9uIEcoZSx0KXt2YXIgcj1fKGUsdCksaT1lLmdldEF0dHJpYnV0ZShcImZvbGxvd0FkZGl0aW9uYWxXcmFwcGVyc1wiKSxuPWUuZ2V0QXR0cmlidXRlKFwiYWxsb3dNdWx0aXBsZUFkc1wiKSxhPWUuZ2V0QXR0cmlidXRlKFwiZmFsbGJhY2tPbk5vQWRcIik7ci5mb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnM9IWl8fHcucGFyc2VCb29sZWFuKGkpLHIuYWxsb3dNdWx0aXBsZUFkcz0hIW4mJncucGFyc2VCb29sZWFuKG4pLHIuZmFsbGJhY2tPbk5vQWQ9YT93LnBhcnNlQm9vbGVhbihhKTpudWxsO3ZhciBvPXcuY2hpbGRCeU5hbWUoZSxcIlZBU1RBZFRhZ1VSSVwiKTtpZihvP3IubmV4dFdyYXBwZXJVUkw9dy5wYXJzZU5vZGVUZXh0KG8pOihvPXcuY2hpbGRCeU5hbWUoZSxcIlZBU1RBZFRhZ1VSTFwiKSkmJihyLm5leHRXcmFwcGVyVVJMPXcucGFyc2VOb2RlVGV4dCh3LmNoaWxkQnlOYW1lKG8sXCJVUkxcIikpKSxyLmNyZWF0aXZlcy5mb3JFYWNoKChmdW5jdGlvbihlKXtpZigtMSE9PVtcImxpbmVhclwiLFwibm9ubGluZWFyXCJdLmluZGV4T2YoZS50eXBlKSl7aWYoZS50cmFja2luZ0V2ZW50cyl7ci50cmFja2luZ0V2ZW50c3x8KHIudHJhY2tpbmdFdmVudHM9e30pLHIudHJhY2tpbmdFdmVudHNbZS50eXBlXXx8KHIudHJhY2tpbmdFdmVudHNbZS50eXBlXT17fSk7dmFyIHQ9ZnVuY3Rpb24odCl7dmFyIGk9ZS50cmFja2luZ0V2ZW50c1t0XTtBcnJheS5pc0FycmF5KHIudHJhY2tpbmdFdmVudHNbZS50eXBlXVt0XSl8fChyLnRyYWNraW5nRXZlbnRzW2UudHlwZV1bdF09W10pLGkuZm9yRWFjaCgoZnVuY3Rpb24oaSl7ci50cmFja2luZ0V2ZW50c1tlLnR5cGVdW3RdLnB1c2goaSl9KSl9O2Zvcih2YXIgaSBpbiBlLnRyYWNraW5nRXZlbnRzKXQoaSl9ZS52aWRlb0NsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXMmJihBcnJheS5pc0FycmF5KHIudmlkZW9DbGlja1RyYWNraW5nVVJMVGVtcGxhdGVzKXx8KHIudmlkZW9DbGlja1RyYWNraW5nVVJMVGVtcGxhdGVzPVtdKSxlLnZpZGVvQ2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlcy5mb3JFYWNoKChmdW5jdGlvbihlKXtyLnZpZGVvQ2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlcy5wdXNoKGUpfSkpKSxlLnZpZGVvQ2xpY2tUaHJvdWdoVVJMVGVtcGxhdGUmJihyLnZpZGVvQ2xpY2tUaHJvdWdoVVJMVGVtcGxhdGU9ZS52aWRlb0NsaWNrVGhyb3VnaFVSTFRlbXBsYXRlKSxlLnZpZGVvQ3VzdG9tQ2xpY2tVUkxUZW1wbGF0ZXMmJihBcnJheS5pc0FycmF5KHIudmlkZW9DdXN0b21DbGlja1VSTFRlbXBsYXRlcyl8fChyLnZpZGVvQ3VzdG9tQ2xpY2tVUkxUZW1wbGF0ZXM9W10pLGUudmlkZW9DdXN0b21DbGlja1VSTFRlbXBsYXRlcy5mb3JFYWNoKChmdW5jdGlvbihlKXtyLnZpZGVvQ3VzdG9tQ2xpY2tVUkxUZW1wbGF0ZXMucHVzaChlKX0pKSl9fSkpLHIubmV4dFdyYXBwZXJVUkwpcmV0dXJuIHJ9ZnVuY3Rpb24geihlKXt2YXIgdD1bXTtyZXR1cm4gZS5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgcj17cmVzb3VyY2U6bnVsbCx2ZW5kb3I6bnVsbCxicm93c2VyT3B0aW9uYWw6ITEsYXBpRnJhbWV3b3JrOm51bGwsdHlwZTpudWxsLHBhcmFtZXRlcnM6bnVsbCx0cmFja2luZ0V2ZW50czp7fX0saT1lLmNoaWxkTm9kZXM7Zm9yKHZhciBuIGluIHcuYXNzaWduQXR0cmlidXRlcyhlLmF0dHJpYnV0ZXMsciksaSl7dmFyIGE9aVtuXTtzd2l0Y2goYS5ub2RlTmFtZSl7Y2FzZVwiSmF2YVNjcmlwdFJlc291cmNlXCI6Y2FzZVwiRXhlY3V0YWJsZVJlc291cmNlXCI6ci5yZXNvdXJjZT13LnBhcnNlTm9kZVRleHQoYSksdy5hc3NpZ25BdHRyaWJ1dGVzKGEuYXR0cmlidXRlcyxyKTticmVhaztjYXNlXCJWZXJpZmljYXRpb25QYXJhbWV0ZXJzXCI6ci5wYXJhbWV0ZXJzPXcucGFyc2VOb2RlVGV4dChhKX19dmFyIG89dy5jaGlsZEJ5TmFtZShlLFwiVHJhY2tpbmdFdmVudHNcIik7byYmdy5jaGlsZHJlbkJ5TmFtZShvLFwiVHJhY2tpbmdcIikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dmFyIHQ9ZS5nZXRBdHRyaWJ1dGUoXCJldmVudFwiKSxpPXcucGFyc2VOb2RlVGV4dChlKTt0JiZpJiYoQXJyYXkuaXNBcnJheShyLnRyYWNraW5nRXZlbnRzW3RdKXx8KHIudHJhY2tpbmdFdmVudHNbdF09W10pLHIudHJhY2tpbmdFdmVudHNbdF0ucHVzaChpKSl9KSksdC5wdXNoKHIpfSkpLHR9ZnVuY3Rpb24gWShlKXt2YXIgdD1udWxsLHI9W107cmV0dXJuIGUuc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuIHQ9dy5jaGlsZEJ5TmFtZShlLFwiQWRWZXJpZmljYXRpb25zXCIpfSkpLHQmJihyPXoody5jaGlsZHJlbkJ5TmFtZSh0LFwiVmVyaWZpY2F0aW9uXCIpKSkscn1mdW5jdGlvbiBYKGUpe3ZhciB0PXt9O3QuaWQ9ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKXx8bnVsbDt2YXIgcj1lLmNoaWxkTm9kZXM7Zm9yKHZhciBpIGluIHIpe3ZhciBuPXJbaV0sYT1uLm5vZGVOYW1lLG89dy5wYXJzZU5vZGVUZXh0KG4pO2lmKChcIlZpZXdhYmxlXCI9PT1hfHxcIk5vdFZpZXdhYmxlXCI9PT1hfHxcIlZpZXdVbmRldGVybWluZWRcIj09PWEpJiZvKXt2YXIgcz1hLnRvTG93ZXJDYXNlKCk7QXJyYXkuaXNBcnJheSh0W3NdKXx8KHRbc109W10pLHRbc10ucHVzaChvKX19cmV0dXJuIHR9dmFyIEs9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7bih0aGlzLGUpLHRoaXMuX2hhbmRsZXJzPVtdfXJldHVybiBvKGUsW3trZXk6XCJvblwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGhhbmRsZXIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlIFwiLmNvbmNhdChpKHQpKSk7aWYoIWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBldmVudCBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgU3RyaW5nLiBSZWNlaXZlZCB0eXBlIFwiLmNvbmNhdChpKGUpKSk7cmV0dXJuIHRoaXMuX2hhbmRsZXJzLnB1c2goe2V2ZW50OmUsaGFuZGxlcjp0fSksdGhpc319LHtrZXk6XCJvbmNlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5vbihlLGZ1bmN0aW9uKGUsdCxyKXt2YXIgaT17ZmlyZWQ6ITEsd3JhcEZuOnZvaWQgMH07ZnVuY3Rpb24gbigpe2kuZmlyZWR8fChlLm9mZih0LGkud3JhcEZuKSxpLmZpcmVkPSEwLHIuYmluZChlKS5hcHBseSh2b2lkIDAsYXJndW1lbnRzKSl9cmV0dXJuIGkud3JhcEZuPW4sbn0odGhpcyxlLHQpKX19LHtrZXk6XCJvZmZcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLl9oYW5kbGVycz10aGlzLl9oYW5kbGVycy5maWx0ZXIoKGZ1bmN0aW9uKHIpe3JldHVybiByLmV2ZW50IT09ZXx8ci5oYW5kbGVyIT09dH0pKSx0aGlzfX0se2tleTpcImVtaXRcIix2YWx1ZTpmdW5jdGlvbihlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxyPW5ldyBBcnJheSh0PjE/dC0xOjApLGk9MTtpPHQ7aSsrKXJbaS0xXT1hcmd1bWVudHNbaV07dmFyIG49ITE7cmV0dXJuIHRoaXMuX2hhbmRsZXJzLmZvckVhY2goKGZ1bmN0aW9uKHQpe1wiKlwiPT09dC5ldmVudCYmKG49ITAsdC5oYW5kbGVyLmFwcGx5KHQsW2VdLmNvbmNhdChyKSkpLHQuZXZlbnQ9PT1lJiYobj0hMCx0LmhhbmRsZXIuYXBwbHkodCxyKSl9KSksbn19LHtrZXk6XCJyZW1vdmVBbGxMaXN0ZW5lcnNcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZT8odGhpcy5faGFuZGxlcnM9dGhpcy5faGFuZGxlcnMuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdC5ldmVudCE9PWV9KSksdGhpcyk6KHRoaXMuX2hhbmRsZXJzPVtdLHRoaXMpfX0se2tleTpcImxpc3RlbmVyQ291bnRcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5faGFuZGxlcnMuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdC5ldmVudD09PWV9KSkubGVuZ3RofX0se2tleTpcImxpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9oYW5kbGVycy5yZWR1Y2UoKGZ1bmN0aW9uKHQscil7cmV0dXJuIHIuZXZlbnQ9PT1lJiZ0LnB1c2goci5oYW5kbGVyKSx0fSksW10pfX0se2tleTpcImV2ZW50TmFtZXNcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9oYW5kbGVycy5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmV2ZW50fSkpfX1dKSxlfSgpO3ZhciBRPXtnZXQ6ZnVuY3Rpb24oZSx0LHIpe3IobmV3IEVycm9yKFwiUGxlYXNlIGJ1bmRsZSB0aGUgbGlicmFyeSBmb3Igbm9kZSB0byB1c2UgdGhlIG5vZGUgdXJsSGFuZGxlclwiKSl9fSxaPTEyZTQ7ZnVuY3Rpb24gSigpe3RyeXt2YXIgZT1uZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0O3JldHVyblwid2l0aENyZWRlbnRpYWxzXCJpbiBlP2U6bnVsbH1jYXRjaChlKXtyZXR1cm4gbnVsbH19ZnVuY3Rpb24gJChlLHQscil7dmFyIGk9cj80MDg6ZS5zdGF0dXMsbj1yP1wiWEhSVVJMSGFuZGxlcjogUmVxdWVzdCB0aW1lZCBvdXQgYWZ0ZXIgXCIuY29uY2F0KGUudGltZW91dCxcIiBtcyAoXCIpLmNvbmNhdChpLFwiKVwiKTpcIlhIUlVSTEhhbmRsZXI6IFwiLmNvbmNhdChlLnN0YXR1c1RleHQsXCIgKFwiKS5jb25jYXQoaSxcIilcIik7dChuZXcgRXJyb3IobiksbnVsbCx7c3RhdHVzQ29kZTppfSl9dmFyIGVlPXtnZXQ6ZnVuY3Rpb24oZSx0LHIpe2lmKFwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2wmJjA9PT1lLmluZGV4T2YoXCJodHRwOi8vXCIpKXJldHVybiByKG5ldyBFcnJvcihcIlhIUlVSTEhhbmRsZXI6IENhbm5vdCBnbyBmcm9tIEhUVFBTIHRvIEhUVFAuXCIpKTt0cnl7dmFyIGk9SigpO2kub3BlbihcIkdFVFwiLGUpLGkudGltZW91dD10LnRpbWVvdXR8fFosaS53aXRoQ3JlZGVudGlhbHM9dC53aXRoQ3JlZGVudGlhbHN8fCExLGkub3ZlcnJpZGVNaW1lVHlwZSYmaS5vdmVycmlkZU1pbWVUeXBlKFwidGV4dC94bWxcIiksaS5vbmxvYWQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSx0KXsyMDA9PT1lLnN0YXR1cz90KG51bGwsZS5yZXNwb25zZVhNTCx7Ynl0ZUxlbmd0aDplLnJlc3BvbnNlLmxlbmd0aCxzdGF0dXNDb2RlOmUuc3RhdHVzfSk6JChlLHQsITEpfShpLHIpfSxpLm9uZXJyb3I9ZnVuY3Rpb24oKXtyZXR1cm4gJChpLHIsITEpfSxpLm9uYWJvcnQ9ZnVuY3Rpb24oKXtyZXR1cm4gJChpLHIsITEpfSxpLm9udGltZW91dD1mdW5jdGlvbigpe3JldHVybiAkKGksciwhMCl9LGkuc2VuZCgpfWNhdGNoKGUpe3IobmV3IEVycm9yKFwiWEhSVVJMSGFuZGxlcjogVW5leHBlY3RlZCBlcnJvclwiKSl9fSxzdXBwb3J0ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIUooKX19O3ZhciB0ZT17Z2V0OmZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gcnx8KFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJihyPXQpLHQ9e30pLFwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3d8fG51bGw9PT13aW5kb3c/US5nZXQoZSx0LHIpOmVlLnN1cHBvcnRlZCgpP2VlLmdldChlLHQscik6cihuZXcgRXJyb3IoXCJDdXJyZW50IGNvbnRleHQgaXMgbm90IHN1cHBvcnRlZCBieSBhbnkgb2YgdGhlIGRlZmF1bHQgVVJMSGFuZGxlcnMuIFBsZWFzZSBwcm92aWRlIGEgY3VzdG9tIFVSTEhhbmRsZXJcIikpfX07dmFyIHJlPTAsaWU9MCxuZT1mdW5jdGlvbihlLHQpeyFlfHwhdHx8ZTw9MHx8dDw9MHx8KGllPShpZSpyZSs4KmUvdCkvKytyZSl9LGFlPXtFUlJPUkNPREU6OTAwLGV4dGVuc2lvbnM6W119LG9lPWZ1bmN0aW9uKGUpe2wocixlKTt2YXIgdD1wKHIpO2Z1bmN0aW9uIHIoKXt2YXIgZTtyZXR1cm4gbih0aGlzLHIpLChlPXQuY2FsbCh0aGlzKSkucmVtYWluaW5nQWRzPVtdLGUucGFyZW50VVJMcz1bXSxlLmVycm9yVVJMVGVtcGxhdGVzPVtdLGUucm9vdEVycm9yVVJMVGVtcGxhdGVzPVtdLGUubWF4V3JhcHBlckRlcHRoPW51bGwsZS5VUkxUZW1wbGF0ZUZpbHRlcnM9W10sZS5mZXRjaGluZ09wdGlvbnM9e30sZS5wYXJzaW5nT3B0aW9ucz17fSxlfXJldHVybiBvKHIsW3trZXk6XCJhZGRVUkxUZW1wbGF0ZUZpbHRlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGUmJnRoaXMuVVJMVGVtcGxhdGVGaWx0ZXJzLnB1c2goZSl9fSx7a2V5OlwicmVtb3ZlVVJMVGVtcGxhdGVGaWx0ZXJcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuVVJMVGVtcGxhdGVGaWx0ZXJzLnBvcCgpfX0se2tleTpcImNvdW50VVJMVGVtcGxhdGVGaWx0ZXJzXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5VUkxUZW1wbGF0ZUZpbHRlcnMubGVuZ3RofX0se2tleTpcImNsZWFyVVJMVGVtcGxhdGVGaWx0ZXJzXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLlVSTFRlbXBsYXRlRmlsdGVycz1bXX19LHtrZXk6XCJ0cmFja1Zhc3RFcnJvclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7Zm9yKHZhciByPWFyZ3VtZW50cy5sZW5ndGgsaT1uZXcgQXJyYXkocj4yP3ItMjowKSxuPTI7bjxyO24rKylpW24tMl09YXJndW1lbnRzW25dO3RoaXMuZW1pdChcIlZBU1QtZXJyb3JcIixPYmplY3QuYXNzaWduLmFwcGx5KE9iamVjdCxbe30sYWUsdF0uY29uY2F0KGkpKSksTi50cmFjayhlLHQpfX0se2tleTpcImdldEVycm9yVVJMVGVtcGxhdGVzXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yb290RXJyb3JVUkxUZW1wbGF0ZXMuY29uY2F0KHRoaXMuZXJyb3JVUkxUZW1wbGF0ZXMpfX0se2tleTpcImdldEVzdGltYXRlZEJpdHJhdGVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBpZX19LHtrZXk6XCJmZXRjaFZBU1RcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOjAsaT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbCxuPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTpudWxsO3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24oYSxvKXt0LlVSTFRlbXBsYXRlRmlsdGVycy5mb3JFYWNoKChmdW5jdGlvbih0KXtlPXQoZSl9KSksdC5wYXJlbnRVUkxzLnB1c2goZSk7dmFyIHM9RGF0ZS5ub3coKTt0LmVtaXQoXCJWQVNULXJlc29sdmluZ1wiLHt1cmw6ZSxwcmV2aW91c1VybDppLHdyYXBwZXJEZXB0aDpyLG1heFdyYXBwZXJEZXB0aDp0Lm1heFdyYXBwZXJEZXB0aCx0aW1lb3V0OnQuZmV0Y2hpbmdPcHRpb25zLnRpbWVvdXQsd3JhcHBlckFkOm59KSx0LnVybEhhbmRsZXIuZ2V0KGUsdC5mZXRjaGluZ09wdGlvbnMsKGZ1bmN0aW9uKG4sbCl7dmFyIHU9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOnt9LGM9TWF0aC5yb3VuZChEYXRlLm5vdygpLXMpLGQ9T2JqZWN0LmFzc2lnbih7dXJsOmUscHJldmlvdXNVcmw6aSx3cmFwcGVyRGVwdGg6cixlcnJvcjpuLGR1cmF0aW9uOmN9LHUpO3QuZW1pdChcIlZBU1QtcmVzb2x2ZWRcIixkKSxuZSh1LmJ5dGVMZW5ndGgsYyksbj9vKG4pOmEobCl9KSl9KSl9fSx7a2V5OlwiaW5pdFBhcnNpbmdTdGF0dXNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fTt0aGlzLmVycm9yVVJMVGVtcGxhdGVzPVtdLHRoaXMuZmV0Y2hpbmdPcHRpb25zPXt0aW1lb3V0OmUudGltZW91dHx8Wix3aXRoQ3JlZGVudGlhbHM6ZS53aXRoQ3JlZGVudGlhbHN9LHRoaXMubWF4V3JhcHBlckRlcHRoPWUud3JhcHBlckxpbWl0fHwxMCx0aGlzLnBhcmVudFVSTHM9W10sdGhpcy5wYXJzaW5nT3B0aW9ucz17YWxsb3dNdWx0aXBsZUFkczplLmFsbG93TXVsdGlwbGVBZHN9LHRoaXMucmVtYWluaW5nQWRzPVtdLHRoaXMucm9vdEVycm9yVVJMVGVtcGxhdGVzPVtdLHRoaXMucm9vdFVSTD1cIlwiLHRoaXMudXJsSGFuZGxlcj1lLnVybEhhbmRsZXJ8fGUudXJsaGFuZGxlcnx8dGUsdGhpcy52YXN0VmVyc2lvbj1udWxsLG5lKGUuYnl0ZUxlbmd0aCxlLnJlcXVlc3REdXJhdGlvbil9fSx7a2V5OlwiZ2V0UmVtYWluaW5nQWRzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztpZigwPT09dGhpcy5yZW1haW5pbmdBZHMubGVuZ3RoKXJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBtb3JlIGFkcyBhcmUgYXZhaWxhYmxlIGZvciB0aGUgZ2l2ZW4gVkFTVFwiKSk7dmFyIHI9ZT9OLmZsYXR0ZW4odGhpcy5yZW1haW5pbmdBZHMpOnRoaXMucmVtYWluaW5nQWRzLnNoaWZ0KCk7cmV0dXJuIHRoaXMuZXJyb3JVUkxUZW1wbGF0ZXM9W10sdGhpcy5wYXJlbnRVUkxzPVtdLHRoaXMucmVzb2x2ZUFkcyhyLHt3cmFwcGVyRGVwdGg6MCx1cmw6dGhpcy5yb290VVJMfSkudGhlbigoZnVuY3Rpb24oZSl7cmV0dXJuIHQuYnVpbGRWQVNUUmVzcG9uc2UoZSl9KSl9fSx7a2V5OlwiZ2V0QW5kUGFyc2VWQVNUXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fTtyZXR1cm4gdGhpcy5pbml0UGFyc2luZ1N0YXR1cyhyKSx0aGlzLlVSTFRlbXBsYXRlRmlsdGVycy5mb3JFYWNoKChmdW5jdGlvbih0KXtlPXQoZSl9KSksdGhpcy5yb290VVJMPWUsdGhpcy5mZXRjaFZBU1QoZSkudGhlbigoZnVuY3Rpb24oaSl7cmV0dXJuIHIucHJldmlvdXNVcmw9ZSxyLmlzUm9vdFZBU1Q9ITAsci51cmw9ZSx0LnBhcnNlKGkscikudGhlbigoZnVuY3Rpb24oZSl7cmV0dXJuIHQuYnVpbGRWQVNUUmVzcG9uc2UoZSl9KSl9KSl9fSx7a2V5OlwicGFyc2VWQVNUXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fTtyZXR1cm4gdGhpcy5pbml0UGFyc2luZ1N0YXR1cyhyKSxyLmlzUm9vdFZBU1Q9ITAsdGhpcy5wYXJzZShlLHIpLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiB0LmJ1aWxkVkFTVFJlc3BvbnNlKGUpfSkpfX0se2tleTpcImJ1aWxkVkFTVFJlc3BvbnNlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQscj17YWRzOih0PXthZHM6ZSxlcnJvclVSTFRlbXBsYXRlczp0aGlzLmdldEVycm9yVVJMVGVtcGxhdGVzKCksdmVyc2lvbjp0aGlzLnZhc3RWZXJzaW9ufSkuYWRzfHxbXSxlcnJvclVSTFRlbXBsYXRlczp0LmVycm9yVVJMVGVtcGxhdGVzfHxbXSx2ZXJzaW9uOnQudmVyc2lvbnx8bnVsbH07cmV0dXJuIHRoaXMuY29tcGxldGVXcmFwcGVyUmVzb2x2aW5nKHIpLHJ9fSx7a2V5OlwicGFyc2VWYXN0WG1sXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgcj10LmlzUm9vdFZBU1QsaT12b2lkIDAhPT1yJiZyLG49dC51cmwsYT12b2lkIDA9PT1uP251bGw6bixvPXQud3JhcHBlckRlcHRoLHM9dm9pZCAwPT09bz8wOm8sbD10LmFsbG93TXVsdGlwbGVBZHMsdT10LmZvbGxvd0FkZGl0aW9uYWxXcmFwcGVycztpZighZXx8IWUuZG9jdW1lbnRFbGVtZW50fHxcIlZBU1RcIiE9PWUuZG9jdW1lbnRFbGVtZW50Lm5vZGVOYW1lKXRocm93IHRoaXMuZW1pdChcIlZBU1QtYWQtcGFyc2VkXCIse3R5cGU6XCJFUlJPUlwiLHVybDphLHdyYXBwZXJEZXB0aDpzfSksbmV3IEVycm9yKFwiSW52YWxpZCBWQVNUIFhNTERvY3VtZW50XCIpO3ZhciBjPVtdLGQ9ZS5kb2N1bWVudEVsZW1lbnQuY2hpbGROb2RlcyxwPWUuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcInZlcnNpb25cIik7Zm9yKHZhciBoIGluIGkmJnAmJih0aGlzLnZhc3RWZXJzaW9uPXApLGQpe3ZhciB2PWRbaF07aWYoXCJFcnJvclwiPT09di5ub2RlTmFtZSl7dmFyIGY9dy5wYXJzZU5vZGVUZXh0KHYpO2k/dGhpcy5yb290RXJyb3JVUkxUZW1wbGF0ZXMucHVzaChmKTp0aGlzLmVycm9yVVJMVGVtcGxhdGVzLnB1c2goZil9ZWxzZSBpZihcIkFkXCI9PT12Lm5vZGVOYW1lKXtpZih0aGlzLnZhc3RWZXJzaW9uJiZwYXJzZUZsb2F0KHRoaXMudmFzdFZlcnNpb24pPDMpbD0hMDtlbHNlIGlmKCExPT09bCYmYy5sZW5ndGg+MSlicmVhazt2YXIgbT1xKHYsdGhpcy5lbWl0LmJpbmQodGhpcykse2FsbG93TXVsdGlwbGVBZHM6bCxmb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnM6dX0pO20uYWQ/KGMucHVzaChtLmFkKSx0aGlzLmVtaXQoXCJWQVNULWFkLXBhcnNlZFwiLHt0eXBlOm0udHlwZSx1cmw6YSx3cmFwcGVyRGVwdGg6cyxhZEluZGV4OmMubGVuZ3RoLTEsdmFzdFZlcnNpb246cH0pKTp0aGlzLnRyYWNrVmFzdEVycm9yKHRoaXMuZ2V0RXJyb3JVUkxUZW1wbGF0ZXMoKSx7RVJST1JDT0RFOjEwMX0pfX1yZXR1cm4gY319LHtrZXk6XCJwYXJzZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fSxyPXQudXJsLGk9dm9pZCAwPT09cj9udWxsOnIsbj10LnJlc29sdmVBbGwsYT12b2lkIDA9PT1ufHxuLG89dC53cmFwcGVyU2VxdWVuY2Uscz12b2lkIDA9PT1vP251bGw6byxsPXQucHJldmlvdXNVcmwsdT12b2lkIDA9PT1sP251bGw6bCxjPXQud3JhcHBlckRlcHRoLGQ9dm9pZCAwPT09Yz8wOmMscD10LmlzUm9vdFZBU1QsaD12b2lkIDAhPT1wJiZwLHY9dC5mb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnMsZj10LmFsbG93TXVsdGlwbGVBZHMsbT1bXTt0aGlzLnZhc3RWZXJzaW9uJiZwYXJzZUZsb2F0KHRoaXMudmFzdFZlcnNpb24pPDMmJmgmJihmPSEwKTt0cnl7bT10aGlzLnBhcnNlVmFzdFhtbChlLHtpc1Jvb3RWQVNUOmgsdXJsOmksd3JhcHBlckRlcHRoOmQsYWxsb3dNdWx0aXBsZUFkczpmLGZvbGxvd0FkZGl0aW9uYWxXcmFwcGVyczp2fSl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfXJldHVybiAxPT09bS5sZW5ndGgmJm51bGwhPXMmJihtWzBdLnNlcXVlbmNlPXMpLCExPT09YSYmKHRoaXMucmVtYWluaW5nQWRzPXcuc3BsaXRWQVNUKG0pLG09dGhpcy5yZW1haW5pbmdBZHMuc2hpZnQoKSksdGhpcy5yZXNvbHZlQWRzKG0se3dyYXBwZXJEZXB0aDpkLHByZXZpb3VzVXJsOnUsdXJsOml9KX19LHtrZXk6XCJyZXNvbHZlQWRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOltdLHI9YXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsaT1yLndyYXBwZXJEZXB0aCxuPXIucHJldmlvdXNVcmwsYT1yLnVybCxvPVtdO3JldHVybiBuPWEsdC5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgcj1lLnJlc29sdmVXcmFwcGVycyh0LGksbik7by5wdXNoKHIpfSkpLFByb21pc2UuYWxsKG8pLnRoZW4oKGZ1bmN0aW9uKHQpe3ZhciByPU4uZmxhdHRlbih0KTtpZighciYmZS5yZW1haW5pbmdBZHMubGVuZ3RoPjApe3ZhciBvPWUucmVtYWluaW5nQWRzLnNoaWZ0KCk7cmV0dXJuIGUucmVzb2x2ZUFkcyhvLHt3cmFwcGVyRGVwdGg6aSxwcmV2aW91c1VybDpuLHVybDphfSl9cmV0dXJuIHJ9KSl9fSx7a2V5OlwicmVzb2x2ZVdyYXBwZXJzXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LHIpe3ZhciBpPXRoaXM7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihuKXt2YXIgYTtpZih0KyssIWUubmV4dFdyYXBwZXJVUkwpcmV0dXJuIGRlbGV0ZSBlLm5leHRXcmFwcGVyVVJMLG4oZSk7aWYodD49aS5tYXhXcmFwcGVyRGVwdGh8fC0xIT09aS5wYXJlbnRVUkxzLmluZGV4T2YoZS5uZXh0V3JhcHBlclVSTCkpcmV0dXJuIGUuZXJyb3JDb2RlPTMwMixkZWxldGUgZS5uZXh0V3JhcHBlclVSTCxuKGUpO2UubmV4dFdyYXBwZXJVUkw9dy5yZXNvbHZlVmFzdEFkVGFnVVJJKGUubmV4dFdyYXBwZXJVUkwsciksaS5VUkxUZW1wbGF0ZUZpbHRlcnMuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZS5uZXh0V3JhcHBlclVSTD10KGUubmV4dFdyYXBwZXJVUkwpfSkpO3ZhciBvPW51bGwhPT0oYT1pLnBhcnNpbmdPcHRpb25zLmFsbG93TXVsdGlwbGVBZHMpJiZ2b2lkIDAhPT1hP2E6ZS5hbGxvd011bHRpcGxlQWRzLHM9ZS5zZXF1ZW5jZTtpLmZldGNoVkFTVChlLm5leHRXcmFwcGVyVVJMLHQscixlKS50aGVuKChmdW5jdGlvbihhKXtyZXR1cm4gaS5wYXJzZShhLHt1cmw6ZS5uZXh0V3JhcHBlclVSTCxwcmV2aW91c1VybDpyLHdyYXBwZXJTZXF1ZW5jZTpzLHdyYXBwZXJEZXB0aDp0LGZvbGxvd0FkZGl0aW9uYWxXcmFwcGVyczplLmZvbGxvd0FkZGl0aW9uYWxXcmFwcGVycyxhbGxvd011bHRpcGxlQWRzOm99KS50aGVuKChmdW5jdGlvbih0KXtpZihkZWxldGUgZS5uZXh0V3JhcHBlclVSTCwwPT09dC5sZW5ndGgpcmV0dXJuIGUuY3JlYXRpdmVzPVtdLG4oZSk7dC5mb3JFYWNoKChmdW5jdGlvbih0KXt0JiZ3Lm1lcmdlV3JhcHBlckFkRGF0YSh0LGUpfSkpLG4odCl9KSl9KSkuY2F0Y2goKGZ1bmN0aW9uKHQpe2UuZXJyb3JDb2RlPTMwMSxlLmVycm9yTWVzc2FnZT10Lm1lc3NhZ2UsbihlKX0pKX0pKX19LHtrZXk6XCJjb21wbGV0ZVdyYXBwZXJSZXNvbHZpbmdcIix2YWx1ZTpmdW5jdGlvbihlKXtpZigwPT09ZS5hZHMubGVuZ3RoKXRoaXMudHJhY2tWYXN0RXJyb3IoZS5lcnJvclVSTFRlbXBsYXRlcyx7RVJST1JDT0RFOjMwM30pO2Vsc2UgZm9yKHZhciB0PWUuYWRzLmxlbmd0aC0xO3Q+PTA7dC0tKXt2YXIgcj1lLmFkc1t0XTsoci5lcnJvckNvZGV8fDA9PT1yLmNyZWF0aXZlcy5sZW5ndGgpJiYodGhpcy50cmFja1Zhc3RFcnJvcihyLmVycm9yVVJMVGVtcGxhdGVzLmNvbmNhdChlLmVycm9yVVJMVGVtcGxhdGVzKSx7RVJST1JDT0RFOnIuZXJyb3JDb2RlfHwzMDN9LHtFUlJPUk1FU1NBR0U6ci5lcnJvck1lc3NhZ2V8fFwiXCJ9LHtleHRlbnNpb25zOnIuZXh0ZW5zaW9uc30se3N5c3RlbTpyLnN5c3RlbX0pLGUuYWRzLnNwbGljZSh0LDEpKX19fV0pLHJ9KEspLHNlPW51bGwsbGU9e2RhdGE6e30sbGVuZ3RoOjAsZ2V0SXRlbTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5kYXRhW2VdfSxzZXRJdGVtOmZ1bmN0aW9uKGUsdCl7dGhpcy5kYXRhW2VdPXQsdGhpcy5sZW5ndGg9T2JqZWN0LmtleXModGhpcy5kYXRhKS5sZW5ndGh9LHJlbW92ZUl0ZW06ZnVuY3Rpb24oZSl7ZGVsZXRlIHRoaXMuZGF0YVtlXSx0aGlzLmxlbmd0aD1PYmplY3Qua2V5cyh0aGlzLmRhdGEpLmxlbmd0aH0sY2xlYXI6ZnVuY3Rpb24oKXt0aGlzLmRhdGE9e30sdGhpcy5sZW5ndGg9MH19LHVlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe24odGhpcyxlKSx0aGlzLnN0b3JhZ2U9dGhpcy5pbml0U3RvcmFnZSgpfXJldHVybiBvKGUsW3trZXk6XCJpbml0U3RvcmFnZVwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYoc2UpcmV0dXJuIHNlO3RyeXtzZT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZudWxsIT09d2luZG93P3dpbmRvdy5sb2NhbFN0b3JhZ2V8fHdpbmRvdy5zZXNzaW9uU3RvcmFnZTpudWxsfWNhdGNoKGUpe3NlPW51bGx9cmV0dXJuIHNlJiYhdGhpcy5pc1N0b3JhZ2VEaXNhYmxlZChzZSl8fChzZT1sZSkuY2xlYXIoKSxzZX19LHtrZXk6XCJpc1N0b3JhZ2VEaXNhYmxlZFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiX19WQVNUU3RvcmFnZV9fXCI7dHJ5e2lmKGUuc2V0SXRlbSh0LHQpLGUuZ2V0SXRlbSh0KSE9PXQpcmV0dXJuIGUucmVtb3ZlSXRlbSh0KSwhMH1jYXRjaChlKXtyZXR1cm4hMH1yZXR1cm4gZS5yZW1vdmVJdGVtKHQpLCExfX0se2tleTpcImdldEl0ZW1cIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5zdG9yYWdlLmdldEl0ZW0oZSl9fSx7a2V5Olwic2V0SXRlbVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuc3RvcmFnZS5zZXRJdGVtKGUsdCl9fSx7a2V5OlwicmVtb3ZlSXRlbVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnN0b3JhZ2UucmVtb3ZlSXRlbShlKX19LHtrZXk6XCJjbGVhclwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RvcmFnZS5jbGVhcigpfX1dKSxlfSgpLGNlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LHIsaSl7bih0aGlzLGUpLHRoaXMuY2FwcGluZ0ZyZWVMdW5jaD10fHwwLHRoaXMuY2FwcGluZ01pbmltdW1UaW1lSW50ZXJ2YWw9cnx8MCx0aGlzLmRlZmF1bHRPcHRpb25zPXt3aXRoQ3JlZGVudGlhbHM6ITEsdGltZW91dDowfSx0aGlzLnZhc3RQYXJzZXI9bmV3IG9lLHRoaXMuc3RvcmFnZT1pfHxuZXcgdWUsdm9pZCAwPT09dGhpcy5sYXN0U3VjY2Vzc2Z1bEFkJiYodGhpcy5sYXN0U3VjY2Vzc2Z1bEFkPTApLHZvaWQgMD09PXRoaXMudG90YWxDYWxscyYmKHRoaXMudG90YWxDYWxscz0wKSx2b2lkIDA9PT10aGlzLnRvdGFsQ2FsbHNUaW1lb3V0JiYodGhpcy50b3RhbENhbGxzVGltZW91dD0wKX1yZXR1cm4gbyhlLFt7a2V5OlwiZ2V0UGFyc2VyXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YXN0UGFyc2VyfX0se2tleTpcImxhc3RTdWNjZXNzZnVsQWRcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zdG9yYWdlLmdldEl0ZW0oXCJ2YXN0LWNsaWVudC1sYXN0LXN1Y2Nlc3NmdWwtYWRcIil9LHNldDpmdW5jdGlvbihlKXt0aGlzLnN0b3JhZ2Uuc2V0SXRlbShcInZhc3QtY2xpZW50LWxhc3Qtc3VjY2Vzc2Z1bC1hZFwiLGUpfX0se2tleTpcInRvdGFsQ2FsbHNcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zdG9yYWdlLmdldEl0ZW0oXCJ2YXN0LWNsaWVudC10b3RhbC1jYWxsc1wiKX0sc2V0OmZ1bmN0aW9uKGUpe3RoaXMuc3RvcmFnZS5zZXRJdGVtKFwidmFzdC1jbGllbnQtdG90YWwtY2FsbHNcIixlKX19LHtrZXk6XCJ0b3RhbENhbGxzVGltZW91dFwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShcInZhc3QtY2xpZW50LXRvdGFsLWNhbGxzLXRpbWVvdXRcIil9LHNldDpmdW5jdGlvbihlKXt0aGlzLnN0b3JhZ2Uuc2V0SXRlbShcInZhc3QtY2xpZW50LXRvdGFsLWNhbGxzLXRpbWVvdXRcIixlKX19LHtrZXk6XCJoYXNSZW1haW5pbmdBZHNcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZhc3RQYXJzZXIucmVtYWluaW5nQWRzLmxlbmd0aD4wfX0se2tleTpcImdldE5leHRBZHNcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy52YXN0UGFyc2VyLmdldFJlbWFpbmluZ0FkcyhlKX19LHtrZXk6XCJnZXRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LGk9RGF0ZS5ub3coKTtyZXR1cm4ocj1PYmplY3QuYXNzaWduKHt9LHRoaXMuZGVmYXVsdE9wdGlvbnMscikpLmhhc093blByb3BlcnR5KFwicmVzb2x2ZUFsbFwiKXx8KHIucmVzb2x2ZUFsbD0hMSksdGhpcy50b3RhbENhbGxzVGltZW91dDxpPyh0aGlzLnRvdGFsQ2FsbHM9MSx0aGlzLnRvdGFsQ2FsbHNUaW1lb3V0PWkrMzZlNSk6dGhpcy50b3RhbENhbGxzKyssbmV3IFByb21pc2UoKGZ1bmN0aW9uKG4sYSl7aWYodC5jYXBwaW5nRnJlZUx1bmNoPj10LnRvdGFsQ2FsbHMpcmV0dXJuIGEobmV3IEVycm9yKFwiVkFTVCBjYWxsIGNhbmNlbGVkIOKAkyBGcmVlTHVuY2ggY2FwcGluZyBub3QgcmVhY2hlZCB5ZXQgXCIuY29uY2F0KHQudG90YWxDYWxscyxcIi9cIikuY29uY2F0KHQuY2FwcGluZ0ZyZWVMdW5jaCkpKTt2YXIgbz1pLXQubGFzdFN1Y2Nlc3NmdWxBZDtpZihvPDApdC5sYXN0U3VjY2Vzc2Z1bEFkPTA7ZWxzZSBpZihvPHQuY2FwcGluZ01pbmltdW1UaW1lSW50ZXJ2YWwpcmV0dXJuIGEobmV3IEVycm9yKFwiVkFTVCBjYWxsIGNhbmNlbGVkIOKAkyAoXCIuY29uY2F0KHQuY2FwcGluZ01pbmltdW1UaW1lSW50ZXJ2YWwsXCIpbXMgbWluaW11bSBpbnRlcnZhbCByZWFjaGVkXCIpKSk7dC52YXN0UGFyc2VyLmdldEFuZFBhcnNlVkFTVChlLHIpLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiBuKGUpfSkpLmNhdGNoKChmdW5jdGlvbihlKXtyZXR1cm4gYShlKX0pKX0pKX19XSksZX0oKSxkZT1mdW5jdGlvbihlKXtsKGEsZSk7dmFyIHQ9cChhKTtmdW5jdGlvbiBhKGUscixpKXt2YXIgbyxzPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTpudWxsO2Zvcih2YXIgbCBpbiBuKHRoaXMsYSksKG89dC5jYWxsKHRoaXMpKS5hZD1yLG8uY3JlYXRpdmU9aSxvLnZhcmlhdGlvbj1zLG8ubXV0ZWQ9ITEsby5pbXByZXNzZWQ9ITEsby5za2lwcGFibGU9ITEsby50cmFja2luZ0V2ZW50cz17fSxvLmxhc3RQZXJjZW50YWdlPTAsby5fYWxyZWFkeVRyaWdnZXJlZFF1YXJ0aWxlcz17fSxvLmVtaXRBbHdheXNFdmVudHM9W1wiY3JlYXRpdmVWaWV3XCIsXCJzdGFydFwiLFwiZmlyc3RRdWFydGlsZVwiLFwibWlkcG9pbnRcIixcInRoaXJkUXVhcnRpbGVcIixcImNvbXBsZXRlXCIsXCJyZXN1bWVcIixcInBhdXNlXCIsXCJyZXdpbmRcIixcInNraXBcIixcImNsb3NlTGluZWFyXCIsXCJjbG9zZVwiXSxvLmNyZWF0aXZlLnRyYWNraW5nRXZlbnRzKXt2YXIgdT1vLmNyZWF0aXZlLnRyYWNraW5nRXZlbnRzW2xdO28udHJhY2tpbmdFdmVudHNbbF09dS5zbGljZSgwKX1yZXR1cm4gQyhvLmNyZWF0aXZlKT9vLl9pbml0TGluZWFyVHJhY2tpbmcoKTpvLl9pbml0VmFyaWF0aW9uVHJhY2tpbmcoKSxlJiZvLm9uKFwic3RhcnRcIiwoZnVuY3Rpb24oKXtlLmxhc3RTdWNjZXNzZnVsQWQ9RGF0ZS5ub3coKX0pKSxvfXJldHVybiBvKGEsW3trZXk6XCJfaW5pdExpbmVhclRyYWNraW5nXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmxpbmVhcj0hMCx0aGlzLnNraXBEZWxheT10aGlzLmNyZWF0aXZlLnNraXBEZWxheSx0aGlzLnNldER1cmF0aW9uKHRoaXMuY3JlYXRpdmUuZHVyYXRpb24pLHRoaXMuY2xpY2tUaHJvdWdoVVJMVGVtcGxhdGU9dGhpcy5jcmVhdGl2ZS52aWRlb0NsaWNrVGhyb3VnaFVSTFRlbXBsYXRlLHRoaXMuY2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlcz10aGlzLmNyZWF0aXZlLnZpZGVvQ2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlc319LHtrZXk6XCJfaW5pdFZhcmlhdGlvblRyYWNraW5nXCIsdmFsdWU6ZnVuY3Rpb24oKXtpZih0aGlzLmxpbmVhcj0hMSx0aGlzLnNraXBEZWxheT0tMSx0aGlzLnZhcmlhdGlvbil7Zm9yKHZhciBlIGluIHRoaXMudmFyaWF0aW9uLnRyYWNraW5nRXZlbnRzKXt2YXIgdD10aGlzLnZhcmlhdGlvbi50cmFja2luZ0V2ZW50c1tlXTt0aGlzLnRyYWNraW5nRXZlbnRzW2VdP3RoaXMudHJhY2tpbmdFdmVudHNbZV09dGhpcy50cmFja2luZ0V2ZW50c1tlXS5jb25jYXQodC5zbGljZSgwKSk6dGhpcy50cmFja2luZ0V2ZW50c1tlXT10LnNsaWNlKDApfVwibm9uTGluZWFyQWRcIj09PXRoaXMudmFyaWF0aW9uLmFkVHlwZT8odGhpcy5jbGlja1Rocm91Z2hVUkxUZW1wbGF0ZT10aGlzLnZhcmlhdGlvbi5ub25saW5lYXJDbGlja1Rocm91Z2hVUkxUZW1wbGF0ZSx0aGlzLmNsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXM9dGhpcy52YXJpYXRpb24ubm9ubGluZWFyQ2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlcyx0aGlzLnNldER1cmF0aW9uKHRoaXMudmFyaWF0aW9uLm1pblN1Z2dlc3RlZER1cmF0aW9uKSk6ZnVuY3Rpb24oZSl7cmV0dXJuXCJjb21wYW5pb25BZFwiPT09ZS5hZFR5cGV9KHRoaXMudmFyaWF0aW9uKSYmKHRoaXMuY2xpY2tUaHJvdWdoVVJMVGVtcGxhdGU9dGhpcy52YXJpYXRpb24uY29tcGFuaW9uQ2xpY2tUaHJvdWdoVVJMVGVtcGxhdGUsdGhpcy5jbGlja1RyYWNraW5nVVJMVGVtcGxhdGVzPXRoaXMudmFyaWF0aW9uLmNvbXBhbmlvbkNsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXMpfX19LHtrZXk6XCJzZXREdXJhdGlvblwiLHZhbHVlOmZ1bmN0aW9uKGUpe04uaXNWYWxpZFRpbWVWYWx1ZShlKSYmKHRoaXMuYXNzZXREdXJhdGlvbj1lLHRoaXMucXVhcnRpbGVzPXtmaXJzdFF1YXJ0aWxlOk1hdGgucm91bmQoMjUqdGhpcy5hc3NldER1cmF0aW9uKS8xMDAsbWlkcG9pbnQ6TWF0aC5yb3VuZCg1MCp0aGlzLmFzc2V0RHVyYXRpb24pLzEwMCx0aGlyZFF1YXJ0aWxlOk1hdGgucm91bmQoNzUqdGhpcy5hc3NldER1cmF0aW9uKS8xMDB9KX19LHtrZXk6XCJzZXRQcm9ncmVzc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307aWYoTi5pc1ZhbGlkVGltZVZhbHVlKGUpJiZcIm9iamVjdFwiPT09aShyKSl7dmFyIG49dGhpcy5za2lwRGVsYXl8fC0xO2lmKC0xPT09bnx8dGhpcy5za2lwcGFibGV8fChuPmU/dGhpcy5lbWl0KFwic2tpcC1jb3VudGRvd25cIixuLWUpOih0aGlzLnNraXBwYWJsZT0hMCx0aGlzLmVtaXQoXCJza2lwLWNvdW50ZG93blwiLDApKSksdGhpcy5hc3NldER1cmF0aW9uPjApe3ZhciBhPU1hdGgucm91bmQoZS90aGlzLmFzc2V0RHVyYXRpb24qMTAwKSxvPVtdO2lmKGU+MCl7by5wdXNoKFwic3RhcnRcIik7Zm9yKHZhciBzPXRoaXMubGFzdFBlcmNlbnRhZ2U7czxhO3MrKylvLnB1c2goXCJwcm9ncmVzcy1cIi5jb25jYXQocysxLFwiJVwiKSk7Zm9yKHZhciBsIGluIG8ucHVzaChcInByb2dyZXNzLVwiLmNvbmNhdChNYXRoLnJvdW5kKGUpKSksdGhpcy5xdWFydGlsZXMpdGhpcy5pc1F1YXJ0aWxlUmVhY2hlZChsLHRoaXMucXVhcnRpbGVzW2xdLGUpJiYoby5wdXNoKGwpLHRoaXMuX2FscmVhZHlUcmlnZ2VyZWRRdWFydGlsZXNbbF09ITApO3RoaXMubGFzdFBlcmNlbnRhZ2U9YX1vLmZvckVhY2goKGZ1bmN0aW9uKGUpe3QudHJhY2soZSx7bWFjcm9zOnIsb25jZTohMH0pfSkpLGU8dGhpcy5wcm9ncmVzcyYmdGhpcy50cmFjayhcInJld2luZFwiLHttYWNyb3M6cn0pfXRoaXMucHJvZ3Jlc3M9ZX19fSx7a2V5OlwiaXNRdWFydGlsZVJlYWNoZWRcIix2YWx1ZTpmdW5jdGlvbihlLHQscil7dmFyIGk9ITE7cmV0dXJuIHQ8PXImJiF0aGlzLl9hbHJlYWR5VHJpZ2dlcmVkUXVhcnRpbGVzW2VdJiYoaT0hMCksaX19LHtrZXk6XCJzZXRNdXRlZFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fTtcImJvb2xlYW5cIj09dHlwZW9mIGUmJlwib2JqZWN0XCI9PT1pKHQpJiYodGhpcy5tdXRlZCE9PWUmJnRoaXMudHJhY2soZT9cIm11dGVcIjpcInVubXV0ZVwiLHttYWNyb3M6dH0pLHRoaXMubXV0ZWQ9ZSl9fSx7a2V5Olwic2V0UGF1c2VkXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9O1wiYm9vbGVhblwiPT10eXBlb2YgZSYmXCJvYmplY3RcIj09PWkodCkmJih0aGlzLnBhdXNlZCE9PWUmJnRoaXMudHJhY2soZT9cInBhdXNlXCI6XCJyZXN1bWVcIix7bWFjcm9zOnR9KSx0aGlzLnBhdXNlZD1lKX19LHtrZXk6XCJzZXRGdWxsc2NyZWVuXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9O1wiYm9vbGVhblwiPT10eXBlb2YgZSYmXCJvYmplY3RcIj09PWkodCkmJih0aGlzLmZ1bGxzY3JlZW4hPT1lJiZ0aGlzLnRyYWNrKGU/XCJmdWxsc2NyZWVuXCI6XCJleGl0RnVsbHNjcmVlblwiLHttYWNyb3M6dH0pLHRoaXMuZnVsbHNjcmVlbj1lKX19LHtrZXk6XCJzZXRFeHBhbmRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307XCJib29sZWFuXCI9PXR5cGVvZiBlJiZcIm9iamVjdFwiPT09aSh0KSYmKHRoaXMuZXhwYW5kZWQhPT1lJiYodGhpcy50cmFjayhlP1wiZXhwYW5kXCI6XCJjb2xsYXBzZVwiLHttYWNyb3M6dH0pLHRoaXMudHJhY2soZT9cInBsYXllckV4cGFuZFwiOlwicGxheWVyQ29sbGFwc2VcIix7bWFjcm9zOnR9KSksdGhpcy5leHBhbmRlZD1lKX19LHtrZXk6XCJzZXRTa2lwRGVsYXlcIix2YWx1ZTpmdW5jdGlvbihlKXtOLmlzVmFsaWRUaW1lVmFsdWUoZSkmJih0aGlzLnNraXBEZWxheT1lKX19LHtrZXk6XCJ0cmFja0ltcHJlc3Npb25cIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fTtcIm9iamVjdFwiPT09aShlKSYmKHRoaXMuaW1wcmVzc2VkfHwodGhpcy5pbXByZXNzZWQ9ITAsdGhpcy50cmFja1VSTHModGhpcy5hZC5pbXByZXNzaW9uVVJMVGVtcGxhdGVzLGUpLHRoaXMudHJhY2soXCJjcmVhdGl2ZVZpZXdcIix7bWFjcm9zOmV9KSkpfX0se2tleTpcImVycm9yXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30sdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSYmYXJndW1lbnRzWzFdO1wib2JqZWN0XCI9PT1pKGUpJiZcImJvb2xlYW5cIj09dHlwZW9mIHQmJnRoaXMudHJhY2tVUkxzKHRoaXMuYWQuZXJyb3JVUkxUZW1wbGF0ZXMsZSx7aXNDdXN0b21Db2RlOnR9KX19LHtrZXk6XCJlcnJvcldpdGhDb2RlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXTtcInN0cmluZ1wiPT10eXBlb2YgZSYmXCJib29sZWFuXCI9PXR5cGVvZiB0JiYodGhpcy5lcnJvcih7RVJST1JDT0RFOmV9LHQpLGNvbnNvbGUubG9nKFwiVGhlIG1ldGhvZCBlcnJvcldpdGhDb2RlIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgdmFzdCB0cmFja2VyIGVycm9yIG1ldGhvZCBpbnN0ZWFkXCIpKX19LHtrZXk6XCJjb21wbGV0ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O1wib2JqZWN0XCI9PT1pKGUpJiZ0aGlzLnRyYWNrKFwiY29tcGxldGVcIix7bWFjcm9zOmV9KX19LHtrZXk6XCJub3RVc2VkXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307XCJvYmplY3RcIj09PWkoZSkmJih0aGlzLnRyYWNrKFwibm90VXNlZFwiLHttYWNyb3M6ZX0pLHRoaXMudHJhY2tpbmdFdmVudHM9W10pfX0se2tleTpcIm90aGVyQWRJbnRlcmFjdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O1wib2JqZWN0XCI9PT1pKGUpJiZ0aGlzLnRyYWNrKFwib3RoZXJBZEludGVyYWN0aW9uXCIse21hY3JvczplfSl9fSx7a2V5OlwiYWNjZXB0SW52aXRhdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O1wib2JqZWN0XCI9PT1pKGUpJiZ0aGlzLnRyYWNrKFwiYWNjZXB0SW52aXRhdGlvblwiLHttYWNyb3M6ZX0pfX0se2tleTpcImFkRXhwYW5kXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307XCJvYmplY3RcIj09PWkoZSkmJnRoaXMudHJhY2soXCJhZEV4cGFuZFwiLHttYWNyb3M6ZX0pfX0se2tleTpcImFkQ29sbGFwc2VcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fTtcIm9iamVjdFwiPT09aShlKSYmdGhpcy50cmFjayhcImFkQ29sbGFwc2VcIix7bWFjcm9zOmV9KX19LHtrZXk6XCJtaW5pbWl6ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O1wib2JqZWN0XCI9PT1pKGUpJiZ0aGlzLnRyYWNrKFwibWluaW1pemVcIix7bWFjcm9zOmV9KX19LHtrZXk6XCJ2ZXJpZmljYXRpb25Ob3RFeGVjdXRlZFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmXCJvYmplY3RcIj09PWkodCkpe2lmKCF0aGlzLmFkfHwhdGhpcy5hZC5hZFZlcmlmaWNhdGlvbnN8fCF0aGlzLmFkLmFkVmVyaWZpY2F0aW9ucy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiTm8gYWRWZXJpZmljYXRpb25zIHByb3ZpZGVkXCIpO2lmKCFlKXRocm93IG5ldyBFcnJvcihcIk5vIHZlbmRvciBwcm92aWRlZCwgdW5hYmxlIHRvIGZpbmQgYXNzb2NpYXRlZCB2ZXJpZmljYXRpb25Ob3RFeGVjdXRlZFwiKTt2YXIgcj10aGlzLmFkLmFkVmVyaWZpY2F0aW9ucy5maW5kKChmdW5jdGlvbih0KXtyZXR1cm4gdC52ZW5kb3I9PT1lfSkpO2lmKCFyKXRocm93IG5ldyBFcnJvcihcIk5vIGFzc29jaWF0ZWQgdmVyaWZpY2F0aW9uIGVsZW1lbnQgZm91bmQgZm9yIHZlbmRvcjogXCIuY29uY2F0KGUpKTt2YXIgbj1yLnRyYWNraW5nRXZlbnRzO2lmKG4mJm4udmVyaWZpY2F0aW9uTm90RXhlY3V0ZWQpe3ZhciBhPW4udmVyaWZpY2F0aW9uTm90RXhlY3V0ZWQ7dGhpcy50cmFja1VSTHMoYSx0KSx0aGlzLmVtaXQoXCJ2ZXJpZmljYXRpb25Ob3RFeGVjdXRlZFwiLHt0cmFja2luZ1VSTFRlbXBsYXRlczphfSl9fX19LHtrZXk6XCJvdmVybGF5Vmlld0R1cmF0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9O1wic3RyaW5nXCI9PXR5cGVvZiBlJiZcIm9iamVjdFwiPT09aSh0KSYmKHQuQURQTEFZSEVBRD1lLHRoaXMudHJhY2soXCJvdmVybGF5Vmlld0R1cmF0aW9uXCIse21hY3Jvczp0fSkpfX0se2tleTpcImNsb3NlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307XCJvYmplY3RcIj09PWkoZSkmJnRoaXMudHJhY2sodGhpcy5saW5lYXI/XCJjbG9zZUxpbmVhclwiOlwiY2xvc2VcIix7bWFjcm9zOmV9KX19LHtrZXk6XCJza2lwXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307XCJvYmplY3RcIj09PWkoZSkmJnRoaXMudHJhY2soXCJza2lwXCIse21hY3JvczplfSl9fSx7a2V5OlwibG9hZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O1wib2JqZWN0XCI9PT1pKGUpJiZ0aGlzLnRyYWNrKFwibG9hZGVkXCIse21hY3JvczplfSl9fSx7a2V5OlwiY2xpY2tcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpudWxsLHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9O2lmKChudWxsPT09ZXx8XCJzdHJpbmdcIj09dHlwZW9mIGUpJiZcIm9iamVjdFwiPT09aSh0KSl7dGhpcy5jbGlja1RyYWNraW5nVVJMVGVtcGxhdGVzJiZ0aGlzLmNsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXMubGVuZ3RoJiZ0aGlzLnRyYWNrVVJMcyh0aGlzLmNsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXMsdCk7dmFyIG49dGhpcy5jbGlja1Rocm91Z2hVUkxUZW1wbGF0ZXx8ZSxhPXIoe30sdCk7aWYobil7dGhpcy5wcm9ncmVzcyYmKGEuQURQTEFZSEVBRD10aGlzLnByb2dyZXNzRm9ybWF0dGVkKCkpO3ZhciBvPU4ucmVzb2x2ZVVSTFRlbXBsYXRlcyhbbl0sYSlbMF07dGhpcy5lbWl0KFwiY2xpY2t0aHJvdWdoXCIsbyl9fX19LHtrZXk6XCJ0cmFja1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fSxyPXQubWFjcm9zLG49dm9pZCAwPT09cj97fTpyLGE9dC5vbmNlLG89dm9pZCAwIT09YSYmYTtpZihcIm9iamVjdFwiPT09aShuKSl7XCJjbG9zZUxpbmVhclwiPT09ZSYmIXRoaXMudHJhY2tpbmdFdmVudHNbZV0mJnRoaXMudHJhY2tpbmdFdmVudHMuY2xvc2UmJihlPVwiY2xvc2VcIik7dmFyIHM9dGhpcy50cmFja2luZ0V2ZW50c1tlXSxsPXRoaXMuZW1pdEFsd2F5c0V2ZW50cy5pbmRleE9mKGUpPi0xO3M/KHRoaXMuZW1pdChlLHt0cmFja2luZ1VSTFRlbXBsYXRlczpzfSksdGhpcy50cmFja1VSTHMocyxuKSk6bCYmdGhpcy5lbWl0KGUsbnVsbCksbyYmKGRlbGV0ZSB0aGlzLnRyYWNraW5nRXZlbnRzW2VdLGwmJnRoaXMuZW1pdEFsd2F5c0V2ZW50cy5zcGxpY2UodGhpcy5lbWl0QWx3YXlzRXZlbnRzLmluZGV4T2YoZSksMSkpfX19LHtrZXk6XCJ0cmFja1VSTHNcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdCxpLG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LGE9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOnt9LG89cih7fSxuKTt0aGlzLmxpbmVhciYmKHRoaXMuY3JlYXRpdmUmJnRoaXMuY3JlYXRpdmUubWVkaWFGaWxlcyYmdGhpcy5jcmVhdGl2ZS5tZWRpYUZpbGVzWzBdJiZ0aGlzLmNyZWF0aXZlLm1lZGlhRmlsZXNbMF0uZmlsZVVSTCYmKG8uQVNTRVRVUkk9dGhpcy5jcmVhdGl2ZS5tZWRpYUZpbGVzWzBdLmZpbGVVUkwpLHRoaXMucHJvZ3Jlc3MmJihvLkFEUExBWUhFQUQ9dGhpcy5wcm9ncmVzc0Zvcm1hdHRlZCgpKSksbnVsbCE9PSh0PXRoaXMuY3JlYXRpdmUpJiZ2b2lkIDAhPT10JiZudWxsIT09KGk9dC51bml2ZXJzYWxBZElkcykmJnZvaWQgMCE9PWkmJmkubGVuZ3RoJiYoby5VTklWRVJTQUxBRElEPXRoaXMuY3JlYXRpdmUudW5pdmVyc2FsQWRJZHMubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gZS5pZFJlZ2lzdHJ5LmNvbmNhdChcIiBcIixlLnZhbHVlKX0pKS5qb2luKFwiLFwiKSksdGhpcy5hZCYmKHRoaXMuYWQuc2VxdWVuY2UmJihvLlBPRFNFUVVFTkNFPXRoaXMuYWQuc2VxdWVuY2UpLHRoaXMuYWQuYWRUeXBlJiYoby5BRFRZUEU9dGhpcy5hZC5hZFR5cGUpLHRoaXMuYWQuYWRTZXJ2aW5nSWQmJihvLkFEU0VSVklOR0lEPXRoaXMuYWQuYWRTZXJ2aW5nSWQpLHRoaXMuYWQuY2F0ZWdvcmllcyYmdGhpcy5hZC5jYXRlZ29yaWVzLmxlbmd0aCYmKG8uQURDQVRFR09SSUVTPXRoaXMuYWQuY2F0ZWdvcmllcy5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlLnZhbHVlfSkpLmpvaW4oXCIsXCIpKSx0aGlzLmFkLmJsb2NrZWRBZENhdGVnb3JpZXMmJnRoaXMuYWQuYmxvY2tlZEFkQ2F0ZWdvcmllcy5sZW5ndGgmJihvLkJMT0NLRURBRENBVEVHT1JJRVM9dGhpcy5hZC5ibG9ja2VkQWRDYXRlZ29yaWVzKSksTi50cmFjayhlLG8sYSl9fSx7a2V5OlwiY29udmVydFRvVGltZWNvZGVcIix2YWx1ZTpmdW5jdGlvbihlKXtpZighTi5pc1ZhbGlkVGltZVZhbHVlKGUpKXJldHVyblwiXCI7dmFyIHQ9MWUzKmUscj1NYXRoLmZsb29yKHQvMzZlNSksaT1NYXRoLmZsb29yKHQvNmU0JTYwKSxuPU1hdGguZmxvb3IodC8xZTMlNjApLGE9TWF0aC5mbG9vcih0JTFlMyk7cmV0dXJuXCJcIi5jb25jYXQoTi5hZGRMZWFkaW5nWmVyb3MociwyKSxcIjpcIikuY29uY2F0KE4uYWRkTGVhZGluZ1plcm9zKGksMiksXCI6XCIpLmNvbmNhdChOLmFkZExlYWRpbmdaZXJvcyhuLDIpLFwiLlwiKS5jb25jYXQoTi5hZGRMZWFkaW5nWmVyb3MoYSwzKSl9fSx7a2V5OlwicHJvZ3Jlc3NGb3JtYXR0ZWRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnZlcnRUb1RpbWVjb2RlKHRoaXMucHJvZ3Jlc3MpfX1dKSxhfShLKTtlLlZBU1RDbGllbnQ9Y2UsZS5WQVNUUGFyc2VyPW9lLGUuVkFTVFRyYWNrZXI9ZGUsT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KSk7XG4iLCJpbXBvcnQgd2luZG93IGZyb20gXCJnbG9iYWxcIjtcbmltcG9ydCB7Y29tcGFuaW9uRm4sIGxpbmVhckZufSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHtWQVNUQ2xpZW50LCBWQVNUUGFyc2VyLCBWQVNUVHJhY2tlcn0gZnJvbSAnQGRhaWx5bW90aW9uL3Zhc3QtY2xpZW50JztcbmltcG9ydCB7VHJhY2tlZEFkfSBmcm9tIFwiLi90cmFja2VkLWFkXCI7XG5cbmV4cG9ydCBjbGFzcyBBZExvYWRlciB7XG4gICN2YXN0Q2xpZW50XG4gICN2YXN0UGFyc2VyXG4gICNvcHRpb25zXG4gICNhZFNlbGVjdG9yO1xuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge1ZBU1RDbGllbnR9IHZhc3RDbGllbnRcbiAgICogQHBhcmFtIHtWQVNUUGFyc2VyfSB2YXN0UGFyc2VyXG4gICAqIEBwYXJhbSB7QWRTZWxlY3Rvcn0gYWRTZWxlY3RvclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IodmFzdENsaWVudCwgdmFzdFBhcnNlciwgYWRTZWxlY3Rvciwgb3B0aW9ucykge1xuICAgIHRoaXMuI3Zhc3RDbGllbnQgPSB2YXN0Q2xpZW50O1xuICAgIHRoaXMuI3Zhc3RQYXJzZXIgPSB2YXN0UGFyc2VyO1xuICAgIHRoaXMuI2FkU2VsZWN0b3IgPSBhZFNlbGVjdG9yO1xuICAgIHRoaXMuI29wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgbG9hZEFkcygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKGFjY2VwdCwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7dXJsLCB4bWx9ID0gdGhpcy4jb3B0aW9ucztcblxuICAgICAgaWYgKCF1cmwgJiYgIXhtbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3htbCBvciB1cmwgb3B0aW9uIG11c3QgYmUgc2V0Jyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFkcyA9IHVybCA/IHRoaXMubG9hZEFkc1dpdGhVcmwodXJsKSA6IHRoaXMubG9hZEFkc1dpdGhYbWwoeG1sKTtcbiAgICAgIGFkcy50aGVuKGFjY2VwdCkuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge1hNTERvY3VtZW50fHN0cmluZ30geG1sXG4gICAqL1xuICBsb2FkQWRzV2l0aFhtbCh4bWwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKGFjY2VwdCwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgeG1sRG9jdW1lbnQ7XG5cbiAgICAgIGlmICh4bWwuY29uc3RydWN0b3IgPT09IHdpbmRvdy5YTUxEb2N1bWVudCkge1xuICAgICAgICB4bWxEb2N1bWVudCA9IHhtbDtcbiAgICAgIH0gZWxzZSBpZiAoeG1sLmNvbnN0cnVjdG9yID09PSBTdHJpbmcpIHtcbiAgICAgICAgeG1sRG9jdW1lbnQgPSAobmV3IHdpbmRvdy5ET01QYXJzZXIoKSkucGFyc2VGcm9tU3RyaW5nKHhtbCwgJ3RleHQveG1sJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3htbCBjb25maWcgb3B0aW9uIG11c3QgYmUgYSBTdHJpbmcgb3IgWE1MRG9jdW1lbnQnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy4jdmFzdFBhcnNlclxuICAgICAgICAucGFyc2VWQVNUKHhtbERvY3VtZW50KVxuICAgICAgICAudGhlbih0aGlzLiNhZFNlbGVjdG9yLnNlbGVjdEFkcylcbiAgICAgICAgLnRoZW4odGhpcy4jY3JlYXRlVHJhY2tlZEFkcylcbiAgICAgICAgLnRoZW4oYWNjZXB0KVxuICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICB9KVxuICB9XG5cbiAgbG9hZEFkc1dpdGhVcmwodXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChhY2NlcHQsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy4jdmFzdENsaWVudFxuICAgICAgICAuZ2V0KHVybCwge1xuICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy4jb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgICAgd3JhcHBlckxpbWl0OiB0aGlzLiNvcHRpb25zLndyYXBwZXJMaW1pdFxuICAgICAgICB9KVxuICAgICAgICAudGhlbih0aGlzLiNhZFNlbGVjdG9yLnNlbGVjdEFkcylcbiAgICAgICAgLnRoZW4odGhpcy4jY3JlYXRlVHJhY2tlZEFkcylcbiAgICAgICAgLnRoZW4oYWNjZXB0KVxuICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICB9KVxuICB9XG5cbiAgLyoqKiBwcml2YXRlIG1ldGhvZHMgKioqL1xuXG4gICNjcmVhdGVUcmFja2VkQWRzID0gYWRzID0+IHtcbiAgICBjb25zdCBjcmVhdGVUcmFja2VkQWQgPSBhZCA9PiB7XG4gICAgICBjb25zdCBsaW5lYXJBZFRyYWNrZXIgPVxuICAgICAgICBuZXcgVkFTVFRyYWNrZXIodGhpcy4jdmFzdENsaWVudCwgYWQsIGFkLmNyZWF0aXZlcy5maW5kKGxpbmVhckZuKSwgYWQuY3JlYXRpdmVzLmZpbmQoY29tcGFuaW9uRm4pKTtcblxuICAgICAgbGluZWFyQWRUcmFja2VyLm9uKCdjbGlja3Rocm91Z2gnLCBvbkNsaWNrVGhyb3VnaCk7XG5cbiAgICAgIGxldCBjb21wYW5pb25BZFRyYWNrZXIgPSBudWxsO1xuXG4gICAgICBjb25zdCBjb21wYW5pb25DcmVhdGl2ZSA9IGFkLmNyZWF0aXZlcy5maW5kKGNvbXBhbmlvbkZuKTtcblxuICAgICAgaWYgKGNvbXBhbmlvbkNyZWF0aXZlKSB7XG4gICAgICAgIC8vIEp1c3QgcGljayB0aGUgZmlyc3Qgc3VpdGFibGUgY29tcGFuaW9uIGFkIGZvciBub3dcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuI29wdGlvbnM7XG4gICAgICAgIGNvbnN0IHZhcmlhdGlvbiA9IGNvbXBhbmlvbkNyZWF0aXZlLnZhcmlhdGlvbnNcbiAgICAgICAgICAuZmlsdGVyKHYgPT4gdi5zdGF0aWNSZXNvdXJjZSlcbiAgICAgICAgICAuZmlsdGVyKHYgPT4gdi50eXBlLmluZGV4T2YoJ2ltYWdlJykgPT09IDApXG4gICAgICAgICAgLmZpbmQodiA9PiBwYXJzZUludCh2LndpZHRoLCAxMCkgPD0gb3B0aW9ucy5jb21wYW5pb24ubWF4V2lkdGggJiYgcGFyc2VJbnQodi5oZWlnaHQsIDEwKSA8PSBvcHRpb25zLmNvbXBhbmlvbi5tYXhIZWlnaHQpO1xuXG4gICAgICAgIGlmICh2YXJpYXRpb24pIHtcbiAgICAgICAgICBjb21wYW5pb25BZFRyYWNrZXIgPSBuZXcgVkFTVFRyYWNrZXIodGhpcy4jdmFzdENsaWVudCwgYWQsIGNvbXBhbmlvbkNyZWF0aXZlLCB2YXJpYXRpb24pO1xuICAgICAgICAgIGNvbXBhbmlvbkFkVHJhY2tlci5vbignY2xpY2t0aHJvdWdoJywgb25DbGlja1Rocm91Z2gpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgVHJhY2tlZEFkKGxpbmVhckFkVHJhY2tlciwgY29tcGFuaW9uQWRUcmFja2VyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRzLm1hcChjcmVhdGVUcmFja2VkQWQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uQ2xpY2tUaHJvdWdoKHVybCkge1xuICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcbn1cbiIsImltcG9ydCB7bGluZWFyRm59IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBBZFNlbGVjdG9yIHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YXN0UmVzcG9uc2VcbiAgICogQHJldHVybiB7b2JqZWN0W119XG4gICAqL1xuICBzZWxlY3RBZHModmFzdFJlc3BvbnNlKSB7XG4gICAgaWYgKCF2YXN0UmVzcG9uc2UuYWRzIHx8IHZhc3RSZXNwb25zZS5hZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGFkcyBmb3VuZCBpbiBWQVNUJyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRzV2l0aExpbmVhciA9IHZhc3RSZXNwb25zZS5hZHNcbiAgICAgIC5maWx0ZXIoYWQgPT4gYWQuY3JlYXRpdmVzLnNvbWUobGluZWFyRm4pKTtcblxuICAgIGlmICghYWRzV2l0aExpbmVhci5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbm8gbGluZWFyIGFkcyBmb3VuZCBpbiBWQVNUJyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRQb2QgPSBhZHNXaXRoTGluZWFyLmZpbHRlcihhZCA9PiBhZC5zZXF1ZW5jZSk7XG5cbiAgICBpZiAoYWRQb2QubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gYWRQb2Quc29ydCgoYWQxLCBhZDIpID0+IGFkMS5zZXF1ZW5jZSAtIGFkMi5zZXF1ZW5jZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3Qgc3RhbmRhbG9uZUFkcyA9IGFkc1dpdGhMaW5lYXIuZmlsdGVyKGFkID0+ICFhZFBvZC5pbmNsdWRlcyhhZCkpO1xuICAgICAgcmV0dXJuIHN0YW5kYWxvbmVBZHMuc2xpY2UoMCwgMSk7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqXG4gKiBAcGFyYW0ge1ZBU1RUcmFja2VyfSB2YXN0VHJhY2tlclxuICogQHJldHVybiB7b2JqZWN0fHVuZGVmaW5lZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZBU1RDb250ZXh0KHZhc3RUcmFja2VyKSB7XG4gIGlmICh2YXN0VHJhY2tlcikge1xuICAgIGNvbnN0IGFkID0gdmFzdFRyYWNrZXIuYWQ7XG4gICAgY29uc3QgY3JlYXRpdmUgPSB2YXN0VHJhY2tlci5jcmVhdGl2ZTtcbiAgICByZXR1cm4ge1xuICAgICAgbWVkaWFGaWxlczogY3JlYXRpdmUubWVkaWFGaWxlcy5tYXAobWVkaWFGaWxlID0+IE9iamVjdC5hc3NpZ24oe30sIG1lZGlhRmlsZSkpLFxuICAgICAgYWRTZXF1ZW5jZUlkOiBhZC5zZXF1ZW5jZSxcbiAgICAgIGFkSWQ6IGFkLmlkLFxuICAgICAgY3JlYXRpdmVBZElkOiBjcmVhdGl2ZS5pZFxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRyYWNrZWRBZCB7XG4gICNsaW5lYXJBZFRyYWNrZXJcbiAgI2NvbXBhbmlvblRyYWNrZXJcbiAgI3NraXBBZnRlckR1cmF0aW9uXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge1ZBU1RUcmFja2VyfSBsaW5lYXJBZFRyYWNrZXJcbiAgICogQHBhcmFtIHtWQVNUVHJhY2tlcn0gY29tcGFuaW9uVHJhY2tlclxuICAgKi9cbiAgY29uc3RydWN0b3IobGluZWFyQWRUcmFja2VyLCBjb21wYW5pb25UcmFja2VyKSB7XG4gICAgdGhpcy4jbGluZWFyQWRUcmFja2VyID0gbGluZWFyQWRUcmFja2VyO1xuICAgIHRoaXMuI2NvbXBhbmlvblRyYWNrZXIgPSBjb21wYW5pb25UcmFja2VyO1xuICAgIHRoaXMuI3NraXBBZnRlckR1cmF0aW9uID0gZmFsc2U7XG4gIH1cblxuICBnZXQgbGluZWFyQ3JlYXRpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xpbmVhckFkVHJhY2tlci5jcmVhdGl2ZTtcbiAgfVxuXG4gIGdldCBsaW5lYXJBZFRyYWNrZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xpbmVhckFkVHJhY2tlcjtcbiAgfVxuXG4gIGdldCBjb21wYW5pb25UcmFja2VyKCkge1xuICAgIHJldHVybiB0aGlzLiNjb21wYW5pb25UcmFja2VyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgc2tpcEFmdGVyRHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI3NraXBBZnRlckR1cmF0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICovXG4gIHNldCBza2lwQWZ0ZXJEdXJhdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuI3NraXBBZnRlckR1cmF0aW9uID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc1ZpZGVvTWVkaWEoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZWFyQ3JlYXRpdmUubWVkaWFGaWxlcy5zb21lKG1lZGlhRmlsZSA9PiBtZWRpYUZpbGUgJiYgbWVkaWFGaWxlLmFwaUZyYW1ld29yayA9PSBudWxsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwnO1xuaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnXG5cbmV4cG9ydCBjbGFzcyBVSSBleHRlbmRzIHZpZGVvanMuRXZlbnRUYXJnZXQge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgLy8gZHVyYXRpb24gaW4gc2Vjb25kcy4gdXNlZnVsIGZvciBzdHJlYW1pbmcgYWRzIHdoZXJlIGBwbGF5ZXIuZHVyYXRpb24oKWAgd2lsbCBhbHdheXMgZ2l2ZSAwLlxuICAgIHRoaXMuZHVyYXRpb24gPSAwO1xuXG4gICAgLyoqIEB0eXBlIHtPYmplY3R9ICovXG4gICAgdGhpcy5vcmlnaW5hbFN0YXRlID0ge1xuICAgICAgY29udHJvbHNFbmFibGVkOiBwbGF5ZXIuY29udHJvbHMoKSxcbiAgICAgIHNlZWtFbmFibGVkOiBwbGF5ZXIuY29udHJvbEJhci5wcm9ncmVzc0NvbnRyb2wuZW5hYmxlZCgpXG4gICAgfTtcbiAgfVxuXG4gIHNldFVwKCkge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXMucGxheWVyO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBjb25zdCBzZXR1cFByb2dyZXNzQ29udHJvbCA9ICgpID0+IHtcbiAgICAgIHBsYXllci5jb250cm9scyhvcHRpb25zLmNvbnRyb2xzRW5hYmxlZCk7XG4gICAgICBpZiAob3B0aW9ucy5zZWVrRW5hYmxlZCkge1xuICAgICAgICBwbGF5ZXIuY29udHJvbEJhci5wcm9ncmVzc0NvbnRyb2wuZW5hYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIuY29udHJvbEJhci5wcm9ncmVzc0NvbnRyb2wuZGlzYWJsZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldHVwQmxvY2tlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGJsb2NrZXIgPSB0aGlzLmJsb2NrZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBibG9ja2VyLmNsYXNzTmFtZSA9ICd2YXN0LWJsb2NrZXInO1xuICAgICAgYmxvY2tlci5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAocGxheWVyLnBhdXNlZCgpKSB7XG4gICAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgfTtcbiAgICAgIHBsYXllci5lbCgpLmluc2VydEJlZm9yZShibG9ja2VyLCBwbGF5ZXIuY29udHJvbEJhci5lbCgpKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXR1cFNraXBCdXR0b24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBza2lwQnV0dG9uRWxlbWVudCA9IHRoaXMuc2tpcEJ1dHRvbkVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBza2lwQnV0dG9uRWxlbWVudC5jbGFzc05hbWUgPSAndmFzdC1za2lwLWJ1dHRvbic7XG4gICAgICBza2lwQnV0dG9uRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgcGxheWVyLmVsKCkuYXBwZW5kQ2hpbGQoc2tpcEJ1dHRvbkVsZW1lbnQpO1xuXG4gICAgICBwbGF5ZXIub25lKCdhZHBsYXknLCB0aGlzLiNvbkFkUGxheSk7XG5cbiAgICAgIHNraXBCdXR0b25FbGVtZW50Lm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoKCcgJyArIHNraXBCdXR0b25FbGVtZW50LmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignIGVuYWJsZWQgJykgPj0gMCkge1xuICAgICAgICAgIHRoaXMudHJpZ2dlcignc2tpcCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0dXBQcm9ncmVzc0NvbnRyb2woKTtcbiAgICBzZXR1cEJsb2NrZXIoKTtcbiAgICBzZXR1cFNraXBCdXR0b24oKTtcbiAgfVxuXG4gIHRlYXJEb3duKCkge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXMucGxheWVyO1xuICAgIGNvbnN0IG9yaWdpbmFsU3RhdGUgPSB0aGlzLm9yaWdpbmFsU3RhdGU7XG5cbiAgICBwbGF5ZXIuY29udHJvbHMob3JpZ2luYWxTdGF0ZS5jb250cm9sc0VuYWJsZWQpO1xuXG4gICAgaWYgKG9yaWdpbmFsU3RhdGUuc2Vla0VuYWJsZWQpIHtcbiAgICAgIHBsYXllci5jb250cm9sQmFyLnByb2dyZXNzQ29udHJvbC5lbmFibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyLmNvbnRyb2xCYXIucHJvZ3Jlc3NDb250cm9sLmRpc2FibGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmJsb2NrZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmJsb2NrZXIpO1xuICAgIHRoaXMuc2tpcEJ1dHRvbkVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLnNraXBCdXR0b25FbGVtZW50KTtcblxuICAgIHBsYXllci5vZmYoJ2FkdGltZXVwZGF0ZScsIHRoaXMuI29uVGltZVVwZGF0ZSk7XG4gICAgcGxheWVyLm9mZignYWRwbGF5JywgdGhpcy4jb25BZFBsYXkpO1xuICB9XG5cbiAgI29uQWRQbGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNraXAgPSB0aGlzLm9wdGlvbnMuc2tpcDtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgICBpZiAoc2tpcCA+IDAgJiYgKHBsYXllci5kdXJhdGlvbigpIHx8IHRoaXMuZHVyYXRpb24pID49IHNraXApIHtcbiAgICAgIHRoaXMuc2tpcEJ1dHRvbkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBwbGF5ZXIub24oJ2FkdGltZXVwZGF0ZScsIHRoaXMuI29uVGltZVVwZGF0ZSk7XG4gICAgfVxuICAgIHBsYXllci5sb2FkaW5nU3Bpbm5lci5lbCgpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICAjb25UaW1lVXBkYXRlID0gKCkgPT4ge1xuICAgIHRoaXMucGxheWVyLmxvYWRpbmdTcGlubmVyLmVsKCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGNvbnN0IHRpbWVMZWZ0ID0gTWF0aC5jZWlsKHRoaXMub3B0aW9ucy5za2lwIC0gdGhpcy5wbGF5ZXIuY3VycmVudFRpbWUoKSk7XG5cbiAgICBpZiAodGltZUxlZnQgPiAwKSB7XG4gICAgICBkaXNhYmxlU2tpcCh0aGlzLnNraXBCdXR0b25FbGVtZW50KTtcbiAgICAgIHRoaXMuc2tpcEJ1dHRvbkVsZW1lbnQuaW5uZXJIVE1MID0gJ1NraXAgaW4gJyArIHRpbWVMZWZ0ICsgJy4uLic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuYWJsZVNraXAodGhpcy5za2lwQnV0dG9uRWxlbWVudCk7XG4gICAgICB0aGlzLnNraXBCdXR0b25FbGVtZW50LmlubmVySFRNTCA9ICdTa2lwJztcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc2tpcEJ1dHRvbkVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gaXNTa2lwRW5hYmxlZChza2lwQnV0dG9uRWxlbWVudCkge1xuICByZXR1cm4gKCcgJyArIHNraXBCdXR0b25FbGVtZW50LmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignIGVuYWJsZWQgJykgPiAtMTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc2tpcEJ1dHRvbkVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gZGlzYWJsZVNraXAoc2tpcEJ1dHRvbkVsZW1lbnQpIHtcbiAgaWYgKGlzU2tpcEVuYWJsZWQoc2tpcEJ1dHRvbkVsZW1lbnQpKSB7XG4gICAgc2tpcEJ1dHRvbkVsZW1lbnQuY2xhc3NOYW1lID1cbiAgICAgIHNraXBCdXR0b25FbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKCcgZW5hYmxlZCAnLCAnJyk7XG4gIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc2tpcEJ1dHRvbkVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gZW5hYmxlU2tpcChza2lwQnV0dG9uRWxlbWVudCkge1xuICBpZiAoIWlzU2tpcEVuYWJsZWQoc2tpcEJ1dHRvbkVsZW1lbnQpKSB7XG4gICAgc2tpcEJ1dHRvbkVsZW1lbnQuY2xhc3NOYW1lICs9ICcgZW5hYmxlZCAnO1xuICB9XG59XG4iLCIvKipcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtvYmplY3R8bnVsbH0gY29udGV4dFxuICogQHJldHVybiB7ZnVuY3Rpb24oKTogKn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uY2UoZm4sIGNvbnRleHQgPSBudWxsKSB7XG4gIGxldCByZXN1bHQ7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGZuKSB7XG4gICAgICByZXN1bHQgPSBmbi5hcHBseShjb250ZXh0IHx8IHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBmbiA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5lYXJGbihjcmVhdGl2ZSkge1xuICByZXR1cm4gY3JlYXRpdmUudHlwZSA9PT0gJ2xpbmVhcicgJiYgY3JlYXRpdmUubWVkaWFGaWxlcy5sZW5ndGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYW5pb25GbihjcmVhdGl2ZSkge1xuICByZXR1cm4gY3JlYXRpdmUudHlwZSA9PT0gJ2NvbXBhbmlvbic7XG59XG4iLCJpbXBvcnQgVlBBSURIVE1MNUNsaWVudCBmcm9tICd2cGFpZC1odG1sNS1jbGllbnQnO1xuaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwvd2luZG93JztcbmltcG9ydCBkb2N1bWVudCBmcm9tICdnbG9iYWwvZG9jdW1lbnQnO1xuaW1wb3J0IHtvbmNlfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7Y3JlYXRlVkFTVENvbnRleHR9IGZyb20gXCIuL2V2ZW50XCI7XG5cbmNvbnN0IFZBTElEX1RZUEVTID0gWydhcHBsaWNhdGlvbi94LWphdmFzY3JpcHQnLCAndGV4dC9qYXZhc2NyaXB0JywgJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnXTtcblxuZXhwb3J0IGNsYXNzIFZQQUlESGFuZGxlciB7XG4gICNmb3JjZVN0b3BEb25lXG4gICNjYW5jZWxsZWRcbiAgI3N0YXJ0ZWRcbiAgI3BsYXllclxuICAjb3B0aW9uc1xuICAjZXZlbnRUYXJnZXRcblxuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiNwbGF5ZXIgPSBwbGF5ZXI7XG4gICAgdGhpcy4jb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy4jZXZlbnRUYXJnZXQgPSBuZXcgdmlkZW9qcy5FdmVudFRhcmdldCgpO1xuICB9XG5cbiAgaGFuZGxlKHRyYWNrZXIpIHtcbiAgICB0aGlzLiNjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICB0aGlzLiNzdGFydGVkID0gZmFsc2VcbiAgICB0aGlzLiNmb3JjZVN0b3BEb25lID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuI29wdGlvbnM7XG4gICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLiNwbGF5ZXI7XG4gICAgICAvKipcbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR8bnVsbH1cbiAgICAgICAqL1xuICAgICAgbGV0IGNvbnRhaW5lciA9IG51bGw7XG4gICAgICBsZXQgY29udGFpbmVyQXR0cmlidXRlcyA9IHt9O1xuICAgICAgbGV0IGNvbnRhaW5lcklzRml4ZWQgPSBmYWxzZTtcblxuICAgICAgLyoqXG4gICAgICAgKiBcInRpbWVvdXRcIiB8IEVycm9yXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ3xFcnJvcn0gZXJyXG4gICAgICAgKiBAcGFyYW0gYWRVbml0XG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGFkVW5pdExvYWQgPSAoZXJyLCBhZFVuaXQpID0+IHtcbiAgICAgICAgbGV0IHZpZGVvRWxlbWVudDtcblxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb25BZENvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgIGNsZWFuVXAoKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkU3RvcHBlZCcpO1xuICAgICAgICAgIHBsYXllci50cmlnZ2VyKHtcbiAgICAgICAgICAgIHR5cGU6ICd2YXN0LmFkRW5kJyxcbiAgICAgICAgICAgIHZhc3Q6IGNyZWF0ZVZBU1RDb250ZXh0KHRyYWNrZXIpXG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcblxuICAgICAgICBhZFVuaXQuc3Vic2NyaWJlKCdBZFN0b3BwZWQnLCBvbkFkQ29tcGxldGUpO1xuXG4gICAgICAgIGNvbnN0IGZvcmNlU3RvcEFkID0gZXJyID0+IHtcbiAgICAgICAgICBpZiAoYWRVbml0ICYmICF0aGlzLiNmb3JjZVN0b3BEb25lKSB7XG4gICAgICAgICAgICBhZFVuaXQudW5zdWJzY3JpYmUoJ0FkU3RvcHBlZCcsIG9uQWRDb21wbGV0ZSk7XG4gICAgICAgICAgICBjb25zdCBvbkFkQ2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLiNmb3JjZVN0b3BEb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgY2xlYW5VcCgpO1xuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkU3RvcHBlZCcpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHN1YnNjcmliZVdpdGhUaW1lb3V0KGFkVW5pdCwgJ0FkU3RvcHBlZCcsIG9uQWRDYW5jZWwsIG9uQWRDYW5jZWwpO1xuICAgICAgICAgICAgYWRVbml0LnN0b3BBZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuI2ZvcmNlU3RvcERvbmUgPSB0cnVlO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jZXZlbnRUYXJnZXQub24oJ2ZvcmNlU3RvcEFkJywgZm9yY2VTdG9wQWQpO1xuXG4gICAgICAgIGlmICh0aGlzLiNjYW5jZWxsZWQpIHtcbiAgICAgICAgICBmb3JjZVN0b3BBZCgnUmVjZWl2ZWQgY2FuY2VsIHNpZ25hbCBmcm9tIHBsYXllcicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFuVXAoKSB7XG4gICAgICAgICAgcGxheWVyLmNvbnRyb2xCYXIuc2hvdygpO1xuXG4gICAgICAgICAgcGxheWVyLm9mZigncGxheWVycmVzaXplJywgcmVzaXplQWQpO1xuXG4gICAgICAgICAgaWYgKG9wdGlvbnMudnBhaWQudmlkZW9JbnN0YW5jZSA9PT0gJ25ldycgJiYgdmlkZW9FbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHZpZGVvRWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdnBhaWRDbGllbnQuZGVzdHJveSgpO1xuXG4gICAgICAgICAgLy8gU29tZSBWUEFJRCBjcmVhdGl2ZXMgZG9uJ3QgY2xlYW4gdXAgYWZ0ZXIgdGhlbXNlbHZlc1xuICAgICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIGlmIChjb250YWluZXJJc0ZpeGVkKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgICBjb25zdCBiZWZvcmUgPSBjb250YWluZXJBdHRyaWJ1dGVzO1xuICAgICAgICAgICAgICBjb25zdCBhZnRlciA9IGdldEF0dHJpYnV0ZXMoY29udGFpbmVyKTtcblxuICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhZnRlcikpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmVmb3JlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChiZWZvcmVba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzdG9yZSBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoa2V5LCBiZWZvcmVba2V5XSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZWQgYWRkZWRcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhiZWZvcmUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhZnRlci5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAvLyByZXN0b3JlIHJlbW92ZWRcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250YWluZXIgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9uSGFuZFNoYWtlID0gKGVycm9yLCB2ZXJzaW9uKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBsb2cuY29uc29sZShlcnJvcik7XG4gICAgICAgICAgICBmb3JjZVN0b3BBZCgnRXJyb3Igb24gVlBBSUQgaGFuZHNoYWtlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgY3JlYXRpdmVEYXRhID0ge1xuICAgICAgICAgICAgQWRQYXJhbWV0ZXJzOiBjcmVhdGl2ZS5hZFBhcmFtZXRlcnMgfHwgJydcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgY29uc3QgdmlkZW9JbnN0YW5jZSA9IG9wdGlvbnMudnBhaWQudmlkZW9JbnN0YW5jZTtcblxuICAgICAgICAgIGlmICh2aWRlb0luc3RhbmNlID09PSAnc2FtZScpIHtcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudCA9IHBsYXllci50ZWNoKHtraW5kYUtub3dXaGF0SW1Eb2luZzogdHJ1ZX0pLmVsKCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh2aWRlb0luc3RhbmNlID09PSAnbmV3Jykge1xuICAgICAgICAgICAgdmlkZW9FbGVtZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQuc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjA7IGxlZnQ6MDsgei1pbmRleDoyICFpbXBvcnRhbnQ7JztcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWRlb0VsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodmlkZW9JbnN0YW5jZSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3ZpZGVvSW5zdGFuY2V9IGlzIGFuIGludmFsaWQgdmlkZW9JbnN0YW5jZSB2YWx1ZS4gRGVmYXVsdGluZyB0byBcXCdub25lXFwnLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmlkZW9FbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBlbnZpcm9ubWVudFZhcnMgPSB7XG4gICAgICAgICAgICBzbG90OiBjb250YWluZXIsXG4gICAgICAgICAgICB2aWRlb1Nsb3Q6IHZpZGVvRWxlbWVudCxcbiAgICAgICAgICAgIC8vIHZpZGVvU2xvdENhbkF1dG9QbGF5OiB0cnVlXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHN1YnNjcmliZVdpdGhUaW1lb3V0KGFkVW5pdCwgJ0FkTG9hZGVkJywgb25BZExvYWRlZCwgZm9yY2VTdG9wQWQpO1xuXG4gICAgICAgICAgY29uc3Qgdmlld01vZGUgPSBwbGF5ZXIuaXNGdWxsc2NyZWVuKCkgPyAnZnVsbHNjcmVlbicgOiAnbm9ybWFsJztcblxuICAgICAgICAgIGFkVW5pdC5zdWJzY3JpYmUoJ0FkRXJyb3InLCBtZXNzYWdlID0+IHtcbiAgICAgICAgICAgIC8vIEdlbmVyYWwgVlBBSUQgRXJyb3IgPSA5MDEgKGluIFZBU1QgMyBzcGVjKVxuICAgICAgICAgICAgdHJhY2tlci5lcnJvcih7RVJST1JDT0RFOiA5MDF9KTtcbiAgICAgICAgICAgIHRoaXMuI2ZvcmNlU3RvcERvbmUgPSB0cnVlO1xuICAgICAgICAgICAgY2xlYW5VcCgpO1xuICAgICAgICAgICAgcmVqZWN0KGBGYXRhbCBWUEFJRCBFcnJvcjogJHt0eXBlb2YgbWVzc2FnZSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSA6IG1lc3NhZ2V9YCk7XG4gICAgICAgICAgICBwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3ZwYWlkLkFkRXJyb3InLCBlcnJvcjogbWVzc2FnZX0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYWRVbml0LmluaXRBZChwbGF5ZXIuY3VycmVudFdpZHRoKCksIHBsYXllci5jdXJyZW50SGVpZ2h0KCksIHZpZXdNb2RlLCAtMSwgY3JlYXRpdmVEYXRhLCBlbnZpcm9ubWVudFZhcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb25BZExvYWRlZCA9ICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy4jY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBmb3JjZVN0b3BBZCgnUmVjZWl2ZWQgY2FuY2VsIHNpZ25hbCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFkVW5pdC5zdWJzY3JpYmUoJ0FkU2tpcHBlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRyYWNrZXIuc2tpcCgpO1xuICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkU2tpcHBlZCcpO1xuICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoe1xuICAgICAgICAgICAgICB0eXBlOiAndmFzdC5hZFNraXAnLFxuICAgICAgICAgICAgICB2YXN0OiBjcmVhdGVWQVNUQ29udGV4dCh0cmFja2VyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGFkVW5pdC5zdWJzY3JpYmUoJ0FkVm9sdW1lQ2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFzdFZvbHVtZSA9IHBsYXllci52b2x1bWUoKVxuICAgICAgICAgICAgYWRVbml0LmdldEFkVm9sdW1lKChlcnJvciwgY3VycmVudFZvbHVtZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybjtcblxuICAgICAgICAgICAgICBpZiAoY3VycmVudFZvbHVtZSA9PT0gMCAmJiBsYXN0Vm9sdW1lID4gMCkge1xuICAgICAgICAgICAgICAgIHRyYWNrZXIuc2V0TXV0ZWQodHJ1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFZvbHVtZSA+IDAgJiYgbGFzdFZvbHVtZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRyYWNrZXIuc2V0TXV0ZWQoZmFsc2UpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcGxheWVyLnZvbHVtZShjdXJyZW50Vm9sdW1lKTtcbiAgICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVm9sdW1lQ2hhbmdlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGFkVW5pdC5zdWJzY3JpYmUoJ0FkSW1wcmVzc2lvbicsICgpID0+IHtcbiAgICAgICAgICAgIC8vIHdpbGwgYWxzbyB0cmlnZ2VyIGNyZWF0ZVZpZXdcbiAgICAgICAgICAgIHRyYWNrZXIudHJhY2tJbXByZXNzaW9uKCk7XG4gICAgICAgICAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRJbXByZXNzaW9uJyk7XG4gICAgICAgICAgfSk7XG5cblxuICAgICAgICAgIGFkVW5pdC5zdWJzY3JpYmUoJ0FkQ2xpY2tUaHJ1JyxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICAgICAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBwbGF5ZXJIYW5kbGVzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICh1cmwsIGlkLCBwbGF5ZXJIYW5kbGVzKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChwbGF5ZXJIYW5kbGVzKSB7XG4gICAgICAgICAgICAgICAgdHJhY2tlci5vbmNlKCdjbGlja3Rocm91Z2gnLCByZXNvbHZlZFVybCA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihyZXNvbHZlZFVybCwgJ19ibGFuaycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIFRoZSB1cmwgaGVyZSBpcyBhIGZhbGxiYWNrIC0gdGhlIHRyYWNrZXIgd2lsbCB1c2UgVkFTVCBjbGljayB1cmwgaWYgaXQgZXhpc3RzLlxuICAgICAgICAgICAgICB0cmFja2VyLmNsaWNrKHVybCk7XG4gICAgICAgICAgICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZENsaWNrVGhydScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBhZFVuaXQuc3Vic2NyaWJlKCdBZFZpZGVvRmlyc3RRdWFydGlsZScsICgpID0+IHtcbiAgICAgICAgICAgIHRyYWNrZXIudHJhY2soJ2ZpcnN0UXVhcnRpbGUnKTtcbiAgICAgICAgICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvRmlyc3RRdWFydGlsZScpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYWRVbml0LnN1YnNjcmliZSgnQWRWaWRlb01pZHBvaW50JywgKCkgPT4ge1xuICAgICAgICAgICAgdHJhY2tlci50cmFjaygnbWlkcG9pbnQnKTtcbiAgICAgICAgICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvTWlkcG9pbnQnKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGFkVW5pdC5zdWJzY3JpYmUoJ0FkVmlkZW9UaGlyZFF1YXJ0aWxlJywgKCkgPT4ge1xuICAgICAgICAgICAgdHJhY2tlci50cmFjaygndGhpcmRRdWFydGlsZScpO1xuICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9UaGlyZFF1YXJ0aWxlJyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBhZFVuaXQuc3Vic2NyaWJlKCdBZFZpZGVvQ29tcGxldGUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0cmFja2VyLnRyYWNrKCdjb21wbGV0ZScpO1xuICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9Db21wbGV0ZScpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYWRVbml0LnN1YnNjcmliZSgnQWRVc2VyQWNjZXB0SW52aXRhdGlvbicsICgpID0+IHtcbiAgICAgICAgICAgIHRyYWNrZXIuYWNjZXB0SW52aXRhdGlvbigpO1xuICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVXNlckFjY2VwdEludml0YXRpb24nKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGFkVW5pdC5zdWJzY3JpYmUoJ0FkVXNlck1pbmltaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgdHJhY2tlci5taW5pbWl6ZSgpO1xuICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVXNlck1pbmltaXplJyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBhZFVuaXQuc3Vic2NyaWJlKCdBZFVzZXJDbG9zZScsICgpID0+IHtcbiAgICAgICAgICAgIHRyYWNrZXIuY2xvc2UoKTtcbiAgICAgICAgICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFVzZXJDbG9zZScpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYWRVbml0LnN1YnNjcmliZSgnQWRQYXVzZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0cmFja2VyLnNldFBhdXNlZCh0cnVlKTtcbiAgICAgICAgICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFBhdXNlZCcpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYWRVbml0LnN1YnNjcmliZSgnQWRQbGF5aW5nJywgKCkgPT4ge1xuICAgICAgICAgICAgdHJhY2tlci5zZXRQYXVzZWQoZmFsc2UpO1xuICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkUGxheWluZycpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYWRVbml0LmdldEFkTGluZWFyKHdpdGhUaW1lb3V0KChlcnIsIGlzTGluZWFyKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLiNjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBmb3JjZVN0b3BBZCgnUmVjZWl2ZWQgY2FuY2VsIHNpZ25hbCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBmb3JjZVN0b3BBZChlcnIpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFpc0xpbmVhcikge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IHN1cHBvcnQgb3ZlcmxheSBiYW5uZXJcbiAgICAgICAgICAgICAgICBmb3JjZVN0b3BBZCgnTm9uLWxpbmVhciBub3Qgc3VwcG9ydGVkJylcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydExpbmVhckFkKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIGZvcmNlU3RvcEFkKCdVbmFibGUgdG8gZ2V0IG1vZGUgb2Ygb3BlcmF0aW9uOiBsaW5lYXIgb3Igbm9uLWxpbmVhcicpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgY29uc3Qgc3RhcnRMaW5lYXJBZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHBsYXllci5jb250cm9sQmFyLmhpZGUoKTtcblxuICAgICAgICAgICAgLy8gQSBWUEFJRCBhZHVuaXQgbWF5IChpbmNvcnJlY3RseT8pIGNhbGwgQWRTdGFydGVkIGFnYWluIGZvciB0aGUgZmlyc3QgcXVhcnRpbGUgZXZlbnRcbiAgICAgICAgICAgIGNvbnN0IG9uQWRTdGFydGVkT25jZSA9IG9uY2Uob25BZFN0YXJ0ZWQpO1xuICAgICAgICAgICAgc3Vic2NyaWJlV2l0aFRpbWVvdXQoYWRVbml0LCAnQWRTdGFydGVkJywgb25BZFN0YXJ0ZWRPbmNlLCBmb3JjZVN0b3BBZCk7XG4gICAgICAgICAgICBhZFVuaXQuc3RhcnRBZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9uQWRTdGFydGVkID0gKCkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy4jY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0aGlzLiNzdGFydGVkID0gdHJ1ZVxuICAgICAgICAgICAgdHJhY2tlci50cmFjaygnc3RhcnQnKTtcbiAgICAgICAgICAgIHBsYXllci5vbigncGxheWVycmVzaXplJywgcmVzaXplQWQpO1xuICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ2Fkcy1hZC1zdGFydGVkJyk7IC8vIG5vdGlmeSB2aWRlb2pzLWNvbnRyaWItYWRzXG4gICAgICAgICAgICBwbGF5ZXIudHJpZ2dlcih7XG4gICAgICAgICAgICAgIHR5cGU6ICd2YXN0LmFkU3RhcnQnLFxuICAgICAgICAgICAgICB2YXN0OiBjcmVhdGVWQVNUQ29udGV4dCh0cmFja2VyKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcmNlU3RvcEFkKCdSZWNlaXZlZCBjYW5jZWwgc2lnbmFsJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzaXplQWQgPSAoKSA9PiB7XG4gICAgICAgICAgYWRVbml0LnJlc2l6ZUFkKHBsYXllci5jdXJyZW50V2lkdGgoKSwgcGxheWVyLmN1cnJlbnRIZWlnaHQoKSwgcGxheWVyLmlzRnVsbHNjcmVlbigpID8gJ2Z1bGxzY3JlZW4nIDogJ25vcm1hbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm90IGFzeW5jIHNvIG5vIHRpbWVvdXQgaXMgcmVxdWlyZWRcbiAgICAgICAgYWRVbml0LmhhbmRzaGFrZVZlcnNpb24oJzIuMCcsIG9uSGFuZFNoYWtlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY3JlYXRpdmUgPSB0cmFja2VyLmNyZWF0aXZlO1xuXG4gICAgICBjb25zdCB2cGFpZE1lZGlhRmlsZSA9IGNyZWF0aXZlLm1lZGlhRmlsZXMuZmluZChtZWRpYUZpbGUgPT4gbWVkaWFGaWxlLmFwaUZyYW1ld29yayA9PT0gJ1ZQQUlEJyAmJiB2YWxpZE1pbWUobWVkaWFGaWxlKSk7XG5cbiAgICAgIGlmICghdnBhaWRNZWRpYUZpbGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFZQQUlEIG1lZGlhIGZpbGU6IG9ubHkgSmF2YVNjcmlwdCBpcyBzdXBwb3J0ZWQnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGVjaFNjcmVlbiA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xuXG4gICAgICBjb250YWluZXIgPSBmaW5kSHRtbENvbnRhaW5lcihvcHRpb25zKTtcbiAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgIC8vIGlkZWFsbHkgd2Ugd2FudCB0byBjcmVhdGUgYSBmcmVzaCBjb250YWluZXIgZWxlbWVudCAobm8gc3RhdGUgYXR0cmlidXRlcyAoaS5lLiAnZGF0YS1hZC1wcm9jZXNzZWQnKSBvclxuICAgICAgICAvLyBldmVudCBsaXN0ZW5lcnMgYXR0YWNoZWQgYnkgcHJldmlvdXMgYWQpXG4gICAgICAgIGNvbnRhaW5lciA9IGNyZWF0ZUh0bWxDb250YWluZXIob3B0aW9ucyk7XG4gICAgICAgIGNvbnRhaW5lcklzRml4ZWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lcklzRml4ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBjb250YWluZXJBdHRyaWJ1dGVzID0gZ2V0QXR0cmlidXRlcyhjb250YWluZXIpO1xuXG4gICAgICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCBwbGF5ZXIuY29udHJvbEJhci5lbCgpKTtcblxuICAgICAgY29uc3QgdnBhaWRDbGllbnQgPSBuZXcgVlBBSURIVE1MNUNsaWVudChjb250YWluZXIsIHRlY2hTY3JlZW4sIHt9KTtcblxuICAgICAgdnBhaWRDbGllbnQubG9hZEFkVW5pdCh2cGFpZE1lZGlhRmlsZS5maWxlVVJMLCBhZFVuaXRMb2FkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRPRE86IHJldmlldy4gbWF5IG5vdCBuZWVkLlxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy4jY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy4jc3RhcnRlZCkge1xuICAgICAgdGhpcy4jZXZlbnRUYXJnZXQudHJpZ2dlcignZm9yY2VTdG9wQWQnKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRNaW1lKG1lZGlhRmlsZSkge1xuICAgIHJldHVybiBWQUxJRF9UWVBFUy5pbmRleE9mKG1lZGlhRmlsZS5taW1lVHlwZS50cmltKCkpID4gLTE7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUh0bWxDb250YWluZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGNvbnRhaW5lcklkID0gb3B0aW9ucy52cGFpZC5jb250YWluZXJJZDtcbiAgICBjb25zdCBjb250YWluZXJDbGFzcyA9IG9wdGlvbnMudnBhaWQuY29udGFpbmVyQ2xhc3M7XG5cbiAgICBjb25zdCB2cGFpZENvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGlmIChjb250YWluZXJJZCkge1xuICAgICAgdnBhaWRDb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBjb250YWluZXJJZCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5lckNsYXNzKSB7XG4gICAgICB2cGFpZENvbnRhaW5lckVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb250YWluZXJDbGFzcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZwYWlkQ29udGFpbmVyRWxlbWVudDtcbn1cblxuXG5mdW5jdGlvbiBmaW5kSHRtbENvbnRhaW5lcihvcHRpb25zKSB7XG4gIGNvbnN0IGNvbnRhaW5lcklkID0gb3B0aW9ucy52cGFpZC5jb250YWluZXJJZDtcbiAgY29uc3QgY29udGFpbmVyQ2xhc3MgPSBvcHRpb25zLnZwYWlkLmNvbnRhaW5lckNsYXNzO1xuICBsZXQgdnBhaWRDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpO1xuXG4gIGlmICghdnBhaWRDb250YWluZXJFbGVtZW50KSB7XG4gICAgdnBhaWRDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjb250YWluZXJDbGFzcylbMF07XG4gIH1cblxuICByZXR1cm4gdnBhaWRDb250YWluZXJFbGVtZW50O1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJuIHt7fX1cbiAqL1xuZnVuY3Rpb24gZ2V0QXR0cmlidXRlcyhlbGVtZW50KSB7XG4gIGNvbnN0IG9iaiA9IHt9XG4gIGZvciAoY29uc3QgYXR0ciBvZiBlbGVtZW50LmF0dHJpYnV0ZXMpIHtcbiAgICBvYmpbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlclxuICogQHBhcmFtIHtmdW5jdGlvbigpfG51bGx9IHRpbWVvdXRGblxuICogQHJldHVybiB7ZnVuY3Rpb24oKTogdm9pZH1cbiAqL1xuXG5mdW5jdGlvbiB3aXRoVGltZW91dChoYW5kbGVyLCB0aW1lb3V0Rm4gPSBudWxsKSB7XG4gIC8vIFRPRE86IGNvbmZpZ3VyYWJsZSB0aW1lb3V0XG4gIGNvbnN0IGlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaGFuZGxlciA9ICgpID0+IHtcbiAgICB9O1xuICAgIGlmICh0aW1lb3V0Rm4pIHtcbiAgICAgIHRpbWVvdXRGbigpO1xuICAgIH1cbiAgfSwgMTAwMDApO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICBoYW5kbGVyLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGFkVW5pdFxuICogQHBhcmFtIHtzdHJpbmd9IGV2dE5hbWVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXJcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oRXJyb3IpfSB0aW1lb3V0Rm5cbiAqL1xuZnVuY3Rpb24gc3Vic2NyaWJlV2l0aFRpbWVvdXQoYWRVbml0LCBldnROYW1lLCBoYW5kbGVyLCB0aW1lb3V0Rm4pIHtcbiAgY29uc3QgZm4gPSB3aXRoVGltZW91dChoYW5kbGVyLCAoKSA9PiB7XG4gICAgaWYgKHRpbWVvdXRGbikge1xuICAgICAgdGltZW91dEZuKG5ldyBFcnJvcihgVGltZW91dCB3aGlsZSB3YWl0aW5nIGZvciAke2V2dE5hbWV9IGV2ZW50LmApKTtcbiAgICB9XG4gIH0pO1xuXG4gIGFkVW5pdC5zdWJzY3JpYmUoZXZ0TmFtZSwgZm4pO1xufVxuIiwidmFyIHRvcExldmVsID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOlxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge31cbnZhciBtaW5Eb2MgPSByZXF1aXJlKCdtaW4tZG9jdW1lbnQnKTtcblxudmFyIGRvY2N5O1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRvY2N5ID0gZG9jdW1lbnQ7XG59IGVsc2Uge1xuICAgIGRvY2N5ID0gdG9wTGV2ZWxbJ19fR0xPQkFMX0RPQ1VNRU5UX0NBQ0hFQDQnXTtcblxuICAgIGlmICghZG9jY3kpIHtcbiAgICAgICAgZG9jY3kgPSB0b3BMZXZlbFsnX19HTE9CQUxfRE9DVU1FTlRfQ0FDSEVANCddID0gbWluRG9jO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb2NjeTtcbiIsInZhciB3aW47XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgd2luID0gc2VsZjtcbn0gZWxzZSB7XG4gICAgd2luID0ge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2luO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTUVUSE9EUyA9IFtcbiAgICAnaGFuZHNoYWtlVmVyc2lvbicsXG4gICAgJ2luaXRBZCcsXG4gICAgJ3N0YXJ0QWQnLFxuICAgICdzdG9wQWQnLFxuICAgICdza2lwQWQnLCAvLyBWUEFJRCAyLjAgbmV3IG1ldGhvZFxuICAgICdyZXNpemVBZCcsXG4gICAgJ3BhdXNlQWQnLFxuICAgICdyZXN1bWVBZCcsXG4gICAgJ2V4cGFuZEFkJyxcbiAgICAnY29sbGFwc2VBZCcsXG4gICAgJ3N1YnNjcmliZScsXG4gICAgJ3Vuc3Vic2NyaWJlJ1xuXTtcblxudmFyIEVWRU5UUyA9IFtcbiAgICAnQWRMb2FkZWQnLFxuICAgICdBZFN0YXJ0ZWQnLFxuICAgICdBZFN0b3BwZWQnLFxuICAgICdBZFNraXBwZWQnLFxuICAgICdBZFNraXBwYWJsZVN0YXRlQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICdBZFNpemVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgJ0FkTGluZWFyQ2hhbmdlJyxcbiAgICAnQWREdXJhdGlvbkNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRFeHBhbmRlZENoYW5nZScsXG4gICAgJ0FkUmVtYWluaW5nVGltZUNoYW5nZScsIC8vIFtEZXByZWNhdGVkIGluIDIuMF0gYnV0IHdpbGwgYmUgc3RpbGwgZmlyZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgJ0FkVm9sdW1lQ2hhbmdlJyxcbiAgICAnQWRJbXByZXNzaW9uJyxcbiAgICAnQWRWaWRlb1N0YXJ0JyxcbiAgICAnQWRWaWRlb0ZpcnN0UXVhcnRpbGUnLFxuICAgICdBZFZpZGVvTWlkcG9pbnQnLFxuICAgICdBZFZpZGVvVGhpcmRRdWFydGlsZScsXG4gICAgJ0FkVmlkZW9Db21wbGV0ZScsXG4gICAgJ0FkQ2xpY2tUaHJ1JyxcbiAgICAnQWRJbnRlcmFjdGlvbicsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRVc2VyQWNjZXB0SW52aXRhdGlvbicsXG4gICAgJ0FkVXNlck1pbmltaXplJyxcbiAgICAnQWRVc2VyQ2xvc2UnLFxuICAgICdBZFBhdXNlZCcsXG4gICAgJ0FkUGxheWluZycsXG4gICAgJ0FkTG9nJyxcbiAgICAnQWRFcnJvcidcbl07XG5cbnZhciBHRVRURVJTID0gW1xuICAgICdnZXRBZExpbmVhcicsXG4gICAgJ2dldEFkV2lkdGgnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZEhlaWdodCcsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkRXhwYW5kZWQnLFxuICAgICdnZXRBZFNraXBwYWJsZVN0YXRlJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRSZW1haW5pbmdUaW1lJyxcbiAgICAnZ2V0QWREdXJhdGlvbicsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkVm9sdW1lJyxcbiAgICAnZ2V0QWRDb21wYW5pb25zJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRJY29ucycgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbl07XG5cbnZhciBTRVRURVJTID0gW1xuICAgICdzZXRBZFZvbHVtZSdcbl07XG5cblxuLyoqXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBnbG9iYWwgbWVtYmVyLiBUaGUgY2FsbGJhY2sgdXNlIG5vZGVqcyBlcnJvci1maXJzdCBjYWxsYmFjayBzdHlsZVxuICogQGNhbGxiYWNrIE5vZGVTdHlsZUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfVxuICogQHBhcmFtIHt1bmRlZmluZWR8b2JqZWN0fVxuICovXG5cblxuLyoqXG4gKiBJVlBBSURBZFVuaXRcbiAqXG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY3JlYXRpdmVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IHZpZGVvXG4gKi9cbmZ1bmN0aW9uIElWUEFJREFkVW5pdChjcmVhdGl2ZSwgZWwsIHZpZGVvKSB7fVxuXG5cbi8qKlxuICogaGFuZHNoYWtlVmVyc2lvblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBWUEFJRFZlcnNpb25cbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuaGFuZHNoYWtlVmVyc2lvbiA9IGZ1bmN0aW9uIChWUEFJRFZlcnNpb24sIGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBpbml0QWRcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAqIEBwYXJhbSB7c3RyaW5nfSB2aWV3TW9kZSBjYW4gYmUgJ25vcm1hbCcsICd0aHVtYm5haWwnIG9yICdmdWxsc2NyZWVuJ1xuICogQHBhcmFtIHtudW1iZXJ9IGRlc2lyZWRCaXRyYXRlIGluZGljYXRlcyB0aGUgZGVzaXJlZCBiaXRyYXRlIGluIGticHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY3JlYXRpdmVEYXRhXSB1c2VkIGZvciBhZGRpdGlvbmFsIGluaXRpYWxpemF0aW9uIGRhdGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBbZW52aXJvbm1lbnRWYXJzXSB1c2VkIGZvciBwYXNzaW5nIGltcGxlbWVudGF0aW9uLXNwZWNpZmljIG9mIGpzIHZlcnNpb25cbiAqIEBwYXJhbSB7Tm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuaW5pdEFkID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEsIGVudmlyb25tZW50VmFycywgY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHN0YXJ0QWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnN0YXJ0QWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc3RvcEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zdG9wQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc2tpcEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5za2lwQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogcmVzaXplQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnJlc2l6ZUFkID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBwYXVzZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5wYXVzZUFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHJlc3VtZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5yZXN1bWVBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBleHBhbmRBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZXhwYW5kQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogY29sbGFwc2VBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuY29sbGFwc2VBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBzdWJzY3JpYmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGhhbmRsZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIsIGNvbnRleHQpIHt9O1xuXG4vKipcbiAqIHN0YXJ0QWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXJcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyKSB7fTtcblxuXG5cbi8qKlxuICogZ2V0QWRMaW5lYXJcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkTGluZWFyID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkV2lkdGhcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkV2lkdGggPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRIZWlnaHRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkSGVpZ2h0ID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkRXhwYW5kZWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkRXhwYW5kZWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRTa2lwcGFibGVTdGF0ZVxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRTa2lwcGFibGVTdGF0ZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZFJlbWFpbmluZ1RpbWVcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkUmVtYWluaW5nVGltZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZER1cmF0aW9uXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZER1cmF0aW9uID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkVm9sdW1lXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZFZvbHVtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZENvbXBhbmlvbnNcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkQ29tcGFuaW9ucyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZEljb25zXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZEljb25zID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHNldEFkVm9sdW1lXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZVxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zZXRBZFZvbHVtZSA9IGZ1bmN0aW9uKHZvbHVtZSwgY2FsbGJhY2spIHt9O1xuXG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdNRVRIT0RTJywgTUVUSE9EUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdHRVRURVJTJywgR0VUVEVSUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdTRVRURVJTJywgU0VUVEVSUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdFVkVOVFMnLCAgRVZFTlRTKTtcblxuXG52YXIgVlBBSUQxX01FVEhPRFMgPSBNRVRIT0RTLmZpbHRlcihmdW5jdGlvbihtZXRob2QpIHtcbiAgICByZXR1cm4gWydza2lwQWQnXS5pbmRleE9mKG1ldGhvZCkgPT09IC0xO1xufSk7XG5cbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ2NoZWNrVlBBSURJbnRlcmZhY2UnLCBmdW5jdGlvbiBjaGVja1ZQQUlESW50ZXJmYWNlIChjcmVhdGl2ZSkge1xuICAgIHZhciByZXN1bHQgPSBWUEFJRDFfTUVUSE9EUy5ldmVyeShmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjcmVhdGl2ZVtrZXldID09PSAnZnVuY3Rpb24nO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJVlBBSURBZFVuaXQ7XG5cbmZ1bmN0aW9uIGFkZFN0YXRpY1RvSW50ZXJmYWNlKEludGVyZmFjZSwgbmFtZSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSW50ZXJmYWNlLCBuYW1lLCB7XG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG59XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIElWUEFJREFkVW5pdCA9IHJlcXVpcmUoJy4vSVZQQUlEQWRVbml0Jyk7XG52YXIgU3Vic2NyaWJlciA9IHJlcXVpcmUoJy4vc3Vic2NyaWJlcicpO1xudmFyIGNoZWNrVlBBSURJbnRlcmZhY2UgPSBJVlBBSURBZFVuaXQuY2hlY2tWUEFJREludGVyZmFjZTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBNRVRIT0RTID0gSVZQQUlEQWRVbml0Lk1FVEhPRFM7XG52YXIgRVJST1IgPSAnQWRFcnJvcic7XG52YXIgQURfQ0xJQ0sgPSAnQWRDbGlja1RocnUnO1xudmFyIEZJTFRFUkVEX0VWRU5UUyA9IElWUEFJREFkVW5pdC5FVkVOVFMuZmlsdGVyKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBldmVudCAhPSBBRF9DTElDSztcbn0pO1xuXG4vKipcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGdsb2JhbCBtZW1iZXIuIFRoZSBjYWxsYmFjayB1c2Ugbm9kZWpzIGVycm9yLWZpcnN0IGNhbGxiYWNrIHN0eWxlXG4gKiBAY2FsbGJhY2sgTm9kZVN0eWxlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9XG4gKiBAcGFyYW0ge3VuZGVmaW5lZHxvYmplY3R9XG4gKi9cblxuXG4vKipcbiAqIFZQQUlEQWRVbml0XG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0gVlBBSURDcmVhdGl2ZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2VsXSB0aGlzIHdpbGwgYmUgdXNlZCBpbiBpbml0QWQgZW52aXJvbm1lbnRWYXJzLnNsb3QgaWYgZGVmaW5lZFxuICogQHBhcmFtIHtIVE1MVmlkZW9FbGVtZW50fSBbdmlkZW9dIHRoaXMgd2lsbCBiZSB1c2VkIGluIGluaXRBZCBlbnZpcm9ubWVudFZhcnMudmlkZW9TbG90IGlmIGRlZmluZWRcbiAqL1xuZnVuY3Rpb24gVlBBSURBZFVuaXQoVlBBSURDcmVhdGl2ZSwgZWwsIHZpZGVvLCBpZnJhbWUpIHtcbiAgICB0aGlzLl9pc1ZhbGlkID0gY2hlY2tWUEFJREludGVyZmFjZShWUEFJRENyZWF0aXZlKTtcbiAgICBpZiAodGhpcy5faXNWYWxpZCkge1xuICAgICAgICB0aGlzLl9jcmVhdGl2ZSA9IFZQQUlEQ3JlYXRpdmU7XG4gICAgICAgIHRoaXMuX2VsID0gZWw7XG4gICAgICAgIHRoaXMuX3ZpZGVvRWwgPSB2aWRlbztcbiAgICAgICAgdGhpcy5faWZyYW1lID0gaWZyYW1lO1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVycyA9IG5ldyBTdWJzY3JpYmVyKCk7XG4gICAgICAgIHV0aWxzLnNldEZ1bGxTaXplU3R5bGUoZWwpO1xuICAgICAgICAkYWRkRXZlbnRzU3Vic2NyaWJlcnMuY2FsbCh0aGlzKTtcbiAgICB9XG59XG5cblZQQUlEQWRVbml0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSVZQQUlEQWRVbml0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogaXNWYWxpZFZQQUlEQWQgd2lsbCByZXR1cm4gaWYgdGhlIFZQQUlEQ3JlYXRpdmUgcGFzc2VkIGluIGNvbnN0cnVjdG9yIGlzIHZhbGlkIG9yIG5vdFxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS5pc1ZhbGlkVlBBSURBZCA9IGZ1bmN0aW9uIGlzVmFsaWRWUEFJREFkKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xufTtcblxuSVZQQUlEQWRVbml0Lk1FVEhPRFMuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAvL05PVEU6IHRoaXMgbWV0aG9kcyBhcmd1bWVudHMgb3JkZXIgYXJlIGltcGxlbWVudGVkIGRpZmZlcmVudGx5IGZyb20gdGhlIHNwZWNcbiAgICB2YXIgaWdub3JlcyA9IFtcbiAgICAgICAgJ3N1YnNjcmliZScsXG4gICAgICAgICd1bnN1YnNjcmliZScsXG4gICAgICAgICdpbml0QWQnXG4gICAgXTtcblxuICAgIGlmIChpZ25vcmVzLmluZGV4T2YobWV0aG9kKSAhPT0gLTEpIHJldHVybjtcblxuICAgIFZQQUlEQWRVbml0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJpYXR5ID0gSVZQQUlEQWRVbml0LnByb3RvdHlwZVttZXRob2RdLmxlbmd0aDtcbiAgICAgICAgLy8gVE9ETyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50c1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0a2FhbnRvbm92L2JsdWViaXJkL3dpa2kvT3B0aW1pemF0aW9uLWtpbGxlcnMjMzItbGVha2luZy1hcmd1bWVudHNcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSAoYXJpYXR5ID09PSBhcmdzLmxlbmd0aCkgPyBhcmdzLnBvcCgpIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCwgZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9jcmVhdGl2ZVttZXRob2RdLmFwcGx5KHRoaXMuX2NyZWF0aXZlLCBhcmdzKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgMCk7XG4gICAgfTtcbn0pO1xuXG5cbi8qKlxuICogaW5pdEFkIGNvbmNyZWF0ZSBpbXBsZW1lbnRhdGlvblxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICogQHBhcmFtIHtzdHJpbmd9IHZpZXdNb2RlIGNhbiBiZSAnbm9ybWFsJywgJ3RodW1ibmFpbCcgb3IgJ2Z1bGxzY3JlZW4nXG4gKiBAcGFyYW0ge251bWJlcn0gZGVzaXJlZEJpdHJhdGUgaW5kaWNhdGVzIHRoZSBkZXNpcmVkIGJpdHJhdGUgaW4ga2Jwc1xuICogQHBhcmFtIHtvYmplY3R9IFtjcmVhdGl2ZURhdGFdIHVzZWQgZm9yIGFkZGl0aW9uYWwgaW5pdGlhbGl6YXRpb24gZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IFtlbnZpcm9ubWVudFZhcnNdIHVzZWQgZm9yIHBhc3NpbmcgaW1wbGVtZW50YXRpb24tc3BlY2lmaWMgb2YganMgdmVyc2lvbiwgaWYgZWwgJiB2aWRlbyB3YXMgdXNlZCBpbiBjb25zdHJ1Y3RvciBzbG90ICYgdmlkZW9TbG90IHdpbGwgYmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICogQHBhcmFtIHtOb2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLmluaXRBZCA9IGZ1bmN0aW9uIGluaXRBZCh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSwgZW52aXJvbm1lbnRWYXJzLCBjYWxsYmFjaykge1xuICAgIGNyZWF0aXZlRGF0YSA9IGNyZWF0aXZlRGF0YSB8fCB7fTtcbiAgICBlbnZpcm9ubWVudFZhcnMgPSB1dGlscy5leHRlbmQoe1xuICAgICAgICBzbG90OiB0aGlzLl9lbCxcbiAgICAgICAgdmlkZW9TbG90OiB0aGlzLl92aWRlb0VsXG4gICAgfSwgZW52aXJvbm1lbnRWYXJzIHx8IHt9KTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGl2ZS5pbml0QWQod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEsIGVudmlyb25tZW50VmFycyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgdGhpcy5fc3Vic2NyaWJlcnMsIGVycm9yKTtcbiAgICB9LmJpbmQodGhpcyksIDApO1xufTtcblxuLyoqXG4gKiBzdWJzY3JpYmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGhhbmRsZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnQsIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy5zdWJzY3JpYmUoaGFuZGxlciwgZXZlbnQsIGNvbnRleHQpO1xufTtcblxuXG4vKipcbiAqIHVuc3Vic2NyaWJlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBoYW5kbGVyXG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMudW5zdWJzY3JpYmUoaGFuZGxlciwgZXZlbnQpO1xufTtcblxuLy9hbGlhc1xuVlBBSURBZFVuaXQucHJvdG90eXBlLm9uID0gVlBBSURBZFVuaXQucHJvdG90eXBlLnN1YnNjcmliZTtcblZQQUlEQWRVbml0LnByb3RvdHlwZS5vZmYgPSBWUEFJREFkVW5pdC5wcm90b3R5cGUudW5zdWJzY3JpYmU7XG5cbklWUEFJREFkVW5pdC5HRVRURVJTLmZvckVhY2goZnVuY3Rpb24oZ2V0dGVyKSB7XG4gICAgVlBBSURBZFVuaXQucHJvdG90eXBlW2dldHRlcl0gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHZhciByZXN1bHQsIGVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fY3JlYXRpdmVbZ2V0dGVyXSgpO1xuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvciwgcmVzdWx0KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAwKTtcbiAgICB9O1xufSk7XG5cbi8qKlxuICogc2V0QWRWb2x1bWVcbiAqXG4gKiBAcGFyYW0gdm9sdW1lXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuc2V0QWRWb2x1bWUgPSBmdW5jdGlvbiBzZXRBZFZvbHVtZSh2b2x1bWUsIGNhbGxiYWNrKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIHJlc3VsdCwgZXJyb3IgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRpdmUuc2V0QWRWb2x1bWUodm9sdW1lKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2NyZWF0aXZlLmdldEFkVm9sdW1lKCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgZXJyb3IgPSB1dGlscy52YWxpZGF0ZShyZXN1bHQgPT09IHZvbHVtZSwgJ2ZhaWxlZCB0byBhcHBseSB2b2x1bWU6ICcgKyB2b2x1bWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgdGhpcy5fc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpO1xuICAgIH0uYmluZCh0aGlzKSwgMCk7XG59O1xuXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHRoaXMuc3RvcEFkKCk7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMudW5zdWJzY3JpYmVBbGwoKTtcbn07XG5cbmZ1bmN0aW9uICRhZGRFdmVudHNTdWJzY3JpYmVycygpIHtcbiAgICAvLyBzb21lIGFkcyBpbXBsZW1lbnRcbiAgICAvLyBzbyB0aGV5IG9ubHkgaGFuZGxlIG9uZSBzdWJzY3JpYmVyXG4gICAgLy8gdG8gaGFuZGxlIHRoaXMgd2UgY3JlYXRlIG91ciBvbmVcbiAgICBGSUxURVJFRF9FVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRpdmUuc3Vic2NyaWJlKCR0cmlnZ2VyLmJpbmQodGhpcywgZXZlbnQpLCBldmVudCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIC8vIG1hcCB0aGUgY2xpY2sgZXZlbnQgdG8gYmUgYW4gb2JqZWN0IGluc3RlYWQgb2YgZGVwZW5kaW5nIG9mIHRoZSBvcmRlciBvZiB0aGUgYXJndW1lbnRzXG4gICAgLy8gYW5kIHRvIGJlIGNvbnNpc3RlbnQgd2l0aCB0aGUgZmxhc2hcbiAgICB0aGlzLl9jcmVhdGl2ZS5zdWJzY3JpYmUoJGNsaWNrVGhydUhvb2suYmluZCh0aGlzKSwgQURfQ0xJQ0spO1xuXG4gICAgLy8gYmVjYXVzZSB3ZSBhcmUgYWRkaW5nIHRoZSBlbGVtZW50IGluc2lkZSB0aGUgaWZyYW1lXG4gICAgLy8gdGhlIHVzZXIgaXMgbm90IGFibGUgdG8gY2xpY2sgaW4gdGhlIHZpZGVvXG4gICAgaWYgKHRoaXMuX3ZpZGVvRWwpIHtcbiAgICAgICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IHRoaXMuX2lmcmFtZS5jb250ZW50RG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB2YXIgdmlkZW9FbCA9IHRoaXMuX3ZpZGVvRWw7XG4gICAgICAgIGRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmlkZW9FbC5jbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uICRjbGlja1RocnVIb29rKHVybCwgaWQsIHBsYXllckhhbmRsZXMpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy50cmlnZ2VyU3luYyhBRF9DTElDSywge3VybDogdXJsLCBpZDogaWQsIHBsYXllckhhbmRsZXM6IHBsYXllckhhbmRsZXN9KTtcbn1cblxuZnVuY3Rpb24gJHRyaWdnZXIoZXZlbnQpIHtcbiAgICAvLyBUT0RPIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BldGthYW50b25vdi9ibHVlYmlyZC93aWtpL09wdGltaXphdGlvbi1raWxsZXJzIzMyLWxlYWtpbmctYXJndW1lbnRzXG4gICAgdGhpcy5fc3Vic2NyaWJlcnMudHJpZ2dlci5hcHBseSh0aGlzLl9zdWJzY3JpYmVycywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIHJlc3VsdCk7XG4gICAgfSBlbHNlIGlmIChlcnJvcikge1xuICAgICAgICBzdWJzY3JpYmVycy50cmlnZ2VyKEVSUk9SLCBlcnJvcik7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlEQWRVbml0O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciB1bmlxdWUgPSB1dGlscy51bmlxdWUoJ3ZwYWlkSWZyYW1lJyk7XG52YXIgVlBBSURBZFVuaXQgPSByZXF1aXJlKCcuL1ZQQUlEQWRVbml0Jyk7XG5cbnZhciBkZWZhdWx0VGVtcGxhdGUgPSAnPCFET0NUWVBFIGh0bWw+JyArXG4gICAgJzxodG1sIGxhbmc9XCJlblwiPicgK1xuICAgICc8aGVhZD48bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48L2hlYWQ+JyArXG4gICAgJzxib2R5IHN0eWxlPVwibWFyZ2luOjA7cGFkZGluZzowXCI+PGRpdiBjbGFzcz1cImFkLWVsZW1lbnRcIj48L2Rpdj4nICtcbiAgICAnPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwie3tpZnJhbWVVUkxfSlN9fVwiPjwvc2NyaXB0PicgK1xuICAgICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj4nICtcbiAgICAnd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShcXCd7XCJldmVudFwiOiBcInJlYWR5XCIsIFwiaWRcIjogXCJ7e2lmcmFtZUlEfX1cIn1cXCcsIFxcJ3t7b3JpZ2lufX1cXCcpOycgK1xuICAgICc8L3NjcmlwdD4nICtcbiAgICAnPC9ib2R5PicgK1xuICAgICc8L2h0bWw+JztcblxudmFyIEFEX1NUT1BQRUQgPSAnQWRTdG9wcGVkJztcblxuLyoqXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBnbG9iYWwgbWVtYmVyLiBUaGUgY2FsbGJhY2sgdXNlIG5vZGVqcyBlcnJvci1maXJzdCBjYWxsYmFjayBzdHlsZVxuICogQGNhbGxiYWNrIE5vZGVTdHlsZUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfVxuICogQHBhcmFtIHt1bmRlZmluZWR8b2JqZWN0fVxuICovXG5cbi8qKlxuICogVlBBSURIVE1MNUNsaWVudFxuICogQGNsYXNzXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGlmcmFtZSB0byBsb2FkIGFkVW5pdCBhbmQgYSBlbCB0byBhZGQgdG8gYWRVbml0IHNsb3RcbiAqIEBwYXJhbSB7SFRNTFZpZGVvRWxlbWVudH0gdmlkZW8gZGVmYXVsdCB2aWRlbyBlbGVtZW50IHRvIGJlIHVzZWQgYnkgYWRVbml0XG4gKiBAcGFyYW0ge29iamVjdH0gW3RlbXBsYXRlQ29uZmlnXSB0ZW1wbGF0ZTogaHRtbCB0ZW1wbGF0ZSB0byBiZSB1c2VkIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQsIGV4dHJhT3B0aW9uczogdG8gYmUgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgdGVtcGxhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbdnBhaWRPcHRpb25zXSB0aW1lb3V0OiB3aGVuIGxvYWRpbmcgYWRVbml0XG4gKi9cbmZ1bmN0aW9uIFZQQUlESFRNTDVDbGllbnQoZWwsIHZpZGVvLCB0ZW1wbGF0ZUNvbmZpZywgdnBhaWRPcHRpb25zKSB7XG4gICAgdGVtcGxhdGVDb25maWcgPSB0ZW1wbGF0ZUNvbmZpZyB8fCB7fTtcblxuICAgIHRoaXMuX2lkID0gdW5pcXVlKCk7XG4gICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICB0aGlzLl9mcmFtZUNvbnRhaW5lciA9IHV0aWxzLmNyZWF0ZUVsZW1lbnRJbkVsKGVsLCAnZGl2Jyk7XG4gICAgdGhpcy5fdmlkZW9FbCA9IHZpZGVvO1xuICAgIHRoaXMuX3ZwYWlkT3B0aW9ucyA9IHZwYWlkT3B0aW9ucyB8fCB7dGltZW91dDogMTAwMDB9O1xuXG4gICAgdGhpcy5fdGVtcGxhdGVDb25maWcgPSB7XG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZUNvbmZpZy50ZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGUsXG4gICAgICAgIGV4dHJhT3B0aW9uczogdGVtcGxhdGVDb25maWcuZXh0cmFPcHRpb25zIHx8IHt9XG4gICAgfTtcbn1cblxuLyoqXG4gKiBkZXN0cm95XG4gKlxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAkdW5sb2FkUHJldmlvdXNBZFVuaXQuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogaXNEZXN0cm95ZWRcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5pc0Rlc3Ryb3llZCA9IGZ1bmN0aW9uIGlzRGVzdHJveWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXN0cm95ZWQ7XG59O1xuXG4vKipcbiAqIGxvYWRBZFVuaXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYWRVUkwgdXJsIG9mIHRoZSBqcyBvZiB0aGUgYWRVbml0XG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5sb2FkQWRVbml0ID0gZnVuY3Rpb24gbG9hZEFkVW5pdChhZFVSTCwgY2FsbGJhY2spIHtcbiAgICBpZih0aGlzLl9vbkxvYWQpeyByZXR1cm4gfVxuXG4gICAgJHRocm93SWZEZXN0cm95ZWQuY2FsbCh0aGlzKTtcbiAgICAkdW5sb2FkUHJldmlvdXNBZFVuaXQuY2FsbCh0aGlzKTtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICB2YXIgZnJhbWUgPSB1dGlscy5jcmVhdGVJZnJhbWVXaXRoQ29udGVudChcbiAgICAgICAgdGhpcy5fZnJhbWVDb250YWluZXIsXG4gICAgICAgIHRoaXMuX3RlbXBsYXRlQ29uZmlnLnRlbXBsYXRlLFxuICAgICAgICB1dGlscy5leHRlbmQoe1xuICAgICAgICAgICAgaWZyYW1lVVJMX0pTOiBhZFVSTCxcbiAgICAgICAgICAgIGlmcmFtZUlEOiB0aGlzLmdldElEKCksXG4gICAgICAgICAgICBvcmlnaW46IGdldE9yaWdpbigpXG4gICAgICAgIH0sIHRoaXMuX3RlbXBsYXRlQ29uZmlnLmV4dHJhT3B0aW9ucylcbiAgICApO1xuXG4gICAgdGhpcy5fZnJhbWUgPSBmcmFtZTtcblxuICAgIHRoaXMuX29uTG9hZCA9IHV0aWxzLmNhbGxiYWNrVGltZW91dChcbiAgICAgICAgdGhpcy5fdnBhaWRPcHRpb25zLnRpbWVvdXQsXG4gICAgICAgIG9uTG9hZC5iaW5kKHRoaXMpLFxuICAgICAgICBvblRpbWVvdXQuYmluZCh0aGlzKVxuICAgICk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMuX29uTG9hZCk7XG5cbiAgICBmdW5jdGlvbiBvbkxvYWQgKGUpIHtcbiAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOiBmYWxzZSAqL1xuICAgICAgICAvL2Rvbid0IGNsZWFyIHRpbWVvdXRcbiAgICAgICAgaWYgKGUub3JpZ2luICE9PSBnZXRPcmlnaW4oKSkgcmV0dXJuO1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9kb24ndCBjbGVhciB0aW1lb3V0XG4gICAgICAgIGlmIChyZXN1bHQuaWQgIT09IHRoYXQuZ2V0SUQoKSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBhZFVuaXQsIGVycm9yLCBjcmVhdGVBZDtcbiAgICAgICAgaWYgKCF0aGF0Ll9mcmFtZS5jb250ZW50V2luZG93KSB7XG5cbiAgICAgICAgICAgIGVycm9yID0gJ3RoZSBpZnJhbWUgaXMgbm90IGFueW1vcmUgaW4gdGhlIERPTSB0cmVlJztcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3JlYXRlQWQgPSB0aGF0Ll9mcmFtZS5jb250ZW50V2luZG93LmdldFZQQUlEQWQ7XG4gICAgICAgICAgICBlcnJvciA9IHV0aWxzLnZhbGlkYXRlKHR5cGVvZiBjcmVhdGVBZCA9PT0gJ2Z1bmN0aW9uJywgJ3RoZSBhZCBkaWRuXFwndCByZXR1cm4gYSBmdW5jdGlvbiB0byBjcmVhdGUgYW4gYWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBhZEVsID0gdGhhdC5fZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWQtZWxlbWVudCcpO1xuICAgICAgICAgICAgYWRVbml0ID0gbmV3IFZQQUlEQWRVbml0KGNyZWF0ZUFkKCksIGFkRWwsIHRoYXQuX3ZpZGVvRWwsIHRoYXQuX2ZyYW1lKTtcbiAgICAgICAgICAgIGFkVW5pdC5zdWJzY3JpYmUoQURfU1RPUFBFRCwgJGFkRGVzdHJveWVkLmJpbmQodGhhdCkpO1xuICAgICAgICAgICAgZXJyb3IgPSB1dGlscy52YWxpZGF0ZShhZFVuaXQuaXNWYWxpZFZQQUlEQWQoKSwgJ3RoZSBhZGQgaXMgbm90IGZ1bGx5IGNvbXBsYWludCB3aXRoIFZQQUlEIHNwZWNpZmljYXRpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoYXQuX2FkVW5pdCA9IGFkVW5pdDtcbiAgICAgICAgJGRlc3Ryb3lMb2FkTGlzdGVuZXIuY2FsbCh0aGF0KTtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIGVycm9yID8gbnVsbCA6IGFkVW5pdCk7XG5cbiAgICAgICAgLy9jbGVhciB0aW1lb3V0XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgICAgY2FsbGJhY2soJ3RpbWVvdXQnLCBudWxsKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIHVubG9hZEFkVW5pdFxuICpcbiAqL1xuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUudW5sb2FkQWRVbml0ID0gZnVuY3Rpb24gdW5sb2FkQWRVbml0KCkge1xuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBnZXRJRCB3aWxsIHJldHVybiB0aGUgdW5pcXVlIGlkXG4gKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5nZXRJRCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG59O1xuXG5cbi8qKlxuICogJHJlbW92ZUVsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5mdW5jdGlvbiAkcmVtb3ZlRWwoa2V5KSB7XG4gICAgdmFyIGVsID0gdGhpc1trZXldO1xuICAgIGlmIChlbCAmJiBlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gJGFkRGVzdHJveWVkKCkge1xuICAgICRyZW1vdmVBZEVsZW1lbnRzLmNhbGwodGhpcyk7XG4gICAgZGVsZXRlIHRoaXMuX2FkVW5pdDtcbn1cblxuZnVuY3Rpb24gJHVubG9hZFByZXZpb3VzQWRVbml0KCkge1xuICAgICRyZW1vdmVBZEVsZW1lbnRzLmNhbGwodGhpcyk7XG4gICAgJGRlc3Ryb3lBZFVuaXQuY2FsbCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gJHJlbW92ZUFkRWxlbWVudHMoKSB7XG4gICAgJHJlbW92ZUVsLmNhbGwodGhpcywgJ19mcmFtZScpO1xuICAgICRkZXN0cm95TG9hZExpc3RlbmVyLmNhbGwodGhpcyk7XG59XG5cbi8qKlxuICogJGRlc3Ryb3lMb2FkTGlzdGVuZXJcbiAqXG4gKi9cbmZ1bmN0aW9uICRkZXN0cm95TG9hZExpc3RlbmVyKCkge1xuICAgIGlmICh0aGlzLl9vbkxvYWQpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLl9vbkxvYWQpO1xuICAgICAgICBkZWxldGUgdGhpcy5fb25Mb2FkO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiAkZGVzdHJveUFkVW5pdCgpIHtcbiAgICBpZiAodGhpcy5fYWRVbml0KSB7XG4gICAgICAgIHRoaXMuX2FkVW5pdC5zdG9wQWQoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2FkVW5pdDtcbiAgICB9XG59XG5cbi8qKlxuICogJHRocm93SWZEZXN0cm95ZWRcbiAqXG4gKi9cbmZ1bmN0aW9uICR0aHJvd0lmRGVzdHJveWVkKCkge1xuICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yICgnVlBBSURIVE1MNUNsaWVudCBhbHJlYWR5IGRlc3Ryb3llZCEnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldE9yaWdpbigpIHtcbiAgICBpZiggd2luZG93LmxvY2F0aW9uLm9yaWdpbiApIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArXG4gICAgICAgICAgICAod2luZG93LmxvY2F0aW9uLnBvcnQgPyAnOicgKyB3aW5kb3cubG9jYXRpb24ucG9ydDogJycpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREhUTUw1Q2xpZW50O1xud2luZG93LlZQQUlESFRNTDVDbGllbnQgPSBWUEFJREhUTUw1Q2xpZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBTdWJzY3JpYmVyKCkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzID0ge307XG59XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShoYW5kbGVyLCBldmVudE5hbWUsIGNvbnRleHQpIHtcbiAgICBpZiAoIXRoaXMuaXNIYW5kbGVyQXR0YWNoZWQoaGFuZGxlciwgZXZlbnROYW1lKSkge1xuICAgICAgICB0aGlzLmdldChldmVudE5hbWUpLnB1c2goe2hhbmRsZXI6IGhhbmRsZXIsIGNvbnRleHQ6IGNvbnRleHQsIGV2ZW50TmFtZTogZXZlbnROYW1lfSk7XG4gICAgfVxufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB1bnN1YnNjcmliZShoYW5kbGVyLCBldmVudE5hbWUpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVyc1tldmVudE5hbWVdID0gdGhpcy5nZXQoZXZlbnROYW1lKS5maWx0ZXIoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIgIT09IHN1YnNjcmliZXIuaGFuZGxlcjtcbiAgICB9KTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlQWxsID0gZnVuY3Rpb24gdW5zdWJzY3JpYmVBbGwoKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSB7fTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihldmVudE5hbWUsIGRhdGEpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIHN1YnNjcmliZXJzID0gdGhpcy5nZXQoZXZlbnROYW1lKVxuICAgICAgICAuY29uY2F0KHRoaXMuZ2V0KCcqJykpO1xuXG4gICAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGF0LmlzSGFuZGxlckF0dGFjaGVkKHN1YnNjcmliZXIuaGFuZGxlciwgc3Vic2NyaWJlci5ldmVudE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5oYW5kbGVyLmNhbGwoc3Vic2NyaWJlci5jb250ZXh0LCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG4gICAgfSk7XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS50cmlnZ2VyU3luYyA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciBzdWJzY3JpYmVycyA9IHRoaXMuZ2V0KGV2ZW50TmFtZSlcbiAgICAgICAgLmNvbmNhdCh0aGlzLmdldCgnKicpKTtcblxuICAgIHN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgc3Vic2NyaWJlci5oYW5kbGVyLmNhbGwoc3Vic2NyaWJlci5jb250ZXh0LCBkYXRhKTtcbiAgICB9KTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChldmVudE5hbWUpIHtcbiAgICBpZiAoIXRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLmlzSGFuZGxlckF0dGFjaGVkID0gZnVuY3Rpb24gaXNIYW5kbGVyQXR0YWNoZWQoaGFuZGxlciwgZXZlbnROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGV2ZW50TmFtZSkuc29tZShmdW5jdGlvbihzdWJzY3JpYmVyKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyID09PSBzdWJzY3JpYmVyLmhhbmRsZXI7XG4gICAgfSlcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3Vic2NyaWJlcjtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIG5vb3AgYSBlbXB0eSBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBub29wKCkge31cblxuLyoqXG4gKiB2YWxpZGF0ZSBpZiBpcyBub3QgdmFsaWRhdGUgd2lsbCByZXR1cm4gYW4gRXJyb3Igd2l0aCB0aGUgbWVzc2FnZVxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWYWxpZFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGUoaXNWYWxpZCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBpc1ZhbGlkID8gbnVsbCA6IG5ldyBFcnJvcihtZXNzYWdlKTtcbn1cblxuLyoqXG4gKiBjYWxsYmFja1RpbWVvdXQgaWYgdGhlIG9uU3VjY2VzcyBpcyBub3QgY2FsbGVkIGFuZCByZXR1cm5zIHRydWUgaW4gdGhlIHRpbWVsaW1pdCB0aGVuIG9uVGltZW91dCB3aWxsIGJlIGNhbGxlZFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lclxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25TdWNjZXNzXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblRpbWVvdXRcbiAqL1xuZnVuY3Rpb24gY2FsbGJhY2tUaW1lb3V0KHRpbWVyLCBvblN1Y2Nlc3MsIG9uVGltZW91dCkge1xuICAgIHZhciBjYWxsYmFjaywgdGltZW91dDtcblxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25TdWNjZXNzID0gbm9vcDtcbiAgICAgICAgb25UaW1lb3V0KCk7XG4gICAgfSwgdGltZXIpO1xuXG4gICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRPRE8gYXZvaWQgbGVha2luZyBhcmd1bWVudHNcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BldGthYW50b25vdi9ibHVlYmlyZC93aWtpL09wdGltaXphdGlvbi1raWxsZXJzIzMyLWxlYWtpbmctYXJndW1lbnRzXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKG9uU3VjY2Vzcy5hcHBseSh0aGlzLCBhcmdzKSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBjYWxsYmFjaztcbn1cblxuXG4vKipcbiAqIGNyZWF0ZUVsZW1lbnRJbkVsXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRJbkVsKHBhcmVudCwgdGFnTmFtZSwgaWQpIHtcbiAgICB2YXIgbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICBpZiAoaWQpIG5FbC5pZCA9IGlkO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuRWwpO1xuICAgIHJldHVybiBuRWw7XG59XG5cbi8qKlxuICogY3JlYXRlSWZyYW1lV2l0aENvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSBzaW1wbGUgdGVtcGxhdGUgdXNpbmcge3t2YXJ9fVxuICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQocGFyZW50LCB0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIHZhciBpZnJhbWUgPSBjcmVhdGVJZnJhbWUocGFyZW50LCBudWxsLCBkYXRhLnpJbmRleCk7XG4gICAgaWYgKCFzZXRJZnJhbWVDb250ZW50KGlmcmFtZSwgc2ltcGxlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpKSkgcmV0dXJuO1xuICAgIHJldHVybiBpZnJhbWU7XG59XG5cbi8qKlxuICogY3JlYXRlSWZyYW1lXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUlmcmFtZShwYXJlbnQsIHVybCwgekluZGV4KSB7XG4gICAgdmFyIG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIG5FbC5zcmMgPSB1cmwgfHwgJ2Fib3V0OmJsYW5rJztcbiAgICBuRWwubWFyZ2luV2lkdGggPSAnMCc7XG4gICAgbkVsLm1hcmdpbkhlaWdodCA9ICcwJztcbiAgICBuRWwuZnJhbWVCb3JkZXIgPSAnMCc7XG4gICAgbkVsLndpZHRoID0gJzEwMCUnO1xuICAgIG5FbC5oZWlnaHQgPSAnMTAwJSc7XG4gICAgc2V0RnVsbFNpemVTdHlsZShuRWwpO1xuXG4gICAgaWYoekluZGV4KXtcbiAgICAgICAgbkVsLnN0eWxlLnpJbmRleCA9IHpJbmRleDtcbiAgICB9XG5cbiAgICBuRWwuc2V0QXR0cmlidXRlKCdTQ1JPTExJTkcnLCdOTycpO1xuICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobkVsKTtcbiAgICByZXR1cm4gbkVsO1xufVxuXG5mdW5jdGlvbiBzZXRGdWxsU2l6ZVN0eWxlKGVsZW1lbnQpIHtcbiAgICBpZihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gJzAnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLm1hcmdpbiA9ICcwcHgnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnMHB4JztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIH1cbn1cblxuLyoqXG4gKiBzaW1wbGVUZW1wbGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAqL1xuZnVuY3Rpb24gc2ltcGxlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpIHtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpID8gSlNPTi5zdHJpbmdpZnkoZGF0YVtrZXldKSA6IGRhdGFba2V5XTtcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKG5ldyBSZWdFeHAoJ3t7JyArIGtleSArICd9fScsICdnJyksIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbi8qKlxuICogc2V0SWZyYW1lQ29udGVudFxuICpcbiAqIEBwYXJhbSB7SFRNTElmcmFtZUVsZW1lbnR9IGlmcmFtZUVsXG4gKiBAcGFyYW0gY29udGVudFxuICovXG5mdW5jdGlvbiBzZXRJZnJhbWVDb250ZW50KGlmcmFtZUVsLCBjb250ZW50KSB7XG4gICAgdmFyIGlmcmFtZURvYyA9IGlmcmFtZUVsLmNvbnRlbnRXaW5kb3cgJiYgaWZyYW1lRWwuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgICBpZiAoIWlmcmFtZURvYykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWZyYW1lRG9jLndyaXRlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cblxuLyoqXG4gKiBleHRlbmQgb2JqZWN0IHdpdGgga2V5cyBmcm9tIGFub3RoZXIgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRvRXh0ZW5kXG4gKiBAcGFyYW0ge29iamVjdH0gZnJvbVNvdXJjZVxuICovXG5mdW5jdGlvbiBleHRlbmQodG9FeHRlbmQsIGZyb21Tb3VyY2UpIHtcbiAgICBPYmplY3Qua2V5cyhmcm9tU291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB0b0V4dGVuZFtrZXldID0gZnJvbVNvdXJjZVtrZXldO1xuICAgIH0pO1xuICAgIHJldHVybiB0b0V4dGVuZDtcbn1cblxuXG4vKipcbiAqIHVuaXF1ZSB3aWxsIGNyZWF0ZSBhIHVuaXF1ZSBzdHJpbmcgZXZlcnl0aW1lIGlzIGNhbGxlZCwgc2VxdWVudGlhbGx5IGFuZCBwcmVmaXhlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAqL1xuZnVuY3Rpb24gdW5pcXVlKHByZWZpeCkge1xuICAgIHZhciBjb3VudCA9IC0xO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnXycgKyAoKytjb3VudCk7XG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbm9vcDogbm9vcCxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGUsXG4gICAgY2FsbGJhY2tUaW1lb3V0OiBjYWxsYmFja1RpbWVvdXQsXG4gICAgY3JlYXRlRWxlbWVudEluRWw6IGNyZWF0ZUVsZW1lbnRJbkVsLFxuICAgIGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50OiBjcmVhdGVJZnJhbWVXaXRoQ29udGVudCxcbiAgICBjcmVhdGVJZnJhbWU6IGNyZWF0ZUlmcmFtZSxcbiAgICBzZXRGdWxsU2l6ZVN0eWxlOiBzZXRGdWxsU2l6ZVN0eWxlLFxuICAgIHNpbXBsZVRlbXBsYXRlOiBzaW1wbGVUZW1wbGF0ZSxcbiAgICBzZXRJZnJhbWVDb250ZW50OiBzZXRJZnJhbWVDb250ZW50LFxuICAgIGV4dGVuZDogZXh0ZW5kLFxuICAgIHVuaXF1ZTogdW5pcXVlXG59O1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHZpZGVvanM7IiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuaW1wb3J0IHtWQVNUQ2xpZW50LCBWQVNUUGFyc2VyfSBmcm9tICdAZGFpbHltb3Rpb24vdmFzdC1jbGllbnQnO1xuaW1wb3J0IGRvY3VtZW50IGZyb20gJ2dsb2JhbC9kb2N1bWVudCc7XG5pbXBvcnQge1VJfSBmcm9tICcuL3VpJztcbmltcG9ydCB7QWRMb2FkZXJ9IGZyb20gJy4vYWQtbG9hZGVyJztcbmltcG9ydCB7QWRTZWxlY3Rvcn0gZnJvbSAnLi9hZC1zZWxlY3Rvcic7XG5pbXBvcnQge1ZQQUlESGFuZGxlcn0gZnJvbSAnLi92cGFpZC1oYW5kbGVyJztcbmltcG9ydCB7Y3JlYXRlVkFTVENvbnRleHR9IGZyb20gXCIuL2V2ZW50XCI7XG5jb25zdCBQbHVnaW4gPSB2aWRlb2pzLmdldFBsdWdpbigncGx1Z2luJyk7XG5cbmNvbnN0IERFRkFVTFRfT1BUSU9OUyA9IE9iamVjdC5mcmVlemUoe1xuICBzZWVrRW5hYmxlZDogZmFsc2UsXG4gIGNvbnRyb2xzRW5hYmxlZDogZmFsc2UsXG4gIHdyYXBwZXJMaW1pdDogMTAsXG4gIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgc2tpcDogMCxcbiAgdnBhaWQ6IHtcbiAgICBjb250YWluZXJJZDogdW5kZWZpbmVkLFxuICAgIGNvbnRhaW5lckNsYXNzOiAndmpzLXZwYWlkLWNvbnRhaW5lcicsXG4gICAgdmlkZW9JbnN0YW5jZTogJ25vbmUnXG4gIH0sXG4gIGNvbXBhbmlvbjoge1xuICAgIGVsZW1lbnRJZDogbnVsbCxcbiAgICBtYXhXaWR0aDogMCxcbiAgICBtYXhIZWlnaHQ6IDBcbiAgfVxufSk7XG5cbi8qKlxuICogVmFzdFBsdWdpblxuICovXG5jbGFzcyBWYXN0UGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBsYXllciBUaGUgdmlkZW9qcyBvYmplY3RcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgUGx1Z2luIGNvbmZpZ1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyKTtcbiAgICAvLyBDb3VsZCBiZSBpbml0aWFsaXplZCBhbHJlYWR5IGJ5IHVzZXJcbiAgICBpZiAodHlwZW9mIHBsYXllci5hZHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsYXllci5hZHMoe2RlYnVnOiBmYWxzZSwgbGl2ZUN1ZVBvaW50czogZmFsc2V9KTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhgdmlkZW9qc3gtdmFzdC1wbHVnaW4gcnVubmluZ2ApO1xuXG4gICAgb3B0aW9ucyA9IHZpZGVvanMubWVyZ2VPcHRpb25zKERFRkFVTFRfT1BUSU9OUywgb3B0aW9ucyB8fCB7fSk7XG5cbiAgICAvKiogQHR5cGUge1ZBU1RDbGllbnR9ICovXG4gICAgY29uc3QgdmFzdENsaWVudCA9IG5ldyBWQVNUQ2xpZW50KCk7XG4gICAgLyoqIEB0eXBlIHtUcmFja2VkQWRbXX0gKi9cbiAgICBjb25zdCBhZHMgPSBbXTtcbiAgICAvKiogQHR5cGUge1RyYWNrZWRBZHxudWxsfSAqL1xuICAgIGxldCBjdXJyZW50QWQgPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7TnVtYmVyfSAqL1xuICAgIGxldCBjdXJyZW50QWRJbmRleCA9IC0xO1xuICAgIC8qKiBAdHlwZSB7VlBBSURIYW5kbGVyfSAqL1xuICAgIGNvbnN0IHZwYWlkSGFuZGxlciA9IG5ldyBWUEFJREhhbmRsZXIocGxheWVyLCBvcHRpb25zKTtcbiAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgbGV0IHRpbWVkT3V0ID0gZmFsc2U7XG5cbiAgICBjb25zdCBhdXRvcGxheSA9IHBsYXllci5hdXRvcGxheSgpO1xuXG4gICAgcGxheWVyLm9uKCdhZHRpbWVvdXQnLCAoKSA9PiB7XG4gICAgICB0aW1lZE91dCA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBjb25zdCB1aSA9IG5ldyBVSShwbGF5ZXIsIG9wdGlvbnMpO1xuXG4gICAgZnVuY3Rpb24gc2tpcCAoKSB7XG4gICAgICBpZiAoY3VycmVudEFkPy5oYXNWaWRlb01lZGlhKCkpIHtcbiAgICAgICAgY3VycmVudEFkLmxpbmVhckFkVHJhY2tlci5za2lwKCk7XG4gICAgICAgIHBsYXllci50cmlnZ2VyKHtcbiAgICAgICAgICB0eXBlOiAndmFzdC5za2lwQWQnLFxuICAgICAgICAgIHZhc3Q6IGNyZWF0ZVZBU1RDb250ZXh0KGN1cnJlbnRBZC5saW5lYXJBZFRyYWNrZXIpXG4gICAgICAgIH0pO1xuICAgICAgICBwbGF5TmV4dEFkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdWkub24oJ3NraXAnLCBza2lwKTtcbiAgICB1aS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjdXJyZW50QWQubGluZWFyQWRUcmFja2VyLmNsaWNrKCk7XG4gICAgfSk7XG5cbiAgICBwbGF5ZXIub24oJ3JlYWR5Zm9ycHJlcm9sbCcsICgpID0+IHtcbiAgICAgIHN0YXJ0UHJlUm9sbCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWRMb2FkZXIgPSBuZXcgQWRMb2FkZXIodmFzdENsaWVudCwgbmV3IFZBU1RQYXJzZXIoKSwgbmV3IEFkU2VsZWN0b3IoKSwgb3B0aW9ucyk7XG4gICAgYWRMb2FkZXIubG9hZEFkcygpXG4gICAgICAudGhlbih0cmFja2VkQWRzID0+IHtcbiAgICAgICAgLy8gVE9ETzogZG9jdW1lbnQgdGhpcyB0aW1lb3V0XG4gICAgICAgIGlmICghdGltZWRPdXQpIHtcbiAgICAgICAgICBhZHMucHVzaCguLi50cmFja2VkQWRzKTtcbiAgICAgICAgICBjdXJyZW50QWQgPSBudWxsO1xuICAgICAgICAgIHBsYXllci50cmlnZ2VyKCdhZHNyZWFkeScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vIGF2b2lkIGludGVycnVwdGluZyBjb250ZW50IHBsYXliYWNrXG4gICAgICAgICAgLy8gVE9ETzogb3B0aW9uIHRvIGFsbG93IHRoaXMgaW50ZXJydXB0aW9uXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBZCBsb2FkIHRvb2sgdG9vIGxvbmcuJyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5sb2coYEFkIGNhbmNlbGxlZDogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ25vcHJlcm9sbCcpO1xuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgU291cmNlIE9iamVjdHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXk8TWVkaWFGaWxlPn0gbWVkaWFGaWxlcyAgQXJyYXkgb2YgbWVkaWEgZmlsZXNcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2Ygc291cmNlIG9iamVjdHNcbiAgICAgKi9cbiAgICBjb25zdCBjcmVhdGVTb3VyY2VPYmplY3RzID0gKG1lZGlhRmlsZXMpID0+IHtcbiAgICAgIHJldHVybiBtZWRpYUZpbGVzXG4gICAgICAgIC5maWx0ZXIobWVkaWFGaWxlID0+IG1lZGlhRmlsZS5hcGlGcmFtZXdvcmsgPT0gbnVsbClcbiAgICAgICAgLm1hcChtZWRpYUZpbGUgPT4gKHt0eXBlOiBtZWRpYUZpbGUubWltZVR5cGUsIHNyYzogbWVkaWFGaWxlLmZpbGVVUkx9KSk7XG4gICAgfVxuXG4gICAgY29uc3QgcGxheU5leHRBZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5leHRBZCA9IGFkc1tjdXJyZW50QWRJbmRleCArIDFdO1xuXG4gICAgICAvLyBkbyBub3QgY2hhbmdlIHVpIGZvciB2cGFpZFxuICAgICAgaWYgKG5leHRBZD8uaGFzVmlkZW9NZWRpYSgpKSB7XG4gICAgICAgIGlmICghY3VycmVudEFkPy5oYXNWaWRlb01lZGlhKCkpIHtcbiAgICAgICAgICB1aS5zZXRVcCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY3VycmVudEFkPy5oYXNWaWRlb01lZGlhKCkpIHtcbiAgICAgICAgICB1aS50ZWFyRG93bigpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0QWQpIHtcbiAgICAgICAgY3VycmVudEFkID0gbmV4dEFkO1xuICAgICAgICBjdXJyZW50QWRJbmRleCsrO1xuICAgICAgICBjb25zb2xlLmxvZyhgUGxheWluZyBhZCAke2N1cnJlbnRBZEluZGV4ICsgMX0vJHthZHMubGVuZ3RofWApO1xuXG4gICAgICAgIGlmIChjdXJyZW50QWQuaGFzVmlkZW9NZWRpYSgpKSB7XG4gICAgICAgICAgY29uc3QgYWxsTWVkaWFGaWxlcyA9IGN1cnJlbnRBZC5saW5lYXJDcmVhdGl2ZS5tZWRpYUZpbGVzO1xuXG4gICAgICAgICAgY29uc3Qgc3RyZWFtaW5nTWVkaWFGaWxlcyA9IGFsbE1lZGlhRmlsZXNcbiAgICAgICAgICAgIC5maWx0ZXIobWVkaWFGaWxlID0+IG1lZGlhRmlsZS5kZWxpdmVyeVR5cGUgPT09ICdzdHJlYW1pbmcnKVxuXG4gICAgICAgICAgY29uc3Qgbm9uU3RyZWFtaW5nTWVkaWFGaWxlcyA9IGFsbE1lZGlhRmlsZXNcbiAgICAgICAgICAgIC5maWx0ZXIobWVkaWFGaWxlID0+IG1lZGlhRmlsZS5kZWxpdmVyeVR5cGUgIT09ICdzdHJlYW1pbmcnKTtcblxuICAgICAgICAgIGlmIChub25TdHJlYW1pbmdNZWRpYUZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBsYXllci5zcmMoY3JlYXRlU291cmNlT2JqZWN0cyhub25TdHJlYW1pbmdNZWRpYUZpbGVzKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKHN0cmVhbWluZ01lZGlhRmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGFzc2V0RHVyYXRpb24gPSBjdXJyZW50QWQubGluZWFyQWRUcmFja2VyLmFzc2V0RHVyYXRpb247XG4gICAgICAgICAgICBpZiAoYXNzZXREdXJhdGlvbiA9PSBudWxsIHx8IGFzc2V0RHVyYXRpb24gPCAxKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdHJlYW1pbmcgYWRzIG11c3QgaGF2ZSBhIGR1cmF0aW9uJyk7XG4gICAgICAgICAgICAgIHBsYXlOZXh0QWQoKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxheWVyLnNyYyhjcmVhdGVTb3VyY2VPYmplY3RzKHN0cmVhbWluZ01lZGlhRmlsZXMpKTtcbiAgICAgICAgICAgIGN1cnJlbnRBZC5za2lwQWZ0ZXJEdXJhdGlvbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVpLmR1cmF0aW9uID0gY3VycmVudEFkLmxpbmVhckFkVHJhY2tlci5hc3NldER1cmF0aW9uIHx8IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdnBhaWRIYW5kbGVyLmhhbmRsZShjdXJyZW50QWQubGluZWFyQWRUcmFja2VyKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBwbGF5TmV4dEFkKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgIHBsYXlOZXh0QWQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNob3dDb21wYW5pb25BZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudEFkID0gbnVsbDtcbiAgICAgICAgY3VycmVudEFkSW5kZXggPSAtMTtcbiAgICAgICAgZW5kUHJlUm9sbCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHtzZXRVcEV2ZW50cywgdGVhckRvd25FdmVudHN9ID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IGFkUGxheUZuID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudEFkLnNraXBBZnRlckR1cmF0aW9uKSB7XG4gICAgICAgICAgY29uc3QgYWQgPSBjdXJyZW50QWQ7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEFkID09PSBhZCkge1xuICAgICAgICAgICAgICBza2lwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgYWQubGluZWFyQWRUcmFja2VyLmFzc2V0RHVyYXRpb24gKiAxMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY3VycmVudEFkLmxpbmVhckFkVHJhY2tlci5pbXByZXNzZWQgJiYgY3VycmVudEFkLmhhc1ZpZGVvTWVkaWEoKSkge1xuICAgICAgICAgIGN1cnJlbnRBZC5saW5lYXJBZFRyYWNrZXIudHJhY2tJbXByZXNzaW9uKCk7XG4gICAgICAgICAgcGxheWVyLnRyaWdnZXIoe1xuICAgICAgICAgICAgdHlwZTogJ3Zhc3QuYWRTdGFydCcsXG4gICAgICAgICAgICB2YXN0OiBjcmVhdGVWQVNUQ29udGV4dChjdXJyZW50QWQubGluZWFyQWRUcmFja2VyKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB0aW1ldXBkYXRlRm4gPSAoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50QWQpIHtcbiAgICAgICAgICBpZiAoaXNOYU4oY3VycmVudEFkLmxpbmVhckFkVHJhY2tlci5hc3NldER1cmF0aW9uKSkge1xuICAgICAgICAgICAgY3VycmVudEFkLmxpbmVhckFkVHJhY2tlci5hc3NldER1cmF0aW9uID0gcGxheWVyLmR1cmF0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnJlbnRBZC5saW5lYXJBZFRyYWNrZXIuc2V0UHJvZ3Jlc3MocGxheWVyLmN1cnJlbnRUaW1lKCkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBwYXVzZUZuID0gKCkgPT4ge1xuICAgICAgICBpZiAocGxheWVyLnJlbWFpbmluZ1RpbWUoKSA+IDApIHtcbiAgICAgICAgICBjdXJyZW50QWQubGluZWFyQWRUcmFja2VyLnNldFBhdXNlZCh0cnVlKTtcbiAgICAgICAgICBwbGF5ZXIub25lKCdhZHBsYXknLCAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50QWQubGluZWFyQWRUcmFja2VyLnNldFBhdXNlZChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIGFyZ3M6IGVyclxuICAgICAgY29uc3QgYWRFcnJvckZuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBNRURJQUZJTEVfUExBWUJBQ0tfRVJST1IgPSA0MDU7XG4gICAgICAgIGN1cnJlbnRBZC5saW5lYXJBZFRyYWNrZXIuZXJyb3Ioe0VSUk9SQ09ERTogTUVESUFGSUxFX1BMQVlCQUNLX0VSUk9SfSk7XG4gICAgICAgIC8vIERvIG5vdCB3YW50IHRvIHNob3cgVkFTVCByZWxhdGVkIGVycm9ycyB0byB0aGUgdXNlclxuICAgICAgICBwbGF5ZXIuZXJyb3IobnVsbCk7XG4gICAgICAgIHBsYXlOZXh0QWQoKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGZ1bGxTY3JlZW5GbiA9ICgpID0+IHtcbiAgICAgICAgLy8gZm9yICdmdWxsc2NyZWVuJyAmICdleGl0ZnVsbHNjcmVlbidcbiAgICAgICAgY3VycmVudEFkLmxpbmVhckFkVHJhY2tlci5zZXRGdWxsc2NyZWVuKHBsYXllci5pc0Z1bGxzY3JlZW4oKSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBtdXRlRm4gPSAoKCkgPT4ge1xuICAgICAgICBsZXQgcHJldmlvdXNNdXRlZCA9IHBsYXllci5tdXRlZCgpO1xuICAgICAgICBsZXQgcHJldmlvdXNWb2x1bWUgPSBwbGF5ZXIudm9sdW1lKCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBjb25zdCB2b2x1bWVOb3cgPSBwbGF5ZXIudm9sdW1lKCk7XG4gICAgICAgICAgY29uc3QgbXV0ZWROb3cgPSBwbGF5ZXIubXV0ZWQoKTtcblxuICAgICAgICAgIGlmIChwcmV2aW91c011dGVkICE9PSBtdXRlZE5vdykge1xuICAgICAgICAgICAgY3VycmVudEFkLmxpbmVhckFkVHJhY2tlci5zZXRNdXRlZChtdXRlZE5vdyk7XG4gICAgICAgICAgICBwcmV2aW91c011dGVkID0gbXV0ZWROb3c7XG4gICAgICAgICAgfSBlbHNlIGlmIChwcmV2aW91c1ZvbHVtZSAhPT0gdm9sdW1lTm93KSB7XG4gICAgICAgICAgICBpZiAocHJldmlvdXNWb2x1bWUgPiAwICYmIHZvbHVtZU5vdyA9PT0gMCkge1xuICAgICAgICAgICAgICBjdXJyZW50QWQubGluZWFyQWRUcmFja2VyLnNldE11dGVkKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcmV2aW91c1ZvbHVtZSA9PT0gMCAmJiB2b2x1bWVOb3cgPiAwKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRBZC5saW5lYXJBZFRyYWNrZXIuc2V0TXV0ZWQoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2aW91c1ZvbHVtZSA9IHZvbHVtZU5vdztcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KSgpO1xuXG4gICAgICBjb25zdCBhZEVuZGVkRm4gPSAoKSA9PiB7XG4gICAgICAgIC8vIEFkIGVuZGVkLCBub3Qgc2tpcHBlZFxuICAgICAgICBpZiAoY3VycmVudEFkLmhhc1ZpZGVvTWVkaWEoKSkge1xuICAgICAgICAgIGN1cnJlbnRBZC5saW5lYXJBZFRyYWNrZXIuY29tcGxldGUoKTtcbiAgICAgICAgICBwbGF5ZXIudHJpZ2dlcih7XG4gICAgICAgICAgICB0eXBlOiAndmFzdC5hZEVuZCcsXG4gICAgICAgICAgICB2YXN0OiBjcmVhdGVWQVNUQ29udGV4dChjdXJyZW50QWQubGluZWFyQWRUcmFja2VyKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHBsYXlOZXh0QWQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2V0VXBFdmVudHM6ICgpID0+IHtcbiAgICAgICAgICBwbGF5ZXIub24oJ2FkZW5kZWQnLCBhZEVuZGVkRm4pO1xuICAgICAgICAgIHBsYXllci5vbignYWRwbGF5JywgYWRQbGF5Rm4pO1xuICAgICAgICAgIHBsYXllci5vbignYWR0aW1ldXBkYXRlJywgdGltZXVwZGF0ZUZuKTtcbiAgICAgICAgICBwbGF5ZXIub24oJ2FkcGF1c2UnLCBwYXVzZUZuKTtcbiAgICAgICAgICBwbGF5ZXIub24oJ2FkZXJyb3InLCBhZEVycm9yRm4pO1xuICAgICAgICAgIHBsYXllci5vbignYWR2b2x1bWVjaGFuZ2UnLCBtdXRlRm4pO1xuICAgICAgICAgIHBsYXllci5vbignZnVsbHNjcmVlbmNoYW5nZScsIGZ1bGxTY3JlZW5Gbik7XG4gICAgICAgIH0sXG4gICAgICAgIHRlYXJEb3duRXZlbnRzOiAoKSA9PiB7XG4gICAgICAgICAgcGxheWVyLm9mZignYWRlbmRlZCcsIGFkRW5kZWRGbik7XG4gICAgICAgICAgcGxheWVyLm9mZignYWRwbGF5JywgYWRQbGF5Rm4pO1xuICAgICAgICAgIHBsYXllci5vZmYoJ2FkdGltZXVwZGF0ZScsIHRpbWV1cGRhdGVGbik7XG4gICAgICAgICAgcGxheWVyLm9mZignYWRwYXVzZScsIHBhdXNlRm4pO1xuICAgICAgICAgIHBsYXllci5vZmYoJ2FkZXJyb3InLCBhZEVycm9yRm4pO1xuICAgICAgICAgIHBsYXllci5vZmYoJ2Fkdm9sdW1lY2hhbmdlJywgbXV0ZUZuKTtcbiAgICAgICAgICBwbGF5ZXIub2ZmKCdmdWxsc2NyZWVuY2hhbmdlJywgZnVsbFNjcmVlbkZuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICBjb25zdCBzaG93Q29tcGFuaW9uQWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjb21wYW5pb25UcmFja2VyID0gY3VycmVudEFkLmNvbXBhbmlvblRyYWNrZXI7XG4gICAgICBjb25zdCBkZXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5jb21wYW5pb24uZWxlbWVudElkKTtcblxuICAgICAgaWYgKGNvbXBhbmlvblRyYWNrZXIgJiYgY29tcGFuaW9uVHJhY2tlci52YXJpYXRpb24gJiYgZGVzdCkge1xuICAgICAgICBjb25zdCB2YXJpYXRpb24gPSBjb21wYW5pb25UcmFja2VyLnZhcmlhdGlvbjtcblxuICAgICAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgIGNvbXBhbmlvblRyYWNrZXIuY2xpY2soKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBoeXBlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAgICAgaHlwZXJMaW5rLnNyYyA9ICcjJztcbiAgICAgICAgaHlwZXJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljayk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICBpbWFnZS5zcmMgPSB2YXJpYXRpb24uc3RhdGljUmVzb3VyY2U7XG5cbiAgICAgICAgaHlwZXJMaW5rLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICAgICAgICBkZXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBkZXN0LmFwcGVuZENoaWxkKGh5cGVyTGluayk7XG4gICAgICB9IGVsc2UgaWYgKGRlc3QpIHtcbiAgICAgICAgLy8gVE9ETzogb3B0aW9uIHRvIHJlbW92ZSBsYXN0IGNvbXBhbmlvbiBhZCB3aGVuIGNvbnRlbnQgcGxheXM/XG4gICAgICAgIGRlc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRQcmVSb2xsID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYFBsYXlpbmcgJHthZHMubGVuZ3RofSBhZHNgKTtcbiAgICAgIHBsYXllci5hZHMuc3RhcnRMaW5lYXJBZE1vZGUoKTtcbiAgICAgIHNldFVwRXZlbnRzKCk7XG4gICAgICBwbGF5TmV4dEFkKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZW5kUHJlUm9sbCA9ICgpID0+IHtcbiAgICAgIHBsYXllci5hZHMuZW5kTGluZWFyQWRNb2RlKCk7XG4gICAgICB0ZWFyRG93bkV2ZW50cygpO1xuICAgICAgY29uc29sZS5sb2coJ1BsYXlpbmcgY29udGVudCcpO1xuICAgIH1cbiAgfVxufVxuXG52aWRlb2pzLnJlZ2lzdGVyUGx1Z2luKCd2YXN0JywgVmFzdFBsdWdpbik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsid2luZG93IiwiY29tcGFuaW9uRm4iLCJsaW5lYXJGbiIsIlZBU1RDbGllbnQiLCJWQVNUUGFyc2VyIiwiVkFTVFRyYWNrZXIiLCJUcmFja2VkQWQiLCJBZExvYWRlciIsInZhc3RDbGllbnQiLCJ2YXN0UGFyc2VyIiwib3B0aW9ucyIsImFkU2VsZWN0b3IiLCJjb25zdHJ1Y3RvciIsImxvYWRBZHMiLCJQcm9taXNlIiwiYWNjZXB0IiwicmVqZWN0IiwidXJsIiwieG1sIiwiRXJyb3IiLCJhZHMiLCJsb2FkQWRzV2l0aFVybCIsImxvYWRBZHNXaXRoWG1sIiwidGhlbiIsImNhdGNoIiwieG1sRG9jdW1lbnQiLCJYTUxEb2N1bWVudCIsIlN0cmluZyIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInBhcnNlVkFTVCIsInNlbGVjdEFkcyIsImNyZWF0ZVRyYWNrZWRBZHMiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ3cmFwcGVyTGltaXQiLCJjcmVhdGVUcmFja2VkQWQiLCJhZCIsImxpbmVhckFkVHJhY2tlciIsImNyZWF0aXZlcyIsImZpbmQiLCJvbiIsIm9uQ2xpY2tUaHJvdWdoIiwiY29tcGFuaW9uQWRUcmFja2VyIiwiY29tcGFuaW9uQ3JlYXRpdmUiLCJ2YXJpYXRpb24iLCJ2YXJpYXRpb25zIiwiZmlsdGVyIiwidiIsInN0YXRpY1Jlc291cmNlIiwidHlwZSIsImluZGV4T2YiLCJwYXJzZUludCIsIndpZHRoIiwiY29tcGFuaW9uIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJtYXAiLCJvcGVuIiwiQWRTZWxlY3RvciIsInZhc3RSZXNwb25zZSIsImxlbmd0aCIsImFkc1dpdGhMaW5lYXIiLCJzb21lIiwiYWRQb2QiLCJzZXF1ZW5jZSIsInNvcnQiLCJhZDEiLCJhZDIiLCJzdGFuZGFsb25lQWRzIiwiaW5jbHVkZXMiLCJzbGljZSIsImNyZWF0ZVZBU1RDb250ZXh0IiwidmFzdFRyYWNrZXIiLCJjcmVhdGl2ZSIsIm1lZGlhRmlsZXMiLCJtZWRpYUZpbGUiLCJPYmplY3QiLCJhc3NpZ24iLCJhZFNlcXVlbmNlSWQiLCJhZElkIiwiaWQiLCJjcmVhdGl2ZUFkSWQiLCJjb21wYW5pb25UcmFja2VyIiwic2tpcEFmdGVyRHVyYXRpb24iLCJsaW5lYXJDcmVhdGl2ZSIsInZhbHVlIiwiaGFzVmlkZW9NZWRpYSIsImFwaUZyYW1ld29yayIsInZpZGVvanMiLCJVSSIsIkV2ZW50VGFyZ2V0IiwicGxheWVyIiwiZHVyYXRpb24iLCJvcmlnaW5hbFN0YXRlIiwiY29udHJvbHNFbmFibGVkIiwiY29udHJvbHMiLCJzZWVrRW5hYmxlZCIsImNvbnRyb2xCYXIiLCJwcm9ncmVzc0NvbnRyb2wiLCJlbmFibGVkIiwic2V0VXAiLCJzZXR1cFByb2dyZXNzQ29udHJvbCIsImVuYWJsZSIsImRpc2FibGUiLCJzZXR1cEJsb2NrZXIiLCJibG9ja2VyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25jbGljayIsInBhdXNlZCIsInBsYXkiLCJ0cmlnZ2VyIiwiZWwiLCJpbnNlcnRCZWZvcmUiLCJzZXR1cFNraXBCdXR0b24iLCJza2lwQnV0dG9uRWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsImFwcGVuZENoaWxkIiwib25lIiwib25BZFBsYXkiLCJlIiwiRXZlbnQiLCJwcm90b3R5cGUiLCJzdG9wUHJvcGFnYXRpb24iLCJ1bmRlZmluZWQiLCJ0ZWFyRG93biIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsIm9mZiIsIm9uVGltZVVwZGF0ZSIsIiNvbkFkUGxheSIsInNraXAiLCJsb2FkaW5nU3Bpbm5lciIsIiNvblRpbWVVcGRhdGUiLCJ0aW1lTGVmdCIsIk1hdGgiLCJjZWlsIiwiY3VycmVudFRpbWUiLCJkaXNhYmxlU2tpcCIsImlubmVySFRNTCIsImVuYWJsZVNraXAiLCJpc1NraXBFbmFibGVkIiwicmVwbGFjZSIsIm9uY2UiLCJmbiIsImNvbnRleHQiLCJyZXN1bHQiLCJhcHBseSIsImFyZ3VtZW50cyIsIlZQQUlESFRNTDVDbGllbnQiLCJWQUxJRF9UWVBFUyIsIlZQQUlESGFuZGxlciIsImZvcmNlU3RvcERvbmUiLCJjYW5jZWxsZWQiLCJzdGFydGVkIiwiZXZlbnRUYXJnZXQiLCJoYW5kbGUiLCJ0cmFja2VyIiwicmVzb2x2ZSIsImNvbnRhaW5lciIsImNvbnRhaW5lckF0dHJpYnV0ZXMiLCJjb250YWluZXJJc0ZpeGVkIiwiYWRVbml0TG9hZCIsImVyciIsImFkVW5pdCIsInZpZGVvRWxlbWVudCIsIm9uQWRDb21wbGV0ZSIsImNsZWFuVXAiLCJ2YXN0Iiwic3Vic2NyaWJlIiwiZm9yY2VTdG9wQWQiLCJ1bnN1YnNjcmliZSIsIm9uQWRDYW5jZWwiLCJzdWJzY3JpYmVXaXRoVGltZW91dCIsInN0b3BBZCIsInNob3ciLCJyZXNpemVBZCIsInZwYWlkIiwidmlkZW9JbnN0YW5jZSIsInZwYWlkQ2xpZW50IiwiZGVzdHJveSIsImJlZm9yZSIsImFmdGVyIiwiZ2V0QXR0cmlidXRlcyIsImtleSIsImVudHJpZXMiLCJoYXNPd25Qcm9wZXJ0eSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm9uSGFuZFNoYWtlIiwiZXJyb3IiLCJ2ZXJzaW9uIiwibG9nIiwiY29uc29sZSIsImNyZWF0aXZlRGF0YSIsIkFkUGFyYW1ldGVycyIsImFkUGFyYW1ldGVycyIsInRlY2giLCJraW5kYUtub3dXaGF0SW1Eb2luZyIsImNzc1RleHQiLCJlbnZpcm9ubWVudFZhcnMiLCJzbG90IiwidmlkZW9TbG90Iiwib25BZExvYWRlZCIsInZpZXdNb2RlIiwiaXNGdWxsc2NyZWVuIiwibWVzc2FnZSIsIkVSUk9SQ09ERSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbml0QWQiLCJjdXJyZW50V2lkdGgiLCJjdXJyZW50SGVpZ2h0IiwibGFzdFZvbHVtZSIsInZvbHVtZSIsImdldEFkVm9sdW1lIiwiY3VycmVudFZvbHVtZSIsInNldE11dGVkIiwidHJhY2tJbXByZXNzaW9uIiwicGxheWVySGFuZGxlcyIsInJlc29sdmVkVXJsIiwiY2xpY2siLCJ0cmFjayIsImFjY2VwdEludml0YXRpb24iLCJtaW5pbWl6ZSIsImNsb3NlIiwic2V0UGF1c2VkIiwiZ2V0QWRMaW5lYXIiLCJ3aXRoVGltZW91dCIsImlzTGluZWFyIiwic3RhcnRMaW5lYXJBZCIsImhpZGUiLCJvbkFkU3RhcnRlZE9uY2UiLCJvbkFkU3RhcnRlZCIsInN0YXJ0QWQiLCJoYW5kc2hha2VWZXJzaW9uIiwidnBhaWRNZWRpYUZpbGUiLCJ2YWxpZE1pbWUiLCJ0ZWNoU2NyZWVuIiwicXVlcnlTZWxlY3RvciIsImZpbmRIdG1sQ29udGFpbmVyIiwiY3JlYXRlSHRtbENvbnRhaW5lciIsImxvYWRBZFVuaXQiLCJmaWxlVVJMIiwiY2FuY2VsIiwibWltZVR5cGUiLCJ0cmltIiwiY29udGFpbmVySWQiLCJjb250YWluZXJDbGFzcyIsInZwYWlkQ29udGFpbmVyRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImVsZW1lbnQiLCJvYmoiLCJhdHRyIiwiYXR0cmlidXRlcyIsIm5hbWUiLCJoYW5kbGVyIiwidGltZW91dEZuIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImV2dE5hbWUiLCJQbHVnaW4iLCJnZXRQbHVnaW4iLCJERUZBVUxUX09QVElPTlMiLCJmcmVlemUiLCJlbGVtZW50SWQiLCJWYXN0UGx1Z2luIiwiZGVidWciLCJsaXZlQ3VlUG9pbnRzIiwibWVyZ2VPcHRpb25zIiwiY3VycmVudEFkIiwiY3VycmVudEFkSW5kZXgiLCJ2cGFpZEhhbmRsZXIiLCJ0aW1lZE91dCIsImF1dG9wbGF5IiwidWkiLCJwbGF5TmV4dEFkIiwic3RhcnRQcmVSb2xsIiwiYWRMb2FkZXIiLCJ0cmFja2VkQWRzIiwicHVzaCIsImZpbmFsbHkiLCJjcmVhdGVTb3VyY2VPYmplY3RzIiwic3JjIiwibmV4dEFkIiwiYWxsTWVkaWFGaWxlcyIsInN0cmVhbWluZ01lZGlhRmlsZXMiLCJkZWxpdmVyeVR5cGUiLCJub25TdHJlYW1pbmdNZWRpYUZpbGVzIiwiYXNzZXREdXJhdGlvbiIsInNob3dDb21wYW5pb25BZCIsImVuZFByZVJvbGwiLCJzZXRVcEV2ZW50cyIsInRlYXJEb3duRXZlbnRzIiwiYWRQbGF5Rm4iLCJpbXByZXNzZWQiLCJ0aW1ldXBkYXRlRm4iLCJpc05hTiIsInNldFByb2dyZXNzIiwicGF1c2VGbiIsInJlbWFpbmluZ1RpbWUiLCJhZEVycm9yRm4iLCJNRURJQUZJTEVfUExBWUJBQ0tfRVJST1IiLCJmdWxsU2NyZWVuRm4iLCJzZXRGdWxsc2NyZWVuIiwibXV0ZUZuIiwicHJldmlvdXNNdXRlZCIsIm11dGVkIiwicHJldmlvdXNWb2x1bWUiLCJ2b2x1bWVOb3ciLCJtdXRlZE5vdyIsImFkRW5kZWRGbiIsImNvbXBsZXRlIiwiZGVzdCIsIm9uQ2xpY2siLCJoeXBlckxpbmsiLCJhZGRFdmVudExpc3RlbmVyIiwiaW1hZ2UiLCJzdGFydExpbmVhckFkTW9kZSIsImVuZExpbmVhckFkTW9kZSIsInJlZ2lzdGVyUGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==