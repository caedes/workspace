import cleanFrenchSentence from '../src/clean-french-sentence';

describe('cleanFrenchSentence', () => {
  it('writes comma correctly', () => {
    expect(cleanFrenchSentence(' ,')).toMatchSnapshot();
  });

  it('writes dot correctly', () => {
    expect(cleanFrenchSentence(' .')).toMatchSnapshot();
  });

  'aeiouyé'.split('').forEach(vowel => {
    it(`replaces "# ${vowel}"`, () => {
      expect(cleanFrenchSentence(`# ${vowel}`)).toMatchSnapshot();
    });
  });

  'bcdfghklmnpqrstvwxz'.split('').forEach(consonant => {
    it(`replaces "# ${consonant}"`, () => {
      expect(cleanFrenchSentence(`# ${consonant}`)).toMatchSnapshot();
    });
  });
});
