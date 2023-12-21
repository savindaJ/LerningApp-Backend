const express = require('express');
const controller = require('../controller/controller');

const router = express.Router();

router.get('/users',controller.getAllUser);
router.post('/createuser',controller.getAllUser);
router.put('/updateuser',controller.getAllUser);
router.delete('/deleteuser',controller.getAllUser);