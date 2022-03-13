//Define common variables
courseList = document.querySelectorAll('[type=course]');
mdUrl = url = 'https://raw.githubusercontent.com/klovaaxel/schedule/main/md/';
scheduleUrl = 'schedule.html'
// Get current week number from misc.js
currentWeekNumber = getWeekNumber();
//Get all groups
groupList = document.querySelectorAll('[class*=group]');
//Get params from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
group = urlParams.get("group");

//If group specified, hide all others
if (group != null) {
    groupList.forEach(groupItem => {
        if (groupItem.id != group) {
            groupItem.classList.add("hide");
        }
    });    
}

//Fill week number in title
document.getElementById("week-number").innerHTML = getWeekNumber();

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

//Add edit link to course
async function addEditLink(){
    //edit link
    editLink = document.createElement("a")
    editLink.href = mdEditUrl + course    

    title = document.getElementById("main").firstChild;
    title.appendChild()
}

//convert markdown to HTML
async function mdToHtml(md){
    var converter = new showdown.Converter();
    text = md;
    html = converter.makeHtml(text);
    
    return html
}

}