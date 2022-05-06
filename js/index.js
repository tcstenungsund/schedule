//Define common variables
courseList = document.querySelectorAll('[type=course]');
weeks = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
scheduleUrl = 'schedule.html'

//Add assignments from all selected groups to the assignment list
async function addAssignmentsToList(){
    assignmentList = document.getElementById('assignments'); //get list to append assignments to
    selectedGroupList = document.querySelectorAll('[class*=group]:not([class*=hide])'); //get all selected groups
    
    for (const group of selectedGroupList){
        assignments = []; //List of all assignments for group (will be filled in later)

        groupCourseList = group.querySelectorAll('[type=course]'); //get all courses for group

        //Make a h3 group title to display above assignments for each group
        h3 = document.createElement('h3'); 
        h3.appendChild(document.createTextNode(group.id.toUpperCase()));
        
        //Make section to append title and assignment to
        section = document.createElement('section');
        section.appendChild(h3);

        //Get assignments from weekplan for each course
        for (const course of groupCourseList){

            courseName = document.getElementById(course.id).querySelector('h3').innerHTML;

            h4 = document.createElement('h4');
            h4.appendChild(document.createTextNode(courseName))

            section.appendChild(h4)
            
            const markdown = await fetchMarkdown(urlPrefix + course.id + '.md');
            const html = await mdToGroupedHtml(markdown);
            htmlNode = document.createElement('body');
            htmlNode.appendChild(html);
            const assignments = await getAssignments(htmlNode);

            //clear latestAssignment so it dosen't get appended to wrong course
            latestAssignment = null;

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
            //Try to append assignment to course if latestAssignment is not null
            if(latestAssignment != null){
                section.appendChild(latestAssignment);
            }
        } 

        //append section to assignment list
        assignmentList.appendChild(section.cloneNode(true))
    }
}

weekDropdown()
    .then(response => {
        //Populate group dropdown with groups available and whats in url query
        groupDropdown()
            .then(response =>{ 
                //Fill Courses in each group section
                courseList.forEach(course => {
                    fetchMarkdown("../" + urlPrefix + course.id + '.md')
                        .then(response =>{
                            if(response.includes("<title>Error</title>")){
                                console.log("Course Plan For '" + course.id + "' Not Found At " + urlPrefix + course.id + ".md")
                                return
                            }
                            mdToGroupedHtml(response)
                                .then(response => {
                                    //Get the entire courseplan for each course from response and assign it the new name coursePlan
                                    coursePlan = response;
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
            }) 
    })