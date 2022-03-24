//Get params from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
link = urlParams.get("link");

console.log(link);

iframe = document.getElementById('iframe-external');
iframe.setAttribute('src', link);

function setHeight(){
    iframe.height = "";
    content = iframe.contentWindow.document.body.scrollHeight + "px"
    console.log(content);
    iframe.height = content;
}

