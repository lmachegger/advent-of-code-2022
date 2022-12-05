import { promises as fs } from 'fs'

const inputStack = await fs.readFile('./input-stack.txt', 'utf-8')
console.log(inputStack)

const lengthOfStack = 3
const stacks = [[], [], []]

const splitted = inputStack.split('\n')
splitted.forEach((line, idx) => {
  let seperatorCount = -1
  let stackId = 0

  for (let i = 0; i < line.length; i++) {
    console.log('line: ', idx, line[i])
  }
})

// console.log(stacks)
