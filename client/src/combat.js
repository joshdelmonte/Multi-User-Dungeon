// Creates two unique characters using the "character" constructor
const character = new Character('Ginger the Barbarian', 30, 75);
const monster = new Monster('skeleton', 2, 19);

// This keeps track of whose turn it is
let characterTurn = true;

character.printStats();
monster.printStats();

// This will alocate the loot the character will receive after defeating the monster (i.e. (rat: dagger, goblin: sword, bat: spear, wolf: staff, skeleton: kanabo) ))
const loot = ['dagger', 'sword', 'spear', 'staff', 'kanabo'];

// if monster = rat {
//     loot = 'dagger';
// } else if monster = goblin {
//     loot = 'sword';
// } else if monster = bat {
//     loot = 'spear';
// } else if monster = wolf {
//     loot = 'staff';
// } else if monster = skeleton {
//     loot = 'kanabo';
// }

// This will create an interval that alternates turns for the character and the monster


const turnInterval = setInterval(() => {
  // If either character is not alive, end the game
  if (!character.isAlive() || !monster.isAlive()) {
    clearInterval(turnInterval);
    console.log('Game over!'||'You died' ||'The purple stops raining...' ||'Do better <insert user name>'||'Your mom plays better than you');
  } else if (characterTurn) {
    character.attack(monster);
    monster.printStats();
  } else {
    monster.attack(character);
    character.printStats();
  }

  // Switch turns
  characterTurn = !characterTurn;
}, 2000);

// This is the constructor for the character
function Character(name, strength, hitpoints) {
  this.name = name;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

// This is the constructor for the monster
function Monster(name, strength, hitpoints) {
    this.name = name;
    this.strength = strength;
    this.hitpoints = hitpoints;
    }

// This is the prototype for the character
Character.prototype.printStats = function() {
  console.log(`Name: ${this.name} \nStrength: ${this.strength} \nHitPoints: ${this.hitpoints}`);
  console.log("------------");
}

// This is the prototype for the monster
Monster.prototype.printStats = function() {
    console.log(`Name: ${this.name} \nStrength: ${this.strength} \nHitPoints: ${this.hitpoints}`);
    console.log("------------");
  }

// This is the prototype for the character
Character.prototype.isAlive = function() {
    if (this.hitpoints > 0) {
        console.log(`${this.name} is still alive!`);
        return true;
    }
    console.log(`${this.name} has died!`);
    return false;
    }

// This is the prototype for the monster
Monster.prototype.isAlive = function() {
    if (this.hitpoints > 0) {
        console.log(`${this.name} is still alive!`);
        return true;
    }
    console.log(`${this.name} has died!`);
    return false;
    }

// This is the prototype for the character
Character.prototype.attack = function(opponent) {
    opponent.hitpoints -= this.strength;
    console.log(`${this.name} attacked ${opponent.name}!!`);
    }

// This is the prototype for the monster
Monster.prototype.attack = function(opponent) {
    opponent.hitpoints -= this.strength;
    console.log(`${this.name} attacked ${opponent.name}!!`);
    }

// This is the prototype for the character
// Character.prototype.levelUp = function() {
//     this.strength += 5;
//     this.hitpoints += 25;
//     }


// This is the prototype for the character

Character.prototype.heal = function() {
    this.hitpoints += 10;
    }

// This is the prototype for the character to drop loot that was specified in the constructor which would be on line 10
Character.prototype.loot = function() {
    this.loot = loot;
    }

// This is the prototype for the monster to drop loot that was specified in the constructor which would be on line 10