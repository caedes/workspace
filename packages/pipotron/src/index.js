import cleanFrenchSentence from './clean-french-sentence';
import settings from './settings';

export default () => {
  const sentence = settings.map(words => {
    return words[Math.floor(Math.random() * words.length)];
  });

  return cleanFrenchSentence(sentence.join(' '));
};
