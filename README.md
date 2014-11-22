# Yet Another Mortgage Calculator

Mortgage details are hard-coded into `index.js`.

The following is an example of what the console output is like.

```
> npm install
> npm start

Fixed monthly payments: 575.44
Remaining balance after 6 months: 94394.46
Amortization table:
+-------+---------+----------------+---------------+----------------+----------+
| Month | Payment | Principal Paid | Interest Paid | Total Interest | Balance  |
+-------+---------+----------------+---------------+----------------+----------+
| 0     | 575.44  | 265.44         | 310           | 310            | 95734.56 |
| 1     | 575.44  | 266.3          | 309.14        | 619.14         | 95468.26 |
| 2     | 575.44  | 267.16         | 308.28        | 927.42         | 95201.1  |
| 3     | 575.44  | 268.02         | 307.42        | 1234.84        | 94933.08 |
etc.
```

## Tests

The tests check the logic of functions in `mortgage.js`. In particular, mathematical consistency of `mortgage.amortizationTable()` is ensured, in which rounding errors are a common issue.

Run `npm test`. Requires mocha.
