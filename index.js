'use strict';

var Mortgage = require('./mortgage');
var print = require('node-print');

var amount = 96000;
var interest = 0.03875;
var years = 20;
var afterMonths = 6;

var mortgage = new Mortgage(amount, interest, years);
var payment = mortgage.fixedMonthlyPayment();
var remaining = mortgage.remainingLoanBalance(afterMonths);
var amortTable = mortgage.amortizationTable();
var amortList = amortTable.map(function (row, i) {
  return {
    'Month': i,
    'Payment': row[0],
    'Principal Paid': row[1],
    'Interest Paid': row[2],
    'Total Interest': row[3],
    'Balance': row[4]
  };
});

console.log('Fixed monthly payments: ' + payment);
console.log('Remaining balance after ' + afterMonths + ' months: ' + remaining);

console.log('Amortization table:');
print.pt(amortList);
