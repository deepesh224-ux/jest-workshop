# Jest Workshop Submission

## Student Details
- Name: Deepesh Dey
- Roll Number: 2024-B-21082005
- GitHub Username: deepesh224-ux

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test: No coupon
**Protects against:** Returning a wrong total or accidental discounts when no coupon is used.

### 2. Test: SAVE10 (case-insensitive)
**Protects against:** Wrong discount amounts or rejected coupons due to casing; ensures 10% discount is applied (capped correctly).

### 3. Test: FLAT50 boundary
**Protects against:** Negative final totals for small subtotals; ensures result clamps at 0.

### 4. Test: FLAT50 (case-insensitive)
**Protects against:** Coupon lookup failing because of letter case.

### 5. Test: Invalid subtotal
**Protects against:** Calculations proceeding with bad inputs like `NaN` or negative numbers.

---

## CI Pipeline (if implemented)
- Did CI pass successfully? yes

- GitHub Actions Run URL:  https://github.com/deepesh224-ux/jest-workshop/actions/runs/21825174082

---

## Reflection (1–2 lines)
Writing tests made me think about edge cases (input validation, rounding, coupon casing) and showed how small tests stop regressions.

