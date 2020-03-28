var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index',
    {
      page: 'Inscribir',
      menuId: 'home',
      title: "Inscribir", //page title
      action: "/inscribir", //post action for the form
      fields: [
        { name: 'Cedula cuidadania', type: 'number', property: 'required' },
        { name: 'Primer nombre', type: 'text', property: 'required' },
        { name: 'Segundo nombre', type: 'text', property: 'required' },
        { name: 'Primer apellido', type: 'text', property: 'required' },
        { name: 'Segundo apellido', type: 'text', property: 'required' }
      ]
    });



});

router.get('/auth', function (req, res, next) {
  res.render('auth',
    {
      page: 'Autorizar',
      menuId: 'auth',
      title: "Autorizar",
      action: "/autorizar",
      fields: [
        { name: 'OTP-token', type: 'password', property: 'required' }
      ]
    });
});


module.exports = router;
