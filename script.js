function getCount(){
  var fbPrompt = parseInt(prompt("Enter FizzBuzz Max Number"));
  return fbPrompt;
}
function FizzBuzz(FBMax){
  for (var i = 1; i <= FBMax; i++) {
    if ( i % 5 === 0 && i % 3 === 0){
      $("<li class='list-group-item'>FizzBuzz</li>").appendTo($(".list-group"));
    } else if (i % 3 === 0) {
      $("<li class='list-group-item'>Fizz</li>").appendTo($(".list-group"));
    } else if (i % 5 === 0) {
      $("<li class='list-group-item'>Buzz</li>").appendTo($(".list-group"));
    } else {
      $("<li class='list-group-item'>" + i + "</li>").appendTo($(".list-group"));
    }
  }
}

FizzBuzz(getCount());