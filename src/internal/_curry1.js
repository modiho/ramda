var __ = require('../__');
var _noArgsException = require('./_noArgsException');


/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry1(fn) {
    return function f1(a) {
        if (arguments.length === 0) {
            throw _noArgsException();
        } else if (a === __) {
            return f1;
        } else {
            return fn(a);
        }
    };
};
