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
    text = md;
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

//Gets assignments form week plan
async function Assignments(){
    //Kewords to look for in week plan to make assignments from
    const assignmentKeyWords = 
        "contains(., 'uppgift') or \
        contains(., 'Uppgift') or \
        contains(., 'UPPGIFT') or \
        contains(., 'test') or \
        contains(., 'Test') or \
        contains(., 'TEST')"

    //Empty assignments variable
    assignments = [];
    //Get all a tags that contain one of the keywords from list above
    allAssignments = document.evaluate("//a[" + assignmentKeyWords + "]", document, null, XPathResult.ANY_TYPE, null ); 
    //Put resulting assignments in a array;
    assignment = allAssignments.iterateNext()
    for (let index = 0; assignment != null; index++) {
        assignments[index] = assignment;
        assignment = allAssignments.iterateNext();
    }

    assignments.forEach(assignment => {

        //Get week title and week id of assignment
        weekTitle = assignment.closest('.schedule > ul > li').querySelector('h2');

        //Make Clone to append to week assignment list
        assignment = assignment.cloneNode(true)
        assignment.classList += "assignment";   //Add class of "assignment" to assignment

        //Make week assignment list
        ul = document.createElement('ul');
        ul.classList = "week-assignment-list"
        ul.appendChild(document.createElement('li'));
        ul.appendChild(assignment);  //Append clone to assignment list

        //Append week assignment list to week
        week = document.getElementById(weekTitle.id).parentElement;
        week.appendChild(ul);

        //Append assignment to week in Assignment list
        assignmentList = document.getElementById('assignment-list');
        assignmentListWeek = assignmentList.querySelector('[id$="' + weekTitle.id + '-assignment-list"]');
        if (assignmentListWeek == null) { //If week does not exist in assignment list create it
            li = document.createElement('li')
            li.id = weekTitle.id + '-assignment-list';
            li.appendChild(weekTitle.cloneNode(true));
            assignmentList.appendChild(li)
            assignmentListWeek = li;
        }
        assignmentListWeek.appendChild(assignment);
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
                    Assignments();
                });
            });
    });
