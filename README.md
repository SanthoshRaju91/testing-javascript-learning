# testing-javascript-learning

1st commit

Basic idea of automated testing in javascript, throwing an error when a condition is not met.

```javascript
if (actual !== expected) {
  throw new Error(`${actual} is not equal to ${expected}`);
}
```

2nd commit

Writing your own assertion library, basically it a function that returns a list of functions for asserting the expected value with the actual value.

```javascript
function expect(actual) {
  return {
    toEqual(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} not equal to ${expected}`);
      }
    }
  };
}
```
