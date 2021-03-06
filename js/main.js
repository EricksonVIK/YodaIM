// giphy apiKey
var apiKey = "yGaUUWmiT0fVGuECOupVZ3GOLKgW62fu"

// global
var userInput =document.querySelector("#generate-gif");
var phraseInput=document.querySelector("#phrase")
var text = [];

// added this function to test the event listener - can comment out if not needed
function getInput(){
    var enteredPhrase=phraseInput.value.trim();
    alert(enteredPhrase);
    text.push(enteredPhrase);
}

// clear Input field
function clearInput(){
    console.log("called clear")
    document.getElementById("phrase").value="";
}

// submit on button event
var submitForm = function(){
    // prevent page from refreshing
    event.preventDefault();
    // run functions
    getInput();
    yodaGif();
    yodaPhrase();
}

// fetch yoda gif
var yodaGif =function(){
    var gifApi = "https://api.giphy.com/v1/gifs/search?q=starwars+yoda&api_key=" + apiKey + "&limit=1";
    fetch(gifApi)
        .then(response => response.json())
        .then(json => {
            json.data
            .map(gif => gif.images.fixed_height.url)
        .forEach(url => {
            var img = document.createElement('img')
            img.src = url
            var gifHolder = document.querySelector("#gif");
            gifHolder.appendChild(img);
        })
  })
  .catch(error => document.body.appendChild = error)
};

// fetch yoda translation
var yodaPhrase = function (){
    console.log("called");
    var phraseApi = "http://api.funtranslations.com/translate/yoda?text=" + text + "";
    // fetch(`http://api.funtranslations.com/translate/yoda?text=${text}`)
    fetch (phraseApi)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            console.log(data.contents);
            console.log(data.contents.translated);  
            document.getElementById("finalPhrase").textContent=data.contents.translated;
        })
    .catch((err) => console.log(err));
    clearInput();
};


// yodaGif();
// yodaPhrase();

userInput.addEventListener("submit", submitForm);
