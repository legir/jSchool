'use strict'

const assert = require('assert');

const hw3 = require('./hw3.js');

let output = filter (input, function (item){
    return (item%2 != 0);
});

console.log(output);