console.log("hangman homework")

let words = ["blue", "cat", "alien"];


let chooseWord = () =>{
        let RandomIndex = Math.floor(Math.random() * words.length);
        console.log(words[RandomIndex])
};
chooseWord();

let game = {
    guesses: 10,
    guessedLetters: [],
    isOver(){
        //return true if guess = 0
        if(this.guesses === 0){
            return true;
            //return false if game is still in play
        }else if(this.guesses >= 0 && this.guesses <= 10){
            return false;
            //return true if word is fully guessed
        }else if(this.guessedLetters.isFound(words)){
            return true;
        }
    },
    overMessage(){
        //if all letters in word were guessed before guesses ran out log win
        if(this.guessedLetters.isFound(words) === true){
            console.log("You win")
            // or if guesses ran out and didnt guess all letters in word log loose
        }else if(this.guesses === true){
            console.log("You loose")
        }
    }
};
game.isOver();