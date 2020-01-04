function drawFloydTriangle(depth){
  let tempStr = ""
  let prevNumber = 1

  for(let i = 0; i < depth; i++){
    tempStr = ""; 
    let j = 0;
    while(j<= i){
      tempStr = tempStr + "  " + prevNumber
      j++
      prevNumber++
      
    }
    console.log(tempStr)
  }
}


drawFloydTriangle(3)

// drawFloydTriangle(5)
// console.log('  ')
// drawFloydTriangle(10)