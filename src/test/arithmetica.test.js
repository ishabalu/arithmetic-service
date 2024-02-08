const { add } = require("../arithmetica");

test('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('209 + 300 is equal to 509', () => {
    expect(add(209, 300)).toBe(509);
});

test('789 + 390 is equal to 1179', () => {
    expect(add(789, 390)).toBe(1179);
});
