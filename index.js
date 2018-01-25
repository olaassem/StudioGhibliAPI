'use strict';


const studioGhibliEndpoint= 'https://ghibliapi.herokuapp.com/films'

function getDataFromApi( searchTerm ) {
	let params = {
		q: searchTerm
	};

	$.getJSON(studioGhibliEndpoint, params, function ( data ) {
		//check data in console
		console.log(data);

		//check if there is error
		if(data.Error) {
	      	alert(result.Error);
	    } else {
			displayAllFilms(data);
		};
	});	
}



function implementSubmitButton(){
  $('.js-submit').on('click',function( event ){
  	event.preventDefault();
    let searchTerm= $('.js-search').val();
    getDataFromApi( searchTerm );
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
	//declare output
	let output;

	//if no matches in data => output is "sorry..."
	if( data.length === 0 ){
			output = `<p>Sorry! No videos match your search.</p>`;
		} 
	//otherwise if there is data in the reponse...
	else {
	//map over arrays --> creates a new array with the anon function that is passed
		output = data.map ( function ( item ){
			return (   //JS expects when you click "return key" next to it - it wont return anything
				`<div class="js-film-container"> 
				<h3>${item.title}</h3>
				<p>${item.description}</p>
			</div>`);
		}).join('\n');	
	}
	$('.js-results').html( `<div> ${output} </div>`);
}



//data prototype: array
//loop that displays all the titles: 
//function that accepts one obj as an arg, 
//return html that represents that object and .map()


//Document Ready Function
implementSubmitButton();