// TODO: format buttons for development section on mobile, picture size on mobile

var d3 = [
	{
		name: 'Meteorite Landings Worldwide',
		img: 'images/meteors.png',
		description: "A D3.js built global map displaying data for individual meteorite landings.",
		link: 'http://myweb.fsu.edu/cwitulski/meteors/'
	},
	{
		name: 'Camper News Postings on FreeCodeCamp.com',
		img: 'images/posts.png',
		description: "A force-directed interactive chart built in D3.js.",
		link: 'http://myweb.fsu.edu/cwitulski/force/'
	},
	{
		name: 'Global Temperatures since the 1750s',
		img: 'images/temp.png',
		description: "A heatmap type chart of global tempertures built in D3.js.",
		link: 'http://myweb.fsu.edu/cwitulski/temp/'
	},
	{
		name: 'Doping Allegations in Cycling',
		img: 'images/doping.png',
		description: "An interactive scatterplot showing allegations of doping among top cyclists built in D3.js.",
		link: 'http://myweb.fsu.edu/cwitulski/doping/'
	},
	{
		name: 'Gross Domestic Product',
		img: 'images/gdp.png',
		description: "An interactive chart of US GDP growth built in D3.js.",
		link: 'http://myweb.fsu.edu/cwitulski/gdp/'
	}
]
var react = [
	{
		name: 'Dungeon Fungeon',
		img: 'images/dungeon.png',
		description: "A dungeon-type game built in React.js.",
		link: 'http://myweb.fsu.edu/cwitulski/fungeon/'
	},
	{
		name: 'Game of Life',
		img: 'images/life.png',
		description: "React.js-based simulation that mirrors the functionality of Conway's Game of Life.",
		link: 'http://myweb.fsu.edu/cwitulski/life/'
	},
	{
		name: 'Recipe Box',
		img: 'images/recipes.png',
		description: "Recipe box application designed in React.js that uses the browser's local storage to persist saved entries.",
		link: 'http://myweb.fsu.edu/cwitulski/recipes/'
	}
]

var websites = [
	{
		name: 'Portfolio and Home Page',
		img: 'images/pattern2-small.jpg',
		description: "Uses Bootstrap and SASS to display portfolio content and other information on the author's research, musical activities, and current web development projects.",
		link: '#musicology'
	},
	{
		name: 'World Music resources',
		img: 'images/wmtext.png',
		description: "Website for online materials linked to the World Music: Traditions and Transformations textbook. Uses vanilla JavaScript alongside jQuery and Colorbox to create a dynamic student experience within a static website. Currently under development.",
		link: 'http://myweb.fsu.edu/cwitulski/textbook/'
	}
]

var javascript = [
	{
		name: 'What?',
		img: 'images/what.png',
		description: "Javascript-based game that uses sounds and timers to clone the popular Simon©.",
		link: 'http://myweb.fsu.edu/cwitulski/what/'
	},
	{
		name: 'Tic Tac Toe',
		img: 'images/ttt.png',
		description: "Web-based tic tac toe game devleoped in Javascript.",
		link: 'http://myweb.fsu.edu/cwitulski/ttt/'
	},
	{
		name: 'Current Weather',
		img: 'images/weather.png',
		description: "Weather application that uses geographic coordinates from the browser to find the current weather and near-term forecast for your local area.",
		link: 'http://myweb.fsu.edu/cwitulski/weather/'
	},
	{
		name: 'Break Time',
		img: 'images/break.png',
		description: "Javascript-based pamadoro timer application.",
		link: 'http://myweb.fsu.edu/cwitulski/timer/'
	},
	{
		name: 'Calculamatator',
		img: 'images/calc.png',
		description: "Javascript-based online calculator application.",
		link: 'http://myweb.fsu.edu/cwitulski/calculator/'
	},
	{
		name: 'Wikipedia Lookup',
		img: 'images/wiki.png',
		description: "Small app that uses jQuery and API calls to Wikipedia to generate and format links for articles based on a search request.",
		link: 'http://myweb.fsu.edu/cwitulski/wiki/'
	},
	{
		name: 'Random Quote Generator',
		img: 'images/quotes.png',
		description: "API-driven application generates a new quote and allows for sharing via Twitter",
		link: 'http://myweb.fsu.edu/cwitulski/quotes/'
	}
]

var fullstack = [
	{
		name: 'Society for Arab Music Research',
		img: 'images/samr.png',
		description: "Flask-based web application running through a Postgres database that allows researchers to log in and share bios, events, and projects. Uses Oauth2 (Facebook and Google APIs), deployed on Heroku. Currently under development.",
		link: 'http://vast-island-20454.herokuapp.com'
	}
]
var renderContent = function(category) {
	var content = ''
	var category = eval(category)
	category.forEach(function(item) {
		html = "<div class='row dev-content'><div class='col-sm-3 col-sm-offset-1'><img src='";
		html += item.img;
		html += "' class='img-rounded img-responsive dev-img'></div><div class='col-sm-7'><h4 class='text-uppercase'>";
		html += item.name;
		html += "</h4><p>";
		html += item.description;
		html += "</p><p><a href='";
		html += item.link;
		html += "' class='btn btn-default' target='_blank' role='button'>Test Drive</a></p></div></div>"
		content += html
	})
	return content;
}

$(document).ready(function(){
	$(".nav a").on("click", function(){
		$(".nav").find(".active").removeClass("active");
		$(this).parent().addClass("active");
	});

	$('#dev-container').html(renderContent(fullstack))

	$('.selector').click(function(e) {
		var category = event.target.id
		$('.selector').removeClass('active')
		$(event.target).addClass('active')
		$('#dev-container').html(renderContent(category))
	})
})
