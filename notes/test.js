function reverseString(str) {
  return str.split("").reverse().join("");
}
function excerptBuild(str, n){

  if (str){
    str = str.trim()
    if (str.length > n){
      str = str.substr(0,n-1)
      str = reverseString(str)
      str = str.substring(str.indexOf(" ")   , str.length)
      str = reverseString(str) + '...'
    }
  }
  return str
}

var str = 'I recently acquired (very inexpensively) a  Knabe grand piano made in the 1950s.   The instrument is in  good rebuildable condition.  The case is in horrible condition, having lived in a school for many years.  I decided that to bring the piano back to its glory, that a major woodworking project was needed.   I will be re-veneering the entire case to give the piano a like new look.'
str = excerptBuild(str, 50);
console.log(str)
