//the function mergeArray
arr1 = [1,2,4,5,7]
arr2 = [3,4,6,7,9,0]
//using set
// using 2 for loops
function mergeArray(arr1,arr2){
    const set1 = new Set();
    const arr = [];
    for(let i = 0; i < arr1.length; i++){
        arr.push(arr1[i]);
    }
    for(let j = 0; j < arr2.length; j++){
        arr.push(arr2[j]);
    }
    for (let k = 0; k< arr.length; k++){
        set1.add(arr[k]);
    }
    return set1;
}
console.log(mergeArray(arr1,arr2));

//Output : [1,2,4,5,7,3,6,9,0]