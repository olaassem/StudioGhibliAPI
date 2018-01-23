'use strict';


const studioGhibliEndpoint= 'https://ghibliapi.herokuapp.com/films'



function implementSubmitButton(){
  $('.js-submit').on('click',function( event ){
  	event.preventDefault();
    let searchTerm= $('.js-search').val();
    getDataFromApi( searchTerm );
  });
}


function getDataFromApi( searchTerm ) {
	let params = {
		q: searchTerm
	};

	$.getJSON(studioGhibliEndpoint, params, function ( data,error ) {
	//check data in console
	console.log(data);
	displayAllFilms();
	});
}	


function renderFilm( filmObject ){
	return 
		`<li>
			<h2>${filmObject.title}</h2>
		</li>`;
	console.log()
}


// gets raw data from API
function displayAllFilms( data ){
	let html = "";
	let output = data.map( renderFilm ).join('\n');
	$('.js-results').html( '<ul>' + renderFilm + '</ul>' );
}





//data prototype: array
//loop that displays all the titles: 
//function that accepts one obj as an arg, 
//return html that represents that object and .map()


//Document Ready Function
implementSubmitButton();