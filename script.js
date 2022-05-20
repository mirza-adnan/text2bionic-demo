const input = document.querySelector(".input-text");
const output = document.querySelector(".output-text");
const clearBtn = document.querySelector(".clear-btn");
const dummyTextBtn = document.querySelector(".dummy-text-btn");

input.addEventListener("input", (e) => renderText(input.value));

clearBtn.addEventListener("click", () => {
    input.value = "";
    output.textContent = "";
});

dummyTextBtn.addEventListener("click", () => {
    const text = `What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`;

    input.value = text;
    renderText(text);
});

function isPunctuation(word) {
    const puncRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    return word[word.length - 1].match(puncRegex);
}

function formatWord(word) {
    const boldSpan = document.createElement("span");
    boldSpan.classList.add("bold");

    const regularSpan = document.createElement("span");

    const len = isPunctuation(word) ? word.length - 1 : word.length;

    if (len === 1 || len == 2) {
        boldSpan.textContent = word.substring(0, 1);
        regularSpan.textContent = word.substring(1);
    } else if (len === 3 || len == 4) {
        boldSpan.textContent = word.substring(0, 2);
        regularSpan.textContent = word.substring(2);
    } else if (len === 5 || len == 6) {
        boldSpan.textContent = word.substring(0, 3);
        regularSpan.textContent = word.substring(3);
    } else if (len >= 7) {
        boldSpan.textContent = word.substring(0, 4);
        regularSpan.textContent = word.substring(4);
    }
    return [boldSpan, regularSpan];
}

function renderText(text) {
    output.textContent = "";
    const textSplit = text.split(/(\s)|(?=[\n])|(?<=[\n])/g);
    textSplit.forEach((word) => {
        if (word) {
            const [boldSpan, regularSpan] = formatWord(word);
            output.appendChild(boldSpan);
            output.appendChild(regularSpan);
        }
    });
}
