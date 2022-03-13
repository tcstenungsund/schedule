//Define what url the markdown file should be fetched from.
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
course = urlParams.get("course");
url = 'md/' + course + '.md'; //censored for github
//Link to edit the md file
mdEditUrl = 'https://github.com/klovaaxel/schedule/edit/main/md/' + course + '.md';


// Get current week number from misc.js
currentWeekNumber = getWeekNumber();

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
    //place a duplicate of the current week plan in current week section
    currentWeekPlan = document.querySelector('[id$="' + currentWeekNumber + '"]').parentElement;
    currentWeekPlan.classList.add("current-week");//add class of current week to plan for current week in schedule section
    document.getElementById("current-week").innerHTML = currentWeekPlan.innerHTML;
    document.getElementById("current-week").firstChild.id = ""; //empty id of clone of current week plan in cirrent week section
    //place link to current week in schedule in current week... english is hard
    a = document.createElement("a");
    a.href = '#' + currentWeekPlan.firstChild.id;
    a.appendChild(document.createTextNode("Jump to week"))
    a.innerHTML += '<i class="fa-solid fa-arrow-down"></i>';
    document.getElementById("current-week").appendChild(a)
    //return empty promise? maybe good for async things?
    return
}

//Fetch markdown from url
async function fetchMarkdown(url){
    return await fetch(url) 
        .then(response => response.text())
        .then(result => {
            return result;
        });
}

//Add edit link to course
async function addEditLink(){
    //edit link
    editLink = document.createElement("a");
    editLink.href = mdEditUrl;
    editLink.innerHTML = '<i class="fa-solid fa-pen"></i>'

    title = document.getElementById("main").firstChild;
    title.appendChild(editLink);
    return true;
}

//calls all the above functions to call, convert and place the markdown as HTML in the DOM
fetchMarkdown(url)
    .then( response => {
        mdToHtml(response)
            .then( response => {
                htmlToDom(response).then(response => {
                    mermaid.init();
                    addEditLink();
                });
            });
    });
