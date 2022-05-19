const input = document.querySelector(".input-text");
const output = document.querySelector(".output-text");

input.addEventListener("input", (e) => {
    output.textContent = "";

    textSplit = input.value.split(/(\s)|(?=[\n])|(?<=[\n])/g);

    textSplit.forEach((word) => {
        if (word && word !== " ") {
            const boldSpan = document.createElement("span");
            boldSpan.classList.add("bold");

            const regularSpan = document.createElement("span");

            const len = isPunctuation(word) ? word.length - 1 : word.length;

            if (len === 1 || len == 2) {
                boldSpan.textContent = word.substring(0, 1);
                regularSpan.textContent = word.substring(1) + " ";
            } else if (len === 3 || len == 4) {
                boldSpan.textContent = word.substring(0, 2);
                regularSpan.textContent = word.substring(2) + " ";
            } else if (len === 5 || len == 6) {
                boldSpan.textContent = word.substring(0, 3);
                regularSpan.textContent = word.substring(3) + " ";
            } else if (len >= 7) {
                boldSpan.textContent = word.substring(0, 4);
                regularSpan.textContent = word.substring(4) + " ";
            }
            output.appendChild(boldSpan);
            output.appendChild(regularSpan);
        }
    });
});

function isPunctuation(word) {
    const puncRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    return word[word.length - 1].match(puncRegex);
}
