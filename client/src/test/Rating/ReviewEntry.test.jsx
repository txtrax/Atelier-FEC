import 'jest';
const strFilter = require('../../components/Ratings/common/strFilter');

test('lengthFilter capped the string according to the provided length', () => {
  const originalStr = 'My length is larger than 10';
  const maxLength = 10;
  const cappedStr = 'My length ...';
  expect(strFilter.lengthFilter(originalStr, maxLength)).toEqual(cappedStr);
});
