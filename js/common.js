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

//Define what url the markdown file should be fetched from.
url = 'md/' + courseParam + '.md'; //censored for github
//Link to edit the md file
mdEditUrl = 'https://github.com/klovaaxel/schedule/edit/main/md/' + courseParam + '.md';

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
    url = 'md/weuweb01.md'
    return await fetch(url) 
        .then(response => response.text())
        .then(result => {
            return result;
        });
}

//convert markdown to HTML
async function mdToHtml(md){
    var converter = new showdown.Converter();
    text = md + '- <div></div>';
    html = converter.makeHtml(text);
    
    return html;
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
    if (weekParam != null && weekParam != "") {
        //if week specified, set dropdown to that week
        document.querySelector('[value*="' + weekParam + '"]').setAttribute('selected', 'selected');            
        //if week specified, set weeknumber to that week
        window.weekNumber = weekParam;
    }else{
        //if week not specified, set dropdown to current week
        document.querySelector('[value*="' + currentWeekNumber + '"]').setAttribute('selected', 'selected');            
        //if not week specified, set weeknumber to current week
        window.weekNumber = currentWeekNumber;
    }
    
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