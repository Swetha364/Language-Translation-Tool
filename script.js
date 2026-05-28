async function translateText() {

    const text = document.getElementById("inputText").value;
    const source = document.getElementById("sourceLang").value;
    const target = document.getElementById("targetLang").value;

    if (text.trim() === "") {
        alert("Please enter text");
        return;
    }

    try {

        const response = await fetch(
            "https://libretranslate.de/translate",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    q: text,
                    source: source,
                    target: target,
                    format: "text"
                })
            }
        );

        const data = await response.json();

        document.getElementById("translatedText").innerText =
            data.translatedText;

    } catch (error) {

        document.getElementById("translatedText").innerText =
            "Translation failed";
    }
}

function copyText() {

    const text =
        document.getElementById("translatedText").innerText;

    navigator.clipboard.writeText(text);

    alert("Copied Successfully!");
}

const faqData = [

    {
        question: "what is ai",
        answer: "AI stands for Artificial Intelligence."
    },

    {
        question: "what is machine learning",
        answer: "Machine Learning is a subset of AI."
    },

    {
        question: "what is nlp",
        answer: "NLP means Natural Language Processing."
    },

    {
        question: "who developed python",
        answer: "Python was developed by Guido van Rossum."
    },

    {
        question: "what is javascript",
        answer: "JavaScript is a programming language used for web development."
    }
];

function chatbotReply() {

    const userInput =
        document.getElementById("userQuestion")
        .value
        .toLowerCase()
        .trim();

    let found = false;

    for (let i = 0; i < faqData.length; i++) {

        if (userInput.includes(faqData[i].question)) {

            document.getElementById("chatOutput").innerHTML =
                "<b>Bot:</b> " + faqData[i].answer;

            found = true;

            break;
        }
    }

    if (!found) {

        document.getElementById("chatOutput").innerHTML =
            "<b>Bot:</b> Sorry, I don't understand your question.";
    }
}
