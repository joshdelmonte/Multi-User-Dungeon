const mongoose = require('mongoose');
const Monster = mongoose.model('Monster', new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength: 2.
    },
    id: {
        type: Number,
        required: true,
        minlength: 2.
    },
    hit_points: {
        type: Number,
        required: true,
        minlength: 2.
    },
    attack_power: {
        type: Number,
        required: true,
        minlength: 2.
    },  
    loot: {
        type: mongoose.Schema.Types.ObjectId,
        allowNull: true,
        default: null,
        ref: 'Loot',
},
}));

module.exports = Monster;

