//STRATEGIES FOR PROGRAMMING:
//put all the steps we need in psuedo code.
//divide and conquer problems!


//ex. make a robot make an omelette

//1*have to declare everything beforehand
//2*think of cases that will make the robot break (no eggs available, no spatula.. etc)
//3*declare next all the actions to take (you tend to skip right to this step)
//4*think of the expected results
//5*after thinking of the 4 steps in order (draw/ pseudocode/ whatever), 
//6*then start coding (//make a list of all your variables and functions.. -->)
//7*if you are just making one thing - you tackle that 


//take bowl, whisk, pan, plate, and spatula out of cabinet
//take two eggs out of fridge
//take 1 green onion out of fridge
//take butter out of fridge
//take salt and pepper out of pantry
//place all items on counter
//cut onions into small pieces
//crack two eggs in bowl 
//use whisk to whisk eggs
//sprink.e salt and pepper on eggs to taste
//turn on stove
//put pan on stove
//put piece of butter inside pan
//once butter is melted put onions in pan and whisk
//put eggs in pan
//use spatula to cook to taste
//take out eggs once ready
//place on plate
//use fork to eat
//bon appetit

//--------------------------------------------------------

//PSUEDO CODE FOR displayAllFilms FUNCTION
//what do i need to display all films?
//what is data?
//data is an array of films.
//ok, i have data.
//check if data is empty or not.
//if its empty: show "sorry,,," msg.
//if not empty: 1. look through the array 2. show the title and description
//finally, show results on DOM.



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
			return 
			`<div class="js-film-container"> 
				<h3>${item.title}</h3>
				<p>${item.description}</p>
			</div>`;
		}).join('\n');	
	}
	$('.js-results').html( `<div> ${output} </div>`);





}
