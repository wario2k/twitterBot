console.log("Bot is online!");

var Twit = require('twit');
var config = require('./config') //config holds keys for twitter api access
var T = new Twit(config);
 /*get()-> search
   post()--> tweets
   stream()--->continued connection can be used to assigned certain events*/
   var params = {
   	q: 'pokemon',
   	count: 5
   } 

   T.get('search/tweets',params,getData);

   function getData(err, data,response){
   	var tweets = data.statuses;
   	for(var i = 0; i<tweets.length; i++){
   	
   	console.log(tweets[i].text);
   	console.log('\n');
   }

   }