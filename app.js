var express = require("express"),
  bodyParser = require("body-parser"),
  app = express();

var db = require('./models/');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// our root route
app.get("/", function (req, res) {
  res.render("sites/homeSignUp");
});

app.get("/mainpage", function (req, res) {
  res.render("sites/mainpage");
});

app.get("/thread", function (req, res) {
  res.render("sites/thread");
});

app.post("/posts", function (req, res) {
	var comment = req.body.comment;
	console.log(req.body);
	var date = new Date();
	db.post.create({username: comment.user,
					content: comment. message,
					date: date.toDateString()})
			.then(function(post) {
				res.redirect('/mainpage');
			});
});

app.listen(3000, function () {
  console.log(new Array("*").join());
  console.log("STARTED ON localhost:3000");
});