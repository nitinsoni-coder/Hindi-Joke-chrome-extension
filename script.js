import API_KEY from "./secret_key.js";

fetch(`https://hindi-jokes-api.onrender.com/jokes/2?api_key=${API_KEY}`)
  .then((data) => data.json())
  .then((data) => {
    const jokeElement = document.getElementById("joke");

    jokeElement.innerHTML = data.data[0].jokeContent;
  });
