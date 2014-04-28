'use strict';

function Mortgage(amount, interest, years) {
  this.amount = amount;
  this.interest = interest / 12;
  this.months = years * 12;
}

Mortgage.prototype.fixedMonthlyPayment = function () {
  var L = this.amount;
  var c = this.interest;
  var n = this.months;
  var P = L * ((c * Math.pow(1 + c, n)) / (Math.pow(1 + c, n) - 1));

  return P.toFixed(2);
};

Mortgage.prototype.remainingLoanBalance = function (afterMonths) {
  var p = afterMonths;
  var L = this.amount;
  var c = this.interest;
  var n = this.months;
  var B = L * ((Math.pow(1 + c, n) - Math.pow(1 + c, p)) / (Math.pow(1 + c, n) - 1));

  return B.toFixed(2);
};

module.exports = Mortgage;
