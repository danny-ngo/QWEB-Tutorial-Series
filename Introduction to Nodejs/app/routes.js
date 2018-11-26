
module.exports = function(app, passport){

	app.get('/', function(req,res){
		console.log('test');
		res.render('index',{name:'Chris Payne Can Eat Shit',body:'Yes... yes he can.'});
	});


	app.get(function(req,res){
		res.render('index');
	});

}