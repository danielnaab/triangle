'use strict';
const o = require('mithril/ospec/ospec')

const Triangle = require('../src/scripts/models').Triangle


o.spec('triangle', function () {
    o('classification works', function () {
        Triangle.setSides([1.5, 1.5, 1.5])
        o(Triangle.getClassification()).equals(Triangle.TYPES.EQUILATERAL)

        Triangle.setSides([3, 4, 4])
        o(Triangle.getClassification()).equals(Triangle.TYPES.ISOSCELES)

        Triangle.setSides([4.4, 7.3, 9.1])
        o(Triangle.getClassification()).equals(Triangle.TYPES.SCALENE)

        Triangle.setSides([2, 4, 6])
        o(Triangle.getClassification()).equals(Triangle.TYPES.ILLEGAL)

        Triangle.setSides([4, 6, 11])
        o(Triangle.getClassification()).equals(Triangle.TYPES.ILLEGAL)

        Triangle.setSides([0, 6, 11])
        o(Triangle.getClassification()).equals(Triangle.TYPES.ILLEGAL)

        Triangle.setSides([-2, 6, 11])
        o(Triangle.getClassification()).equals(Triangle.TYPES.ILLEGAL)

        Triangle.setSides(['', 6, 11])
        o(Triangle.sides[0].eq(0)).equals(true)
        o(Triangle.getClassification()).equals(Triangle.TYPES.ILLEGAL)

        Triangle.setSides([6, 14, 6])
        o(Triangle.getClassification()).equals(Triangle.TYPES.ILLEGAL)
    })
})
