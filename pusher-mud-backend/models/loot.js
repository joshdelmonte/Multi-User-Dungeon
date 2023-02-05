const mongoose = require('mongoose');
const Loot = mongoose.model('Loot', new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },
    attack_power: {
        type: Number,
        required: true,
    },
    monster_origin: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: true,
        default: null,
        ref: 'Monster',
    },
}));

module.exports = Loot;