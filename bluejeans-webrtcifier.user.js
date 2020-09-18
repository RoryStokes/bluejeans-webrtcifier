// ==UserScript==
// @name         Bluejeans WebRTCifier
// @namespace    http://rorystok.es
// @version      0.1.0
// @description  Automatically redirect Bluejeans meeting links to the WebRTC equivalent
// @author       Rory Stokes
// @downloadURL  https://github.com/rorystokes/bluejeans-webrtcifier/raw/master/bluejeans-webrtcifier.user.js
// @updateURL    https://github.com/rorystokes/bluejeans-webrtcifier/raw/master/bluejeans-webrtcifier.meta.js
// @match        https://bluejeans.com/*
// @grant        none
// ==/UserScript==
window.location.href.match(RegExp("^https://bluejeans.com/(([0-9]+)|(u/[0-9a-zA-Z]+))/?$")) ? window.location.replace(`${window.location.href}/webrtc`) : null;