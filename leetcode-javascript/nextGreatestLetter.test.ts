import { test, expect } from "bun:test";
import { nextGreatestLetter } from "./nextGreatestLetter";

test("111", () => {
  expect(nextGreatestLetter(["c", "f", "j"], "a")).toBe("c");
  expect(nextGreatestLetter(["c", "f", "j"], "c")).toBe("f");
  expect(nextGreatestLetter(["x", "x", "y", "y"], "z")).toBe("x");
});
