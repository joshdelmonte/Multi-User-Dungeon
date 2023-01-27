const db = require('../config/connection');
const { User, Character } = require('../models');
const userSeeds = require('./userSeeds.json');
const CharacterSeeds = require('./CharacterSeeds.json');

db.once('open', async () => {
  try {
    await Character.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < CharacterSeeds.length; i++) {
      const { _id, CharacterAuthor } = await Character.create(CharacterSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: CharacterAuthor },
        {
          $addToSet: {
            Characters: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
