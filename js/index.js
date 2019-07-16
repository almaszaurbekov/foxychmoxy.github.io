var sections = {
	section0 : {
		id : 's0',
		name : 'home',
	},

	section1 : {
		jQueryId : '#section-1',
		id : 's1',
		name : 'MyProjects',
		hashWords : ['#Python', '#ASP.NET', '#HTML5'],
		text : 'The government institution created for provide attention, assistance and reparation to the victims of the intern war in Colombia.',
		btnText : 'View',
		btnUrl : '#',
		clippyBackground : '#A3EB9A',
		cdLeft : 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
		cdRight : 'url(img/student.jpg)'
	},

	section2 : {
		jQueryId : '#section-2',
		id : 's2',
		name : 'MyInterests',
		hashWords : ['#Soccer', '#Guitar', '#Chess', '#Programming'],
		text : 'The government institution created for provide attention, assistance and reparation to the victims of the intern war in Colombia.',
		btnText : 'View',
		btnUrl : '#',
		clippyBackground : '#CCC1ED',
		cdLeft : 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
		cdRight : 'url(img/example1.jpg)'
	},

	section3 : {
		jQueryId : '#section-3',
		id : 's3',
		name : 'MyBooks',
		hashWords : ['#Shakespeare', '#Dostoevskiy', '#SherlockHolmes'],
		text : 'The government institution created for provide attention, assistance and reparation to the victims of the intern war in Colombia.',
		btnText : 'View',
		btnUrl : '#',
		clippyBackground : '#38F8D6',
		cdLeft : 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)',
		cdRight : 'url(img/example.jpg)'
	},

	section4 : {
		jQueryId : '#section-4',
		id : 's4',
		name : 'MyGoals',
		hashWords : ['#Partner', '#Investor', '#DreamTeam', '#Projects'],
		text : 'The government institution created for provide attention, assistance and reparation to the victims of the intern war in Colombia.',
		btnText : 'View',
		btnUrl : '#',
		clippyBackground : '#A6C8D8',
		cdLeft : 'linear-gradient(to top, #9890e3 0%, #b1f4cf 100%)',
		cdRight : 'url(img/example1.jpg)'
	},

	section5 : {
		jQueryId : '#section-5',
		id : 's5',
		name : 'MyProgress',
		hashWords : ['#GitHub', '#CodePen', '#CodeSignal', '#BattleCSS'],
		text : 'The government institution created for provide attention, assistance and reparation to the victims of the intern war in Colombia.',
		btnText : 'View',
		btnUrl : '#',
		clippyBackground : '#A3EB9A',
		cdLeft : 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
		cdRight : 'url(img/student.jpg)'
	},

	section6 : {
		jQueryId : '#section-6',
		id : 's6',
		name : 'AboutMe',
		hashWords : ['#Introvert', '#Tea', '#Music', '#WhiteWine'],
		text : 'The government institution created for provide attention, assistance and reparation to the victims of the intern war in Colombia.',
		btnText : 'View',
		btnUrl : '#',
		clippyBackground : '#CCC1ED',
		cdLeft : 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
		cdRight : 'url(img/example1.jpg)'
	},

	section7 : {
		jQueryId : '#section-7',
		id : 's7',
		name : 'Contacts',
		hashWords : ['#CallMeMaybe'],
		text : 'The government institution created for provide attention, assistance and reparation to the victims of the intern war in Colombia.',
		btnText : 'Call',
		btnUrl : '#',
		clippyBackground : '#A6C8D8',
		cdLeft : 'linear-gradient(to top, #9890e3 0%, #b1f4cf 100%)',
		cdRight : 'url(img/example1.jpg)'
	},

	section8 : {
		jQueryId : '#section-8',
		id : 's8',
		name : 'AboutSite',
		hashWords : ['#Portfolio', '#HowYouDidIt', '#CSSorJS'],
		text : 'The government institution created for provide attention, assistance and reparation to the victims of the intern war in Colombia.',
		btnText : 'View',
		btnUrl : '#',
		clippyBackground : '#A3EB9A',
		cdLeft : 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
		cdRight : 'url(img/student.jpg)'
	}
}
// If you will create new section, do not forget to add new anchor into FullPageInit

let c = new homeController(sections);


// <div class="menu-items">
// 	<div class="row">
// 		<div class="col-lg-4" style="padding-left:30px;color:#FB8122">WebDevProg</div>
// 		<div class="col-lg-4"></div>
// 		<div class="col-lg-4"></div>
// 	</div>
// 	<hr>
// 	<ul id="menu">
// 		<a href="#"><li><i class="fa fa-home" style="margin-right:10px;"></i> Home</li></a>
// 		<a href="#"><li><i class="fa fa-desktop" style="margin-right:10px;"></i> MyProjects</li></a>
// 		<a href="#"><li><i class="fa fa-gamepad" style="margin-right:10px;"></i> MyInterests</li></a>
// 		<a href="#"><li><i class="fa fa-book" style="margin-right:10px;"></i> MyBooks</li></a>
// 		<a href="#"><li><i class="fa fa-check-square-o" style="margin-right:10px;"></i> MyGoals</li></a>
// 		<a href="#"><li><i class="fa fa-line-chart" style="margin-right:7px;"></i> MyProgress</li></a>
// 		<a href="#"><li><i class="fa fa-child" style="margin-right:14px;"></i> AboutMe</li></a>
// 		<a href="#"><li><i class="fa fa-phone" style="margin-right:14px;"></i> Contacts</li></a>
// 		<a href="#"><li><i class="fa fa-cogs" style="margin-right:10px;"></i> AboutSite</li></a>
// 	</ul> 
// </div>