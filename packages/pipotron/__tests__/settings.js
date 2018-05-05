import settings from '../src/settings';

describe('settings', () => {
  it('returns the settings', () => {
    expect(settings).toMatchSnapshot();
  });
});
