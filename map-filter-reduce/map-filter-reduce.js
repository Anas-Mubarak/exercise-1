function myMap(arr, callback)
{
    let tarray = []
    for(num of arr)
    {
        tarray.push(callback(num))
    }
    return tarray
}

function myFilter(arr, callback)
{
    let tarray = []
    for(num of arr)
    {
        callback(num)&&tarray.push(num)
    }
    return tarray
}

function myReduce(arr, callback,initval = 0)
{
    for(num of arr)
    {
        initval = callback(num,initval)
    }
    return initval
}

// testing
let r1 = myMap([1,2,3,4,5,6,7],(e)=>e+5)
console.log(r1)
let r2 = myFilter([1,2,3,4,5,6,7],(e)=>e>3)
console.log(r2)
let r3 = myReduce([1,2,3,4,5,6,7],(e,z)=>e+z)
console.log(r3)