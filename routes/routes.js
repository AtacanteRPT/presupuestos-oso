var express = require('express');
var router = express.Router();

var passport = require('passport');

var controladores = require('.././controladores');
var authMiddleware = require ('.././middleware/auth');

router.get('/', controladores.homeControles.index);
router.get('/panel', controladores.homeControles.index);

router.get('/login', controladores.homeControles.index);
router.get('/registro', controladores.homeControles.index);


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index.html',{titulo  : 'EXPRESS'});
// });

router.post('/users/registro', function(req,res, next){
    console.log('Imprimiendo el cuerpo ENVIADO ' + req.body.nombre);

    res.json({hola : 'HOLA desde El servidor'});
});

router.get('/auth/signup',controladores.userControlador.getSignUp);
router.post('/auth/signup', controladores.userControlador.postSignUp);

router.get('/auth/signin',controladores.userControlador.getSignIn);

router.post('/auth/signin',passport.authenticate('local',{
    successRedirect:'/users/panel',
    failureRedirect:'/auth/signin',
    failureFlash: true
}));

router.get('/auth/logout',controladores.userControlador.logout);
router.get('/users/panel',authMiddleware.isLogged,controladores.userControlador.getUserPanel);
module.exports = router;
