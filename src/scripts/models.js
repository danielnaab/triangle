'use strict';

var Big = require('big-js')


const Triangle = {
    // Default to an equilateral triangle.
    sides: [new Big(1), new Big(1), new Big(1)],

    // Define legal triangle classifications.
    TYPES: {
        ILLEGAL: 'Not a triangle',
        EQUILATERAL: 'Equilateral',
        ISOSCELES: 'Isosceles',
        SCALENE: 'Scalene'
    },

    // Set a given side as a decimal number.
    setSide: function (side, value) {
        Triangle.sides[side] = new Big(value || 0)
    },

    // Set all sides from an array.
    setSides: function (sides) {
        sides.forEach((side, index) => Triangle.setSide(index, side))
    },

    // Returns one of Triangle.TYPES.
    getClassification: function () {
        // All sides must be above zero.
        for (let side of Triangle.sides) {
            if (side.lte(0)) {
                return Triangle.TYPES.ILLEGAL
            }
        }

        // Determine if this is a legal triangle. The largest side should
        // be smaller than the sum of the remaining sides.
        let sum = Triangle.sides.reduce((cur, val) => cur.add(val),
                                        new Big(0))
        let max = Triangle.sides.reduce((max, val) => max.lt(val) ? val : max,
                                        new Big(0))
        if (max >= sum - max) {
            return Triangle.TYPES.ILLEGAL
        }

        // Get the unique values
        let uniqueValues = Triangle.sides.reduce((acc, val) => {
            // If this element is already in list, don't add it - return
            // existing.
            for (let num of acc) {
                if (num.eq(val)) {
                    return acc
                }
            }
            return acc.concat([val])
        }, [])

        // All sides equal - equilateral
        if (uniqueValues.length === 1) {
            return Triangle.TYPES.EQUILATERAL
        }

        // Two sides equal - isosceles
        if (uniqueValues.length === 2) {
            return Triangle.TYPES.ISOSCELES
        }

        // All sides unique - scalene
        return Triangle.TYPES.SCALENE
    },

    getPoints: function () {
        // Put the first side along the x-axis and solve for the third point.
        let [A, B, C] = Triangle.sides
        let x = A.pow(2).add(B.pow(2)).minus(C.pow(2)).div(A.times(2)).abs()
        let y = (C.pow(2).minus(x.pow(2)).minus(A.pow(2)).add(A.times(x).times(2))).sqrt()
        return [
            {x: 0, y: 0},
            {x: A, y: 0},
            {x: x, y: y}
        ]
    }
}


module.exports = {Triangle}
