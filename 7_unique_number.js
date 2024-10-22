var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let array = [];
for (let i = 0; i < numbers.length; i++) {
    let found = false;
    for (let j = 0; j < array.length; j++) {
        if (numbers[i] == array[j]) {
            found = true;
            break;
        }
    }
    if (!found)
        array.push(numbers[i]);
}
console.log(array);


//using built in method(...Set())
// let uniqueNumber = [...new Set(numbers)];
// console.log(array);


//indexOf() মেথড ব্যবহার করে আমরা চেক করছি যে numbers[i] নতুন array তে আছে কিনা।
// for (let i = 0; i < numbers.length; i++) {
//     if (array.indexOf(numbers[i]) == -1)
//         array.push(numbers[i]);
// }
// console.log(array);