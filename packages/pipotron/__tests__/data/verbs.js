import verbs from '../../src/data/verbs';

describe('verbs', () => {
  it('returns the verbs', () => {
    expect(verbs).toMatchSnapshot();
  });
});
