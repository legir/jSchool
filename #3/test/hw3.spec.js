'use strict';

const assert = require('assert');

const MyArray = require('../hw3.js');

console.log(MyArray);

describe('map()',function() {
    it('should apply function to each arr element and return new array', function () {

        let input = [1, 2, 3, 4, 5, 6];

        let output = map(input, function (item, index){
            return item * 3;
        })

        assert.deepEqual(output, [3, 6, 9, 12, 15, 18], 'should be [3, 6, 9, 12, 15, 18]')
    });
});

describe('reduce()',function() {
    it('should apply function to the current and prev arr element and return one variable', function () {
    
    let input = [ , 1, , 2, 3, 4, 5, undefined];

    let output = reduce(input, function (prev, current){
        return prev*current;
        })

    assert(output === 120, 'should be 120')
    });
});
