const platformModule = require("tns-core-modules/platform");

exports.getUUID = function () {
    return platformModule.device.uuid;
};
