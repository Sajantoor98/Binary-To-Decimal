
// checks if the number is a valid binary number
function checkBinaryValue() {
  value = document.getElementById('binaryInput').value;
  for (var i = 0; i < value.length; ) {
    let x = value[i];
    if (x != 0 && x != 1)  { // Checks if the dits contain anything other than 1 or a 0.
      alert('Invalid value');
      return;
    }
    i++
  }
  decimal(value); // pushes to function for computation to binary to decimal
}

// Binary to decimal function
function decimal(num) {
  let deci = 0;
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
  document.getElementById('BinaryToDecimal').innerText = deci;
}

// Checks whether or not it's a valid number
function checkNumValue() {
  value = document.getElementById('decimalInput').value;
  for (var i = 0; i < value.length;) {
    let x = value[i];
    if (isNaN(x)) { // Checks if it's isn't a number and returns
      console.log('not a number')
      return;
    }
    i++
  }
  binary(value);
}

// Decimal to binary function
function binary(num) {
  // initializes the string and array.
  var binNum = "";
  var binaryVal = [];

  while (num > 0) {
    var digit = num % 2; // gets remainder, it's either 1 or 0.
    num = Math.trunc(num / 2); // gets rid of the decimal, effectively making it an interger like C++
    binaryVal.push(digit); // pushes to the array;
  }

  // Reverse the binary digits to proper order.
  for (var i = (binaryVal.length - 1); i >= 0; i--) {
    // Arranges the bits properly.
    if (((i + 1) % 4) == 0) {
      console.log(i);
      // adds the space in between 4 bits 
      binNum =  binNum + " " + binaryVal[i];
    } else {
      binNum = binNum + binaryVal[i];
    }
  }

  document.getElementById('DecimalToBinary').innerText = binNum;
}
