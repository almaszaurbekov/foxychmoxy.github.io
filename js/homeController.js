class homeController{
	constructor(sections){
		this.sections = sections;
		this._init();
	}

	_init(){
		for(var section in sections){
			var s = this.sections[section];
			if(s.name == 'home'){
				this._createHome(s);
			} else {
				this._createSection(s);
			}
		}
	}

	_createLink(s){
		var li = $(`<li data-menuanchor="${s.id}" class="active">
			<i class="fa fa-circle"></i>
			</li>`);
		var a = $(`<a href='#${s.id}'></a>`).append(li);
		$("#sections-menu").append(a);
	}

	_divideSection(cdLeft, cdRight){
		var left = $('<div class="section-cd" id="section-cd-0"></div>');
		var right = $('<div class="section-cd" id="section-cd-1"></div>');
		left.css('background-image', cdLeft);
		right.css('background-image', cdRight);
		return {
			left : left,
			right : right
		};
	}

	_createButton(text, url){
		var a = $(`<a href="${url}" data-aos="fade-up" 
			data-aos-delay="1000" data-aos-duration="500" class="button">${text}</a>`);
		a.append('<div class="button__horizontal"></div>');
		a.append('<div class="button__vertical"></div>')
		return a;
	}

	_createInfoBlock(hw, title, text, bText, url){
		var InfoBlock = $('<div class="text-center info-block"></div');
		var HashWords = $('<p data-aos="zoom-in" data-aos-delay="500"></p>');
		for(var i = 0; i < hw.length; i++){
			HashWords.append(`<a href='https://www.google.com/search?q=${hw[i]}'>${hw[i]} </a>`);
		}
		InfoBlock.append(HashWords);
		InfoBlock.append($(`<h1 data-aos="fade-right">${title}</h1>`));
		InfoBlock.append($('<hr data-aos="flip-left" data-aos-delay="1000">'));
		InfoBlock.append($(`<p data-aos="zoom-in" data-aos-delay="500">${text}</p>`));
		InfoBlock.append(this._createButton(bText, url));
		return InfoBlock;
	}

	_createHome(s){
		this._createLink(s);
		var particleJS = $("<div id='particles-js'></div>");
		var title = $("<div class='title'></div>");
		title.append("<span style='font-size:38px;'>My name is <b>Almas</b></span><br>");
		title.append("<span id='typed'></span>");
		particleJS.append(title);
		$('#section-0').append(particleJS);
	}

	_createSection(s){
		this._createLink(s);
		var ds = this._divideSection(s.cdLeft, s.cdRight);
		var ib = this._createInfoBlock(s.hashWords, s.name, s.text, s.btnText, s.btnUrl);
		var clippy = $(`<div id="clippy" data-aos="fade-right" 
			style="background:${s.clippyBackground}"></div>`);
		ds.left.append(ib);
		ds.left.append(clippy);
		$(s.jQueryId).append(ds.left);
		$(s.jQueryId).append(ds.right);
	}
}