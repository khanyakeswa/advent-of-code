const rawCalorieList = await Bun.file('testsample.txt').text()

// console.log(rawCalorieList);

const calorieCounter = () => {
  const calorieList = rawCalorieList.split('\n')
  const processedCalorieList: number[][] = []
  let elfCals: number[] = []
  for (let i = 0; i < calorieList.length; i++) {
      if (calorieList[i]) {
        elfCals.push(Number(calorieList[i]))
    } else {
        processedCalorieList.push(elfCals)
        elfCals = []
    }
  }
  
  // [[1, 2, 3], [1], [1, 2]] => [1, 2, 3]
  const calorieSums = processedCalorieList.map((elfCals) => {
      const calorieSum = elfCals.reduce((sum, currentCalorie) => sum + currentCalorie, 0)
      
      return calorieSum;
    })
    console.log(calorieSums.sort((a, b) => b - a)[0])
}

calorieCounter()

// reduce: [1, 2, 3] => 6
// map: [1, 2, 3] => [11, 22, 33] done!
// filter: [1, 2, 3, 4, 5] => [2, 4]