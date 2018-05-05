import solutionNames from '../../src/data/solution-names';

describe('solutionNames', () => {
  it('returns the solutionNames', () => {
    expect(solutionNames).toMatchSnapshot();
  });
});
