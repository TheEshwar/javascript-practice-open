
// Input array contain some elements.
let array = ['a', 'gfg', 'c', 'n'];
 
// Here array.values() method is called.
let iterator = array.values();
 
console.log('iterator value :- ', iterator.next().value)
let val = iterator.next().value
console.log('iterator value :- ', iterator.next().done)


// Here all the elements of the array is being printed.
for (let elements of iterator) {
    console.log(elements);
}
console.log("-----------------")
// Here all the elements of the array is being printed.
for (let elements of array) {
    console.log(elements);
}

