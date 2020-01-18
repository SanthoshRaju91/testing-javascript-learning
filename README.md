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

3rd commit

Writing your own testing framework, since we are throwing error if will not run all of the test, as the execution is interrupted. So a testing framework is used, to run all of the tests and check the failed ones.

```javascript
function test(title, callback) {
  try {
    callback();
    console.log("test passed");
  } catch (err) {
    console.error("test failed");
    console.error(err);
  }
}
```

4th commit

Adding async support, for testing async code in our testing framework.

```javascript
function test(title, callback) {
    try {
        await callback();
        console.log("test passed")
    } catch (err) {
        console.error("test failed")
        console.error(err)
    }
}
```
