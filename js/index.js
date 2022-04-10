//Define common variables
courseList = document.querySelectorAll('[type=course]');
weeks = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
mdUrl = url = 'md/';
scheduleUrl = 'schedule.html'
// Get current week number from misc.js
currentWeekNumber = getWeekNumber();
//Get all groups
groupList = document.querySelectorAll('[class*=group]');
//Get params from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
groupParam = urlParams.get("group");
weekParam = urlParams.get("week");

//If group specified, hide all others
if (groupParam != null && groupParam != "") {
    groupList.forEach(groupItem => {
        if (groupItem.id != groupParam) {
            groupItem.classList.add('hide');
        }
    });  

}

//Week dropdown
async function weekDropdown(){
    weeks.forEach(week => {
        option = document.createElement('option');
        option.setAttribute('value', week);
        option.innerHTML = week.toString();
        document.getElementById('week-select').appendChild(option);    
    });
}

//Add assignments from all selected groups to the assignment list
async function addAssignmentsToList(){
    assignmentList = document.getElementById('assignments'); //get list to append assignments to
    selectedGroupList = document.querySelectorAll('[class*=group]:not([class*=hide])'); //get all selected groups

    for (const group of selectedGroupList){
        assignments = []; //List of all assignments for group (will be filled in later)

        groupCourseList = group.querySelectorAll('[type=course]'); //get all courses for group

        //Make a h3 group title to display above assignments for each group
        h3 = document.createElement('h3'); 
        h3.appendChild(document.createTextNode(group.id));
        
        //Make section to append title and assignment to
        section = document.createElement('section');
        section.appendChild(h3);

        //Get assignments from weekplan for each course
        for (const course of groupCourseList){
            h4 = document.createElement('h4');
            h4.appendChild(document.createTextNode(course.id))

            section.appendChild(h4)
            
            const markdown = await fetchMarkdown(url + course.id + '.md');
            const html = await mdToHtml(markdown);
            htmlNode = document.createElement('body');
            htmlNode.innerHTML = html;
            const assignments = await getAssignments(htmlNode);
            
            //append latest assignment (but not a uppcoming one) to section 
            for (const assignment of assignments) {
                time = document.createElement('time');
                assignmentWeek = assignment.getAttribute('data-week-title').split(' ')[1];
                time.appendChild(document.createTextNode('v' + assignmentWeek));
                assignment.insertBefore(time, assignment.firstChild)
                
                if (weeks.indexOf(parseInt(window.weekNumber)) + 1 > weeks.indexOf(parseInt(assignmentWeek))){
                    latestAssignment = assignment
                }
            }
            section.appendChild(latestAssignment);

        } 

        //append section to assignment list
        assignmentList.appendChild(section.cloneNode(true))
    }
}

weekDropdown()
    .then(response =>{
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
    }).then(response => {
        //Populate group dropdown with groups available and whats in url query
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
    }).then(response =>{
        //Fill Courses in each group section
        courseList.forEach(course => {
            fetchMarkdown(url + course.id + '.md')
                .then(response =>{
                    mdToHtml(response)
                        .then(response => {
                            //Get the entire courseplan for each course
                            coursePlan = document.createElement("div");
                            coursePlan.innerHTML = response;
                            //Get current week from courseplan and remove week number
                            currentWeekPlan = document.createElement("div");
                            currentWeekPlanElement = coursePlan.querySelector('[id$="' +  window.weekNumber + '"]').parentElement.cloneNode(true);
                            currentWeekPlanElement.removeChild(currentWeekPlanElement.querySelector('[id$="' +  window.weekNumber + '"]'));
                            currentWeekPlan.innerHTML = currentWeekPlanElement.innerHTML;
                            //Append Current week plan to course div 
                            course.appendChild(currentWeekPlan);
                            course.href = scheduleUrl + "?course=" + course.id;
                        }).then(response => {
                            //Get assignments from current week in course
                            weekPlanNode = coursePlan.querySelector('[id$="' + window.weekNumber + '"]').parentElement
                            
                            //Put assignment in li in ul in a body (so that a h2 with week title id can be found)
                            li = document.createElement('li');
                            li.innerHTML = weekPlanNode.innerHTML;
                            ul = document.createElement('ul');
                            ul.appendChild(li);
                            body = document.createElement('body');
                            body.appendChild(ul);

                            getAssignments(body)
                                .then(assignments => {
                                    assignments.forEach(assignment =>{
                                        course.insertBefore(assignment, course.firstChild.nextSibling.nextSibling);
                                    })
                                })
                        }).then(response =>{
                            mermaid.init();
                        })
                });
        });
    }).then(response =>{
        addAssignmentsToList();   
    });