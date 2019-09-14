const projects = {
    ebooksharing : {
        title : '"EBookSharing"',
        text : "Web application for tracking transaction hand-to-hand book transfer. History of borrowing my books, creating own ELibrary and etc.",
        url : "https://github.com/FoxyChmoxy/EBookSharing",
        tool : [
            "ASP NET Core MVC", 
            "C#"
        ]
    },
    mobileapp : {
        title : '"Mobile App"',
        text : "Mobile development of intellectual and entertaining game in 12 hours without prior knowledge. Begin date September 15th.",
        url : "#",
        tool : [
            "Android", 
            "Java"
        ]
    },
    uiux : {
        title : '"UI/UX"',
        text : "Web application development - create a platform for UI / UX designers with a collection of tasks and solution evaluation through a bot.",
        url : "#",
        tool : [
            "ASP NET Core MVC",
            "C#",
            "JS"
        ]
    },
    pygram : {
        title : '"PyGram"',
        text : "Automated software for uploading photos with text on a specified date.",
        url : "#",
        tool : [
            "Python"
        ]
    },
    instahack : {
        title : '"Insta Hack"',
        text : "Hacking Instagram accounts through phishing and sending data by email.",
        url : "#",
        tool : [
            "HTML5",
            "PHP"
        ]
    },
    spe : {
        title : '"SPE-HTML5"',
        text : "Student club website. The main goal is to improve your potential in the field of UI/UX.",
        url : "#",
        tool : [
            "HTML5",
            "JS"
        ]
    }
};

$(document).ready(function(){

    function __createCard(obj){
        var target = $(".my-container");
        var grid = $("<div class='grid-item'></div>");
        var head = __createHead(obj.title);
        var body = __createBody(obj.text, obj.url);
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

    function __createBody(text, url){
        var body = $("<div class='body'></div>");
        var p = $(`<p>${text}</p>`);
        var a = $(`<a href="${url}" class="btn btn-lg btn-success 
            pull-right"><i class="fa fa-github" disabled="true"></i> GitHub</a>`)
        if(url === "#"){
            a.addClass("isDisabled");
            a.attr('href', '');
        }
        body.append(p);
        body.append(a);
        return body;
    }

    __initial();

    function __initial(){
        for(var id in projects) {
            var obj = projects[id];
            __createCard(obj);
        }
    }
});