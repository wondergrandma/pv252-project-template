import { fibonacci } from "./fibonacci.ts";

test("fibonacci-5", () => {
  expect(fibonacci(5)).toBe(5);
});

test("test - 1", () => {
  expect(fibonacci(1)).toBe(1);
});