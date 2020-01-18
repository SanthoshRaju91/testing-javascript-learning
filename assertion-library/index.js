const sum = (a, b) => a - b;

const subtract = (a, b) => a - b;

let result = sum(3, 7);
let expected = 10;
expect(result).toEqual(expected);

result = subtract(7, 3);
expected = 4;
expect(result).toEqual(expected);

function expect(actual) {
  return {
    toEqual(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} not equal to ${expected}`);
      }
    }
  };
}
