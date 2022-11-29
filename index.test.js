const index = require('./index')

test("output has to be hello world", () => {expect(index.helloWorld()).toBe("hello world")})