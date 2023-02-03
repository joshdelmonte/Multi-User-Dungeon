const db = require('./connect');
const { Monster, Loot} = require('../models');

db.once('open', async () => {
  await Monster.deleteMany();

  const monsters = await Monster.insertMany([
    { name: 'Rat', id: 1, hit_points: 10, attack_points: 2, loot: [1] },
    { name: 'Goblin', id: 2, hit_points: 20, attack_points: 4, loot: [2] },
    { name : 'Bat', id: 3, hit_points: 5, attack_points: 1, loot: [3] },
    { name: 'Wolf', id: 4, hit_points: 15, attack_points: 3, loot: [4] },
    { name: 'Skeleton', id: 5, hit_points: 25, attack_points: 5, loot: [5] },
    { name: 'Slime', id: 6, hit_points: 30, attack_points: 6, loot: [6] }
    ]);

    console.log('monsters seeded');

    await Loot.deleteMany();

    const loots = await Loot.insertMany([
        { name: 'Dagger', id: 1, attack_points: 10, monster_origin: [1] },
        { name: 'Sword', id: 2, attack_points: 20, monster_origin: [2] },
        { name: 'Bow', id: 3, attack_points: 30, monster_origin: [3] },
        { name: 'Staff', id: 4, attack_points: 40, monster_origin: [4] },
        { name: 'Kanabo', id: 5, attack_points: 50, monster_origin: [5] },
        { name: 'Health Potion', id: 6, attack_points: 60, monster_origin: [6] }
        
    ]);

    console.log('loot seeded');

    process.exit();
});

