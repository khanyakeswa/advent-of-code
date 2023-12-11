const rawData = await Bun.file("testsample.txt").text();

const rock = 1
const paper = 2
const scissor = 3

function scoreOf(a: number, b: number) {
  if (a === b) {
    return 3;
  }
  if (a === paper  && b === rock) {
    return 0;
  }
  if (a === scissor  && b === paper) {
    return 0;
  }
  if (a === rock  && b === scissor) {
    return 0;
  }

  return 6;
}

const shapeTranslator = (letter: string): number => {
  if (letter === 'A' || letter === 'X') {
      return rock
  }
  if (letter === 'B' || letter === 'Y') {
      return paper
  }
  if (letter === 'C' || letter === 'Z') {
      return scissor
  }
  if (letter === 'C' || letter === 'Z') {
      return scissor
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