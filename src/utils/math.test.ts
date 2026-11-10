import { describe, it, expect } from "vitest";
import { add } from "./math";

describe("add関数", () => {
  it("1 + 2 は 3 になる", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("5 + 5 は 10 になる", () => {
    expect(add(5, 5)).toBe(10);
  });
});