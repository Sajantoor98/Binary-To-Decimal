let num = "1111";
let deci = 0;

 decimal(num);

function decimal(num) {
  for (var i = 0; i < num.length;) {
    // x is the current digit
    let x = parseInt(num[num.length - i - 1]);
    // if it finds a one
    if (x == 1) {
      // each binary digit is 2 ^ y. starting from 2 ^ 0 (1) + the previous digit
      let x = 2;
      deci = deci + (x ** i);
    }
    i++;
  }
}

console.log(deci);
