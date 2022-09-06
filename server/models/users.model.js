const mongoose = require('mongoose');
const UsersSchema = new mongoose.Schema({
	Fname: {
		type: String,
		required: [true, "First Name is required"],
	},
    Lname: {
		type: String,
		required: [true, "Last Name is required"],
	},
    email: {
		type: String,
		required: [true, "Email is required"],
	},
    password: {
		type: String,
		required: [true, "Password is required"],
	},
    ConPassword: {
		type: String,
		required: [true, "Confirm Password is required"],
	},

}, { timestamps: true });
const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;