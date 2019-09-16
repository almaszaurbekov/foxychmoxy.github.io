$(document).ready(function(){
    function __createMediaIcon(delay, url, icon, color){
        animate = "zoom-in";
        $("#weblinks").append(`<a data-aos="${animate}" 
            data-aos-delay="${delay}" href="${url}" 
            style="color:${color}">${icon}</a>`);
    }

    function __createSection(id, obj){
        var row = _divideSection(obj);
        $(`#${id}`).append(row);
    }

    function _divideSection(obj){
        var row = $(`<div class='row'></div>`);
        var left = $(`<div id="mob" class="col-lg-6" style="height:100vh;
            background:${obj.background}"></div>`);
        var right = $(`<div id="non-mob" class="col-lg-6" style="
            height:100vh;background-image:url(${obj.image});background-size:cover;"></div>`);
        var leftElements = _createInfoBlock(obj);
        left.append(leftElements);
        left.append($(`<div id="clippy" data-aos="fade-right" 
        data-aos-duration="1000" style="background:${obj.background}; 
            z-index:300;"></div>`));
        row.append(left);
        row.append(right);
		return row;
    }
    
    function _createInfoBlock(obj){
		var infoBlock = $('<div class="text-center info-block"></div');
		var hashWords = $('<p data-aos="zoom-in" data-aos-delay="500"></p>');
		for(var i = 0; i < obj.hashwords.length; i++){
            hashWords.append(`<a href='https://www.google.com/search?q=${obj.hashwords[i]}'>${obj.hashwords[i]} </a>`);
		}
		infoBlock.append(hashWords);
		infoBlock.append($(`<h1 data-aos="fade-right">${obj.title}</h1>`));
		infoBlock.append($(`<hr data-aos="flip-left" data-aos-delay="1000">`));
		infoBlock.append($(`<p data-aos="zoom-in" data-aos-delay="500">${obj.text}</p>`));
        infoBlock.append(_createButton(obj.url));
		return infoBlock;
    }
    
    function _createButton(url){
		var button = $(`<a href="${url}" data-aos="fade-up" 
            data-aos-delay="1000" data-aos-duration="500" 
            class="btn btn-lg btn-success" style="margin-top:20px; 
            padding-left:50px;padding-right:50px;">View</a>`);
		return button;
	}

    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

    __initial();

    function __initial(){
        for(var i in socialMedia) {
            var obj = socialMedia[i];
            __createMediaIcon(obj.delay, obj.url, obj.icon, obj.color);
        }
        for(var id in sections) {
            var obj = sections[id];
            __createSection(id, obj);
        }
    }
});