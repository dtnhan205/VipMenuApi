const featureState = require('../models/featureModel');


const getFeatureStates = (req, res) => {
  res.json(featureState.getState());
};

const updateFeatureStates = (req, res) => {
  const {
    esp, line, espBox, health, name, skeleton, distance, circlepos, outline, oof,
    aimbot, skip, aimisVisible, fovaimglow, isBanBlocked, fakeLag, streamerMode
  } = req.body;
  featureState.updateState({
    esp, line, espBox, health, name, skeleton, distance, circlepos, outline, oof,
    aimbot, skip, aimisVisible, fovaimglow, isBanBlocked, fakeLag, streamerMode
  });
  res.json({ message: 'Cập nhật trạng thái thành công', featureStates: featureState.getState() });
};

module.exports = { getFeatureStates, updateFeatureStates };