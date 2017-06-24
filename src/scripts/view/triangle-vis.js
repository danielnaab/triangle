'use strict';

const m = require('mithril')

const Triangle = require('../models').Triangle


/*
 * Renders the triangle classification and an SVG representation of it.
 */
let TriangleVis = {
    view: function ({state}) {
        let type = Triangle.getClassification()
        return m('div', [
            m('h1', type),
            type === Triangle.TYPES.ILLEGAL ? null : TriangleVis.drawTriangle()
        ])
    },
    drawTriangle: function () {
        let points = Triangle.getPoints()
        let maxX = Math.max(...points.map(p => p.x))
        let maxY = Math.max(...points.map(p => p.y))
        return m('svg', {
            viewBox: `0 0 ${maxX} ${maxY}`
        }, [
            m('polygon.triangle', {
                points: points.map(p => `${p.x},${p.y}`).join(' ')
            })
        ])
    }
}


module.exports = TriangleVis
