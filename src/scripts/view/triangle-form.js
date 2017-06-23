'use strict';

const m = require('mithril')

const Triangle = require('../models').Triangle


/*
 * Renders an a form for entering the three side lengths of a triangle.
 */
let TriangleForm = {
    view: function ({state}) {
        return m('form', Triangle.sides.map((side, index) => {
            return m('label', [
                `Step ${index + 1}`,
                m('input[type=number][min=0]', {
                    oninput: m.withAttr('value', Triangle.setSide.bind(null, index)),
                    value: side
                })
            ])
            return
        }))
    }
}


module.exports = TriangleForm
