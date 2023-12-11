const rawData = await Bun.file('testsample.txt').text()

const numberSorter = (string: string) => {
  let sortedString = string.split('')
  let calibrationTotal: number = 0
  let calibrationInts: string[] = []
    for (let i = 0; i < sortedString.length; i++) {
      if (parseInt(sortedString[i])) {
        // calibrationTotal += sortedString[i]
        // console.log(calibrationTotal)
        calibrationInts.push(sortedString[i])
      }
    }
    calibrationTotal = parseInt(calibrationInts[0] + calibrationInts[calibrationInts.length - 1])
    return calibrationTotal
}

const calibrationCalculator = () => {
  const calibrationLines = rawData.split('\n')
  let calibrationValues: number = 0
  for (let i = 0; i < calibrationLines.length; i++) {
    // console.log(rawData)
    calibrationValues += numberSorter(calibrationLines[i])
  }
  console.log(calibrationValues)
}

calibrationCalculator()
