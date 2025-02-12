const logger = require("./logger");
const auth = require("./authmiddleware");
const upload = require("./uploadMiddleware");

module.exports = {
    logger,
    auth,
    upload
};