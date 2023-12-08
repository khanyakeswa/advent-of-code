const rawData = await Bun.file('test.txt').text()

const calibrationCalculator = () => {
    const calibrationLines = rawData.split('\n')
    let calibrationValues: number[] = []
    const processedCalibrations: number[][] = [calibrationValues]
    for (let i = 0; i < calibrationLines.length; i++) {
        console.log(calibrationLines[i])
    }
}

const numberSorter = (string: string) => {
    let sortedString = string.split('')
    let calibrationTotal: number = 0
    for (let i = 0; i < sortedString.length; i++) {
        if (Number.isInteger(sortedString[i])) {
            calibrationTotal = calibrationTotal + 
        }
}

calibrationCalculator()
