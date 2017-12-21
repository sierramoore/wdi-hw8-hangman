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
        if(this.guesses <= 0){
            this.game = false;
        }else if(this.guesses >= 0 && this.guesses <= 10){
            this.game = true;
        }
    },
    overMessage(){

    }
};