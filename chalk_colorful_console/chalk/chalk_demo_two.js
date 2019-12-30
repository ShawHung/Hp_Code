const chalk = require('chalk');
const log = console.log;

log(chalk.blue("hello")+chalk.red("hung"));

log(
`
CPU:${chalk.red('90%')}
GPU:${chalk.green('75%')}
DISk:${chalk.blue('45%')}
`);

log(chalk.rgb(122,434,222)("shawhung"));


log(chalk.rgb(522,534,222).underline("shawhung"));

log(chalk.bgRgb(34,234,567)("shawhung"));