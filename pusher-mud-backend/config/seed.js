const db = require('./connect');
const { Monster, Loot} = require('../models');

db.once('open', async () => {
  await Monster.deleteMany();

  const monsters = await Monster.insertMany([
    { name: 'Rat', id: 1, hit_points: 10, attack_points: 2, loot: loots[1] },
    { name: 'Goblin', id: 2, hit_points: 20, attack_points: 4, loot: loots[2] },
    { name : 'Bat', id: 3, hit_points: 5, attack_points: 1, loot: loots[3] },
    { name: 'Wolf', id: 4, hit_points: 15, attack_points: 3, loot: loots[4] },
    { name: 'Skeleton', id: 5, hit_points: 25, attack_points: 5, loot: loots[5] },
    { name: 'Slime', id: 6, hit_points: 10, attack_points: 0, loot: loots[6] }
    ]);

    console.log('monsters seeded');

    await Loot.deleteMany();

    const loots = await Loot.insertMany([
        { name: 'Dagger', id: 1, attack_points: 10, monster_origin: monsters[1] },
        { name: 'Sword', id: 2, attack_points: 20, monster_origin: monsters[2] },
        { name: 'Bow', id: 3, attack_points: 30, monster_origin: monsters[3] },
        { name: 'Staff', id: 4, attack_points: 40, monster_origin: monsters[4] },
        { name: 'Kanabo', id: 5, attack_points: 50, monster_origin: monsters[5] },
        { name: 'Health Potion', id: 6, attack_points: 60, monster_origin: monsters[6] }
        
    ]);

    console.log('loot seeded');

    process.exit();
});

