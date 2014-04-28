'use strict';

var mortgage = require('./mortgage');

var totalAmount = 96000;
var interest = 0.03875 / 12;
var months = 20 * 12;
var period = 2;
var payment = mortgage.fixedMonthlyPayment(totalAmount, interest, months);
var remaining = mortgage.remainingLoanBalance(totalAmount, interest, months, period);

console.log('Fixed monthly payments: ' + payment);
console.log('Remaining balance after ' + period + ' months: ' + remaining);