class homeController{
	constructor(sections){
		this.icons = {
			Home : ['<i class="fa fa-home"></i>', 'home'],
			MyProjects : ['<i class="fa fa-desktop"></i>', 'project'],
			MyInterests : ['<i class="fa fa-gamepad"></i>', 'interest'],
			MyProgress : ['<i class="fa fa-line-chart"></i>', 'prg'],
			MyBooks : ['<i class="fa fa-book"></i>', 'book'],
			MyGoals : ['<i class="fa fa-check-square-o"></i>', 'goal'],
			AboutMe : ['<i class="fa fa-child"></i>', 'about'],
			Contacts : ['<i class="fa fa-phone"></i>', 'contacts'],
			AboutSite : ['<i class="fa fa-cogs"></i>', 'site']
		}
		this.url = {
			github : {
				icon : '<i class="fa fa-github"></i>',
				url : 'https://github.com/FoxyChmoxy'
			},
			codepen : {
				icon : '<i class="fa fa-codepen"></i>',
				url : 'https://codepen.io/foxychmoxy/'
			},
			cssbattle : {
				icon : '<i class="fa fa-html5"></i>',
				url : 'https://cssbattle.dev/player/a4DkSoM91wdPPOyZZO6VwN6xjCX2'
			},
			hackerrank : {
				icon : '<i class="fa fa-h-square"></i>',
				url : 'https://www.hackerrank.com/foxychmoxy?hr_r=1'	
			},
			instagram : {
				icon : '<i class="fa fa-instagram"></i>',
				url : 'https://www.instagram.com/foxychmoxy/?hl=ru'	
			}
		}
		this.sections = sections;

		this._initMenu();
		this._initSections();
	}

	_initMenu(){
		var row = this._createMenuRow({col:1, class:[]}, 
				{col:8,class:['menu-items']}, {col:3,class:['yy']});

		$(".menu").append(row);
		console.log(row);
	}

	_initSections(){
		for(var section in this.sections){
			var s = this.sections[section];
			this._createMenuButton(s.name);
			if(s.name == 'Home'){
				this._createHome(s);
			} else {
				this._createSection(s);
			}
		}
		this._createMenuEnd();
	}

	_createMenuButton(name){
		var target = $(".menu-items");
		target.append($(`<button class="mbtn up ${this.icons[name][1]}">
				${this.icons[name][0]} ${name}</button>`));
	}

	_createMenuRow(obj1, obj2, obj3){
		var row = $("<div class='row'></div>");
		row.append(this.__addClass(obj1));
		row.append(this.__addClass(obj2));
		row.append(this.__addClass(obj3));
		return row;
	}

	_createMenuEnd(){
		var text1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita vero earum commodi, odio quos reiciendis consequuntur fugiat facilis eligendi maxime! Molestias fugiat iste eveniet. Quis molestias nihil dolore, at eaque.';
		var text2 = 'Aperiam obcaecati dolores rem maiores quas ipsum laborum vel architecto sint culpa fugiat, velit, beatae dolor cupiditate placeat iure tenetur eos fuga!';
		var text3 = 'WebDevProg is ipsum dolor sit amet, consectetur adipisicing elit. Cumque repudiandae nam laboriosam ipsa hic eum, perferendis culpa autem inventore aliquid quod, obcaecati itaque similique atque suscipit quae, ea qui quidem.';
		var target1 = $(".menu-items");
		target1.append('<hr style="float:left;width:90%;">');
		target1.append('<h1 style="color:white;">Lorem</h1>');
		target1.append(`<p style="color:white;float:left;width:90%">${text1}</p>`);
		target1.append(`<p style="color:white;float:left;width:90%">${text2}</p>`);
		var target2 = $(".yy");
		target2.append('<h1><i class="fa fa-code" style="font-weight:bold;"></i></h1>');
		target2.append(`<p>${text3}</p>`);
	}

	__addClass(obj){
		var col = $(`<div class='col-lg-${obj.col}'></div>`);
		if(obj.class.length > 0){
			for(var i = 0; i < obj.class.length; i++){
				col.addClass(obj.class);
			}
		}
		return col;
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
		left.css('background', cdLeft);
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
		var links = this._createLinks('zoom-in');
		title.append(links);
		title.append('<p class="main" data-aos="fade-right">Web Developer</p>');
		title.append('<p data-aos="zoom-in" style="padding-left:10px;margin-bottom:1em;"><span id="typed"></span></p>');
		particleJS.append(title);
		$('#section-0').append(particleJS);
	}

	_createLinks(animate){
		var p = $(`<p class='links'></p>`);
		p.append(this.__createMediaIcon(animate, 500, this.url.github.url, this.url.github.icon));
		p.append(this.__createMediaIcon(animate, 700, this.url.codepen.url, this.url.codepen.icon));
		p.append(this.__createMediaIcon(animate, 900, this.url.cssbattle.url, this.url.cssbattle.icon));
		p.append(this.__createMediaIcon(animate, 1100, this.url.hackerrank.url, this.url.hackerrank.icon));
		p.append(this.__createMediaIcon(animate, 1300, this.url.instagram.url, this.url.instagram.icon));
		return p;
	}

	__createMediaIcon(animate, time, url, icon){
		return $(`<a data-aos='${animate}' data-aos-delay='${time}' href='${url}'>${icon}</a>`);
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