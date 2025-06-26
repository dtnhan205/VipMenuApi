class FeatureState {
  constructor() {
    this.esp = false;
    this.line = false;
    this.espBox = false;
    this.health = false;
    this.name = false;
    this.skeleton = false;
    this.distance = false;
    this.circlepos = false;
    this.outline = false;
    this.oof = false;
    this.aimbot = false;
    this.skip = false;
    this.aimisVisible = false;
    this.fovaimglow = false;
    this.isBanBlocked = false;
    this.fakeLag = false;
    this.streamerMode = false;
    this.aimFov = 0.0; // Giá trị từ 0.0 đến 360.0
    this.aimWhen = 0;  // Giá trị mặc định (0: Head, 1: Neck, 2: Hip)
    this.aimWhen2 = 0; // Thay thế AimWhen2, giữ giá trị 0, 1, 2
  }

  updateState(updates) {
    this.esp = updates.esp !== undefined ? updates.esp : this.esp;
    this.line = updates.line !== undefined ? updates.line : this.line;
    this.espBox = updates.espBox !== undefined ? updates.espBox : this.espBox;
    this.health = updates.health !== undefined ? updates.health : this.health;
    this.name = updates.name !== undefined ? updates.name : this.name;
    this.skeleton = updates.skeleton !== undefined ? updates.skeleton : this.skeleton;
    this.distance = updates.distance !== undefined ? updates.distance : this.distance;
    this.circlepos = updates.circlepos !== undefined ? updates.circlepos : this.circlepos;
    this.outline = updates.outline !== undefined ? updates.outline : this.outline;
    this.oof = updates.oof !== undefined ? updates.oof : this.oof;
    this.aimbot = updates.aimbot !== undefined ? updates.aimbot : this.aimbot;
    this.skip = updates.skip !== undefined ? updates.skip : this.skip;
    this.aimisVisible = updates.aimisVisible !== undefined ? updates.aimisVisible : this.aimisVisible;
    this.fovaimglow = updates.fovaimglow !== undefined ? updates.fovaimglow : this.fovaimglow;
    this.isBanBlocked = updates.isBanBlocked !== undefined ? updates.isBanBlocked : this.isBanBlocked;
    this.fakeLag = updates.fakeLag !== undefined ? updates.fakeLag : this.fakeLag;
    this.streamerMode = updates.streamerMode !== undefined ? updates.streamerMode : this.streamerMode;
    this.aimFov = updates.aimFov !== undefined ? Math.max(0.0, Math.min(360.0, updates.aimFov)) : this.aimFov; // Giới hạn từ 0.0 đến 360.0
    this.aimWhen = updates.aimWhen !== undefined ? updates.aimWhen : this.aimWhen;
    this.aimWhen2 = updates.aimWhen2 !== undefined ? Math.max(0, Math.min(2, updates.aimWhen2)) : this.aimWhen2; // Giới hạn từ 0 đến 2
    return this;
  }

  getState() {
    return { ...this };
  }
}

module.exports = new FeatureState();