var mongoose=require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/jobs');

var db = mongoose.connection;
db.on("error",function(){
	console.log("connection error");
});
db.once("open",function() {
	console.log("connection success");
});
