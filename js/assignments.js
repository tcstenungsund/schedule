main = document.getElementById('main')

//Get and store groups/courses
async function getHtml(url) {
    //Fetch html from index.html to grab group names and courses
    await fetch(url)
        .then(response => response.text())
        .then(result => {
            htmlString = result;
        })

    //Put html string into dom element
    html = document.createElement('html');
    html.innerHTML = htmlString;
    html = html.lastChild;

    return html
}

//Get and set courses for each group
async function getCourses(group) {
    courses = group.querySelectorAll('[type=course]');
    return courses
}

//Get groupHtml in html from group name (id)
async function getGroupHtml(html){
    groups = html.querySelectorAll('.group');
    return groups
}

//Get assignments from index.html
//Get html from index.html
getHtml('index.html')
    .then(html => {
        //Get groups from index.html
        getGroupHtml(html).then(groups => {
            for(const group of groups){

                //Append the group to dom
                main.appendChild(group);
                
                //Get courses from each group
                getCourses(group)
                    .then(courses => {
                        for(const course of courses){

                            //Add link to course schedule
                            course.href = scheduleUrl + "?course=" + course.id;

                            //add class of assignmentList to course block
                            course.classList.add("assignment-list")

                            //Get markdown for each course
                            fetchMarkdown(urlPrefix + course.id + '.md')
                                .then(md => {
                                    //Convert markdown to html
                                    mdToGroupedHtml(md)
                                        .then(html => {

                                            //put html from md in body so that assingments can be found
                                            body = document.createElement('body'),
                                            body.appendChild(html)

                                            //Get assignments from each course
                                            getAssignments(body)
                                                .then(assignments => {
                                                    for(const assignment of assignments){

                                                        //Get course from dom and append assignments to ittime = document.createElement('time');
                                                        time = document.createElement('time');
                                                        assignmentWeek = assignment.getAttribute('data-week-title').split(' ')[1];
                                                        time.appendChild(document.createTextNode('v' + assignmentWeek));
                                                        assignment.insertBefore(time, assignment.firstChild)
                                                        
                                                        //append assignment with week title to list of assignments
                                                        document.getElementById(course.id).appendChild(assignment)
                                                    }
                                                });
                                        })
                                })
                        }
                    })
            }
        });
    }).then(response => {
        groupDropdown();

        console.log(courseParam, courseParam != null && courseParam != '' )
        if (courseParam != null && courseParam != '' ) { 
            courseList = document.querySelectorAll('[type*=course]');
            console.log(courseList);
            courseList.forEach(courseItem => {
                if (courseItem.id.toLowerCase() != courseParam.toLowerCase()) {
                    courseItem.classList.add('hide');
                }
            }); 
        }
    });
