/**
 * GET /
 * Home page.
 */

var app = require('../app');
var io = app.io;
var $ = require('jquery');

exports.index = function(req, res) {
  if (req.isAuthenticated()) {
    res.render('authenticatedhome', {
        title: 'Home'
    });
  return;
   } else {

//    io = req.server.locals.io;

    res.render('home', {
      title: 'Home'
    });
  }
};
