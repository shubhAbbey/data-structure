var numUniqueEmails = function (emails) {
  for (let i = 0; i < emails.length; i++) {
    let emailSaperatorArr = emails[i].split("@");
    let newStr = emailSaperatorArr[0].replaceAll(".", "");
    let index = 0;
    for (let j = 0; j < newStr.length; j++) {
      if (newStr[j] != "+") {
        index++;
      } else break;
    }
    let updated = newStr.slice(0, index);
    emailSaperatorArr[0] = updated;
    emails[i] = emailSaperatorArr.join("@");
  }
  return [...new Set(emails)].length;
};
