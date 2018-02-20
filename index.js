function theBeatlesPlay(musicians, instruments) {
  var musicianPlays = [];
  for(let i = 0; i < musicians.length; i++) {
    var sentence = `${musicians[i]} plays ${instruments[i]}`
    musicianPlays.push(sentence);
  }
  
  return musicianPlays;
}