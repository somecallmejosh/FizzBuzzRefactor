function getCount(){
  var fbPrompt = parseInt(prompt("Enter FizzBuzz Max Number"));
  return fbPrompt;
}
function FizzBuzz(FBMax){
  var listOpen = "<li class='list-group-item'>",
      listClose = "</li>",
      listClass = $(".list-group");
  for (var i = 1; i <= FBMax; i++) {
    if ( i % 5 === 0 && i % 3 === 0){
      $(listOpen + "FizzBuzz" + listClose).appendTo(listClass);
    } else if (i % 3 === 0) {
      $(listOpen + "Fizz" + listClose).appendTo(listClass);
    } else if (i % 5 === 0) {
      $(listOpen + "Buzz" + listClose).appendTo(listClass);
    } else {
      $(listOpen + i + listClose).appendTo(listClass);
    }
  }
}
FizzBuzz(getCount());