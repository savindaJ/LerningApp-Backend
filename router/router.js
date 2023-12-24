const express = require('express');
const controller = require('../controller/controller');

const router = express.Router();

router.get('/users',controller.getAllUser);
router.post('/createuser',controller.addUser);
router.put('/updateuser',controller.updateUser);
router.put('/deleteuser',controller.deleteUser);

module.exports = router;