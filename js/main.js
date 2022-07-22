// giphy apiKey
var apiKey = "yGaUUWmiT0fVGuECOupVZ3GOLKgW62fu"

// global
var userInput =document.querySelector("#generate-gif");
var phraseInput=document.querySelector("#phrase")
var gifHolder = document.querySelector("#gif");

var text = "";

// added to test the event listener
function getInput(){
    var enteredPhrase=phraseInput.value.trim();
    // alert(enteredPhrase);
    text=enteredPhrase;
}

// clear Input field
function clearInput(){
    // console.log("called clear")
    document.getElementById("phrase").value="";
}

// submit on button event
var submitForm = function(){
    // prevent page from refreshing
    event.preventDefault();
    savedTranslation();
    // run functions
    getInput();
    gifHolder.innerHTML = "";
    // savedTranslation();
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
            var img = document.createElement('img')
            img.src = url
            gifHolder.appendChild(img);
        // })
  })

  .catch(error => document.body.appendChild = error)
};

// fetch yoda translation
var yodaPhrase = function (){
    console.log("called");
    var phraseApi = "https://api.funtranslations.com/translate/yoda?text=" + text + "";
    fetch (phraseApi)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            // console.log(data.contents);
            // console.log(data.contents.translated);  
            document.getElementById("finalPhrase").textContent=data.contents.translated;
        })
    .catch((err) => console.log(err));
    clearInput();
};

// testing functions
// yodaGif();
// yodaPhrase();

// future saved and display functions
var savedTranslation = function (){
    var savedTranslation = JSON.parse (localStorage.getItem('searches')) || [];
    var textTranslation = phraseInput.value.trim();
    // var savedGif = url
    if (savedTranslation.indexOf(textTranslation) === -1){
        savedTranslation.push(textTranslation);
    };
    // if function/set item for gif
    localStorage.setItem("searches", JSON.stringify(savedTranslation));
}

var savedGif = function(){
    var =
}

// display function - div holder, img, translation - append small display or just translation to pull it back

userInput.addEventListener("submit", submitForm);
