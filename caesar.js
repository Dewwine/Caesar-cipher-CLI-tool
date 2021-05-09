const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const cryptAction = (text, mode, shift) => {
  if (mode != 'encode') {
    shift *= -1;
  }

  return text
    .split('')
    .map((item) => {
      const lowerCaseItem = item.toLowerCase();
      const isLowerCase = item === lowerCaseItem;
      let index = alphabet.indexOf(lowerCaseItem);

      if (index >= 0) {
        index += shift % alphabet.length;

        if (index >= alphabet.length) {
          index -= alphabet.length;
        }

        if (index < 0) {
          index += alphabet.length;
        }
        item = alphabet[index];
      }

      return isLowerCase ? item : item.toUpperCase();
    })
    .join('');
};

module.exports = { cryptAction };
