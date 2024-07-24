import sum from "./sum";
import { describe, expect, it } from "vitest";

describe("#sum", () => {
  it("空值", () => {
    expect(sum()).toBe(0);
  });
});
