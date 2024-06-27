function reverseNumber(num) {
    let numStr = num.toString(); 
    let reversedStr = numStr.split('').reverse().join('');
    return parseInt(reversedStr);
  }
  let x = 45227613;
  console.log(reverseNumber(x)); 
  