const testVar = {}

function testFunc() {
  return "hi"
}
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]
superbowlWin = (record)=>{
 let win =  record.find(record => record.win === "W" )
return !!win ? win.year : 1969
}
