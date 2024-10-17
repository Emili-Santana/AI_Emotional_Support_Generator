function displayMessage(response) {
    new Typewriter("#message", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generateMessage(event) {
    event.preventDefault();
    // API
    let instructionsInput = document.querySelector("#user-instructions")
    let apiKey = "co1932ee5cba3475f06de51eb085140t";
    let context = "you're an enthusiast of human behavior and love to write short suggestions that improve the user's day-to-day life and suggest that the user get professional help, if necessary, your mission is to generate a 4-line poem in basic HTML and separate each line with a <br />. If the question is asked in Portuguese, the answer must be in Portuguese. If the question is asked in English, the answer must be in English. Don't start with (```html ) and end with (```) on the screen. Sign the poem with “SheCodes AI” inside a <strong> element.Add emogi at the end of the message according to the instruction. Make sure you follow the user instructions";
    let prompt = `user instructions: Generate a sugestion about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


    let messageElement = document.querySelector("#message"); //where the poem will be displied
    messageElement.classList.remove("hidden") // remove the css style display: none, and the come back to be showed
    messageElement.innerHTML = `<div class="generating">⏳ Generating a message about ${instructionsInput.value}</div>`; // it wil show before the poem

    axios.get(apiUrl).then(displayMessage);
}

let messageFormElement = document.querySelector("#message-generator-form");
messageFormElement.addEventListener("submit", generateMessage);