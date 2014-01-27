var domain = require("jsdm")();

domain.register(
    "AggreClass", 
	require("./Column"), 
	require("./User"),
    require("./Topic"), 
	require("./Reply"),
	require("./Message"),
    "get", require("../app/db").get,
    "listener", require("./eventHandles"),require("../app/eventHandles"),
    "repository", require("./repos"),
    "commandHandle", require("./commandHandles"),
    "service", require("./services")(require("../app/query"))
).openMethod(
	"User.plus",
	"User.updatePassword",
	"User.follow",
	"User.unfollow"
)
module.exports = domain;