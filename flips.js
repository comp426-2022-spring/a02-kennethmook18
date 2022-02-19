import minimist from 'minimist';
// Import the coinFlips function from your coin.mjs file
import { coinFlips, countFlips } from './modules/coin.mjs';
// Call the coinFlips function and put the return into STDOUT

const args = minimist(process.argv.slice(2))
const flipNumber = args["number"] || 1
var flips = coinFlips(flipNumber)
console.log(flips)
console.log(countFlips(flips))