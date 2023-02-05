const db = require('./connect');
const { Monster, Loot} = require('../models');

db.once('open', async () => {
  await Monster.deleteMany();

  const monsters = await Monster.insertMany([
    { name: 'Rat', id: 1, hit_points: 10, attack_power: 2},
    { name: 'Goblin', id: 2, hit_points: 20, attack_power: 4},
    { name : 'Bat', id: 3, hit_points: 5, attack_power: 1},
    { name: 'Wolf', id: 4, hit_points: 15, attack_power: 3 },
    { name: 'Skeleton', id: 5, hit_points: 25, attack_power: 5},
    { name: 'Slime', id: 6, hit_points: 5, attack_power: 0}
    ]);

    console.log('monsters seeded');

    await Loot.deleteMany();

    const loots = await Loot.insertMany([
        { name: 'Dagger', id: 1, attack_power: 10},
        { name: 'Sword', id: 2, attack_power: 20},
        { name: 'Bow', id: 3, attack_power: 30},
        { name: 'Staff', id: 4, attack_power: 40},
        { name: 'Kanabo', id: 5, attack_power: 50},
        { name: 'Health Potion', id: 6, attack_power: 60 }
        
    ]);

    console.log('loot seeded');

    process.exit();
});

