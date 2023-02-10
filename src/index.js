const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = []
    let str = ''
    let start = 0
    let end = 10
    while (result.length !== expr.length/10) {
      result.push(expr.slice(start, end))
      start += 10
      end+=10
    }

    for (let i = 0; i < result.length; i++) {
      if (result[i] === '**********') {
        str += ' '
      } else {
          let firstOccurrence = result[i].indexOf('1')
          let numericСode = result[i].slice(firstOccurrence)
          let numericСodeArray = []
          let zero = 0
          let one = 2

          while (numericСodeArray.length < numericСode.length/2) {
            numericСodeArray.push(numericСode.slice(zero, one))
            zero += 2
            one += 2
          }

          let dashPoint = ''

          for (let i = 0; i < numericСodeArray.length; i++) {
            if (numericСodeArray[i] === '10') {
              dashPoint+='.'
            } else {
              dashPoint+='-'
            }

          }
          str += MORSE_TABLE[dashPoint]
      }
    }
    return str

}

module.exports = {
    decode
}
