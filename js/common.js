// Get current week number from misc.js
currentWeekNumber = getWeekNumber();
//Get all groups
groupList = document.querySelectorAll('[class*=group]');
//Get params from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
groupParam = urlParams.get("group");
courseParam = urlParams.get("course");
weekParam = urlParams.get("week");
link = urlParams.get("link");
style = urlParams.get("style");

//weeks in school year common variable
weeks = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

//Check if minimal view is required
const minView = localStorage.getItem('minview');
if(localStyle != null){
    document.body.classList.add(minview);
}

//Get style from local prefrence if specified
if(style != null){
    localStorage.setItem('style', style);
}

const localStyle = localStorage.getItem('style');
if(localStyle != null){
    document.body.classList.add(localStyle);
}else{
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark"); 
    }
}
//Get group form local prefrence if specified
if(groupParam != null){
    localStorage.setItem('group', groupParam);
}

const localCourse = localStorage.getItem('group');
if(localCourse != null){
    groupParam = localCourse;
}

//Define where schedule is present
scheduleUrl = 'schedule.html'
//Define what url the markdown file should be fetched from.
urlPrefix = 'md/';
urlSuffix = '.md'
url = urlPrefix + courseParam + urlSuffix; //censored for github
//Link to edit the md file
mdEditUrl = 'editor.html?link=';

// Returns the ISO week of the date.
// Code modified version of https://weeknumber.com/how-to/javascript.
function getWeekNumber(date = new Date()) {
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

//Fetch markdown from url
async function fetchMarkdown(url){
    //FOR TESTING SHOULD BE REMOVED ONCE MORE COURSE PLANS COME IN 
    //url = 'md/weuweb01.md'
    return await fetch(url) 
        .then(response => response.text())
        .then(result => {
            return result;
        });
}

async function mdToHtml(md){
    var converter = new showdown.Converter();
    text = md;
    html = converter.makeHtml(text);
    
    return html;
}

//convert markdown to HTML grouped by weeks
async function mdToGroupedHtml(md){
    var converter = new showdown.Converter();
    text = md + '- <div></div>';
    html = converter.makeHtml(text);
    
    //put HTML String in a div element
    div = document.createElement('div');
    div.innerHTML = html;

    //get all elements in the div
    allElem = div.querySelectorAll('div > *');

    //make a list where we will gorup all the elements
    ul = document.createElement('ul');
    //make a li element to append to ul with groups of HTML elements
    li = document.createElement('li');

    //Group the HTML elements together
    //(Get elements from one id to just before the next)
    for (let index = 0; index < allElem.length; index++) {
        const element = allElem[index];
        //If we are on the last element append what we have and break the for loop
        if (index + 1 >= allElem.length) {
            ul.appendChild(li)
            break
        }
        //Make a var for the next element and check if it contains 'vecka' in the id 
        //to determine if we want to start a new group or continue in our existing group
        const nextElement = allElem[index + 1];
        li.appendChild(element);
        if (nextElement.id.includes('vecka')) {
            ul.appendChild(li.cloneNode(true));
            li.innerHTML = ""; //empty li after we append a clone of it so that we can use it for next group of elements
        }
    }

    //return the UL element with the HTML grouped by week
    return ul;
}

//Gets assignments form a html element?
async function getAssignments(html){
    //Kewords to look for in week plan to make assignments from
    const assignmentKeyWords = 
        "contains(., 'uppgift') or \
        contains(., 'Uppgift') or \
        contains(., 'UPPGIFT') or \
        contains(., 'inlämning') or \
        contains(., 'Inlämning') or \
        contains(., 'INLÄMING') or \
        contains(., 'test') or \
        contains(., 'Test') or \
        contains(., 'TEST')or \
        contains(., 'prov')or \
        contains(., 'Prov')or \
        contains(., 'PROV')"

    const highlightAssignmentKeyWords = [
        "test", 
        "prov"
    ]

    //Empty assignments variable
    assignments = [];
    //Get all a tags that contain one of the keywords from list above
    allAssignments = document.evaluate(".//a[" + assignmentKeyWords + "]", html, null, XPathResult.ANY_TYPE, null );  
    
    //Put resulting assignments in a array;
    assignment = allAssignments.iterateNext()
    for (let index = 0; assignment != null; index++) {
        assignments[index] = assignment;
        assignment = allAssignments.iterateNext();
    }

    //Modify assignments so that they have correct class names
    for (i in assignments){
        assignment = assignments[i].cloneNode(true)

        //Add data about week parent to assignment
        weekTitle = assignments[i].closest('body > ul > li').querySelector('h2');
        assignment.setAttribute('data-week-id', weekTitle.id);
        assignment.setAttribute('data-week-title', weekTitle.innerHTML);

        //Add assignment class to assignments
        assignment.classList += 'assignment';

        //If assignment contains words liek test or exam, add test class to assignment
        for (keyword in highlightAssignmentKeyWords){
            keyword = highlightAssignmentKeyWords[keyword]
            if (('' + assignment.textContent.toUpperCase()).includes(keyword.toUpperCase())){
                assignment.classList += ' test';
                break;
            }
        }

        //Add arrow icon to assignment
        assignment.innerHTML += '<i class="fa-solid fa-arrow-right"></i>';

        //Append customized assignment to assignments list
        assignments[i] = assignment;
    }
    
    return assignments;
}

//Get all groups from html element
async function getGroups(html){
    groups = html.querySelectorAll('.group');
    groupNames = [];

    groups.forEach(group => {
        groupNames.push(group.id);
    });
    return groupNames;
}


//Week dropdown
async function weekDropdown(){
    weeks.forEach(week => {
        option = document.createElement('option');
        option.setAttribute('value', week);
        option.innerHTML = week.toString();
        document.getElementById('week-select').appendChild(option);    
    });


    //populate week dropdown 
    //if week specified is not empty but is a school week
    if (weekParam != null && weekParam != "" && weeks.includes(parseInt(weekParam))) {
        //if week specified, set weeknumber to that week
        window.weekNumber = weekParam;
    } else if(weeks.includes(parseInt(currentWeekNumber))){        
        //if week not specified, set weeknumber to current
        window.weekNumber = currentWeekNumber;
    } else{
        //if week not a school week, set to first week in school year
        window.weekNumber = weeks[0];
    }
    //set dropdown menu to week chosen
    document.querySelector('[value="' + window.weekNumber + '"]').setAttribute('selected', 'selected');            


    //look for changes in week dropdown menu
    const selectElement = document.getElementById('week-select');

    selectElement.addEventListener('change', (event) => {            
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('week', event.target.value);
        window.location.search = urlParams;
    });
}

async function hideUnselectedGroups(){
    //If group specified, hide all others
    if (groupParam != null && groupParam != "") {
        groupList = document.querySelectorAll('[class*=group]');
        groupList.forEach(groupItem => {
            if (groupItem.id.toLowerCase() != groupParam.toLowerCase()) {
                groupItem.classList.add('hide');
            }
        });  
    }
}

//Get groups and populate groupDropdown
async function groupDropdown(){
    getGroups(document)
        .then(groups => {
            groups.forEach(group => {
                option = document.createElement('option');
                option.setAttribute('value', group);
                option.innerHTML = group.toUpperCase();
                document.getElementById('group-select').appendChild(option);
            });
        }).then(response =>{
            if (groupParam != null && groupParam != "") {
                //if group specified, set dropdown to that group
                document.querySelector('[value*="' + groupParam + '"]').setAttribute('selected', 'selected');            
            }
        }).then(response =>{
            //look for changes in group dropdown menu
            const selectElement = document.getElementById('group-select');

            selectElement.addEventListener('change', (event) => {            
                const urlParams = new URLSearchParams(window.location.search);
                urlParams.set('group', event.target.value);
                window.location.search = urlParams;
            });

        })
    hideUnselectedGroups()
}

//Add edit link to course or assignment
async function addEditLink(link){
    //Edit link
    editLink = document.createElement("a");
    editLink.href = mdEditUrl + link;
    editLink.innerHTML = '<i class="fa-solid fa-pen"></i>'

    title = document.getElementById("main").firstChild;
    title.appendChild(editLink);
    return true;
}
