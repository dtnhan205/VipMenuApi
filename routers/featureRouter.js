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
router.get('/features', featureController.getFeatureStates);

// Route để cập nhật trạng thái tính năng
router.post('/features', validateFeatureUpdate, featureController.updateFeatureStates);

// Middleware xử lý lỗi tập trung
router.use((err, req, res, next) => {
  // Kiểm tra xem headers đã được gửi chưa
  if (res.headersSent) {
    return next(err); // Nếu headers đã gửi, chuyển lỗi cho middleware tiếp theo
  }
  console.error('Lỗi router:', err.stack);
  res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
});

module.exports = router;