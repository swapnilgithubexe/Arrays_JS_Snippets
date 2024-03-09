function findTheNumber(arr,ele) {
    let answer = -1;
    for(let i = 0; i<arr.length; i++){
        if (arr[i] === ele){
            answer = i;
        }
    }
 
    return answer;
}
// console.log(findTheNumber([23,43,67,89,62,29],67));