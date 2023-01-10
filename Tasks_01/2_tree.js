// Написать функцию для изображения "Елка" в разных вариантах
// *
// **

// *
// **
// ***

function createTree(treeLength) {
  let tree = '';
  for (let i = 1; i <= treeLength; i++) {
    tree += '*'.repeat(i) + '\n';
  }
  return tree;
}

function render(tree) {
  console.log(tree);
}

function renderTree(treeLength) {
  try {
    if(treeLength <= 0 || treeLength > 50) {
      return '';
    } 
    treeLength = Number(treeLength); 
    const tree = createTree(treeLength);
    render(tree);
  } catch(e) {
      console.error(e);
  }
}

// --------------- Other variant-----------------

// function renderTree(n) {
//   console.log(Array.from(Array(n).keys()).reduce((acc, i) => {
//     return acc + '*'.repeat(1+i) + '\n'
//   }, ''));
// }

// function renderTree(n) {
//   if (n === 0) {
//     return 1;
//   }
//   console.log('*'.repeat(8-n));
//   return tree(n-1);
// }

renderTree(2);
renderTree(3);
renderTree(8);



//   *
//  **
// ***

function createInvertedTree(treeLength) {
  let tree = '';
  for (let i = 1; i <= treeLength; i++) {
    tree += ' '.repeat(treeLength-i) + '*'.repeat(i) + '\n';
  }
  return tree;
}

function renderSecondTree(tree) {
  console.log(tree);
}

function renderInvertedTree(treeLength) {
  try {
    if(treeLength <= 0 || treeLength > 50) {
      return '';
    } 
    treeLength = Number(treeLength); 
    const tree = createInvertedTree(treeLength);
    renderSecondTree(tree);
  } catch(e) {
      console.error(e);
  }
}

renderInvertedTree(2);
renderInvertedTree(3);
renderInvertedTree(8);


//   *  
//  * *
// * * *

function createStraightTree(treeLength) {
  let tree = '';
  for (let i = 1; i <= treeLength; i++) {
    tree += ' '.repeat(treeLength-i) + '* '.repeat(i) + ' '.repeat(treeLength-i) + '\n';
  }
  return tree;
}

function renderThirdTree(tree) {
  console.log(tree);
}

function renderStraightTree(treeLength) {
  try {
    if(treeLength <= 0 || treeLength > 50) {
      return '';
    };
    treeLength = Number(treeLength); 
    const tree = createStraightTree(treeLength);
    renderThirdTree(tree);
  } catch(e) {
      console.error(e);
  }
}

renderStraightTree(2);
renderStraightTree(3);
renderStraightTree(8);
