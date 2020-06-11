if ($(window).width() < 960) {
    $("#fx-navbar").removeClass("px-5");
}

const colors = [
    "badge-primary", "badge-danger", "badge-success", "badge-warning", "badge-info"
]

const hard_skills = [
    ".NET", "ASP.NET", "Python", "Flask", "Web Parsers", "Web Services", "AWS", "Angular", "Linux", 
    "Machine Learning", "Data Science", "JavaScript", "TypeScript", "SQL", "PostgreSQL", "Microsoft SQL",
    "Oracle PL/SQL", "SASS", "Web Design", "Bootstrap", "jQuery"
]

const soft_skills = [
    "Negotiation", "Time management", "Project management", "Creativity", "Conflict resolution", "Compromise",
    "Critical thinking", "Quick adaptation", "Alternative solution", "Ability to listen", "Public speaking",
    "Data Analysis"
]

const life_skills = [
    "Reading of books", "Cooking", "Baby care", "Playing a musical instrument", "Professional football", 
    "Animal care", "Cleaning", "Moral support", "Exercise stress", "Tea ceremony", "The taste of movies"
]

for(let skill of hard_skills){
    var color = "badge-primary";
    var html = `<span class="badge badge-pill mr-2 mb-2 ${color}">${skill}</span>`;
    $("#hard-skills").append(html);
}

for(let skill of soft_skills){
    var color = "badge-success";
    var html = `<span class="badge badge-pill mr-2 mb-2 ${color}">${skill}</span>`;
    $("#soft-skills").append(html);
}

for(let skill of life_skills){
    var color = "badge-warning";
    var html = `<span class="badge badge-pill mr-2 mb-2 ${color}">${skill}</span>`;
    $("#life-skills").append(html);
}

function get_random_color(){
    return colors[Math.floor(Math.random() * colors.length)];
}