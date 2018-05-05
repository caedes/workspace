import infinitives from '../../src/data/infinitives';

describe('infinitives', () => {
  it('returns the infinitives', () => {
    expect(infinitives).toMatchSnapshot();
  });
});
