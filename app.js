// console.log("Lets Play Hangman")
// //pick random word
// //turn word into dashes
// //store all letters of current random word into an array 
// //get user input letter guess
// //check if userinput letter matches any letter from array


class Letter {
    constructor(char){
        this.value = char;
        this.hidden = true;
    }
    show(){
        this.hidden = false;
    }
    test(char){
        if (char === this.value) {
            this.show();
            return true;
        }

        return false;
    }
    displayValue(){
        if(this.hidden){
            return "_";
        }

        return this.value;
    }
}

class Word {
    //letters str of charaters
    constructor(letters){
        this.letters = [];
        //construct arr of letter obj and place in class attr letters
        // ..for each charater from input  str
        //construct a Letter obj and push it in arr
        for(let i=0; i < letters.length; i++){
            this.letters.push(new Letter(letters[i]));
        }

    }
    getLetters(newWord){
        //accept input arg
        //split to letter obj
        //push into letters arr
    }
    isFound(){
        if(guessed){
            overMessage();
            // for(all letters in current guessing word){
            //     if(Letter.hidden)
            //     return true
            // }
        }
    }
    test(letter){
        //when u store obj of a class with methods in an arr you can ac
        //accept input as arg for letters
        //loop thru letters
        for(let i=0; i < this.letters.length; i++) {
            if (this.letters[i].test(letter)) {//letter user entered matches charater in letters arr
            }
        }
    }
    render(){
        //create str obj
        let checkedWord = "";
        for(let i=0; i < this.letters.length; i++) {
            //take all values to conbine and retrun value
            checkedWord = checkedWord + this.letters[i].displayValue()
        }
        return checkedWord;
    }
}

let roma = new Word("cat");
console.log(roma.render());
//needs "" to expect str data type as arg
roma.test("a");
roma.test("t");
console.log(roma.render())

let words = ["blue", "cat", "alien"];

let chooseWord = function(){
    let randomIndex = Math.floor(Math.random() * words.length);
    let random = words[randomIndex];
    return random;
};
console.log(chooseWord());


let game = {
    guesses: 10,
    guessedLetters: [],

    isOver(){
        //return true if guess = 0 //return true if word is fully guessed
        if(this.guesses === 0 || this.allLettersFound()){
            return true;
            //return false if game is still in play
        }
        return false;
    },

    allLettersFound(){
        // TODO check if all letters are found
       return false;
    },

    overMessage(){
        //if all letters in word were guessed before guesses ran out log win
        if(this.allLettersFound()){
            return "You win";
            // or if guesses ran out and didnt guess all letters in word log loose
        }else if(this.guesses === 0){
            return "Better luck next time";
        }
    }
};





