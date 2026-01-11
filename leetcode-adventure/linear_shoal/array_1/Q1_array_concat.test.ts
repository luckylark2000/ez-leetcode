import { getConcatenation } from "./Q1_array_concat";

import { test, expect } from "bun:test";

test("111", () => {
  // console.log(getConcatenation([1, 2]));
  expect(getConcatenation([1, 2]).toString()).toBe([1, 2, 1, 2].toString());
});
