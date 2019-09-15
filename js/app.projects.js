const projects = {
    ebooksharing : {
        title : 'EBookSharing',
        text : "Web application for tracking transaction hand-to-hand book transfer. History of borrowing my books, creating own ELibrary and etc.",
        url : "https://github.com/FoxyChmoxy/EBookSharing",
        tool : [
            "ASP NET Core MVC", 
            "C#"
        ]
    },
    mobileapp : {
        title : 'Mobile App',
        text : "Mobile development of intellectual and entertaining game in 12 hours without prior knowledge. Begin date September 15th.",
        url : "#",
        tool : [
            "Android", 
            "Java"
        ]
    },
    uiux : {
        title : 'UI/UX',
        text : "Web application development - create a platform for UI / UX designers with a collection of tasks and solution evaluation through a bot.",
        url : "#",
        tool : [
            "ASP NET Core MVC",
            "C#",
            "JS"
        ]
    },
    pygram : {
        title : 'PyGram',
        text : "Automated software for uploading photos with text on a specified date.",
        url : "#",
        tool : [
            "Python"
        ]
    },
    instahack : {
        title : 'Insta Hack',
        text : "Hacking Instagram accounts through phishing and sending data by email.",
        url : "#",
        tool : [
            "HTML5",
            "PHP"
        ]
    },
    spe : {
        title : 'SPE',
        text : "Student club website. The main goal is to improve your potential in the field of UI/UX.",
        url : "#",
        tool : [
            "HTML5",
            "JS"
        ]
    }
};

$(document).ready(function(){

    function __createCard(id, obj){
        var target = $(".my-container");
        var grid = $("<div class='grid-item'></div>");
        var head = __createHead(obj.title);
        var body = __createBody(id, obj.text, obj.url);
        grid.append(head);
        grid.append(body);
        target.append(grid);
    }

    function __createHead(title){
        var head = $("<div class='head'></div>");
        var dark = $('<div class="dark-shell text-center"></div>');
        var h2 = $(`<h2>${title}</h2>`);
        dark.append(h2);
        head.append(dark);
        return head;
    }

    function __createBody(id, text, url){
        var body = $("<div class='body'></div>");
        body.append($(`<p>${text}</p>`));
        body.append(__createGithubLink(url));
        body.append(__createDetailsLink(id))
        return body;
    }

    function __createGithubLink(url){
        var a = $(`<a href="${url}" class="btn btn-lg btn-primary 
            pull-right"><i class="fa fa-github"></i> GitHub</a>`)
        if(url === "#"){ a.addClass("isDisabled"); }
        return a;
    }

    function __createDetailsLink(id){
        return $(`<a href="projects/${id}.html" class="btn btn-lg btn-success 
        pull-right" style="margin-right:10px;"><i class="fa fa-arrow-circle-right"></i> Details</a>`);
    }

    __initial();

    function __initial(){
        for(var id in projects) {
            var obj = projects[id];
            __createCard(id, obj);
        }
    }
});