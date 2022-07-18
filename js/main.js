// giphy apiKey
var apiKey = "yGaUUWmiT0fVGuECOupVZ3GOLKgW62fu"

var yodaGif =function(){
    fetch("https://api.giphy.com/v1/gifs/search?q=starwars+yoda+excited&api_key=" + apiKey + "&limit=1")
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

var text ="why is this not working";

var yodaPhrase = function (){
    fetch(`http://api.funtranslations.com/translate/yoda?text=${text}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        console.log(data.contents);
        console.log(data.contents.translated);  
    })
    .catch((err) => console.log(err));
};

yodaGif();
yodaPhrase();
