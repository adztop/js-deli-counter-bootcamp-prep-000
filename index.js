//var katzDeliLine = []

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(`${name}`)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    var next = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${next}.`
  }
}

function currentLine(line){
    if (line.length === 0){
      return "The line is currently empty."
    }
    else {
      var next = "The line is currently: "
      let i = 0
      do {
        next = next + i + ". " + line[i]
        i++
      }
      while (i < line.length)
    }
  }
  
