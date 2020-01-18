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
