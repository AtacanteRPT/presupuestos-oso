var mysql = require('mysql');
var bcrypt = require('bcryptjs');

module.exports = {
  getSignUp : function(req,res,next){
    return res.render('users/signUp',{estaAutentificado: req.isAuthenticated()});
  },
  postSignUp : function(req,res,next){
    var salt= bcrypt.genSaltSync(10);
    var password = bcrypt.hashSync(req.body.password,salt);

    var user = {
      email: req.body.email,
      nombre: req.body.nombre,
      password: password
    };

    var config = require('.././baseDatos/config');

    var db = mysql.createConnection(config);

    db.connect();
    db.query('INSERT INTO users SET ?',user,function(err,rows,fields){
      if(err) throw err;

      db.end();
    });

    req.flash('info','Se ha registrado correctamente, ya puede Iniciar secion');
    return res.redirect('/auth/signin');
  },

  getSignIn: function(req,res,next){
    return res.render('users/signIn',{message: req.flash('info'), authmessage:req.flash('authmessage'),estaAutentificado:req.isAuthenticated()});
  },

  logout : function(req,res,next){
    req.logout();
    res.redirect('/auth/signin');
  },

  getUserPanel : function(req,res,next){
    res.render('users/panel',{
      estaAutentificado: req.isAuthenticated(),
      user: req.user
    });
  }

};
