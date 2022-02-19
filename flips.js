import minimist from 'minimist';
// Import the coinFlips function from your coin.mjs file
import { coinFlips, countFlips } from './modules/coin.mjs';
// Call the coinFlips function and put the return into STDOUT

const argv = minimist(process.argv.slice(2));
if (argv.number != null) {
    var flips = coinFlips(argv.number)
    console.log(flips);
    console.log(countFlips(flips));
}
else {
    var flips = coinFlips(1);
    console.log(flips)
    console.log(countFlips(flips));
}