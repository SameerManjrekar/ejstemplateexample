module.exports.loginPageHandler = function(req,res){
	req.session.destroy();
	console.log('Login Page');
	res.render('login.ejs',{});
};

module.exports.landingPageHandler = function(req,res){
	console.log("Processing GET requests for landing page. Req Param" + req.query.nm);

	var person;
	if (req.session.userName) {
		console.log("User Name is already in session. It is " + req.session.userName);
		person = req.session.userName;
	}
	else{ //Session store does not have userName
		  //read userName from req.query and keep it in the session store
		  person = req.query.nm;
		  req.session.userName = person;
		  console.log("User Name does not exists in session. Hence storing it in session");
	}

	res.render('landingpage.ejs',{welcomeMessage:person});
};

module.exports.cityPageHandler = function(req,res){
	var interestValue = req.body.interest;
	var cityNameValue, taglineValue;
	console.log("received interestValue as " + interestValue);

	if (interestValue === "history") {
		cityNameValue = 'Rome';
		taglineValue = 'City of earliest civilization';
	}
	else if (interestValue === "fashion") {
		cityNameValue = 'Paris';
		taglineValue = 'Fashion capital of the world'
	}
	else if (interestValue === "finance") {
		cityNameValue = 'New York';
		taglineValue = 'Business capital of the world';
	}

	res.render('city.ejs',{cityName:cityNameValue,tagline:taglineValue,
							person:req.session.userName});
}