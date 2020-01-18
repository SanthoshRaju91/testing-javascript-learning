const sum = (a, b) => a - b;

const subtract = (a, b) => a - b;

test("should add numbers", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toEqual(expected);
});

test("should subtrach numbers", () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toEqual(expected);
});

function test(title, callback) {
  try {
    callback();
    console.log(`&#10004; test passed`);
  } catch (err) {
    console.error(`x test failed`);
    console.error(err);
  }
}

function expect(actual) {
  return {
    toEqual(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} not equal to ${expected}`);
      }
    }
  };
}
