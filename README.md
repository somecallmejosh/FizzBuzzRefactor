FizzBuzzRefactor
================

Because these projects all use gh-pages, I decided to create a new repo as opposed to a new branch. The original FizzBuzz project can be view [here](https://github.com/somecallmejosh/fizzbuzz).

##Project Requirements

- When the page loads, the user should be prompted to supply a number. The easiest way to do this would be with the prompt() function, but you should also feel free to create a simple text input with text telling the user to input a number.
- You’ll need to write one named function that takes an integer as argument, and then counts from 1 to the argument value, substituting "fizz", "buzz", and "fizzbuzz" accordingly.
- You’ll need to convert the value the user supplies from a string to a number. Remember that the value that you get from prompt() or the val() on your form will by default be a string. To convert this to an integer you can use the + operator to convert a string to an integer. For instance, if you had the string "22", you could convert that to a number with +"22".
- You will need to validate user input to ensure the user is submitting a number. You can use the parseInt() function in javascript to convert a string into an integer. For example, parseInt('597a') will return 597 where parseInt('hello') will return NaN. Read more about [parseInt() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt).
- Optionally, you can also write code to ensure that the user has not supplied a decimal value. For an easy way to do this, check out [this answer](http://stackoverflow.com/questions/2304052/check-if-a-number-has-a-decimal-place-is-a-whole-number/2304062#2304062) on Stack Overflow.
- DO NOT spend any time thinking about design for this app. Like the first version, the goal here is not to create a pretty app, but instead to hone your JavaScript skills.
- As usual, use Git to store your changes. When you’ve completed this assignment, push it up to GitHub pages, and share a link with your mentor and fellow students.