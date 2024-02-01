// 1-masala
function ondan_katta(arr) {
    return arr.filter(x => x > 10);
  }

let number = [7, 12, 8, 15, 3, 20];
console.log(ondan_katta(number));

// 2-masala
function findCubes(arr) {
    return arr.map(x => x ** 3);
  }
  
let nums = [4, 5, 6];
console.log(findCubes(nums));
  
// 3-masala
function uch_va_beshgakarrali(arr) {
    return arr.some(x => x === 3 || x === 5);
  }
  
let numbers = [10, 12, 15, 21, 35, 45];
console.log(uch_va_beshgakarrali(numbers));  

// 4-masala
function max_num(arr) {
    return Math.max(...arr);
  }
  
let sonlar = [8, 12, 5, 20, 10];
console.log(max_num(sonlar));

// 5-masala
function reverse_string(arr) {
    return arr.reverse().join('');
  }
  

let son = [1, 2, 3, 4, 5];
console.log(reverse_string(son));
  