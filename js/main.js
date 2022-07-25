// giphy apiKey
var apiKey = "yGaUUWmiT0fVGuECOupVZ3GOLKgW62fu"

// global
var userInput =document.querySelector("#generate-gif");
var phraseInput=document.querySelector("#phrase")
var gifHolder = document.querySelector("#gif");
var displayBtn = document.getElementById("displayBtn");



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
    yodaPhrase();
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
};

// display function - div holder, img, translation - append small display or just translation to pull it back
var displayResult = function (){
    console.log("called")
    var savedQuotes=JSON.parse(localStorage.getItem("savedQuotes")) || [];
    console.log(savedQuotes)
    var gifArray = JSON.parse(localStorage.getItem("gifArray")) || [];
    console.log(gifArray)
    savedQuotes.forEach((type1, index) => {
        const type2 = gifArray[index];
        var displayHolder = document.getElementById("display")
        var displayBlock = document.createElement("div");
        displayBlock.classList = "holder";
        displayBlock.setAttribute("data-translation", type1.type)
        console.log(type1)
        console.log(type2)
        displayBlock.setAttribute("data-gif", type2.type)
        displayHolder.appendChild(displayBlock);
    });

};
displayResult();
    // gifArray.forEach(() => {
    //     var displayHolder= document.getElementById("display")
    //     var gifBlock=document.createElement("a")
    //     gifBlock.setAttribute("href", randomGif)
    //     console.log(type)
    //     console.log(randomGif)
    //     displayHolder.appendChild(gifBlock)
        
    // });
    // savedQuotes.forEach((type1, index) => {
    //     const type2 = gifArray[index];
    //     var displayHolder = document.getElementById("display")
    //     var displayBlock = document.createElement("div");
    //     displayBlock.classList = "holder";
    //     displayBlock.setAttribute("data-translation", type1.type)
    //     console.log(type1)
    //     console.log(type2)
    //     displayBlock.setAttribute("data-gif", type2.type)
    //     displayHolder.appendChild(displayBlock);

    // });
// };
// displayResult();
// displayResult();
userInput.addEventListener("submit", submitForm);
// displayBtn.addEventListener("submit", displayResult);
