// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack () {
        return this.strength;
    }
    receiveDamage(dano) {
        this.health = this.health - dano;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name;
        this.health =health;
        this.strength = strength;
    }
    receiveDamage(dano) {
        this.health = this.health - dano;
        if ( this.health <= 0 ) {
            return this.name + " has died in act of combat";            
        } else {
            return this.name + " has received " + dano + " points of damage";
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super (health, strength);
        this.health =health;
        this.strength = strength;
    }
    receiveDamage(dano) {
        this.health = this.health - dano;
        if ( this.health <= 0 ) {
            return "A Saxon has died in combat";            
        } else {
            return "A Saxon has received " + dano + " points of damage";
        }
    }
}

// War
class War {

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(objetoviking) { 
        this.vikingArmy.push(objetoviking);
    }
    
    addSaxon(objetosaxon) { 
        this.saxonArmy.push(objetosaxon);
    }

    vikingAttack() { 
        let sorte = Math.floor(Math.random()*this.vikingArmy.length);
        let azar  = Math.floor(Math.random()*this.saxonArmy.length);
        let estrago = this.saxonArmy[azar].receiveDamage(this.vikingArmy[sorte].strength);
        this.saxonArmy.forEach ( (current, index, array) => {
            if ( current.health <= 0 ) {
                array.splice(index, index + 1);
            }
        })
        return estrago;
    }

    saxonAttack() {       
        let sorte  = Math.floor(Math.random()*this.saxonArmy.length);
        let azar  = Math.floor(Math.random()*this.vikingArmy.length);
        let estrago = this.vikingArmy[azar].receiveDamage(this.saxonArmy[sorte].strength);        
        this.vikingArmy.forEach ( (current, index, array) => {
            if ( current.health <= 0 ) {
                array.splice(index, index + 1);
            }
        })
        return estrago;
    }

    showStatus() {
        if ( this.vikingArmy.length == 0 ) {
            return "Saxons have fought for their lives and survived another day...";
        }
        if ( this.saxonArmy.length == 0 ) {
            return "Vikings have won the war of the century!";
        }
        if ( this.saxonArmy.length > 0 || this.vikingArmy.length > 0 ) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }

}
