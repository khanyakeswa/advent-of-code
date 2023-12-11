const rawData = await Bun.file('test.txt').text()

const cubeCounter = () => {
    const games: string[] = rawData.split('\n')
    const gamesCollections = []
    let gameData = {gameId: 0, maxRed: 0, maxGreen: 0, maxBlue: 0}
    
    console.log(games)
}

cubeCounter()