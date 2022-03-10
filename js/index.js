//Define what url the markdown file should be fetched from.
url = ''; //censored for github

//Fetch markdown from url
async function fetchMarkdown(url){
    return await fetch(url) 
        .then(response => response.text())
        .then(result => {
            return result;
        });
}

//convert markdown to HTML
async function mdToHtml(md){
    var converter = new showdown.Converter();
    text = md;
    html = converter.makeHtml(text);
    
    return html
}

//place the HTML in the DOM
async function htmlToDom(html){    
    document.getElementById("markdown").innerHTML = await html;
    return
}

//calls all the above functions to call, convert and place the markdown as HTML in the DOM
fetchMarkdown(url)
    .then( response => {
        console.log(response);
        mdToHtml(response)
            .then( response => {
                htmlToDom(response);
            });
    });


