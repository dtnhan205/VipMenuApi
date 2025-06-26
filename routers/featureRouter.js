const express = require('express');
const router = express.Router();
const featureController = require('../controllers/featureController');

const validateFeatureUpdate = (req, res, next) => {
  const features = req.body;
  if (!features || typeof features !== 'object') {
    return res.status(400).json({ message: 'Dữ liệu đầu vào không hợp lệ' });
  }
  next();
};

router.get('/features', (req, res, next) => {
  featureController.getFeatureStates(req, res).catch(next);
});

router.post('/features', validateFeatureUpdate, (req, res, next) => {
  featureController.updateFeatureStates(req, res).catch(next);
});

router.use((err, req, res, next) => {
  console.error('Lỗi router:', err.stack);
  res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
});

module.exports = router;