// TODO: format buttons for development section on mobile

var d3 = [
	{
		name: 'Meteorite Landings Worldwide',
		img: 'images/meteors.png',
		description: "A D3.js built global map displaying data for individual meteorite landings.",
		github: "https://github.com/cjwit/meteors/tree/gh-pages",
		link: 'http://cjwit.github.io/meteors'
	},
	{
		name: 'Camper News Postings on FreeCodeCamp.com',
		img: 'images/posts.png',
		description: "A force-directed interactive chart built in D3.js.",
		github: "https://github.com/cjwit/campernews/tree/gh-pages",
		link: 'http://cjwit.github.io/campernews'
	},
	{
		name: 'Global Temperatures since the 1750s',
		img: 'images/temp.png',
		description: "A heatmap type chart of global tempertures built in D3.js.",
		github: "https://github.com/cjwit/globaltemp/tree/gh-pages",
		link: 'http://cjwit.github.io/globaltemp'
	},
	{
		name: 'Doping Allegations in Cycling',
		img: 'images/doping.png',
		description: "An interactive scatterplot showing allegations of doping among top cyclists built in D3.js.",
		github: "https://github.com/cjwit/doping/tree/gh-pages",
		link: 'http://cjwit.github.io/doping'
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
		github: "https://github.com/cjwit/fungeon/tree/gh-pages",
		link: 'http://cjwit.github.io/fungeon'
	},
	{
		name: 'Game of Life',
		img: 'images/life.png',
		description: "React.js-based simulation that mirrors the functionality of Conway's Game of Life.",
		github: "https://github.com/cjwit/life/tree/gh-pages",
		link: 'http://cjwit.github.io/life'
	},
	{
		name: 'Markdown Previewer',
		img: 'images/markdown.png',
		description: "A simple online text editor that displays a preview of Github's Markdown format.",
		github: 'https://github.com/cjwit/markdown/tree/gh-pages',
		link: 'http://cjwit.github.io/markdown/'
	},
	{
		name: 'Recipe Box',
		img: 'images/recipes.png',
		description: "Recipe box application designed in React.js that uses the browser's local storage to persist saved entries.",
		github: "https://github.com/cjwit/recipes/tree/gh-pages",
		link: 'http://cjwit.github.io/recipes'
	}
]

var websites = [
	{
		name: 'Teaching portfolio',
		img: 'images/portfolio.png',
		description: "Dynamically presents multimedia teaching portfolio content using jQuery, Bootstrap, and Colorbox.",
		github: "https://github.com/cjwit/markdown/tree/gh-pages",
		link: 'http://cjwit.github.io/jw'
	},
	{
		name: 'Portfolio and Home Page',
		description: "Uses Bootstrap and SASS to display portfolio content and other information on the author's research, musical activities, and current web development projects.",
		github: "https://github.com/cjwit/cjwit.github.io",
		link: '#musicology'
	},
	{
		name: 'World Music resources',
		description: "Website for online materials linked to the World Music: Traditions and Transformations textbook. Uses vanilla JavaScript alongside jQuery and Colorbox to create a dynamic student experience within a static website. Currently under development.",
		link: 'http://myweb.fsu.edu/cwitulski/textbook/'
	}
]

var javascript = [
	{
		name: 'What?',
		img: 'images/what.png',
		description: "Javascript-based game that uses sounds and timers to clone the popular Simon©.",
		github: "https://github.com/cjwit/what/tree/gh-pages",
		link: 'http://cjwit.github.io/what'
	},
	{
		name: 'Tic Tac Toe',
		img: 'images/ttt.png',
		description: "Web-based tic tac toe game devleoped in Javascript.",
		github: "https://github.com/cjwit/ttt/tree/gh-pages",
		link: 'http://cjwit.github.io/ttt'
	},
	{
		name: 'Current Weather',
		img: 'images/weather.png',
		description: "Weather application that uses geographic coordinates from the browser to find the current weather and near-term forecast for your local area.",
		github: "https://github.com/cjwit/weather/tree/gh-pages",
		link: 'http://cjwit.github.io/weather'
	},
	{
		name: 'Break Time',
		img: 'images/break.png',
		description: "Javascript-based pamadoro timer application.",
		github: "https://github.com/cjwit/break/tree/gh-pages",
		link: 'http://cjwit.github.io/break'
	},
	{
		name: 'Calculamatator',
		img: 'images/calc.png',
		description: "Javascript-based online calculator application.",
		github: "https://github.com/cjwit/calc/tree/gh-pages",
		link: 'http://cjwit.github.io/calc'
	},
	{
		name: 'Wikipedia Lookup',
		img: 'images/wiki.png',
		description: "Small app that uses jQuery and API calls to Wikipedia to generate and format links for articles based on a search request.",
		github: "https://github.com/cjwit/wiki/tree/gh-pages",
		link: 'http://cjwit.github.io/wiki'
	},
	{
		name: 'Random Quote Generator',
		img: 'images/quotes.png',
		description: "API-driven application generates a new quote and allows for sharing via Twitter",
		github: "https://github.com/cjwit/quotes/tree/gh-pages",
		link: 'http://cjwit.github.io/quotes'
	}
]

var fullstack = [
	{
		name: 'Society for Arab Music Research',
		img: 'images/samr.png',
		description: "Flask-based web application running through a Postgres database that allows researchers to log in and share bios, events, and projects. Uses Oauth2 (Facebook and Google APIs), deployed on Heroku. Currently under development.",
		github: "https://github.com/cjwit/samr/",
		link: 'http://vast-island-20454.herokuapp.com'
	}
]

var buttons = ['Test Drive', 'Check It', 'Boom', 'Go There', 'Take a Look', 'Do It Up', 'Try It Out'];

var renderContent = function(category) {
	var content = ''
	var category = eval(category)
	category.forEach(function(item) {
		html = "<div class='row dev-content'><div class='col-sm-3 col-sm-offset-1'><img src='";
		html += (item.img ? item.img : 'images/default.jpg');
		html += "' class='img-rounded img-responsive dev-img'></div><div class='col-sm-7'><h4 class='text-uppercase'>";
		html += item.name;
		html += "</h4><p>";
		html += item.description;
		html += "</p><p><a href='";
		html += item.link;
		html += "' class='btn btn-default' target='_blank' role='button'>"
		html += buttons[Math.floor(Math.random() * buttons.length)]
		html += "</a>"
		if (item.github) {
			html += " <a href='" + item.github + "' class='btn btn-default' target='_blank' role='button'>View on GitHub</a>"
		}
		html += "</p></div></div>"
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
