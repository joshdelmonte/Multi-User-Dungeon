const Monster = require('./Monster');
const { Schema } = require('mongoose');

const monsterSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    index: {
        type: String,
        required: true,
        trim: true,
    },
    hit_points: {
        type: Number,
        required: true,
        trim: true,
    },
    attack_points: {
        type: Number,
        required: true,
        trim: true,
    },
    loot: {
        type: String,
        required: true,
        trim: true,
        model: Loot,   
    },
});

const Monster = model('Monster', monsterSchema);

module.exports = { Monster, Loot };