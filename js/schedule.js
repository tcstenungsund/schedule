// Get current week number from misc.js
currentWeekNumber = getWeekNumber();

// If week number is not a school week make current week the first week of the next year
if(weeks.includes(parseInt(currentWeekNumber)) != true ){        
    window.weekNumber = weeks[0];
} else { 
    window.weekNumber = currentWeekNumber;
}

//place the HTML in the DOM
async function htmlToDom(html){    
    //Place entire html in the DOM
    document.getElementById("schedule").appendChild(html);
    //Grab title from schedule and move it to main
    title = document.getElementById("schedule").firstElementChild.firstElementChild.firstElementChild;
    main = document.getElementById("main")
    main.insertBefore(title, main.firstChild);
    //Place a duplicate of the current week plan in current week section
    currentWeekPlan = document.querySelector('[id$="' + window.weekNumber + '"]:not([id^="flow"]').parentElement;
    currentWeekPlan.classList.add("current-week");//add class of current week to plan for current week in schedule section
    document.getElementById("current-week").innerHTML = currentWeekPlan.innerHTML;
    document.getElementById("current-week").firstChild.id = ""; //empty id of clone of current week plan in cirrent week section
    //Place link to current week in schedule in current week... english is hard
    a = document.createElement("a");
    //a.href = '#' + currentWeekPlan.firstChild.id;
    a.onclick = function() {
        document.querySelector('h2[id$="' + window.weekNumber + '"]:not([id^="flow"]').parentElement.scrollIntoView({block: 'center',})
    };
    a.appendChild(document.createTextNode("Jump to week"))
    a.style = 'cursor: pointer;';
    a.innerHTML += '<i class="fa-solid fa-arrow-down"></i>';
    document.getElementById("current-week").appendChild(a)
    //Return empty promise? maybe good for async things?
    return
}

//Places assignments in all the HTML places
async function assingmentsToDom(assignments){
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
        week.insertBefore(ul, week.firstChild.nextSibling);

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
        mdToGroupedHtml(response)
            .then( response => {
                htmlToDom(response).then(response => {
                    mermaid.init();
                    addEditLink(courseParam);
                    body = document.createElement('body')
                    body.innerHTML = schedule.innerHTML;
                    getAssignments(body)
                        .then(assingments =>{
                            assingmentsToDom(assingments);
                        });
                });
            });
    });