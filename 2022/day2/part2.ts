const rawData = await Bun.file("testsample.txt").text();

const rock = 1
const paper = 2
const scissor = 3

const loss = 0
const tie = 3
const win = 6

function scoreOf(a: number, b: number) {
  if ((a === rock && b === tie) || (a === paper && b === loss) || (a === scissor && b === win)) {
    return rock;
  }
  if ((a === paper && b === tie) || (a === scissor && b === loss) || (a === rock && b === win)) {
    return paper;
  }
  if ((a === scissor && b === tie) || (a === rock && b === loss) || (a === paper && b === win)) {
    return scissor;
  }
  return 0
}

const shapeTranslator = (letter: string): number => {
  if (letter === 'A') {
      return rock
  }
  if (letter === 'B') {
      return paper
  }
  if (letter === 'C') {
      return scissor
  }
  if (letter === 'X') {
      return loss
  }
  if (letter === 'Y') {
      return tie
  }
  if (letter === 'Z') {
      return win
  }
  
  throw new Error(`"${letter}" is not a shape`);
}

const gameCalculator = () => {
    const rawRounds = rawData.split('\n')

    const rounds = rawRounds.map(rawRound => {
        const rawOppShape = rawRound[0]
        const rawYourShape = rawRound[2]
        
        const oppShape = shapeTranslator(rawRound[0])
        const yourShape = shapeTranslator(rawRound[2])

        return scoreOf(oppShape, yourShape) + yourShape;
    })
    const totalScore = rounds.reduce((totalScore, score) => totalScore + score, 0)
    console.log(totalScore)
}

gameCalculator();