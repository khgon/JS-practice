const maxInput = document.querySelector("#maxInput");
const guessForm = document.querySelector("#guessForm");
const record = document.querySelector("#record");
const result = document.querySelector("#outcome");

function handlemaxInput() {
    let max = maxInput.value;
    if (parseInt(max) < 0) {
        max = null;
        maxInput.value = null;
        alert("범위에는 음수가 포함될 수 없습니다");
    }
}

function handleGuessSubmit(event) {
    event.preventDefault();
    let max = maxInput.value;
    let userInput = parseInt(document.querySelector("#guessForm input").value);
    if (parseInt(max) >= 0) {
        let random = Math.ceil(Math.random()*max);
        record.innerText = `You chose: ${userInput}, the machine chose: ${random}.`;
        (userInput === random) ? result.innerText = "You won!": result.innerText = "You lost!";
        } else {
        alert("범위 최대값을 입력하세요.");
    }
}

maxInput.addEventListener("focusout", handlemaxInput);
guessForm.addEventListener("submit", handleGuessSubmit);