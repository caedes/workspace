import solutionAdjectives from '../../src/data/solution-adjectives';

describe('solutionAdjectives', () => {
  it('returns the solutionAdjectives', () => {
    expect(solutionAdjectives).toMatchSnapshot();
  });
});
