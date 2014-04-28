'use strict';

var Mortgage = require('./mortgage');

var amount = 96000;
var interest = 0.03875;
var years = 20;
var afterMonths = 2;

var mortgage = new Mortgage(amount, interest, years);
var payment = mortgage.fixedMonthlyPayment();
var remaining = mortgage.remainingLoanBalance(afterMonths);

console.log('Fixed monthly payments: ' + payment);
console.log('Remaining balance after ' + afterMonths + ' months: ' + remaining);
