class Navbar{
    constructor(target){
        this.target = target;
        this.name = "Almas Zaurbekov";
        this.specialty = "Web developer | Data scientist";
        this.__init();
    }

    __init(){
        $(`#${this.target}`).append(this.__createSmallTop());
        $(`#${this.target}`).append(this.__createTopHead(this.name, this.specialty));
        $(`#${this.target}`).append(this.__createSections());
    }

    __createSmallTop(){
        var main = $('<div class="small-top"></div>');
        var container = $('<div class="container"></div>');
        var row = $('<div class="row"></div>');
        var left = $('<div class="col-lg-4 date-sec"></div>');
        var right = $('<div class="col-lg-3 offset-lg-5"></div>');
        var socialIcon = $('<div class="social-icon"></div>');

        left.append(`<div id="Date"></div>`)
        for(let i = 0; i < icons.length; i++){
            var icon = $(`<a target="_blank" href="${icons[i].url}">${icons[i].icon}</a>`)
            socialIcon.append(icon);
        }
        right.append(socialIcon);
        row.append(left);
        row.append(right);
        container.append(row);
        main.append(container);
        return main;
    }

    __createTopHead(name, specialty){
        var main = $('<div class="top-head left"></div>');
        var container = $('<div class="container"></div>');
        var row = $('<div class="row"></div>');
        var col = $('<div class="col-md-6 col-lg-4"></div>');
        col.append(`<h1>${name}<small>${specialty}</small></h1>`);
        row.append(col);
        container.append(row);
        main.append(container);
        return main;
    }

    __createSections(){
        var main = $('<section class="top-nav"></section>');
        var nav = $('<nav class="navbar navbar-expand-lg py-0"></nav>');
        var container = $('<div class="container"></div>');
        var button = $(`<button class="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#myNavbar" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <i style="padding:5px" class="fa fa-navicon"></i></button>`);
        var collapse = $('<div class="collapse navbar-collapse" id="myNavbar"></div>');
        var ul = $('<ul class="nav navbar-nav"></ul>');
        
        for(let i = 0; i < sections.length; i++){
            var section = sections[i];
            var li = $(`<li class="nav-item"> <a class="nav-link" 
                    href="${section.href}">${section.name}</a> </li>`);
            ul.append(li);
        }
        collapse.append(ul);
        container.append(button);
        container.append(collapse);
        nav.append(container);
        main.append(nav);
        return main;
    }
}