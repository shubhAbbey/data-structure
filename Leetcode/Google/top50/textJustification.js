var fullJustify = function (words, maxWidth) {
  let result = [],
    word = 0,
    currStr = "",
    currlen = 0;
  var isEvenly = function (diff) {
    return diff % (currlen - 1) === 0;
  };
  var formatString = function (index) {
    let diff = maxWidth - currStr.length;
    if (index === words.length - 1 || currlen === 1) {
      currStr += " ".repeat(diff);
    } else {
      if (isEvenly(diff)) {
        let currArr = currStr.split(" ");
        currStr = currArr[0];
        for (let i = 1; i < currArr.length; i++) {
          currStr += " ".repeat(diff / (currlen - 1) + 1) + currArr[i];
        }
      } else {
        while (diff > 0) {
          let i = 0;
          while (i < currStr.length) {
            if (currStr[i] === " " && currStr[i + 1] !== " ") {
              currStr = currStr.slice(0, i) + " " + currStr.slice(i);
              diff--;
              i++;
              if (diff === 0) break;
            }
            i++;
          }
        }
      }
    }
    result.push(currStr);
  };
  while (word < words.length) {
    if (!currStr.length) {
      currStr = words[word];
      currlen = 1;
    } else {
      if (currStr.length + words[word].length + 1 <= maxWidth) {
        currStr += " " + words[word];
        currlen++;
      } else {
        formatString(word - 1);
        currStr = words[word];
        currlen = 1;
      }
    }
    if (word === words.length - 1) formatString(word);
    word++;
  }
  return result;
};
