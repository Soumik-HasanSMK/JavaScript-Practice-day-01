const array = [18, 1, 14, 5, 11, 3, 20, 6, 19, 7, 16, 8, 12, 9, 10, 4, 15, 2, 17, 13];
for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
            let tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
    }
}
console.log(array);

//using built-in function:
// array.sort((a, b) => a - b);
// console.log(array);