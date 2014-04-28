/* globals describe, it */
'use strict';

var assert = require('chai').assert;
var Mortgage = require('../mortgage');
var money = require('../money');

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

  describe('amortizationTable', function () {
    var table = mortgage.amortizationTable();

    it('should have payment = principal + interest', function () {
      table.forEach(function (row) {
        assert.equal(row[0], money.round(row[1] + row[2]));
      });
    });

    it('should have balance_n = balance_n-1 - principal_n', function () {
      var previousRow;
      table.forEach(function (row) {
        if (previousRow) {
          assert.equal(row[4], money.round(previousRow[4] - row[1]));
        }

        previousRow = row;
      });
    });

    it('should have total_interest_n = total_interest_n-1 + interest_n', function () {
      var previousRow;
      table.forEach(function (row) {
        if (previousRow) {
          assert.equal(row[3], money.round(previousRow[3] + row[2]));
        }

        previousRow = row;
      });
    });
  });
});
