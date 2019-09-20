class projectController{
    constructor(target){
        this.target = target;
    }

    init(){
        var id;
        for(id in projects){
            var project = projects[id];
            var main    = $('<div class="col-lg-4 col-md-4" style="margin-bottom:30px;"></div>');
            var card    = $(`<a class="card" href="project.html?${id}"></a>`);
            var img     = $(`<img class="img-fluid" src="${project.url}"></div>`)
            var overlay = $('<div class="card-img-overlay"></div>');
            var tag     = $(`<span style="margin:10px;padding:5px" class="badge badge-pill">${project.status}</span>`);
            var body    = $('<div class="card-body"></div>');
            var title   = $('<div class="news-title"></div>');
            var h1      = $(`<h2 class="title-large" style="margin-top:0px">${project.title}</h1>`)
            var h2      = $(`<h2 class="title-small">${project.text}</h2>`);
            var p       = $(`<p class="card-text" style="margin-top:15px">
                            <small class="text-time"><em>${project.datetime}</em></small></p>`)
            
            if(project.status === "Pending"){
                tag.addClass("badge-warning");
            }
            else if(project.status === "In progress"){
                tag.addClass("badge-success");
            }

            card.append(img);
            overlay.append(tag);
            card.append(overlay);
            title.append(h1);
            title.append(h2);
            body.append(title);
            body.append(p);
            card.append(body);
            main.append(card);
            $(`#${this.target}`).append(main);
        }
    }

    __getProject(name){
        var id;
        for(id in projects){
            if(id === name){
                return projects[id];
            }
        }
    }
    
    createProjectPage(){
        const colors        = ["#3498DB", "#17A589", "#F1C40F", "#CB4335", "#8E44AD"];
        let currentLocation = window.location.href;
        const project_name  = currentLocation.split('?')[1];
        const project       = this.__getProject(project_name);
        var title           = `${project.title}`;
        var github          = $(`<a href="${project.href}">Link</a>`);
        var pdf             = $(`<a href="${project.pdf}">Link</a>`);

        for(let i = 0; i < project.tool.length; i++){
            var tool = $(`<a style="background:${colors[i]};color:white;cursor:default;
                margin-right:10px" class="btn badge-pill">${project.tool[i]}</a>`);
            $(".fx-lang").append(tool);
        }

        if(project.href === "#") { github.text("Not allowed"); github.attr("href", ""); }
        if(project.pdf === "#") { pdf.text("Not allowed"); pdf.attr("href", ""); }

        $("#fx-project-title").text(title);
        $("#fx-project-des").text(project.text);
        $("#fx-status").text(project.status);
        $("#fx-datetime").text(project.datetime);
        $("#fx-deadline").text(project.deadline);
        $("#fx-github").append(github);
        $("#fx-pdf").append(pdf);
    }
}