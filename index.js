let maxNum = 100;
let minNum = 0;
let guessNum = Math.floor((Math.random() * (maxNum - minNum + 1)));

let attempts = 0;
let guess;
let running = true;

document.getElementById("submit").onclick = function() {

    guess = document.getElementById("guess").value

    if(isNaN(guess)) {
        document.getElementById("prompt").textContent = `So ${guess} is a number now huh? Valid.`
    }

    else if(guess > maxNum) {
        document.getElementById("prompt").textContent = `Are you as high as the number you just entered?`
    }
    
    else if(guess < minNum) {
        document.getElementById("prompt").textContent = `Negatives? Seriously?`
    }
    
    else {
        if(guess > guessNum) {
            document.getElementById("prompt").textContent = `${guess} is TOO HIGH! Try again.`
            attempts++
        }
        else if(guess < guessNum) {
            document.getElementById("prompt").textContent = `${guess} is TOO LOW! Try again`
            attempts++
        }
        else {
            document.getElementById("prompt").textContent = `Correct 🎊! ${guess} is what I was thinking. You took ${attempts} attempts.`
            document.getElementById("submit").disabled = true;
            document.getElementById("guess").disabled = true;
        }
    }
}


