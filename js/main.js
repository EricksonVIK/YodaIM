// giphy apiKey
var apiKey = "yGaUUWmiT0fVGuECOupVZ3GOLKgW62fu"

// global
var userInput =document.querySelector("#generate-gif");
var phraseInput=document.querySelector("#phrase")
var gifHolder = document.querySelector("#gif");

// global storage
var text = {};
var textTranslated = {};
var randomGif = {};
// added to test the event listener

function getInput(){
    var enteredPhrase=phraseInput.value.trim();
    // alert(enteredPhrase);
    text=enteredPhrase;
}

// clear Input field
function clearInput(){
    document.getElementById("phrase").value="";
}

// submit on button event
var submitForm = function(){
    // prevent page from refreshing
    event.preventDefault();
    // run functions
    getInput();
    gifHolder.innerHTML = "";
    yodaGif();
    clearInput();
    // yodaPhrase();
}

// fetch yoda gif
var yodaGif =function(){
    var gifApi = "https://api.giphy.com/v1/gifs/search?q=yoda&api_key=" + apiKey + "&limit=20";
    fetch(gifApi)
        .then(response => response.json())
        .then(json => {
            json.data
            var url= json.data[Math.floor(Math.random() *20)].images.fixed_height.url
            // create img element
            var img = document.createElement('img')
            img.src = url
            var gifUrl = img.src
            // console.log(gifUrl) - one url produced
            gifHolder.appendChild(img);
            console.log(randomGif)
            saveGif(gifUrl);
        })
    .catch(error => document.body.appendChild = error);
};

// fetch yoda translation
var yodaPhrase = function (){
    var phraseApi = "https://api.funtranslations.com/translate/yoda?text=" + text + "";
    fetch (phraseApi)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("finalPhrase").textContent=data.contents.translated;
            console.log(data.contents.translated);
            console.log(JSON.stringify(data.contents.translated))
            var newText= (data.contents.translated)
            console.log(newText)
            saveTextResult (newText)
        })
    .catch((err) => console.log(err));
    clearInput();
};

// testing functions
// yodaGif();
// yodaPhrase();

// Local save functions for text and gif
var saveTextResult = function (textTranslated){
    resultObj = {
        type: textTranslated,
    }
    var savedQuotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];
    savedQuotes.push(textTranslated);
    localStorage.setItem("savedQuotes", JSON.stringify(savedQuotes));
};

var saveGif = function(randomGif){
    gifObj = {
        type: randomGif,
    };
    var gifArray = JSON.parse(localStorage.getItem("gifArray")) || [];
    gifArray.push(randomGif);
    console.log(randomGif)
    localStorage.setItem("gifArray", JSON.stringify(gifArray));
}

// display function - div holder, img, translation - append small display or just translation to pull it back

userInput.addEventListener("submit", submitForm);
