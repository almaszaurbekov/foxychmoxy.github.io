class homeController{
    constructor(newsTarget, navbarTarget, transTarget, panelTarget){
        this.newsTarget = newsTarget;
        this.navbarTarget = navbarTarget;
        this.transTarget = transTarget;
        this.panelTarget = panelTarget;
        this.name = "Almas Zaurbekov";
        this.specialty = "Web developer | Data scientist";    
    }

    init(){
        this.initNews();
        this.initNavbar();
        this.initPanel();
        this.initTrans();
    }

    initNews(){
        var left = $('<div class="col-md-3"></div>');
        var mid  = $('<div class="col-md-3"></div>');
        var right = $('<div class="col-md-6 top-slider"></div>');
        var news = this.__getNews();

        left.append(news[0]);
        left.append(news[1]);
        mid.append(news[2]);
        mid.append(news[3]);
        right.append(this.__initCarousel());

        $(`#${this.newsTarget}`).append(left);
        $(`#${this.newsTarget}`).append(mid);
        $(`#${this.newsTarget}`).append(right);
    }

    initNavbar(){
        $(`#${this.navbarTarget}`).append(this.__createSmallTop());
        $(`#${this.navbarTarget}`).append(this.__createTopHead(this.name, this.specialty));
        $(`#${this.navbarTarget}`).append(this.__createSections());
    }

    initTrans(){
        $(`#${this.transTarget}`).append(this.__createTable());
    }

    initPanel(){
        var x, y;
        var i = 0;
        for(x in panels){
            for(y in panels[x]){
                var media  = $('<div class="media"></div>');
                var a      = $(`<img class="d-flex mr-3" src="${panels[x][y].url}">`);
                var body   = $('<div class="media-body"></div>');
                var title  = $('<div class="news-title"></div>');
                var h2     = $(`<h2 class="title-small">${panels[x][y].text}</h2>`)
                var auther = $(`<div class="news-auther"><span class="text-time"><em>${panels[x][y].date}</em></span></div>`);
                media.append(a);
                title.append(h2);
                body.append(title);
                body.append(auther);
                media.append(body);
                $(`#${this.panelTarget[i]}`).append(media);
            }
            i++;
        }
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
        var left = $('<div class="col-md-6 col-lg-4"></div>');
        // var right = $('<div class="col-md-6 col-lg-3 ml-auto admin-bar hidden-sm-down"></div>');
        // var nav = $(`<nav class="nav nav-inline pull-right"><span style="color:white;margin-top:10px;"><i class="fa fa-map-marker"></i> Kazakhstan, Almaty</span> 
        //     <img class="img-fluid rounded-circle" src="https://cdn3.vectorstock.com/i/1000x1000/44/57/hacking-system-abstract-luminous-skull-of-red-vector-19864457.jpg"></nav>`);
        // right.append(nav);
        left.append(`<h1>${name}<small>${specialty}</small></h1>`);
        row.append(left);
        // row.append(right);
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

    __getNews(){
        var array = [];
        for(let i = 0; i < hot.length; i++){
            var card    = $(`<a href="${hot[i].href}" class="card"></a>`);
            var img     = $(`<img class="img-fluid" src="${hot[i].url}"></div>`)
            var overlay = $('<div class="card-img-overlay"></div>');
            var tag     = $(`<span class="badge badge-pill badge-danger" style="margin:5px;padding:5px">${hot[i].tag}</span>`);
            var body    = $('<div class="card-body"></div>');
            var title   = $('<div class="news-title"></div>');
            var h2      = $(`<h2 class="title-small" style="margin-bottom:10px">${hot[i].text}</h2>`);
            var p       = $(`<p class="card-text"><small class="text-time"><em>${hot[i].time}</em></small></p>`)
    
            card.append(img);
            overlay.append(tag);
            card.append(overlay);
            title.append(h2);
            body.append(title);
            body.append(p);
            card.append(body);
            array.push(card);
        }
        return array;
    }

    __initCarousel(){
        var carousel = $('<div id="carousel-generic" class="carousel slide" data-ride="carousel"></div>');
        var ol = $('<ol class="carousel-indicators"></ol>');
        
        for(let i = 0; i < 3; i++){
            var li = $(`<li data-target="#carousel-generic" data-slide-to="${i}"></li>`)
            if(i === 0){
                li.addClass("active");
            }
            ol.append(li);
        }
        carousel.append(ol);
        carousel.append(this.__getListbox());
        return carousel;
    }

    __getListbox(){
        var listbox = $('<div class="carousel-inner" role="listbox"></div>');
        for(let i = 0; i < slides.length; i++){
            var item  = $('<div class="carousel-item"></div>');
            var block = $('<div class="news-block"></div>');
            var media = $('<div class="news-media"></div>');
            var img   = $(`<a href="${slides[i].href}"><img class="img-fluid" src="${slides[i].url}"></a>`);
            var title = $('<div class="news-title"></div>');
            var large = $(`<h2 class="title-large"><a href="${slides[i].href}">${slides[i].title}</a></h2>`);
            var des   = $(`<div class="news-des">${slides[i].des}</div>`);
            var time  = $(`<div class="text-time"><strong">${slides[i].time}</strong></div>`);
    
            if(i === 0){
                item.addClass("active");
            }
            
            title.append(large);
            media.append(img);
            block.append(media);
            block.append(title);
            block.append("<hr>");
            block.append(des);
            block.append("<br>");
            block.append(time);
            block.append("<div></div>");
            item.append(block);
            listbox.append(item);
        }
        return listbox;
    }

    __createTable(){
        var season;
        var main = $("<div></div>");
        for (season in transcription) {
            var p     = $(`<p class="text-time pull-right">${season}</p>`);
            var table = $('<table class="table table-hover"></table>');
            var thead = $('<thead></thead>');
            var tbody = $('<tbody></tbody>');
            var tr    = $('<tr></tr>');

            main.append(p);
            tr.append($("<th>Code</th>"));
            tr.append($("<th>Name of discipline</th>"));
            tr.append($("<th>Semester for WSC</th>"));
            tr.append($("<th>Num. of credits</th>"));
            tr.append($("<th>ECTS</th>"));
            tr.append($("<th>Letters</th>"));
            tr.append($("<th>Scores</th>"))
            thead.append(tr);
            table.append(thead);
            for(let i = 0; i < transcription[season].list.length; i++){
                var subject = transcription[season].list[i];
                tr = $('<tr></tr>');
                tr.append(`<td>${subject.Code}</td>`)
                tr.append(`<td>${subject.Name}</td>`)
                tr.append(`<td>${subject.WSC}</td>`)
                tr.append(`<td>${subject.Credits}</td>`)
                tr.append(`<td>${subject.ECTS}</td>`)
                tr.append(`<td>${subject.Letters}</td>`)
                tr.append(`<td>${subject.Scores}</td>`)
                tbody.append(tr);
            }
            table.append(tbody);
            main.append(table);
            main.append(`<p>Semester GPA <b>${transcription[season].stat.SemesterGPA}</b> | 
                Annual GPA <b>${transcription[season].stat.AnnualGPA}</b> | Cumulative GPA <b>${transcription[season].stat.CumulativeGPA}</b></p>`);
        }
        return main;
    }
}