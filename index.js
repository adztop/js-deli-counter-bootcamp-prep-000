var katzDeliLine = []

function takeANumber(n,name){
  katzDeliLine.push(name)
  n = katzDeliLine.length
  return (`Welcome, ${name}. You are number ${n} in line.`)
}