function countWords(text) {
  const wordCounts = {};
  const words = text.split(' ');
  for (const word of words) {
    if (word in wordCounts) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }
  return wordCounts;
}

console.log(countWords('The quick brown fox jumps  quick over the the lazy dog dog'));