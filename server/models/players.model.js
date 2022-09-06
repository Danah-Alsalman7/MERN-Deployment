const mongoose = require('mongoose');
const PlayersSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"],
	},
	image: {
		type: String,
		required: [true, "Image is required"],
	},

	treasure: {
		type: Number,
		required: [true, "Treasure is required"],
	},
	pirate: {
		type: String,
		required: [true, "Pirate is required"],
	},
	position: {
		type: String,
		required: [true, "Position is required"],
	},
	pegLeg: {
		type: Boolean,
		default: true,
		required: [true, "Peg leg is required"],
	},
	eyePatch: {
		type: Boolean,
		default: true,
		required: [true, "Eye patch is required"],
	},
	hookHand: {
		type: Boolean,
		default: true,
		required: [true, "Hook Hand is required"],
	}
}, { timestamps: true });
const Players = mongoose.model("Players", PlayersSchema);

module.exports = Players;