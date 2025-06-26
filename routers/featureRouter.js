const express = require('express');
const router = express.Router();
const featureController = require('../controllers/featureController');

router.get('/features', featureController.getFeatureStates);
router.post('/features', featureController.updateFeatureStates);

module.exports = router;