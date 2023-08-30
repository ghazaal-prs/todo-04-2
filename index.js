function searchWordInSentence(sentence, word) {
    if (typeof sentence !== 'string' || typeof word !== 'string') {
      throw new Error('Invalid argument type');
    }
    if (sentence.includes(word)) {
      return true;
    } else {
      return false;
    }
  }
  const sentence = prompt('Enter a sentence:');
const word = prompt('Enter a word to search:');

try {
  const result = searchWordInSentence(sentence, word);
  if (result) {
    console.log(`The word "${word}" was found in the sentence.`);
  } else {
    console.log(`The word "${word}" was not found in the sentence.`);
  }
} catch (error) {
  console.error(error.message);
}

