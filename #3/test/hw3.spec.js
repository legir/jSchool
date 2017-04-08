'use strict';

const assert = require('assert');

<<<<<<< HEAD

const hw3 = require('../hw3.js');

=======
const hw3 = require('../hw3.js');

>>>>>>> 8832583b278216a08674db5d0075135b2c4c7ffd
describe('map()',function() {
    it('should apply function to each arr element and return new array', function () {

        let input = [1, 2, 3, 4, 5, 6];

        let output = hw3.map(input, function (item, index){
            return item * 3;
        })

        assert.deepEqual(output, [3, 6, 9, 12, 15, 18], 'should be [3, 6, 9, 12, 15, 18]')
    });
<<<<<<< HEAD

describe('every()',function() {
    it('should apply comparing function to the each arr element and return true if it\'s true for all elements, else false', function () {

=======
});

describe('every()',function() {
    it('should apply comparing function to the each arr element and return true if it\'s true for all elements, else false', function () {
    
>>>>>>> 8832583b278216a08674db5d0075135b2c4c7ffd
        let input = [4, 2, 6, 4, 12];

        let output = hw3.every(input, function (item){
        return (item%2 === 0);
        });

        assert(output === true, 'should be true')
    });

    it('should apply comparing function to the each arr element and return true if it\'s true for all elements, else false', function () {
<<<<<<< HEAD

=======
    
>>>>>>> 8832583b278216a08674db5d0075135b2c4c7ffd
        let input = [4, 2, 5, 4, 12];

        let output = hw3.every(input, function (item){
        return (item%2 === 0);
        });

        assert(output === false, 'should be false')
    });
});

describe('reduce()',function() {
    it('should apply function to the current and prev arr element and return one variable', function () {
<<<<<<< HEAD

=======
    
>>>>>>> 8832583b278216a08674db5d0075135b2c4c7ffd
    let input = [ , 1, , 2, 3, 4, 5, undefined];

    let output = hw3.reduce(input, function (prev, current){
            return prev*current;
        })

    assert(output === 120, 'should be 120')
    });
<<<<<<< HEAD
});

describe('filter()',function() {
    it('should return new array with elements answer defined condition', function () {
    let input = [4, 2, 5, 12, 3];

    let output = hw3.filter (input, function (item){
            return (item%2 != 0);
        });

    assert.deepEqual(output, [5, 3], '[5,3]')
    });
});

describe('sumMultiples()',function() {
    it('sum of multiples of defined numbers', function () {
        let output = hw3.sumMultiples(3, 5, 1000)
    assert(output === 233168, 'should be 233168')
    });
});
=======
});

describe('filter()',function() {
    it('should return new array with elements answer defined condition', function () {
    let input = [4, 2, 5, 12, 3];

    let output = hw3.filter (input, function (item){
            return (item%2 != 0);
        });

    assert.deepEqual(output, [5, 3], '[5,3]')
    });
});

describe('sumMultiples()',function() {
    it('sum of multiples of defined numbers', function () {
        let output = hw3.sumMultiples(3, 5, 1000)
    assert(output === 233168, 'should be 233168')
    });
});

>>>>>>> 8832583b278216a08674db5d0075135b2c4c7ffd
