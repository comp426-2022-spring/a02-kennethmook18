//added this comment to re-commit becuase something weird happened.
var stuff = 0;

import minimist from 'minimist';
import { flipACoin } from './modules/coin.mjs';

const argv = minimist(process.argv.slice(2));
if (argv.call == null || ((argv.call != "heads") && (argv.call != "tails"))){
    console.log('Error: no input');
    console.log('Usage: node guess-flip --call=[heads|tails]');
}
else{
    console.log(flipACoin(argv.call));
}