'use strict';

const m = require('mithril')

const TriangleForm = require('./triangle-form')
const Triangle = require('../models').Triangle


let AppView = {
    setCallback: function (callback) {
        AppView.callback = callback
    },
    view: function (vnode) {
        return m('div', [
            m('h1', Triangle.getClassification()),
            m(TriangleForm)
        ])
    }
}


module.exports = AppView
