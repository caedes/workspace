export default sentence => {
  const cleanSentence = sentence
    .replace(' ,', ',')
    .replace(' .', '.')
    .replace(/# ([aeiouyé])/g, "'$1")
    .replace(/# ([^aeiouyé])/g, 'e $1');

  return cleanSentence;
};
