const User = require("../../../Project_3/classes/User")

class Character extends User {
    constructor(name, userName, id, email, charName, charRace, charClass, abilityScores, equiptment) {
        this.name = name;
        this.userName = userName;
        this.id = id;
        this.email = email;
        this.charName = charName;
        this.charRace = charRace;
        this.charClass = charClass;
        this.abilityScores = abilityScores;
        this.equiptment = equiptment;
    };

    getName() {
        return this.name;
    };
    getUserName() {
        return this.userName;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getCharName() {
        return this.charName;
    };
    getCharRace() {
        return this.charRace;
    };
    getCharClass() {
        return this.charClass;
    };
    getAbilityScore() {
        return this.abilityScores;
    };
    getEquiptment() {
        return this.equiptment;
    }
    
}

module.exports = Character;