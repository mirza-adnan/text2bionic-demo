const input = document.querySelector(".input-text");
const output = document.querySelector(".output-text");

input.addEventListener("input", () => {
    output.textContent = "";
    textSplit = input.value.split(" ");

    textSplit.forEach((word) => {
        const boldSpan = document.createElement("span");
        boldSpan.classList.add("bold");

        const span = document.createElement("span");

        const len = word.length;

        if (len === 1 || len == 2) {
            boldSpan.textContent = word.substring(0, 1);
            output.appendChild(boldSpan);

            span.textContent = word.substring(1) + " ";
            output.appendChild(span);
        } else if (len === 3 || len == 4) {
            boldSpan.textContent = word.substring(0, 2);
            output.appendChild(boldSpan);

            span.textContent = word.substring(2) + " ";
            output.appendChild(span);
        } else if (len === 5 || len == 6) {
            boldSpan.textContent = word.substring(0, 3);
            output.appendChild(boldSpan);

            span.textContent = word.substring(3) + " ";
            output.appendChild(span);
        } else if (len >= 7) {
            boldSpan.textContent = word.substring(0, 4);
            output.appendChild(boldSpan);

            span.textContent = word.substring(4) + " ";
            output.appendChild(span);
        }
    });
});
