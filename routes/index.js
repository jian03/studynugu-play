const express = require('express');
const nugu = require('../nugu');
const router = express.Router();

router.post('/nugu/startTimer', nugu);

module.express = router;