import { describe, expect, it } from "vitest";
import { add, subtract } from "../src/mathUtils.js";

describe("mathUtils", () => {
  it("adds and subtracts numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(subtract(5, 2)).toBe(3);
  });
});
