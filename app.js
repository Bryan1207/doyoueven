var express =require("express")
bodyParser = require("bodyParser")
app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

// our root route
app.get("/", function (req, res){
	res.render("sites/home");

});

app.listen(3000, function(){
	console.log(new.array)
}
