var translation ="";
var h1=document.querySelector("#test");
// giphy apiKey
var apiKey = "yGaUUWmiT0fVGuECOupVZ3GOLKgW62fu"

fetch("https://api.giphy.com/v1/gifs/search?q=starwars+yoda&api_key=" + apiKey + "&limit=20")
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


var text =
  "Yoda translator API gives you API access to yoda translator, so that you can integrate this functionality in your websites or applications.";

fetch(`http://api.funtranslations.com/translate/yoda?text=${text}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
var h1s = document.createElement("span")
h1s.textContent=translation;
h1.appendChild(h1s);