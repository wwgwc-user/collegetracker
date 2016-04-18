var http = require('http');
var path = require('path');

var express = require('express');

var Chance = require('chance'),
    chance = new Chance();
    
var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Listening", addr.address + ":" + addr.port);
});

var schools = [{
  id: 1,
  imageurl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/MIT_Seal.svg/1024px-MIT_Seal.svg.png",
  collegename: "Massachusetts Institute of Technology",
  duedate: "January 1st, 2017"
}, {
  id: 2,
  imageurl:"http://sadermedia.com/wp-content/uploads/2015/09/ut-logo.png",
  collegename: "University of Texas",
  duedate: "December 25th, 2016"
}];

router.get('/', function (req,res) {
  res.render('main.hbs', {
    schools: schools
  });
});


router.get('/random', function (req, res) {
  res.render('stressed.hbs', {
    
    quote: chance.pickone(['Good job.', 'Keep going.', 'Don\'t worry, you\'ll get there.', 'Winners never quit, and quitters never win.',
    'You can do this.', 'Think of a puppy wearing sunglasses.', 'Remember that person who gave up? Neither does anyone else.', 
    'Every wrong attempt discarded is a step forward.', 'Sometimes adversity is what you need to face in order to become successful.', 
    'The advancement and diffusion of knowledge is the only guardian of true liberty.' ]),
    
    author: "Inspirational Quote"
  });
});




