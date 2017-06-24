'use strict';

const m = require('mithril')

const TriangleForm = require('./triangle-form')
const TriangleVis = require('./triangle-vis')


let AppView = {
    view: function (vnode) {
        return m('div', [
            m(TriangleForm),
            m(TriangleVis)
        ])
    }
}


module.exports = AppView
