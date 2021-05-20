function convertFahrToCelsius(fahr) {
  
  if (typeof fahr === "number" || typeof fahr === 'string') {
    let a = isFinite(fahr)
    if (a) {
      return ((fahr - 32) * (5 / 9)).toFixed(4);
    } else if (typeof fahr == 'string') {
      return JSON.stringify(fahr)  + ` is not a valid number but a/an ${typeof fahr}.` ;
    } else {
      return  fahr + ` is not a valid number but a/an special numeric value.` ;
    }
  } 

  else if (Array.isArray(fahr)) {
    return JSON.stringify(fahr)  + ` is not a valid number but a/an array.` ;
  } 
  
  else if (fahr === null) {
    return JSON.stringify(fahr)  + ` is not a valid number but a/an null.` ;
  }

  else if (typeof fahr === 'function') {
    return fahr  + ` is not a valid number but a/an ${typeof fahr}.` ;
  }

  else {
    return JSON.stringify(fahr)  + ` is not a valid number but a/an ${typeof fahr}.` ;
  }
}

// console.log(convertFahrToCelsius(checkYuGiOh));


function checkYuGiOh(n) {
  let a = isFinite(n)
  let arr = []
  if (a) {
    for (let i = 1; i <= n; i++) {
 let str = '';
    
    if (i % 2 == 0) {
      str += 'yu'
    }
    
    if (i % 3 == 0) {
      if (str.includes('yu')) {
        str += '-gi'
      } else {
        str += 'gi'
      }
    }
    
    if (i % 5 == 0) {
      if (str.includes('yu') || str.includes('gi')) {
      str += '-oh'
    } else {
      str += 'oh'
    }
    }
arr.push(str || i)
  }
    
} else {
  return `invalid parameter: ` + JSON.stringify(n)
}
  return arr
}


// console.log(checkYuGiOh('fizzbuzz is meh'))