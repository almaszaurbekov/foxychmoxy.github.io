$('[data-aos]').each(function(){ $(this).addClass("aos-init"); });
$('#fullpage').fullpage({
	controlArrows: false,
	parallax: true,
    anchors: ['s0','s1','s2','s3','s4','s5','s6','s7', 's8'],
    lazyLoad: true,
    menu: '#sections-menu',
	onLeave: function(){
	    $('.section [data-aos]').each(function(){
	        $(this).removeClass("aos-animate")
	    });
	},
	onSlideLeave: function(){
	    $('.slide [data-aos]').each(function(){
	        $(this).removeClass("aos-animate")
	    });
	},
	afterSlideLoad: function(){
	    $('.slide.active [data-aos]').each(function(){
	        $(this).addClass("aos-animate")
	    });
	},
	afterLoad: function(){
	    $('.section.active [data-aos]').each(function(){
	        $(this).addClass("aos-animate")
	    });
	}});