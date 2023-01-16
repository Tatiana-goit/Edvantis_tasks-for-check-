// Определить, является ли данная строка палиндромом или нет

function turnOverLine (line) {
  return String(line).toLowerCase().split('').reverse().join('');
};

function checkPalindrome (line) {
  if (!line) {
    return false;
  };
  const reversedLine = turnOverLine (line);
  return String(line).toLowerCase() === reversedLine;
};

//Если не разбивать на отдельные функции

// function checkPalindrome  (line) {
//   if (!line) {
//     return false;
//   };
//   const reversedLine = String(line).toLowerCase().split('').reverse().join('');
//   return  String(line).toLowerCase() === reversedLine;
// }

console.log(checkPalindrome ('2332')); //true
console.log(checkPalindrome ('1111111')); //true
console.log(checkPalindrome ('level')); //true
console.log(checkPalindrome ('abbA')); //true
console.log(checkPalindrome ('cat')); //false
console.log(checkPalindrome ('3434')); //false
console.log(checkPalindrome (111311)); //false
console.log(checkPalindrome (11111)); //true
console.log(checkPalindrome ()); //false
console.log(checkPalindrome ('')); //false




