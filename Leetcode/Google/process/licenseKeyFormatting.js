var licenseKeyFormatting = function (s, k) {
  let count = 0,
    keySpliter = [];
  let str = "",
    pairs = 0;
  for (let i = 0; i < s.length; i++) if (s[i] !== "-") count++;
  pairs = Math.ceil(count / k);
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== "-") {
      str = s[i].toUpperCase() + str;
      if (str.length === k && keySpliter.length !== pairs) {
        keySpliter.push(str);
        str = "";
      } else {
        if (keySpliter.length === pairs - 1) {
          keySpliter.push(str);
        } else if (keySpliter.length === pairs)
          keySpliter[keySpliter.length - 1] = str;
      }
    }
  }
  return keySpliter.reverse().join("-");
};
