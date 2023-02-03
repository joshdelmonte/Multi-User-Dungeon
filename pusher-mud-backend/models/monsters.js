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
async function syncData() {
    for (let monsterData of seedData) {
      const monster = new Monster(monsterData);
      await monster.save();
    }
    console.log('Dungeon synced successfully!');
  }
  
  syncData();
//   This code connects to the MongoDB database at mongodb://localhost:27017/your_db and creates a new instance of the Monster model for each piece of data in monsterData. The save method is called on each instance, which saves it to the database.
  

module.exports = { Monster, Loot };