import { test, expect } from "bun:test";
import { checkIfInstanceOf } from "./checkIfInstanceof";

test("111", () => {
  expect(checkIfInstanceOf(5, Number)).toBe(true);
  expect(checkIfInstanceOf(new Date(), Date)).toBe(true);
  expect(checkIfInstanceOf(5n, BigInt)).toBe(true);
  expect(checkIfInstanceOf(5n, Object)).toBe(true);
  expect(checkIfInstanceOf([], null)).toBe(false);
});
