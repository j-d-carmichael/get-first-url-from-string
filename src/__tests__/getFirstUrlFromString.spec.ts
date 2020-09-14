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
    'https://www.google.com/?b=1&a=1',
  );
});

test('should return http from non http url found in string with ordered query params', () => {
  expect(getFirstUrlFromString(
    'hello http://www.google.com?a=1&b=1 https://www.google2.com world', {
      forceHttps: false
    }
  )).toBe(
    'http://www.google.com/?a=1&b=1',
  );
});

test('should return a long complex booking.com url', () => {
  const url = 'https://www.booking.com/hotel/pt/aldeamento-villas-mourim-by-garvetur.de.html?aid=304142;label=gen173nr-1DCAEoggI46AdIM1gEaDuIAQGYAQe4AQfIAQzYAQPoAQGIAgGoAgO4AvjN-PoFwAIB0gIkODEwNGMzYmYtNWEzYi00YmY2LWIxZDYtZDZiNzg2NjIxYzg52AIE4AIB;sid=78f413d8d370558b3dad6bb7e0e8ca41;all_sr_blocks=189010603_199461783_0_0_0;checkin=2020-09-21;checkout=2020-09-30;dest_id=171;dest_type=country;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=189010603_199461783_0_0_0;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=189010603_199461783_0_0_0__80000;srepoch=1600006554;srpvid=d114644c15bd017d;type=total;ucfs=1&#map_closed';
  expect(getFirstUrlFromString(` sergdgf  ${url}`)).toBe(url);
});
