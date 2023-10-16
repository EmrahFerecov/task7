// 1
// const myArray = [1, 7, 9, 13, 15];
// function MinMax(arr) {
//   if (arr.length < 3) {
//     return 0;
//   }

//   let min = Math.min.apply(null, arr);
//   let max = Math.max.apply(null, arr);

//   let sum = 0;

  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== min && arr[i] !== max) {
//       sum += arr[i];
//     }
//   }

//   return sum;
// }
// const result = MinMax(myArray);
// console.log(result);
// -------------------------------------------------------
// 4
// const myArray = [7, 13, 15, 1, 5, 3];
// function findorta(arr) {
//     if (arr.length === 0) {
//       return null; // 
//     }
  
//     let min = arr[0];
//     let max = arr[0];
//     let sum = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       const currentElement = arr[i];
//       sum += currentElement;
  
//       if (currentElement < min) {
//         min = currentElement;
//       }
  
//       if (currentElement > max) {
//         max = currentElement;
//       }
//     }
  
//     const average = sum / arr.length;
//     return (min + max) / 2;
//   }
//   const result = findorta(myArray);
//   console.log(`Minimum ve maksimum: ${result}`);
// ------------------------------------------------------
// 2
// const nums = [1, 2, 3, 2, 4, 2, 5, 2];
// let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === element) {
//       count++;
//     }
//   }

//   return count;
// }
  