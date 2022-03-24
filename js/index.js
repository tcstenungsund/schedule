//Define common variables
courseList = document.querySelectorAll('[type=course]');
mdUrl = url = 'md/';
scheduleUrl = 'schedule.html'
// Get current week number from misc.js
currentWeekNumber = getWeekNumber();
//Get all groups
groupList = document.querySelectorAll('[class*=group]');
//Get params from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
group = urlParams.get("group");

console.log(group != null && group != "")
//If group specified, hide all others
if (group != null && group != "") {
    groupList.forEach(groupItem => {
        if (groupItem.id != group) {
            groupItem.classList.add("hide");
        }
    });  

}

//Fill week number in title
document.getElementById("week-number").innerHTML = getWeekNumber();

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

async function getGroups(){
    groups = document.querySelectorAll('.group');
    console.log(groups)
    groupNames = [];

    groups.forEach(group => {
        groupNames.push(group.id);
    });
    return groupNames;
}

getGroups()
    .then(groups => {
        groups.forEach(group => {
            option = document.createElement('option');
            option.setAttribute('value', group);
            option.innerHTML = group;
            document.getElementById('group-select').appendChild(option);
        });
    }).then(response =>{
        if (group != null && group != "") {
            //if group specified, set dropdown to that group
            document.querySelector('[value*="' + group + '"]').setAttribute('selected', 'selected');            
        }
    }).then(response =>{
        //look for changes in group dropdown menu
        const selectElement = document.getElementById('group-select');

        selectElement.addEventListener('change', (event) => {
            console.log(`You like ${event.target.value}`);
            
            const urlParams = new URLSearchParams(window.location.search);
            urlParams.set('group', event.target.value);
            window.location.search = urlParams;
        });

    })

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
                    currentWeekPlanElement = coursePlan.querySelector('[id$="' + currentWeekNumber + '"]').parentElement
                    currentWeekPlanElement.removeChild(currentWeekPlanElement.querySelector('[id$="' + currentWeekNumber + '"]'));
                    currentWeekPlan.innerHTML = currentWeekPlanElement.innerHTML;
                    //Append Current week plan to course div 
                    course.appendChild(currentWeekPlan);
                    course.href = scheduleUrl + "?course=" + course.id;
                }).then(response =>{
                    mermaid.init();
                })
        });
});