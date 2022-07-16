// giphy apiKey
var apiKey = "yGaUUWmiT0fVGuECOupVZ3GOLKgW62fu"

fetch("https://api.giphy.com/v1/gifs/search?q=starwars+yoda+excited&api_key=" + apiKey + "&limit=5")
  .then(response => response.json())
  .then(json => {
    json.data
      .map(gif => gif.images.fixed_height.url)
      .forEach(url => {
        let img = document.createElement('img')
        img.src = url
        document.body.appendChild(img)
      })
  })
  .catch(error => document.body.appendChild = error)


var text ="why is this not working";

fetch(`http://api.funtranslations.com/translate/yoda?text=${text}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.contents)
    console.log(data.contents.translated)    
    document.getElementById("test").innerHTML=data.contents.translated;
  })
  .catch((err) => console.log(err));

