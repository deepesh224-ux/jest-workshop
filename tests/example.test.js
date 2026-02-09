const { calculateFinalAmount } = require("../src/pricing");

test("no coupon returns subtotal unchanged", () => {
  expect(calculateFinalAmount(200)).toBe(200);
});

test("SAVE10 coupon applies 10% discount ", () => {
  expect(calculateFinalAmount(500, "SAVE10")).toBe(450);
});
test("FLAT50 boundary case ", () => {
  expect(calculateFinalAmount(50, "FLAT50")).toBe(0);
});
test("FLAT50 coupon is case-insensitive", () => {
  expect(calculateFinalAmount(50, "flat50")).toBe(0);
});
test("invalid subtotal (NaN) throws error", () => {
  expect(() => calculateFinalAmount(NaN)).toThrow("Invalid subtotal");
});