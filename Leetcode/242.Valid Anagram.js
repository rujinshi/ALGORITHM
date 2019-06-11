/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}·
 * @description 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * HASH方法 借用对象 key为每个字母 对应的value为出现的次数
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  if (s === "" && t === "") {
    return true;
  }
  let sObj = {};
  let tObj = {};

  function insertObj(obj, str) {
    for (let i = 0; i < str.length; i++) {
      const element = str[i];
      if (obj[element]) {
        obj[element] = obj[element] + 1;
      } else {
        obj[element] = 1;
      }
    }
  }
  insertObj(sObj, s);
  insertObj(tObj, t);

  for (const key in sObj) {
    if (sObj[key] !== tObj[key]) {
      return false;
    }
  }

  return true;
};
