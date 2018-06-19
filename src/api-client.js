const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=fda95d1e3df751a1e1cda795ba636718&format=json'

function getArtists() {
  return fetch(URL)
  .then(response => response.json())
  .then(data => data.topartists.artist)
  .then(artists => artists.map(artist => {
    return{
      name: artist.name,
      image:artist.image[3]['#text'],
      comment:10,
      likes: 20
    }
  }))
}
 export {   getArtists };
