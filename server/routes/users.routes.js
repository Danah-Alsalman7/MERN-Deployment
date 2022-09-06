const UsersController = require("../controllers/users.controller");

module.exports = app => {
    app.get("/api/users/", UsersController.findAllUsers);
    app.get("/api/user/", UsersController.findOneSingleUser);
    app.post("/api/users/new", UsersController.createNewUser);
    app.delete("/api/users/delete/:id", UsersController.deleteAnExistingUser);
};