import { factorial } from "./factorial.ts";

test("factorial-5", () => {
  expect(factorial(5)).toBe(54);
});

test("factorial-minus", () => {
  const will_throw = () => {
    factorial(-1);
  };
  expect(will_throw).toThrow("Negative numbers not supported");
});
