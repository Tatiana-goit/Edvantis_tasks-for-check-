// Написать функцию, которая переворачивает строку, но оставляет все цифры и символы на месте

function createTemporaryArray (arrayOfChar, regexp) {
  const temporaryArray = [];

  for (let i = 0; i < arrayOfChar.length; i++) {
    if (arrayOfChar[i].match(regexp)) {
      temporaryArray.push(arrayOfChar[i]);
    }
  };

  return temporaryArray.reverse();
}

function reverseText(text) {
  try {
    if (!text) {
      return 'Enter valid text';
    };
    const arrayOfChar = text.split('');
    const regexp = /[a-zA-Z]/gi;
    const temporaryArray = createTemporaryArray(arrayOfChar, regexp);
  
    let j = 0;
    for (let i = 0; i < arrayOfChar.length; i++) {
      if (arrayOfChar[i].match(regexp)) {
        arrayOfChar[i] = temporaryArray[j];
        j+=1;
      }
    };
    
    return arrayOfChar.join('');
  } catch (error) {
    console.log(error);
  }
};

console.log(reverseText('motherland!!!')); // dnalhretom!!!
console.log(reverseText('tr.wep!ind-$')); // dn.ipe!wrt-$
console.log(reverseText('His nickname is agent #007 and he is 15!'));
console.log(reverseText());


