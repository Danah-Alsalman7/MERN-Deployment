const Players = require("../models/players.model");

module.exports.findAllPlayers = (req, res) => {
    Players.find({})
        .then(allDaPlayers => res.json(allDaPlayers))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSinglePlayer = (req, res) => {
    Players.findOne({ _id: req.params.id })
        .then(oneSinglePlayer => res.json(oneSinglePlayer))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewPlayer = (req, res) => {
    Players.create(req.body)
        .then(newlyCreatedPlayer => res.json({ player: newlyCreatedPlayer }))
        .catch(err => res.status(400).json(err));
};



module.exports.deleteAnExistingPlayer = (req, res) => {
    Players.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};