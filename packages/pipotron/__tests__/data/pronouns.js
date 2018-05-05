import pronouns from '../../src/data/pronouns';

describe('pronouns', () => {
  it('returns the pronouns', () => {
    expect(pronouns).toMatchSnapshot();
  });
});
