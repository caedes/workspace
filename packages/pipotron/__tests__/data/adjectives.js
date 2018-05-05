import adjectives from '../../src/data/adjectives';

describe('adjectives', () => {
  it('returns the adjectives', () => {
    expect(adjectives).toMatchSnapshot();
  });
});
