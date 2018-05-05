import names from '../../src/data/names';

describe('names', () => {
  it('returns the names', () => {
    expect(names).toMatchSnapshot();
  });
});
