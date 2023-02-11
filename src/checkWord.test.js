/// <reference types="jest" />

import { equalFn, longFn, numFn, specFn, lowFn, upFn } from "./checkWord.js";

describe("test equalFn", () => {
  it("should be true with 2 equal values", () => {
    const result = equalFn("12Ral-x", "12Ral-x");
    expect(result).toBe(true);
  });
  it("should be false with 2 different values", () => {
    const result = equalFn("12Ral-y", "12Ral-x");
    expect(result).toBe(false);
  });
});

describe("test longFn", () => {
  it("should be true with value with at least 10 characters", () => {
    const result = longFn("1234567890");
    expect(result).toBe(true);
  });
  it("should be false with value with less than 10 characters", () => {
    const result = longFn("123456789");
    expect(result).toBe(false);
  });
});

describe("test numFn", () => {
  it("should be true with number", () => {
    const result = numFn("1");
    expect(result).toBe(true);
  });
  it("should be false with no number", () => {
    const result = numFn("a");
    expect(result).toBe(false);
  });
});

describe("test specFn", () => {
  it("should be true with special Character", () => {
    const result = specFn("-");
    expect(result).toBe(true);
  });
  it("should be false with no special Character", () => {
    const result = specFn("a");
    expect(result).toBe(false);
  });
});

describe("test lowFn", () => {
  it("should be true with lower case letter", () => {
    const result = lowFn("a");
    expect(result).toBe(true);
  });
  it("should be false with upper case letter", () => {
    const result = lowFn("A");
    expect(result).toBe(false);
  });
  it("should be false with number", () => {
    const result = lowFn("3");
    expect(result).toBe(false);
  });
  it("should be false with special character", () => {
    const result = lowFn(" ");
    expect(result).toBe(false);
  });
});

describe("test upFn", () => {
  it("should be true with upper case letter", () => {
    const result = upFn("A");
    expect(result).toBe(true);
  });
  it("should be false with lower case letter", () => {
    const result = upFn("a");
    expect(result).toBe(false);
  });
  it("should be false with number", () => {
    const result = upFn("3");
    expect(result).toBe(false);
  });
  it("should be false with special character", () => {
    const result = upFn(" ");
    expect(result).toBe(false);
  });
});
