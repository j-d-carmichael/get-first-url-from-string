import getFirstUrlFromString from '../index';

test('should return empty string for empty string passed', () => {
  expect(getFirstUrlFromString('')).toBe(false);
});

test('should return empty string for string passed without url', () => {
  expect(getFirstUrlFromString('hello world this is me')).toBe(false);
});

test('should return string with google', () => {
  expect(getFirstUrlFromString('hello https://www.google.com world')).toBe('https://www.google.com');
});

test('should return string with google from string with 2 urls', () => {
  expect(getFirstUrlFromString('hello https://www.google.com https://www.google2.com world')).toBe(
    'https://www.google.com',
  );
});

test('should return https from non https url found in string', () => {
  expect(getFirstUrlFromString('hello http://www.google.com https://www.google2.com world')).toBe(
    'https://www.google.com',
  );
});

test('should return https from non http url found in string with ordered query params', () => {
  expect(getFirstUrlFromString('hello http://www.google.com?b=1&a=1 https://www.google2.com world')).toBe(
    'https://www.google.com/?a=1&b=1',
  );
});
