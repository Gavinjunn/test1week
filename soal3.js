function digitsGrouper(numbers) {
  // only code here..
  var arrHasil =[]
  var digitSatu = []
  var digitDua = []
  var digitTiga = []
  var digitEmpat = []
  var strNum = []
  for(var j=0; j<numbers.length; j++){
    strNum.push(''+numbers[j])
  }
  // console.log(strNum)
  for(var i=0; i<strNum.length;i++){
    if(strNum[i].length===1){
      digitSatu.push(strNum[i])
    }else if(strNum[i].length===2){
      digitDua.push(strNum[i])
    }else if(strNum[i].length===3){
      digitTiga.push(strNum[i])
    }else{
      digitEmpat.push(strNum[i])
    }
  }
  arrHasil.push(digitSatu, digitDua, digitTiga, digitEmpat)
  return arrHasil
}

console.log(digitsGrouper([1, 12, 13, 0, 88, 123, 456]));
console.log(digitsGrouper([1234, 8, 2, 543, 1, 11, 222, 7654]));
console.log(digitsGrouper([1111, 1, 6, 5, 5, 555, 111, 11, 55, 5555]));
console.log(digitsGrouper([])); // [ [], [], [], [] ]
console.log(digitsGrouper([0, 00, 000, 0000]));
