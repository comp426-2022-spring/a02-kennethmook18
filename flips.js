// Import the coinFlips function from your coin.mjs file
import { coinFlips, countFlips } from "./modules/coin.mjs";
// Call the coinFlips function and put the return into STDOUT

import {createRequire} from 'module'
const require = createRequire(import.meta.url)
const args = require('minimist')(process.argv.slice(2))
args['number']
var coin_flips = coinFlips(args.number)
console.log(coin_flips)
var count_flips = countFlips(coin_flips)
console.log(count_flips)