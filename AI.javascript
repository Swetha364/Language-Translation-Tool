async function translateText(){

    let text =
        document.getElementById("inputText").value;

    let source =
        document.getElementById("sourceLang").value;

    let target =
        document.getElementById("targetLang").value;

    // LibreTranslate API

    let response = await fetch(
        "https://libretranslate.de/translate",
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                q:text,
                source:source,
                target:target,
                format:"text"
            })
        }
    );

    let data = await response.json();

    document.getElementById("translatedText")
    .innerText = data.translatedText;
}

// ---------------- COPY BUTTON ---------------- //

function copyText(){

    let text =
        document.getElementById("translatedText")
        .innerText;

    navigator.clipboard.writeText(text);

    alert("Copied!");
}

// ---------------- FAQ CHATBOT ---------------- //

const faqData = [

    {
        question:"what is ai",
        answer:"AI stands for Artificial Intelligence."
    },

    {
        question:"what is machine learning",
        answer:"Machine Learning is a subset of AI."
    },

    {
        question:"what is nlp",
        answer:"NLP means Natural Language Processing."
    },

    {
        question:"who developed python",
        answer:"Python was developed by Guido van Rossum."
    },

    {
        question:"what is javascript",
        answer:"JavaScript is a programming language used for web development."
    }

];

function chatbotReply(){

    let userInput =
        document.getElementById("userQuestion")
        .value.toLowerCase();

    let found = false;

    for(let i=0; i<faqData.length; i++){

        if(userInput.includes(faqData[i].question)){

            document.getElementById("chatOutput")
            .innerHTML =
            "<b>Bot:</b> " + faqData[i].answer;

            found = true;

            break;
        }
    }

    if(!found){

        document.getElementById("chatOutput")
        .innerHTML =
        "<b>Bot:</b> Sorry, I don't understand.";
    }
}
