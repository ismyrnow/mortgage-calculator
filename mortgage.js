'use strict';

exports.fixedMonthlyPayment = function (L, c, n) {
  var P = L * ((c * Math.pow(1 + c, n)) / (Math.pow(1 + c, n) - 1));
  return P.toFixed(2);
};

exports.remainingLoanBalance = function (L, c, n, p) {
  var B = L * ((Math.pow(1 + c, n) - Math.pow(1 + c, p)) / (Math.pow(1 + c, n) - 1));
  return B.toFixed(2);
};