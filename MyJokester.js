$(document).ready(function() {
  $("#get-joke").on("click", getJoke);
});

function getJoke(response) {
  let headers = new Headers({"Accept": "application/json"});
  let request = new Request("https://icanhazdadjoke.com/", {headers: headers});

  fetch(request)
    .then(jokeSuccess)
    .then(anotherJokeSuccess)
    .catch(jokeFailure);
}

function jokeSuccess(response) {
  return response.json();
  //debugger;
}

function anotherJokeSuccess(response) {
  $("#joke-div p").html(response.joke);
}

function jokeFailure(response) {
  alert ("Something went wrong!");
}
