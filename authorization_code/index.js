var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

// router.get('/login', function(req, res) {
//   var scopes = 'user-read-private user-read-email';
//   res.redirect('https://accounts.spotify.com/authorize' +
//     '?response_type=code' +
//     '&client_id=' + 'ca202a7d6b6646aa9458a56515b54270' +
//     (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
//     '&redirect_uri=' + encodeURIComponent('http://localhost:3001/callback'));
//   });

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
	var db = require('./db');
	var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
	Users.find({}).lean().exec(function(e, docs) {
		res.json(docs);
		res.end();
	});
});

/* POST ONE users. */
router.post('/users/', function(req, res, next) {
	var db = require('./db');
	var User = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
	var newuser = new User({
		user: req.body.user,
		artista_fav: req.body.artista,
		genero_fav: req.body.genero
	});
	newuser.save(function(err) {
		if (err) {
			res.status(500).json({ error: err.message });
			res.end();
			return;
		}
		res.json(newuser);
		res.end();
	});
});

module.exports = router;
