// Закодировать предложение: вместо повторяющихся слов вывести количество их в тексте. (+ словарь). Обратно декодировать предложение.

function createDictionary (arrayOfWords) {
  let dictionary = {};
  for (let i = arrayOfWords.length-1; i >= 0; i--) {
    let count = 0;
    for (let j = arrayOfWords.length-1; j >= 0; j--) {
      if (arrayOfWords[i] === arrayOfWords[j]) {
        count +=1
      }
    }
    if (count >= 2) {
      dictionary[arrayOfWords[i]] = i+1;
    }
  }

  return dictionary;
}

function replaceChars (arrayOfWords, dictionary) {
  const resultText = []
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (Object.keys(dictionary).includes(arrayOfWords[i])) {
      resultText[i] = dictionary[arrayOfWords[i]];
    } else {resultText[i] = arrayOfWords[i]};
  }
  return resultText
}

function compressText (text) {
  const arrayOfWords = text.split(' ');
  const dictionary = createDictionary(arrayOfWords);
  const resultText = replaceChars(arrayOfWords, dictionary);

  return {sentence: resultText.join(' '), dictionary: dictionary}
}

console.log(compressText('sun is great as sun as sun')); //1 is great 4 1 4 1
console.log(compressText('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'));


