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
	displayAllFilms(data);
	});
}	

/*
function renderFilm( filmObject ){
	return 
		`<li>
			<h2>${filmObject.title}</h2>
		</li>`;
	console.log()
}
*/


// gets raw data from API
function displayAllFilms( data ){
	
	let html = "";

	let output = data.map( function( item ) {
		return `<div class="js-film-container"> <h3>${item.title}</h3><p>${item.description}</p></div>`;
		} ).join('\n');

	$('.js-results').html( `<div> ${output} </div>`);
}



//data prototype: array
//loop that displays all the titles: 
//function that accepts one obj as an arg, 
//return html that represents that object and .map()


//Document Ready Function
implementSubmitButton();