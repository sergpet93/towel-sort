
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix == undefined) return []
  for (let row = 0; row < matrix.length; row ++){
    if (row % 2 === 0){
      for (let i of matrix[row]){
        result.push(i);
      }
    }
    else{
      for (let j of matrix[row].reverse()){
        result.push(j);
      }
    }
  }
  return result
}
