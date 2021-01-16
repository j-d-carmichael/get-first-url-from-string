import getFirstUrlFromString from '../index';

test('should return empty string for empty string passed', () => {
  expect(getFirstUrlFromString('')).toBe('');
});

test('should return empty string for string passed without url', () => {
  expect(getFirstUrlFromString('hello world this is me')).toBe('');
});

test('should return string where the path is complex ending in a slash ', () => {
  expect(getFirstUrlFromString('https://www.blue-tomato.com/en-DE/product/Season-Nexus+155+Snowboard-639580/ it needs to also grab the slash at the end')).toBe('https://www.blue-tomato.com/en-DE/product/Season-Nexus+155+Snowboard-639580/');
});

test('should return string with google', () => {
  expect(getFirstUrlFromString('hello https://www.google.com world')).toBe('https://www.google.com');
});

test('should return string with google from string with 2 urls', () => {
  expect(getFirstUrlFromString('hello https://www.google.com https://www.google2.com world')).toBe(
    'https://www.google.com',
  );
});

test('should return the https url from non https url found in string', () => {
  expect(getFirstUrlFromString('hello http://www.google.com https://www.google2.com world')).toBe(
    'https://www.google2.com',
  );
});

test('should return https from non http url found in string with ordered query params', () => {
  expect(getFirstUrlFromString('hello https://www.google.com?b=1&a=1 https://www.google2.com world')).toBe(
    'https://www.google.com?b=1&a=1',
  );
});

test('should return a long complex urls', () => {
  const urls = [
    'https://www.booking.com/hotel/pt/aldeamento-villas-mourim-by-garvetur.de.html?aid=304142;label=gen173nr-1DCAEoggI46AdIM1gEaDuIAQGYAQe4AQfIAQzYAQPoAQGIAgGoAgO4AvjN-PoFwAIB0gIkODEwNGMzYmYtNWEzYi00YmY2LWIxZDYtZDZiNzg2NjIxYzg52AIE4AIB;sid=78f413d8d370558b3dad6bb7e0e8ca41;all_sr_blocks=189010603_199461783_0_0_0;checkin=2020-09-21;checkout=2020-09-30;dest_id=171;dest_type=country;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=189010603_199461783_0_0_0;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=189010603_199461783_0_0_0__80000;srepoch=1600006554;srpvid=d114644c15bd017d;type=total;ucfs=1&#map_closed=ä',
    'https://www.real.de/product/338661983/?kwd=&source=pläa&sid=21915679&gclid=Cj0KCQiArvX_BRCyARIsAKsnTxMs1vcxfSKIoA2UEG5L428h_F99p5H1ww9gmaKbTcLh9-pJKKJSCyAaArxDEALw_wcB',
    'https://www.amazon.de/-/en/Throw-Burrito-Exploding-Kittens-Dodgeball/dp/B07TS96J7Q/?_encoding=UTF8&pd_rd_w=U1Chq&pf_rd_p=e1c506bc-20f2-4103-883d-bfc914d48327&pf_rd_r=JHCKJP8X0NS835A7XT10&pd_rd_r=807eab37-eb12-4994-8a67-4ea9ä82dbde00&pd_rd_wg=MYTRk&ref_=pd_gw_unk',
    'https://shop.shop.com/some/shoes#/something/page',
    'https://shop.shop.com/some/shoes?/something/page#1=/hello-world!%$',
  ];
  urls.forEach((url: string) => {
    expect(getFirstUrlFromString(` sergdgf  ${url} sdliushvlsdiuh lsdn`)).toBe(url);
  });
});
