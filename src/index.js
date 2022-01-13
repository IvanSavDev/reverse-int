module.exports = function reverse (n) {
  const moduloNumber = Math.abs(n);
  const numberToString = String(moduloNumber);
  let newNumber = "";

  for (let i = numberToString.length - 1; i >= 0; i--) {
    newNumber += numberToString[i];
  }

  return newNumber;
}
