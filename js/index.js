//Define common variables
courseList = document.querySelectorAll('[type=course]');
mdUrl = url = 'https://raw.githubusercontent.com/klovaaxel/schedule/main/md/';
scheduleUrl = 'schedule.html'
//Get all groups
groupList = document.querySelectorAll('[class*=group]');
console.log(groupList);
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
                    currentWeekPlanElement = coursePlan.querySelector("[id=vecka10]").parentElement
                    currentWeekPlanElement.removeChild(currentWeekPlanElement.querySelector("[id=vecka10]"));
                    currentWeekPlan.innerHTML = currentWeekPlanElement.innerHTML;
                    //Append Current week plan to course div 
                    course.appendChild(currentWeekPlan);
                    course.href = scheduleUrl + "?course=" + course.id;
                }).then(response =>{
                    mermaid.init();
                })
        });
});

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
    
    return html
}

