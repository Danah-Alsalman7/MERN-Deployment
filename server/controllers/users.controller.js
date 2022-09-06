const Users = require("../models/users.model");

module.exports.findAllUsers = (req, res) => {
    Users.find({})
        .then(allDaPlayers => res.json(allDaPlayers))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleUser = (req, res) => {
    Users.findOne({ _id: req.params.id })
        .then(oneSinglePlayer => res.json(oneSinglePlayer))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewUser = (req, res) => {
    Users.create(req.body)
        .then(newlyCreatedPlayer => res.json({ user: newlyCreatedPlayer }))
        .catch(err => res.status(400).json(err));
};



module.exports.deleteAnExistingUser = (req, res) => {
    Users.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};