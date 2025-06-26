const featureState = require('../models/featureModel');

const getFeatureStates = (req, res) => {
  try {
    const state = featureState.getState();
    if (!state) {
      return res.status(404).json({ message: 'Không tìm thấy trạng thái tính năng' });
    }
    res.json({ featureStates: state });
  } catch (error) {
    console.error('Lỗi khi lấy trạng thái:', error);
    res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
  }
};

const updateFeatureStates = (req, res) => {
  try {
    const {
      esp, line, espBox, health, name, skeleton, distance, circlepos, outline, oof,
      aimbot, skip, aimisVisible, fovaimglow, isBanBlocked, fakeLag, streamerMode,
      aimFov, aimWhen, aimWhen2, fovLineColor
    } = req.body;

    const updatedState = {
      esp: typeof esp === 'boolean' ? esp : false,
      line: typeof line === 'boolean' ? line : false,
      espBox: typeof espBox === 'boolean' ? espBox : false,
      health: typeof health === 'boolean' ? health : false,
      name: typeof name === 'boolean' ? name : false,
      skeleton: typeof skeleton === 'boolean' ? skeleton : false,
      distance: typeof distance === 'boolean' ? distance : false,
      circlepos: typeof circlepos === 'boolean' ? circlepos : false,
      outline: typeof outline === 'boolean' ? outline : false,
      oof: typeof oof === 'boolean' ? oof : false,
      aimbot: typeof aimbot === 'boolean' ? aimbot : false,
      skip: typeof skip === 'boolean' ? skip : false,
      aimisVisible: typeof aimisVisible === 'boolean' ? aimisVisible : false,
      fovaimglow: typeof fovaimglow === 'boolean' ? fovaimglow : false,
      isBanBlocked: typeof isBanBlocked === 'boolean' ? isBanBlocked : false,
      fakeLag: typeof fakeLag === 'boolean' ? fakeLag : false,
      streamerMode: typeof streamerMode === 'boolean' ? streamerMode : false,
      aimFov: typeof aimFov === 'number' ? Math.max(0.0, Math.min(360.0, aimFov)) : 0.0,
      aimWhen: typeof aimWhen === 'number' ? aimWhen : 0,
      aimWhen2: typeof aimWhen2 === 'number' ? Math.max(0, Math.min(2, aimWhen2)) : 0,
      fovLineColor: Array.isArray(fovLineColor) && fovLineColor.length === 4
        ? fovLineColor.map(c => Math.max(0.0, Math.min(1.0, c)))
        : [1.0, 0.0, 0.0, 1.0] 
    };

    featureState.updateState(updatedState);
    res.json({ message: 'Cập nhật trạng thái thành công', featureStates: featureState.getState() });
  } catch (error) {
    console.error('Lỗi khi cập nhật trạng thái:', error);
    res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
  }
};

module.exports = { getFeatureStates, updateFeatureStates };