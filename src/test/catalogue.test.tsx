import { describe, expect, it } from "vitest";
import { products } from "@/data/products";

describe("product catalogue", () => {
  it("contains all 18 products", () => {
    expect(products).toHaveLength(18);
  });
  it("gives every product a unique route", () => {
    expect(new Set(products.map((p) => p.slug)).size).toBe(18);
  });
  it("never reuses the same image across products", () => {
    const srcs = products.map((p) => p.image.src).filter(Boolean);
    expect(new Set(srcs).size).toBe(srcs.length);
  });
});
