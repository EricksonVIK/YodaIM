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


