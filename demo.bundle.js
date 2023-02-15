/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_CallingExtensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/CallingExtensions */ \"../src/CallingExtensions.js\");\n/* harmony import */ var _src_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Constants */ \"../src/Constants.js\");\n// import CallingExtensions, { Constants } from \"@hubspot/calling-extensions-sdk\";\n\n\n\n\nconst callback = () => {\n  let rowId = 0;\n  const incomingMsgContainer = document.querySelector(\"#incomingMsgs\");\n  function appendMsg(data, event) {\n    const div = document.createElement(\"div\");\n    rowId += 1;\n    div.innerHTML = `<span>${rowId}: </span><span>${\n      event.type\n    }, ${JSON.stringify(data)}</span>`;\n    incomingMsgContainer.append(div);\n  }\n\n  const defaultSize = {\n    width: 400,\n    height: 600\n  };\n\n  const state = {};\n\n  const cti = new _src_CallingExtensions__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    debugMode: true,\n    eventHandlers: {\n      onReady: () => {\n        cti.initialized({\n          isLoggedIn: true,\n          sizeInfo: defaultSize\n        });\n      },\n      onDialNumber: (data, rawEvent) => {\n        appendMsg(data, rawEvent);\n        const { phoneNumber } = data;\n        state.phoneNumber = phoneNumber;\n        window.setTimeout(\n          () =>\n            cti.outgoingCall({\n              createEngagement: true,\n              phoneNumber\n            }),\n          500\n        );\n      },\n      onEngagementCreated: (data, rawEvent) => {\n        const { engagementId } = data;\n        state.engagementId = engagementId;\n        appendMsg(data, rawEvent);\n      },\n      onEndCall: () => {\n        window.setTimeout(() => {\n          cti.callEnded();\n        }, 500);\n      },\n      onVisibilityChanged: (data, rawEvent) => {\n        appendMsg(data, rawEvent);\n      }\n    }\n  });\n\n  const element = document.querySelector(\".controls\");\n  element.addEventListener(\"click\", event => {\n    const clickedButtonValue = event.target.value;\n    switch (clickedButtonValue) {\n      case \"initialized\":\n        cti.initialized({\n          isLoggedIn: true\n        });\n        break;\n      case \"log in\":\n        cti.userLoggedIn();\n        break;\n      case \"log out\":\n        cti.userLoggedOut();\n        break;\n      // Calls\n      case \"incoming call\":\n        window.setTimeout(() => {\n          cti.incomingCall();\n        }, 500);\n        break;\n      case \"outgoing call started\":\n        window.setTimeout(() => {\n          cti.outgoingCall({\n            createEngagement: \"true\",\n            phoneNumber: state.phoneNumber\n          });\n        }, 500);\n        break;\n      case \"call answered\":\n        cti.callAnswered();\n        break;\n      case \"call ended\":\n        cti.callEnded();\n        break;\n      case \"call completed\":\n        cti.callCompleted({\n          engagementId: state.engagementId\n        });\n        break;\n      case \"send error\":\n        cti.sendError({\n          type: _src_Constants__WEBPACK_IMPORTED_MODULE_1__.errorType.GENERIC,\n          message: \"This is a message shown in Hubspot UI\"\n        });\n        break;\n      case \"change size\":\n        defaultSize.width += 20;\n        defaultSize.height += 20;\n        cti.resizeWidget({\n          width: defaultSize.width,\n          height: defaultSize.height\n        });\n        break;\n      default:\n        break;\n    }\n  });\n};\n\nif (\n  document.readyState === \"interactive\" ||\n  document.readyState === \"complete\"\n) {\n  window.setTimeout(() => callback(), 1000);\n} else {\n  document.addEventListener(\"DOMContentLoaded\", callback);\n}\n\n\n//# sourceURL=webpack://calling-extensions-sdk-demo/./index.js?");

/***/ }),

/***/ "../src/CallingExtensions.js":
/*!***********************************!*\
  !*** ../src/CallingExtensions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _IFrameManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IFrameManager */ \"../src/IFrameManager.js\");\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants */ \"../src/Constants.js\");\n\"use es6\";\n\n\n\n\n/*\n * CallingExtensions allows call providers to communicate with HubSpot.\n */\nclass CallingExtensions {\n  constructor(options) {\n    if (!options || !options.eventHandlers) {\n      throw new Error(\"Invalid options or missing eventHandlers.\");\n    }\n\n    this.options = options;\n\n    this.iFrameManager = new _IFrameManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      debugMode: options.debugMode,\n      onMessageHandler: event => this.onMessageHandler(event)\n    });\n  }\n\n  initialized(userData) {\n    this.sendMessage({\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__.messageType.INITIALIZED,\n      data: userData\n    });\n  }\n\n  userLoggedIn() {\n    this.sendMessage({\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__.messageType.LOGGED_IN\n    });\n  }\n\n  userLoggedOut() {\n    this.sendMessage({\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__.messageType.LOGGED_OUT\n    });\n  }\n\n  incomingCall(callDetails) {\n    this.sendMessage({\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__.messageType.INCOMING_CALL,\n      data: callDetails\n    });\n  }\n\n  outgoingCall(callDetails) {\n    this.sendMessage({\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__.messageType.OUTGOING_CALL_STARTED,\n      data: callDetails\n    });\n  }\n\n  callAnswered() {\n    this.sendMessage({\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__.messageType.CALL_ANSWERED\n    });\n  }\n\n  callData(data) {\n    this.sendMessage({\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__.messageType.CALL_DATA,\n      data\n    });\n  }\n\n  callEnded(engagementData) {\n    this.sendMessage({\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__.messageType.CALL_ENDED,\n      data: engagementData\n    });\n  }\n\n  callCompleted(callCompletedData) {\n    this.sendMessage({\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__.messageType.CALL_COMPLETED,\n      data: callCompletedData\n    });\n  }\n\n  sendError(errorData) {\n    this.sendMessage({\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__.messageType.ERROR,\n      data: errorData\n    });\n  }\n\n  resizeWidget(sizeInfo) {\n    this.sendMessage({\n      type: _Constants__WEBPACK_IMPORTED_MODULE_1__.messageType.RESIZE_WIDGET,\n      data: sizeInfo\n    });\n  }\n\n  sendMessage(message) {\n    this.iFrameManager.sendMessage(message);\n  }\n\n  onMessageHandler(event) {\n    const { type, data } = event;\n    const { eventHandlers } = this.options;\n    let handler;\n    switch (type) {\n      case _Constants__WEBPACK_IMPORTED_MODULE_1__.messageType.READY: {\n        const { onReady } = eventHandlers;\n        handler = onReady;\n        break;\n      }\n      case _Constants__WEBPACK_IMPORTED_MODULE_1__.messageType.DIAL_NUMBER: {\n        const { onDialNumber } = eventHandlers;\n        handler = onDialNumber;\n        break;\n      }\n      case _Constants__WEBPACK_IMPORTED_MODULE_1__.messageType.ENGAGEMENT_CREATED: {\n        const { onEngagementCreated } = eventHandlers;\n        handler = onEngagementCreated;\n        break;\n      }\n      case _Constants__WEBPACK_IMPORTED_MODULE_1__.messageType.END_CALL: {\n        const { onEndCall } = eventHandlers;\n        handler = onEndCall;\n        break;\n      }\n      case _Constants__WEBPACK_IMPORTED_MODULE_1__.messageType.VISIBILITY_CHANGED: {\n        const { onVisibilityChanged } = eventHandlers;\n        handler = onVisibilityChanged;\n        break;\n      }\n      case _Constants__WEBPACK_IMPORTED_MODULE_1__.messageType.SET_CALL_STATE: {\n        const { onSetCallState } = eventHandlers;\n        handler = onSetCallState;\n        break;\n      }\n      default: {\n        // Send back a message indicating an unknown event is received\n        this.sendMessage({\n          type: _Constants__WEBPACK_IMPORTED_MODULE_1__.messageType.ERROR,\n          data: {\n            type: _Constants__WEBPACK_IMPORTED_MODULE_1__.errorType.UNKNOWN_MESSAGE_TYPE,\n            data: {\n              originalMessage: event\n            }\n          }\n        });\n        break;\n      }\n    }\n    handler = handler || eventHandlers.defaultEventHandler;\n    if (handler) {\n      handler(data, event);\n    } else {\n      console.error(\n        `No event handler is available to handle message of type: ${type}`\n      );\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallingExtensions);\n\n\n//# sourceURL=webpack://calling-extensions-sdk-demo/../src/CallingExtensions.js?");

/***/ }),

/***/ "../src/Constants.js":
/*!***************************!*\
  !*** ../src/Constants.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"VERSION\": () => (/* binding */ VERSION),\n/* harmony export */   \"errorType\": () => (/* binding */ errorType),\n/* harmony export */   \"messageType\": () => (/* binding */ messageType)\n/* harmony export */ });\n\"use es6\";\n\nconst VERSION = \"0.0.1\";\n\nconst messageTypeList = [\n  \"CALL_ANSWERED\",\n  \"CALL_COMPLETED\",\n  \"CALL_DATA\",\n  \"CALL_ENDED\",\n  \"DIAL_NUMBER\",\n  \"ENGAGEMENT_CREATED\",\n\n  \"END_CALL\",\n  \"ERROR\",\n  \"INCOMING_CALL\",\n  \"INITIALIZED\",\n  \"LOGGED_IN\",\n  \"LOGGED_OUT\",\n  \"OUTGOING_CALL_STARTED\",\n  \"READY\",\n  \"RESIZE_WIDGET\",\n  \"SET_CALL_STATE\",\n  \"SET_WIDGET_URL\",\n  \"SYNC\",\n  \"SYNC_ACK\",\n  \"SYNC_ACK_FAILED\",\n  \"UNLOADING\",\n  \"VISIBILITY_CHANGED\"\n];\n\nconst errorTypeList = [\"UNKNOWN_MESSAGE_TYPE\", \"GENERIC\"];\n\nfunction mirrorKeys(keyList) {\n  const keyObject = {};\n  keyList.forEach(keyName => {\n    keyObject[keyName] = keyName;\n  });\n  return keyObject;\n}\n\nconst messageType = mirrorKeys(messageTypeList);\nconst errorType = mirrorKeys(errorTypeList);\n\n\n//# sourceURL=webpack://calling-extensions-sdk-demo/../src/Constants.js?");

/***/ }),

/***/ "../src/IFrameManager.js":
/*!*******************************!*\
  !*** ../src/IFrameManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ \"../src/Constants.js\");\n\"use es6\";\n\n\n\n/*\n * IFrameManager abstracts the iFrame communication between the IFrameHost and an IFrame\n * An IFrameManager instance can act as part of the IFrameHost and an IFrame depending on\n * the options.\n */\nclass IFrameManager {\n  constructor(options) {\n    this.options = options;\n    const { iFrameOptions, onMessageHandler, debugMode } = options;\n\n    this.onMessageHandler = onMessageHandler;\n    if (!this.onMessageHandler) {\n      throw new Error(\"Invalid options: onMessageHandler is not defined\");\n    }\n    this.isIFrameHost = !!iFrameOptions;\n    this.debugMode = debugMode;\n\n    // Keeps track of all the callbacks\n    this.callbacks = {};\n\n    this.instanceId = Date.now();\n    this.instanceRegexp = new RegExp(`^${this.instanceId}`);\n    this.isReady = false;\n\n    this.messageHandler = event => this.onMessage(event);\n    window.addEventListener(\"message\", this.messageHandler);\n\n    if (iFrameOptions) {\n      this.iFrame = IFrameManager.createIFrame(iFrameOptions, () => {\n        this.firstSyncSent = Date.now();\n        this.isReady = false;\n        this.sendSync();\n      });\n    }\n\n    this.destinationWindow = iFrameOptions\n      ? this.iFrame.contentWindow\n      : window.parent;\n\n    this.destinationHost = IFrameManager.getDestinationHost(iFrameOptions);\n  }\n\n  /*\n   * Creates a new message id\n   */\n  static createMessageId(instanceId) {\n    return `${instanceId}_${Date.now()}`;\n  }\n\n  /*\n   * Gets the html element that hosts the iFrame\n   */\n  static getHostElement(hostElementSelector) {\n    const hostElement = document.querySelector(hostElementSelector);\n    if (!hostElement) {\n      throw new Error(\n        `hostElement not found. Selector - ${hostElementSelector}`\n      );\n    }\n    return hostElement;\n  }\n\n  static extractHostFromUrl(url) {\n    const a = document.createElement(\"a\");\n    a.href = url;\n    return `${a.protocol}//${a.host}`;\n  }\n\n  static getDestinationHost(iFrameOptions) {\n    const url = iFrameOptions ? iFrameOptions.src : document.referrer;\n    return IFrameManager.extractHostFromUrl(url);\n  }\n\n  static createIFrame(iFrameOptions, onLoadCallback) {\n    const { src, width, height, hostElementSelector } = iFrameOptions;\n\n    if (!src || !width || !height || !hostElementSelector) {\n      throw new Error(\n        \"iFrameOptions is missing one of the required properties - {src, width, height, hostElementSelector}.\"\n      );\n    }\n\n    const iFrame = document.createElement(\"iFrame\");\n    iFrame.onload = onLoadCallback;\n    iFrame.onerror = this.handleLoadError;\n    iFrame.src = src;\n    iFrame.width = width;\n    iFrame.height = height;\n    iFrame.allow = \"microphone; autoplay\";\n    iFrame.id = \"hubspot-calling-extension-iframe\";\n\n    const element = IFrameManager.getHostElement(hostElementSelector);\n    element.innerHTML = \"\";\n    element.appendChild(iFrame);\n\n    return element.querySelector(\"iFrame\");\n  }\n\n  handleLoadError() {\n    this.onMessageHandler({\n      type: _Constants__WEBPACK_IMPORTED_MODULE_0__.messageType.SYNC_ACK_FAILED\n    });\n  }\n\n  updateIFrameSize(sizeInfo) {\n    const { width, height } = sizeInfo;\n    const formatSize = size => (typeof size === \"number\" ? `${size}px` : size);\n    if (width) {\n      this.iFrame.setAttribute(\"width\", formatSize(width));\n    }\n    if (height) {\n      this.iFrame.setAttribute(\"height\", formatSize(height));\n    }\n  }\n\n  onReady() {\n    this.isReady = true;\n    this.onMessageHandler({\n      type: _Constants__WEBPACK_IMPORTED_MODULE_0__.messageType.READY\n    });\n  }\n  /*\n   * Unload the iFrame\n   */\n  remove() {\n    window.removeEventListener(\"message\", this.messageHandler);\n\n    if (this.iFrame) {\n      const element = IFrameManager.getHostElement(\n        this.options.iFrameOptions.hostElementSelector\n      );\n      element.innerHTML = \"\";\n\n      this.isReady = false;\n      this.iFrame = null;\n      this.options = null;\n    }\n  }\n\n  /*\n   * Send a message to the destination window.\n   */\n  sendMessage(message, callback) {\n    const { type } = message;\n    if (type !== _Constants__WEBPACK_IMPORTED_MODULE_0__.messageType.SYNC && !this.isReady) {\n      // Do not send a message unless the iFrame is ready to receive.\n      console.warn(\"iFrame not initialized to send a message\", message);\n      return;\n    }\n\n    let { messageId } = message;\n    if (!messageId) {\n      // Initiating a new message\n      messageId = IFrameManager.createMessageId(this.instanceId);\n      if (callback) {\n        // Keep track of the callback\n        this.callbacks[messageId] = callback;\n      }\n    }\n\n    const newMessage = Object.assign({}, message, {\n      messageId\n    });\n\n    this.logDebugMessage(\"postMessage\", type, message);\n    this.destinationWindow.postMessage(newMessage, this.destinationHost);\n  }\n\n  onMessage(event) {\n    const { data, origin } = event;\n    const { type } = event.data;\n    if (type === _Constants__WEBPACK_IMPORTED_MODULE_0__.messageType.SYNC) {\n      // The iFrame host can send this message multiple times, don't respond more than once\n      if (!this.isReady) {\n        this.isReady = true;\n\n        const message = Object.assign({}, event.data, {\n          type: _Constants__WEBPACK_IMPORTED_MODULE_0__.messageType.SYNC_ACK,\n          debugMode: this.debugMode,\n          version: _Constants__WEBPACK_IMPORTED_MODULE_0__.VERSION,\n          iFrameUrl: IFrameManager.extractHostFromUrl(window.location.href)\n        });\n\n        const { hostUrl } = event.data;\n        this.destinationHost = hostUrl || this.destinationHost;\n        this.sendMessage(message);\n        this.onReady();\n      }\n      return;\n    }\n\n    if (this.destinationHost !== origin) {\n      // Ignore messages from an unknown origin\n      return;\n    }\n\n    if (type === _Constants__WEBPACK_IMPORTED_MODULE_0__.messageType.SET_WIDGET_URL) {\n      const { iFrameUrl } = data;\n      this.destinationHost = iFrameUrl || this.destinationHost;\n      return;\n    }\n\n    const { messageId } = data;\n\n    if (!messageId || !type) {\n      return;\n    }\n\n    this.logDebugMessage(\"onMessage\", type, { data });\n    if (this.instanceRegexp.test(messageId)) {\n      // This is a response to some message generated by HubSpot\n      const callBack = this.callbacks[messageId];\n      if (callBack) {\n        callBack(data);\n        delete this.callbacks[messageId];\n      }\n      return;\n    }\n\n    // This is a new message, let the handler handle it.\n    this.onMessageHandler(data);\n  }\n\n  sendSync() {\n    // No SYNC_ACK message after 30sec results in a failure\n    if (Date.now() - this.firstSyncSent > 30000) {\n      this.onMessageHandler({\n        type: _Constants__WEBPACK_IMPORTED_MODULE_0__.messageType.SYNC_ACK_FAILED\n      });\n      return;\n    }\n\n    this.sendMessage(\n      {\n        type: _Constants__WEBPACK_IMPORTED_MODULE_0__.messageType.SYNC,\n        hostUrl: IFrameManager.extractHostFromUrl(window.location.href)\n      },\n      eventData => {\n        const { iFrameUrl } = eventData;\n        this.destinationHost = iFrameUrl || this.destinationHost;\n        this.onReady();\n        this.debugMode = eventData && eventData.debugMode;\n      }\n    );\n\n    // In cases where the call widget loads the calling extensions asynchronously, message\n    // handlers may not be set up - retry until a response from the iFrame\n    window.setTimeout(() => {\n      if (this.iFrame && !this.isReady) {\n        this.sendSync();\n      }\n    }, 100);\n  }\n\n  logDebugMessage(...args) {\n    if (this.debugMode) {\n      const msg = this.isIFrameHost ? \"IFrame host\" : \"IFrame\";\n      args.unshift(msg);\n      console.log.call(null, args);\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IFrameManager);\n\n\n//# sourceURL=webpack://calling-extensions-sdk-demo/../src/IFrameManager.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});