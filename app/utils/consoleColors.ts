const textColors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  italic: '\x1b[3m',
  underline: '\x1b[4m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',
  black: '\x1b[30m',
  dimRed: '\x1b[31m',
  dimgreen: '\x1b[32m',
  dimyellow: '\x1b[33m',
  dimblue: '\x1b[34m',
  dimmagenta: '\x1b[35m',
  dimcyan: '\x1b[36m',
  White: '\x1b[37m',
  Gray: '\x1b[90m',
  red: '\x1b[91m',
  green: '\x1b[92m',
  yellow: '\x1b[93m',
  blue: '\x1b[94m',
  magenta: '\x1b[95m',
  cyan: '\x1b[96m',
  white: '\x1b[97m'
}

const bgColors = {
  bgblack: '\x1b[40m',
  bgdimred: '\x1b[41m',
  bgdimgreen: '\x1b[42m',
  bgdimyellow: '\x1b[43m',
  bgdimblue: '\x1b[44m',
  bgdimmagenta: '\x1b[45m',
  bgdimcyan: '\x1b[46m',
  bgwhite1: '\x1b[47m',
  bggray: '\x1b[100m',
  bgred: '\x1b[101m',
  bggreen: '\x1b[102m',
  bgyellow: '\x1b[103m',
  bgblue: '\x1b[104m',
  bgmagento: '\x1b[105m',
  bgcyan: '\x1b[106m',
  bgwhite: '\x1b[107m'
}

type ColorMap = { [key: string]: string }

export const COLORS: ColorMap = { ...textColors, ...bgColors }

// log('underline', 'underline')
// log('italics', 'italics')
// log('reverse', 'reverse')
// log('hidden', 'hidden')

// log(null, '----- TEXT COLOR---------')
// log('bright', 'bright')
// log('dim', 'dim')
// log('black', 'black')
// log('dimRed', 'dimRed')
// log('dimgreen', 'dimgreen')
// log('dimyellow', 'dimyellow')
// log('dimblue', 'dimblue')
// log('dimmagenta', 'dimmagenta')
// log('dimcyan', 'dimcyan')
// log('White', 'White')
// log('Gray', 'Gray')
// log('red', 'red')
// log('green', 'green')
// log('yellow', 'yellow')
// log('blue', 'blue')
// log('magenta', 'magenta')
// log('cyan', 'cyan')
// log('white', 'white')

// log('bgblack', 'bgblack')
// log('bgdimred', 'bgdimred')
// log('bgdimgreen', 'bgdimgreen')
// log('bgdimyellow', 'bgdimyellow')
// log('bgdimblue', 'bgdimblue')
// log('bgdimmagenta', 'bgdimmagenta')
// log('bgdimcyan', 'bgdimcyan')
// log('bgwhite1', 'bgwhite1')
// log('bggray', 'bggray')
// log('bgred', 'bgred')
// log('bggreen', 'bggreen')
// log('bgyellow', 'bgyellow')
// log('bgblue', 'bgblue')
// log('bgmagento', 'bgmagento')
// log('bgcyan', 'bgcyan')
// log('bgwhite', 'bgwhite')
