const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let winningRecord = array.find(({ result }) => result === 'W')
  if(winningRecord){
    return winningRecord["year"]
  }
}
