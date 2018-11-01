var context = document.getElementById("Chart1").getContext("2d");



var myChart = new Chart(context, {

	// Declare the type of Bar
	type: 'bar',

	// Assign the Data
	data:{
		labels: ['Red', 'Blue', "Yellow", 'Green'],
		datasets:[{
			label: '# of Votes',
			data: [12,19,3,5],

			backgroundColor: ['green','yellow','blue', 'red' ]

		}]
	},

	// Chart Options 

	options:{
		
	}


});


var context2 =document.getElementById("Chart2").getContext("2d");

var myChart2 = new Chart(context2,{


	type: 'pie',

	data:{

		labels: ["Africa" , 'Europe', "Asia", "North America"],
		datasets:[{

			label: "Population (Millions)",
			backgroundColor: ['red', 'green', 'purple', 'yellow'],

			data: [2478,5367,735,800]
		}]
	},

	options:{

		title: {
			display: true,

			text: 'Predicted World Population in 2040'

		}
		
	}
});