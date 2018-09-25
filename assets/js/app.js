//Devuelve el tweet
const getTweet = () => document.querySelector('#tweet').value;

//Crea cada uno de los nuevos items y los añade al DOM
const crearTweet = (e) => {
  e.preventDefault();
  // valor del tweet
  const tweet = getTweet();
  renderTweet(tweet);
  agregarLocalStorage(tweet);
}

//Crea cada uno de los nuevos items y los añade al DOM
const borrarTweet = (e) => {
  e.preventDefault();
  if(e.target.className === 'borrar-tweet'){
    e.target.parentElement.remove();
    borarTweetLocalStorage(e.target.parentElement.innerText)
  } 
}

const renderTweet = (tweet) => {
  const li = document.createElement('li');
  const borrar = document.createElement('a');
  borrar.classList = 'borrar-tweet';
  borrar.innerText = 'X';
  li.innerHTML = tweet;
  li.appendChild(borrar);
  document.querySelector('#lista-tweets').appendChild(li);
  li.appendChild(borrar);
}

//Mostrar datos de LocalStorage en la lista
function LocalStorageListo(){
  let tweets;
  tweets = obtenerTweetsLocalStorage();

  tweets.forEach(function(tweet){
    renderTweet(tweet);
  })

}

//Agregar tweet a local storage
const agregarLocalStorage = (tweet) => {
  let tweets;
  tweets = obtenerTweetsLocalStorage();
  tweets.push(tweet);
  localStorage.setItem('tweets', JSON.stringify(tweets));  
}

const obtenerTweetsLocalStorage = () => {
  let tweets;
  if(localStorage.getItem('tweets') === null) {
    tweets = [];
  }else{
    tweets = JSON.parse(localStorage.getItem('tweets')); 
  }
  return tweets;
}

/* Borrar tweet de LocalStorage */
function borarTweetLocalStorage(tweetBorrarX){
  let tweets = obtenerTweetsLocalStorage();
  let txtTweet = tweetBorrarX.substring(0, tweetBorrarX.length-1);

  tweets.map((tweet, index) => {
    if(tweet === txtTweet){
      tweets.splice(index, 1)
    }
  })

  localStorage.setItem('tweets', JSON.stringify(tweets)); 
}

/* Event Listeners */
const eventListeners = () => {
  document.querySelector('#formulario').addEventListener('submit', crearTweet);
  document.querySelector('#lista-tweets').addEventListener('click', borrarTweet);
  //DOM ready
  document.addEventListener('DOMContentLoaded', LocalStorageListo);
}

eventListeners();



