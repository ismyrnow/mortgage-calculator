/* globals describe, it */
'use strict';

var assert = require('chai').assert;
var Mortgage = require('../mortgage');

describe('Mortgage', function () {
    
  var amount = 96000;
  var interest = 0.03875;
  var years = 20;
  var afterMonths = 2;
  var mortgage = new Mortgage(amount, interest, years);
  
  describe('fixedMonthlyPayment', function () {
    it('should fulfill test case', function () {
      var payment = mortgage.fixedMonthlyPayment();
      assert.equal(575.44, payment);
    });
  });
  
  describe('remainingLoanBalance', function () {
    it('should fulfill test case', function () {
      var remaining = mortgage.remainingLoanBalance(afterMonths);
      assert.equal(95468.27, remaining);
    });
  });
});
