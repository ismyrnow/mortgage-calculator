'use strict';

var money = require('./money');

function Mortgage(amount, interest, years) {
  this.amount = amount;
  this.interest = interest / 12;
  this.months = years * 12;
}

Mortgage.prototype.fixedMonthlyPayment = function () {
  var a = this.amount;
  var i = this.interest;
  var n = this.months;
  var payment = a * ((i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1));

  return payment.toFixed(2);
};

Mortgage.prototype.remainingLoanBalance = function (afterMonths) {
  var p = afterMonths;
  var a = this.amount;
  var i = this.interest;
  var n = this.months;
  var balance = a * ((Math.pow(1 + i, n) - Math.pow(1 + i, p)) / (Math.pow(1 + i, n) - 1));

  return balance.toFixed(2);
};

// Returns a table of the following: payment, principal paid, interest paid, total interest, balance.
Mortgage.prototype.amortizationTable = function () {
  var balance = this.amount;
  var interest = this.interest;
  var payment = this.fixedMonthlyPayment();
  var totalInterestPaid = 0;
  var totalPrincipalPaid = 0;
  var table = [];

  for (var i = 0; i < this.months; i++) {

    // TODO: decimal rounding
    var interestPaid = money.round(balance * interest);
    var principalPaid = money.round(payment - interestPaid);

    totalInterestPaid = money.round(totalInterestPaid + interestPaid);
    totalPrincipalPaid = money.round(totalPrincipalPaid + principalPaid);
    balance = money.round(balance - principalPaid);

    table.push([
      payment,
      principalPaid,
      interestPaid,
      totalInterestPaid,
      balance
    ]);

  }

  return table;
};

module.exports = Mortgage;
