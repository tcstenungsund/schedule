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

//Convert markdown to HTML
async function mdToHtml(md){
    var converter = new showdown.Converter();
    text = md + '- &nbsp;'; //fixes last element not becoming a LI element
    html = converter.makeHtml(text);
    
    return html
}

//place the HTML in the DOM
async function htmlToDom(html){    
    //Place entire html in the DOM
    document.getElementById("schedule").innerHTML = html;
    //Grab title from schedule and move it to main
    title = document.getElementById("schedule").firstElementChild;
    main = document.getElementById("main")
    main.insertBefore(title, main.firstChild);
    //Place a duplicate of the current week plan in current week section
    currentWeekPlan = document.querySelector('[id$="' + currentWeekNumber + '"]:not([id^="flow"]').parentElement;
    currentWeekPlan.classList.add("current-week");//add class of current week to plan for current week in schedule section
    document.getElementById("current-week").innerHTML = currentWeekPlan.innerHTML;
    document.getElementById("current-week").firstChild.id = ""; //empty id of clone of current week plan in cirrent week section
    //Place link to current week in schedule in current week... english is hard
    a = document.createElement("a");
    //a.href = '#' + currentWeekPlan.firstChild.id;
    a.onclick = function() {
        document.querySelector('[id$="' + currentWeekNumber + '"]:not([id^="flow"]').parentElement.scrollIntoView({block: 'center',})
    };
    a.appendChild(document.createTextNode("Jump to week"))
    a.innerHTML += '<i class="fa-solid fa-arrow-down"></i>';
    document.getElementById("current-week").appendChild(a)
    //Return empty promise? maybe good for async things?
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
    //Edit link
    editLink = document.createElement("a");
    editLink.href = mdEditUrl;
    editLink.innerHTML = '<i class="fa-solid fa-pen"></i>'

    title = document.getElementById("main").firstChild;
    title.appendChild(editLink);
    return true;
}

async function assingmentsToDom(assignments, assignmentElements){

    assignments.forEach(assignment => {

        //Get week title and week id of assignment
        weekTitle = assignment.getAttribute("data-week-title")
        weekID = assignment.getAttribute("data-week-id")

        //Make Clone to append to week assignment list
        assignment = assignment.cloneNode(true)

        //Make week assignment list
        ul = document.createElement('ul');
        ul.classList = "week-assignment-list"
        ul.appendChild(document.createElement('li'));
        ul.appendChild(assignment);  //Append clone to assignment list

        //Append week assignment list to week
        week = document.getElementById(weekID).parentElement;
        week.appendChild(ul);

        //Append assignment to week in Assignment list
        assignmentList = document.getElementById('assignment-list');
        assignmentListWeek = assignmentList.querySelector('[id$="' + weekID + '-assignment-list"]');
        if (assignmentListWeek == null) { //If week does not exist in assignment list create it
            h3 = document.createElement('h3');
            h3.innerHTML = weekTitle;
            li = document.createElement('li');
            li.id = weekID + '-assignment-list';
            li.appendChild(h3);
            assignmentList.insertBefore(li, assignmentList.firstChild);
            assignmentListWeek = li;
        }
        a = assignment.cloneNode(true);
        assignmentListWeek.appendChild(a);
    });
    return true;
}

//Calls all the above functions to call, convert and place the markdown as HTML in the DOM
fetchMarkdown(url)
    .then( response => {
        mdToHtml(response)
            .then( response => {
                htmlToDom(response).then(response => {
                    mermaid.init();
                    addEditLink();

                    body = document.createElement('body')
                    body.innerHTML = schedule.innerHTML;
                    getAssignments(body)
                        .then(assingments =>{
                            assingmentsToDom(assingments);
                        });
                });
            });
    });