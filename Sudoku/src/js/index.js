// 生成一个二维数组

function makeRow(v = 0) {
  const array = new Array(9);
  array.fill(v);
  return array;
}

// function makeMatrix(v = 0) {
//   const array = new Array(9);
//   array.fill(makeRow(v));
//   return array;
// }

function makeMatrix(v = 0) {
  return Array.from({length: 9}, () => makeRow(v))
}

// const a = makeMatrix()
// a[1][2] = 2
// console.log(a)

/** 
 * Fisher-Yates 洗牌算法
*/
 function shuffle(array) {
  const endIndex = array.length - 2;
  for (let i = 0; i < endIndex; i++) {
    const j = i + Math.floor(Math.random() * (array.length - i));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
 }

 const a = Array.from({length: 9}, (v, i) => i);
 console.log(a)
 console.log(shuffle(a))