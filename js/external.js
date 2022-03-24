//Get params from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
link = urlParams.get("link");

console.log(link);

iframe = document.getElementById('iframe-external');
iframe.setAttribute('src', link);