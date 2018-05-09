import fonts from '../src/fonts';

describe('fonts', () => {
  it('returns the correct snapshot', () => {
    expect(fonts).toMatchSnapshot();
  });
});
