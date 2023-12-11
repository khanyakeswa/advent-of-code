const rawData = await Bun.file('test.txt').text()

const cubeCounter = () => {
    const games: string[] = rawData.split('\n')
    const gamesCollections = []
    let gameData = {gameId: 0, maxRed: 0, maxGreen: 0, maxBlue: 0}
    for (let i = 0; i < games.length; i++) {
        gameData.gameId = parseInt(games[i].slice((games[i].indexOf('e') + 1), (games[i].indexOf(':'))))
    }
    console.log(gameData.gameId)
}

cubeCounter()