const Loot = mongoose.model('Loot', new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
    attack_power: {
        type: Number,
        required: true,
    },
    monster_origin: {
        type: String,
        required: true,
        model: 'Monsters',
    },
}));
