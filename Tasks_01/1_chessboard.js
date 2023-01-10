// Шахматная доска
// Написать функцию, которая принимает 2 аргумента (количество символов в ряду и количество рядов) и возвращает шахматный паттерн
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_

function createRows(rowLength) {
  let rows = {
      oddRow: '',
      evenRow: '',
  }
  for(let i = 0; i < rowLength; i++) {
      if(i % 2 == 0) {
          rows.oddRow += "_";
          rows.evenRow += "#";
      } else {
          rows.oddRow += "#";
          rows.evenRow += "_";
      }
  }
  return rows;
}

function generateBoard(rowQuantity, rows) {
  let board = '';
  for(let i = 0; i < rowQuantity; i++) {
      if (i % 2 == 0) {
          board += rows.evenRow + "\n\r";
      } else {
          board += rows.oddRow + "\n\r";;
      }
  }
  return board;
}

function render(board) {
  console.log(board);
}

function renderChessBoard(rowLength,numberOfRows) {
  try {
      rowLength = Number(rowLength);
      numberOfRows = Number(numberOfRows);
      // if(!!rowLength || !!numberOfRows ) {
      //     return "";
      // }   
      const rows = createRows(rowLength);
      const board = generateBoard(numberOfRows, rows);
      render(board);
  } catch(e) {
      console.error(e);
  }
}

renderChessBoard(8,8);



// -------------------------------------- VERSION 1: Q = n = 8 -?

// function chessBoard(numberOfChars,numberOfRows) {
//   return Array.from(Array(numberOfRows).keys()).reduce((acc, i) => {
//     let result = '';
//     i % 2 === 0 ? result += '_#'.repeat(numberOfChars/2) : result += '#_'.repeat(numberOfChars/2);
//     return acc + result + '\n';
//   }, '')
// }

// console.log(chessBoard(7,7));
