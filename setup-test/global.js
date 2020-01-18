async function test(title, callback) {
  try {
    await callback();
    console.log("test passed");
  } catch (err) {
    console.error("test failed ", title);
    console.error(err);
  }
}

function expect(actual) {
  return {
    toEqual(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  };
}

global.test = test;
global.expect = expect;
