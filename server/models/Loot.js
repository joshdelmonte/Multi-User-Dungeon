const Loot = require('./Loot');
const Monster = require('./Monster');
const { Schema, model } = require('mongoose');

const lootSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    index: {
        type: Number
    },
    attack_power: {
        type: Number,
        required: true,
        trim: true,
    },
    monter_origin: {
        type: String,
        required: true,
        trim: true,
        model: Monster,
    },

});

const Loot = model('Loot', lootSchema);

module.exports = { Monster, Loot }