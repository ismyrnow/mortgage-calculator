/* globals describe, it */
'use strict';

var assert = require('chai').assert;
var mortgage = require('../mortgage');

describe('mortgage', function () {
    
  var totalAmount = 96000;
  var interest = 0.03875 / 12;
  var months = 20 * 12;
  var period = 2;
  
  describe('fixedMonthlyPayment', function () {
    it('should fulfill test case', function () {
      var payment = mortgage.fixedMonthlyPayment(totalAmount, interest, months);
      
      assert.equal(575.44, payment);
    });
  });
  
  describe('remainingLoanBalance', function () {
    it('should fulfill test case', function () {
      var remaining = mortgage.remainingLoanBalance(totalAmount, interest, months, period);
      
      assert.equal(95468.27, remaining);
    });
  });
});