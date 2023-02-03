const Monsters = mongoose.model('Monsters', new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength: 2.
    },
    index: {
        type: Number,
        required: true,
        minlength: 2.
    },
    hit_points: {
        type: Number,
        required: true,
        minlength: 2.
    },
    attack_points: {
        type: Number,
        required: true,
        minlength: 2.
    },  
    loot: {
        model: 'Loot',
},
}));

module.exports = Monsters;

