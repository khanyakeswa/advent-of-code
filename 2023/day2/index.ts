const rawData = await Bun.file('testsample.txt').text()

const cubeCounter = () => {
    const games: string[] = rawData.split('\n')
    let gameIdTotal = 0
    for (let i = 0; i < games.length; i++) {
        const gameId = parseInt(games[i].slice((games[i].indexOf('e') + 1), (games[i].indexOf(':'))))
        const gameRounds = games[i].slice(games[i].indexOf(':') + 1).split(';')
        let cubeCount = {red: 0, green: 0, blue: 0}
        for (let i = 0; i < gameRounds.length; i++) {
            const roundCubes = gameRounds[i].split(',')
            for (let j = 0; j < roundCubes.length; j++) {
                if (roundCubes[j].includes('red')) {
                    if (parseInt(roundCubes[j].replace('red', '')) > cubeCount.red) {
                        cubeCount.red = parseInt(roundCubes[j].replace('red', ''))
                    }
                } else if (roundCubes[j].includes('green')) {
                    if (parseInt(roundCubes[j].replace('green', '')) > cubeCount.green) {
                    cubeCount.green = parseInt(roundCubes[j].replace('green', ''))
                }
            } else if (roundCubes[j].includes('blue')) {
                    if (parseInt(roundCubes[j].replace('blue', '')) > cubeCount.blue) {
                        cubeCount.blue = parseInt(roundCubes[j].replace('blue', ''))
                    }
                }
            }
        }
        if (cubeCount.red <= 12 && cubeCount.green <= 13 && cubeCount.blue <= 14) {
            gameIdTotal += gameId
        }
    }
    console.log(gameIdTotal)
}

cubeCounter()