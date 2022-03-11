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
    //place entire html in the DOM
    document.getElementById("schedule").innerHTML = html;
    //grab title from schedule and move it to main
    title = document.getElementById("schedule").firstElementChild;
    main = document.getElementById("main")
    main.insertBefore(title, main.firstChild);
    //place a duplicate of the current week plan in cirrent week section
    document.getElementById("current-week").innerHTML = document.querySelector('[id$="' + getWeekNumber() + '"]').parentElement.innerHTML
    return
}

//calls all the above functions to call, convert and place the markdown as HTML in the DOM
fetchMarkdown(url)
    .then( response => {
        mdToHtml(response)
            .then( response => {
                htmlToDom(response);
            });
    });


