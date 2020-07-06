const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin = (record) => {
 let win =  record.find(record => record.win === "W" )
return !!win ? win.year : undefined
}
