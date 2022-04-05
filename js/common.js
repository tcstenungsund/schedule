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
        console.log(assignments[i].closest('body > ul > li'), assignments[i].closest('body'));
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