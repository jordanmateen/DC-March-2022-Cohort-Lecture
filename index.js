let arr = [1,2,3,4,5,6,7,8,9]
let arr2 = [8, 92, 46, 31]
let newArr = []
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr2.length; j++){
        let num = arr[i] * arr2[j]
         newArr.push(num)
    }
}

console.log(newArr)