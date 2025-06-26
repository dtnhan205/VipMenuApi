const express = require('express');
const router = express.Router();
const featureController = require('../controllers/featureController');

// Middleware để kiểm tra dữ liệu đầu vào cho POST
const validateFeatureUpdate = (req, res, next) => {
  const features = req.body;
  if (!features || typeof features !== 'object') {
    return res.status(400).json({ message: 'Dữ liệu đầu vào không hợp lệ' });
  }
  next();
};

// Route để lấy trạng thái tính năng
router.get('/features', (req, res, next) => {
  featureController.getFeatureStates(req, res).catch(next);
});

// Route để cập nhật trạng thái tính năng
router.post('/features', validateFeatureUpdate, (req, res, next) => {
  featureController.updateFeatureStates(req, res).catch(next);
});

// Middleware xử lý lỗi tập trung
router.use((err, req, res, next) => {
  console.error('Lỗi router:', err.stack);
  res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
});

module.exports = router;