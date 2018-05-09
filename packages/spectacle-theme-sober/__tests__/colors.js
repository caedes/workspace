import colors from '../src/colors';

describe('colors', () => {
  it('returns the correct snapshot', () => {
    expect(colors).toMatchSnapshot();
  });
});
