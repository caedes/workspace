import prepositions from '../../src/data/prepositions';

describe('prepositions', () => {
  it('returns the prepositions', () => {
    expect(prepositions).toMatchSnapshot();
  });
});
