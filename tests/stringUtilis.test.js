const { reverseString, isPalindrome, truncateString, countCharacters } = require('../src/stringUtils');

describe('String Utils', () => {
  test('reverseString reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('')).toBe('');
    expect(reverseString('a')).toBe('a');
    expect(reverseString('12345')).toBe('54321');
    expect(reverseString('A man')).toBe('nam A');
  });

  test('isPalindrome detects palindromes', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('a')).toBe(true);
    expect(isPalindrome('madam')).toBe(true);
    expect(isPalindrome('12321')).toBe(true);
    expect(isPalindrome('12345')).toBe(false);
  });

  test('truncateString truncates and appends ellipsis', () => {
    expect(truncateString('hello world', 5)).toBe('hello...');
    expect(truncateString('hi', 5)).toBe('hi');
    expect(truncateString('', 3)).toBe('');
    expect(truncateString('abc', 3)).toBe('abc');
    expect(truncateString('abcdef', 0)).toBe('...');
    expect(truncateString('abcdef', 6)).toBe('abcdef');
    expect(truncateString('abcdef', 2)).toBe('ab...');
  });

  test('countCharacters counts each character in a string', () => {
    expect(countCharacters('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    expect(countCharacters('')).toEqual({});
    expect(countCharacters('aabbcc')).toEqual({ a: 2, b: 2, c: 2 });
    expect(countCharacters('Aaa')).toEqual({ A: 1, a: 2 });
    expect(countCharacters(' ')).toEqual({ ' ': 1 });
    expect(countCharacters('abc abc')).toEqual({ a: 2, b: 2, c: 2, ' ': 1 });
  });
});