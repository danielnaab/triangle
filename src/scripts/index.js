'use strict';
require('babel-polyfill')

let m = require('mithril')

let AppView = require('./view')


// Mount the Triangle component in the DOM.
document.addEventListener('DOMContentLoaded', function () {
    // Add the app to the DOM
    m.mount(document.getElementById('app'), AppView)
}, false)
