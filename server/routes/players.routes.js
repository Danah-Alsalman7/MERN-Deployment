const PlayersController = require("../controllers/players.controller");

module.exports = app => {
    app.get("/api/players/", PlayersController.findAllPlayers);
    app.get("/api/players/:id", PlayersController.findOneSinglePlayer);
    app.post("/api/players/new", PlayersController.createNewPlayer);
    app.delete("/api/players/delete/:id", PlayersController.deleteAnExistingPlayer);
};