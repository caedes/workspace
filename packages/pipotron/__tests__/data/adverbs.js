import adverbs from '../../src/data/adverbs';

describe('adverbs', () => {
  it('returns the adverbs', () => {
    expect(adverbs).toMatchSnapshot();
  });
});
