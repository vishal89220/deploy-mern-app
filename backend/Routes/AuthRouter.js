const { signup, login } = require('../Controllar/AuthControllar');
const {SignupValidation, LoginValidation} = require('../Middleware/AuthValidation'); 
const router = require('express').Router();

// router.post('/login', (req, res) => {
//     res.send('login success');
// });
router.post('/login', LoginValidation, login);

router.post('/signup',SignupValidation, signup);

module.exports = router;
