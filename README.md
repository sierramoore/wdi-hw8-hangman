![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# wdi-10-chi _fluff hounds_

---

Title: OOP Game<br>
Type: Homework <br>
Assigned: Dec 20, 2017 <br>
Due: Dec 21, 2017 <br>
Competencies: OOP (Object-oriented programming) in JavaScript, thinking through building a project 

---

![Hangman](http://www.roomrecess.com/Pictures/HangmanTitle.png)

# Hangman

You've done a **lot** of jQuery for a couple of days, so tonight take a little break from it.  You will be creating the popular game of Hangman as a JavaScript console game.  Project 1 is almost here and this assignment will walk you through how to think through, plan, and build such a project.  

## Fork this repo. Clone it. Do the stuff.


**Make sure you break the problem down before you start.**

**Note:** You're welcome to follow the basic structure/recommended functions below, but if you work out a different solution (that uses classes) to accomplish game play that's ok! Roll with it! 

## Commits :octocat:

Make a commit after you create each function / object / class / or more often if you feel so inclined! This will factor into your score on the assignment.

## Submits: Make a PR (pull request)

<hr>

## words
An array called `words` containing words to be guessed. Start simple by just having your player guess a single word. Later on, you can refactor your code so that your player is guessing phrases. But for now keep it simple.

## chooseWord()
A function that returns a random word from the word array.

## game
An object that has the following attributes:

* `guesses`
  * a number of guesses remaining
* `guessedLetters`
  * an array of strings
* `isOver()`
  * a function that checks whether to play another round, depending if the game is won, the game is lost, or the game can still be played (not won and still less than 10 guesses)
   Suggested functionality:
   * returns true if the word is fully guessed; run the function `isFound()` (see `Word` constructor function )
   * returns true if the number of guesses is 0
   * returns false if the game should still be in play
* `overMessage()`
  * returns "You win", if the word is completely guessed
  * returns "You lose", if `guesses` is 0

<hr>

## Letter()

Letter is a class. In order to play Hangman, you will need information about each letter - what is its value? Is it hidden? You will also need a way to change its state (from hidden to not hidden), depending if the player has guessed the letter.

#### Attributes
* `value`
  * a string
* `hidden`
  * a boolean ( should be set to true by default)

#### Methods
* `show()`
  * a function that will set `hidden` to false
* `display()`
  * a function that will return ` _ ` if the letter is hidden and return the value if the letter is not hidden

<hr>

## Word()

Word is a class. This constructor has a function to generate the Letter objects called `getLetters` and stores each letter as an object inside an array called `letters`.

#### Attributes
* `letters`
  * an array of Letter objects

#### Methods
* `getLetters(newWord)`
  * accepts an input argument, a string. It will split the string into `Letter` objects and push them into the `letters` array
* `isFound()`
  * if true, call `overMessage()` (from `game` object)  and return true if no letters are still hidden
  * returns false if at least one letter is hidden
* `test(letter)`
 * accepts an input argument, a string goes through the Letters in the letter array and updates the `hidden` value on the ones whose value matches the input argument `letter` and returns a boolean indicating if the letter was found
* `render()`
  * returns the word in its "guessed state"
  * ex: for the word 'closure', if the letters l, s, and e have been guessed, this function should return the string `_ l _ s _ _ e`

<hr>

# More `game` Attributes
You may find writing the following functions inside the `game` object uncomfortable at first, so you can create them as global objects. However, to keep things truly object oriented, refactor your code so these functions are inside the `game` object

## startGame()
startGame is a function <br>
 Suggested functionality:
  * set `guesses` to ten
  * reset the `guessedLetters` array
  * select a random word from `words` using the `chooseWord()` function and set it to a variable named `currentWord`
  * create a `new Word`, set it to a a variable named `currentGame`
  * call `currentGame.getLetters(currentWord)` to set up the `currentGame.letters` array. It should be an array of `Letters` objects
  * call playGame() once

## playGame()
playGame is a function<br>
Suggested functionality:
 * using the `game.isOver()` function, check if another round should be played or if the game is over
  * use if/if else/else to decide what should happen
 * If the game is not over:
  * prompt the player to enter a letter
  `test(letter)` if `letter` hasn't been tried already. Push the `letter` tried into the array of `guessedLetters`
  * decrease the guess count each round
  * check if the game is over `game.isOver()`
   * if `true` call overMessage()
   * if `false` call playGame() **caution** this may cause an infinite loop without the correct logic


# Hungry for More?

1. After the game is over, give the user the option to either quit or start a new game.
2. Improve the user experience - allow users to enter uppercase letters or lowercase letters. Let a user know they entered an invalid character (number, symbol). Let a user know they entered more than one character. Add more informative user interaction and more!
3. If you've been using prompts and alerts to communicate with the user, switch from prompt/alert in the browser to an input field, and/or even just listening for keypresses (read up on browser events you can listen for) to get the letter and messages in the html to say stuff to them.
4. Display the game progress in the browser (render guessed word, show played letters, number of guesses left). We've spent some time in class exploring techniques you could use to implement these things. And/or you can explore on your own.
5. Implement ascii graphic which shows more of a hangman for each wrong guess-- [google ascii console art for things like this](http://consoleascii.com/):

```
------|
|      O
|     /|\
|     / \
-----------
W_DE__A_D
```
6\. **HOOK IT UP TO THE DOM**

# CSS Videos -- to help you make it slick

[CSS Transform](https://youtu.be/Gu-HBBZLyjg?list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)<br>
[CSS Transitions](https://youtu.be/Xu3SrQhtBqw?list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)<br>
[CSS Animations](https://youtu.be/9RfHG3K8U_Q?list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)<br>

<hr>
<details><summary>Project 1 Inspiration</summary>

Inspiration - Projects by Previous Students

* [Egghunt](https://j-hha.github.io/egg_hunt/)
* [Blackjack](https://cardosi.github.io/)
* [Piggy](https://shreiya.github.io/piggy/)
* [Tic Tac Toe](http://sepowitz.github.io/tic-tac-toe/)
* [Overwatch](http://jerricabobadilla.me/payload/)
* [Connect Four](http://katiezhou.github.io/connectfour.html)
* [Core Defense](https://dnialwill.github.io/project_1/)
* [Blackjack pixel art](http://kwwalter.github.io/retro-blackjack/)
* [Snake](https://awdriggs.github.io/snake/)

</details>

