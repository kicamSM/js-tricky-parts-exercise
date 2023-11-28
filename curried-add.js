// write a function called curreiedAdd if you give this function a number it returns a new function 
// if you give this function no args it returns sum of all nums passed `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

// function curriedAdd(a) {
//     let sum = 0;


//     if(a) {
//         sum += a;
//         console.log("sum:", sum)
//         return function (b) {
//         }
//     } else {
//         return sum; 
//     }


// }

function curriedAdd(a) {
    let sum = 0;
    if(!a) return sum; 
    sum += a; 
    return function addNum(b) {
    // if there is not a b then we are just returning the sum
      if (!b)  return sum;  
    //   otherwise we are taking the "b" and adding it to sum 
      sum += b;
    //   then we are just returning the function which is confusing. Its a recursive function. 
      return addNum;
     }
    } 


// let firstAdder = curriedAdd();
// console.log("firstAdder:", firstAdder)
let secondAdder = curriedAdd();
console.log("secondAdder:", secondAdder)
let secondAdder2 = curriedAdd(1)(2)()
console.log("secondAdder2:", secondAdder2)

let secondAdder3 = curriedAdd(2)(8)(5)(1)()
console.log("secondAdder3:", secondAdder3)


// firstAdder();
// secondAdder(1)(2)(); // 3
// thirdAdder(2)(8)(5)(1)(); // 16


module.exports = { curriedAdd };


