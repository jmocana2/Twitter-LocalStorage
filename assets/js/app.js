
const crearTweet = (e) => {
  e.preventDefault();
  const tweet = getTweet();
  const li = document.createElement('li');
  li.innerHTML = tweet;
  document.querySelector('#lista-tweets').appendChild(li);
  localStorage.setItem('tweet', tweet);
}

/* Event Listeners */
const eventListeners = () => {
  document.querySelector('#formulario').addEventListener('submit', crearTweet);
}

eventListeners();

const getTweet = () => document.querySelector('#tweet').value;

