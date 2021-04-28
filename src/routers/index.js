const express = require('express');
const controller = require('../controllers');
const router = express.Router();
router.post('/enviar', controller.Create);
router.get('/ver', controller.View);


router.post("/cadastro", MediaController.cadastramento); 
router.post("/login", MediaController.login);
router.get("/signout", MediaController.signout);
router.get('/media', Redirecionar.isAuthenticated,(req, res) => res.redirect("login.html"));



module.exports = router;