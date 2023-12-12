const rawData = await Bun.file('test.txt').text()

const partNumberFilter = () => {
    const lines = rawData.split('\n')
    let partNumberTotal = 0
    for (let i = 0; i < lines.length; i++) {
        let numberCache = ''
        let symbolCache = ''
        for (let j = 0; j < lines[i].length; j++) {
            if (parseInt(lines[i][j]) && lines[i][j] !== '.') {
                numberCache += lines[i][j]
            } else if (lines[i][j] !== '.'){
                symbolCache += j
            }
            console.log(numberCache, symbolCache)
        }
    }
}

partNumberFilter()

