// giphy apiKey
var apiKey = "yGaUUWmiT0fVGuECOupVZ3GOLKgW62fu"

// global
var userInput =document.querySelector("#generate-gif");
var phraseInput=document.querySelector("#phrase")
var textSubmit=phraseInput.value.trim();
var text =textSubmit;


var yodaGif =function(){
    fetch("https://api.giphy.com/v1/gifs/search?q=starwars+yoda&api_key=" + apiKey + "&limit=1")
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


var yodaPhrase = function (){
    fetch(`http://api.funtranslations.com/translate/yoda?text=${text}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        console.log(data.contents);
        console.log(data.contents.translated);  
        document.getElementById("finalPhrase").innerHTML=data.contents.translated;
    })
    .catch((err) => console.log(err));
};

var submitForm = function(){
    // prevent page from refreshing
    event.preventDefault();
    yodaGif();
    yodaPhrase();
}

// yodaGif();
// yodaPhrase();

userInput.addEventListener("submit", submitForm);
