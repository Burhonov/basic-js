const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const firstLetterArray = [];
  for (const el of members) {
    if (typeof el === 'string' && el.trim().length) {
      firstLetterArray.push(el.trim()[0].toUpperCase());
    }
  }
  return firstLetterArray.sort().join('');
};
