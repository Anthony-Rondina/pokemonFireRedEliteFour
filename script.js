myPokemonCry = document.querySelector(".pCry")
enemyPokemonCry = document.querySelector(".eCry")

class Player {
    constructor(name) {
        this.name = name;
        this.boy = true
        this.girl = false
        this.img = "img.src"
        this.item = ''
        this.target = "Lorelei"
        this.attackChoice = ''
        this.fullRestore = 10
        this.revives = 10
        this.parHeal = 5
        this.burnHeal = 5
        this.unfreeze = 5
        this.awaken = 5
        this.confuseHeal = 5
        this.antidote = 5
        this.team = [{
            name: "Charizard",
            cry: "sound.wav",
            type: ["fire", "flying"],
            weakness: ["rock", "rock", "water"],
            resist: ["fire"],
            img = "img.src",
            tinyPic = "img.src",
            fainted: false,
            poisoned: false,
            paralyzed: false,
            burned: false,
            frozen: 0,
            confused: 0,
            asleep: 0,
            hp: 156,
            totalHP: 156,
            level: 51,
            attack: 116,
            specialAttack: 117,
            defense: 100,
            specialDefense: 107,
            speed: 122,
            moves: [{
                name: "FlameThrower",
                type: "fire",
                physical: false,
                special: true,
                status: true,
                statusType: "burn",
                pp: 20,
                power: 90,
                accuracy: 1
            },
            {
                name: "Wing Attack",
                type: "flying",
                physical: true,
                special: false,
                status: false,
                pp: 35,
                power: 60,
                accuracy: 1,
            },
            {
                name: "Fire Blast",
                type: "fire",
                physical: false,
                special: true,
                status: true,
                statusType: "burn",
                pp: 5,
                power: 120,
                accuracy: .85,
            },
            {
                name: "Aerial Ace",
                type: "flying",
                physical: false,
                special: true,
                status: false,
                pp: 20,
                power: 60,
                accuracy: 1,
            }]
        },
        {
            name: "Venusaur",
            type: "grass",
            cry: "sound.wav",
            weakness: ["fire"],
            resist: ["grass", "water"],
            img = "img.src",
            tinyPic = "img.src",
            fainted: false,
            poisoned: false,
            paralyzed: false,
            burned: false,
            frozen: 0,
            confused: 0,
            asleep: 0,
            hp: 158,
            totalHP: 158,
            level: 51,
            attack: 114,
            specialAttack: 109,
            defense: 105,
            specialDefense: 122,
            speed: 102,
            moves: [{
                name: "Razor Leaf",
                physical: true,
                special: false,
                status: false,
                pp: 25,
                power: 55,
                accuracy: 95
            },
            {
                name: "poison Powder",
                type: "poison",
                physical: false,
                special: false,
                status: true,
                statusType: "poison",
                pp: 35,
                power: 0,
                accuracy: .75,
            },
            {
                name: "Leech Seed",
                type: "grass",
                physical: false,
                special: false,
                status: true,
                pp: 10,
                power: 0,
                accuracy: .9,
            },
            {
                name: "Vine Whip",
                type: "grass",
                physical: true,
                special: false,
                status: false,
                loseTurn: false,
                pp: 25,
                power: 45,
                accuracy: 1,
            }]
        },
        {
            name: "Blastoise",
            type: "water",
            cry: "sound.wav",
            img = "img.src",
            tinyPic = "img.src",
            fainted: false,
            poisoned: false,
            paralyzed: false,
            burned: false,
            frozen: 0,
            confused: 0,
            asleep: 0,
            hp: 157,
            totalHP: 157,
            level: 51,
            attack: 115,
            specialAttack: 96,
            defense: 122,
            specialDefense: 127,
            speed: 100,
            moves: [{
                name: "Hydro Pump",
                type: "water",
                physical: false,
                special: true,
                status: false,
                pp: 5,
                power: 120,
                accuracy: .8
            },
            {
                name: "Surf",
                type: "water",
                physical: false,
                special: true,
                status: false,
                pp: 15,
                power: 90,
                accuracy: 1,
            },
            {
                name: "Earthquake",
                type: "ground",
                physical: true,
                special: false,
                status: false,
                pp: 10,
                power: 100,
                accuracy: 1,
            },
            {
                name: "Water Gun",
                type: "water",
                physical: false,
                special: true,
                status: false,
                loseTurn: false,
                pp: 25,
                power: 40,
                accuracy: 1,
            }]
        }, {
            name: "Alakazam",
            type: "psychic",
            cry: "sound.wav",
            img = "img.src",
            tinyPic = "img.src",
            fainted: false,
            poisoned: false,
            paralyzed: false,
            burned: false,
            frozen: 0,
            confused: 0,
            asleep: 0,
            hp: 132,
            totalHP: 132,
            level: 51,
            attack: 78,
            specialAttack: 142,
            defense: 66,
            specialDefense: 117,
            speed: 143,
            moves: [{
                name: "Psychic",
                type: "psychic",
                physical: false,
                special: true,
                status: false,
                pp: 10,
                power: 90,
                accuracy: 1
            },
            {
                name: "Psybeam",
                type: "psychic",
                physical: false,
                special: true,
                status: false,
                pp: 20,
                power: 65,
                accuracy: 1,
            },
            {
                name: "Confusion",
                type: "psychic",
                physical: false,
                special: true,
                status: true,
                statusType: "confusion",
                pp: 20,
                power: 50,
                accuracy: 1,
            },
            {
                name: "Recover",
                type: "psychic",
                physical: false,
                special: false,
                status: true,
                loseTurn: false,
                pp: 10,
                power: 0,
                accuracy: 1,
            }]
        }, {
            name: "Lapras",
            type: ["water", "ice"],
            cry: "sound.wav",
            img = "img.src",
            tinyPic = "img.src",
            fainted: false,
            poisoned: false,
            paralyzed: false,
            burned: false,
            frozen: 0,
            confused: 0,
            asleep: 0,
            hp: 209,
            totalHP: 209,
            level: 51,
            attack: 117,
            specialAttack: 96,
            defense: 102,
            specialDefense: 117,
            speed: 82,
            moves: [{
                name: "Ice Beam",
                type: "ice",
                physical: false,
                special: true,
                status: true,
                statusType: "frozen",
                pp: 10,
                power: 90,
                accuracy: 1
            },
            {
                name: "Sing",
                type: "normal",
                physical: false,
                special: false,
                status: true,
                statusType: "sleep",
                pp: 15,
                power: 0,
                accuracy: 1,
            },
            {
                name: "Surf",
                type: "water",
                physical: false,
                special: true,
                status: true,
                pp: 5,
                power: 95,
                accuracy: 1,
            },
            {
                name: "Blizzard",
                type: "ice",
                physical: false,
                special: true,
                status: true,
                statusType: "frozen",
                loseTurn: false,
                pp: 5,
                power: 110,
                accuracy: .75,
            }]
        }]
    }
    chooseItem(evt) {
        switch (evt.target.id) {
            case "antidote":
                this.item = "antidote"
                break;
            case "fullRestore":
                this.item = "fullRestore"
                break;
            case "revive":
                this.item = "revive"
                break;
            case "parHeal":
                this.item = "parHeal"
                break;
            case "burnHeal":
                this.item = "burnHeal"
                break;
            case "unfreeze":
                this.item = "unfreeze"
                break;
            case "awaken":
                this.item = "awaken"
                break;
            case "confuseHeal":
                this.item = "confuseHeal"
                break;
        }
    }
    useItem(item, pokemon) {
        switch (item) {
            case "antidote":
                if (this.antidote === 0) {
                    console.log('none')
                } else {
                    pokemon.poisoned = false
                    console.log("you are no longer poisoned!")
                    this.antidote--
                    //switch to enemy turn
                }
                break;
            case "fullRestore":
                if (this.fullRestore === 0) {
                    console.log('none')
                } else {
                    pokemon.hp = this.team[0].totalHP
                    console.log("you are healed!")
                    this.fullRestore--
                    //switch to enemy turn
                }
                break;
            case "revive":
                if (this.revives === 0) {
                    console.log('none')
                } else {
                    pokemon.fainted = false
                    pokemon.hp = (this.team[0].totalHP / 2)
                    console.log("you are no longer poisoned!")
                    this.revives--
                    //switch to enemy turn
                }
                break;
            case "parHeal":
                if (this.parHeal === 0) {
                    console.log('none')
                } else {
                    pokemon.paralyzed = false
                    console.log("you are healed!")
                    this.parHeal--
                    //switch to enemy turn              
                } break;
            case "burnHeal":
                if (this.burnHeal === 0) {
                    console.log('none')
                } else {
                    pokemon.burned = false
                    console.log("you are healed!")
                    this.burnHeal--
                    //switch to enemy turn
                }
                break;
            case "unfreeze":
                if (this.unfreeze === 0) {
                    console.log('none')
                } else {
                    pokemon.frozen = false
                    console.log("you are healed!")
                    this.unfreeze--
                    //switch to enemy turn
                }
                break;
            case "awaken":
                if (this.awaken === 0) {
                    console.log('none')
                } else {
                    pokemon.asleep = false
                    console.log("you are healed!")
                    this.awaken--
                    //switch to enemy turn
                }
                break;
            case "confuseHeal":
                if (this.confuseHeal === 0) {
                    console.log('none')
                } else {
                    pokemon.confused = 0
                    console.log("you are healed!")
                    this.confuseHeal--
                    //switch to enemy turn
                }
                break;
        }
    }
    preCheckStatus(yourPokemon) {
        //Check if confused
        if (yourPokemon.confused) {
            //hit yourself
            //switch to computer turn
            this.attack(this.attackChoice, enemy.team[0])
        } else if (yourPokemon.asleep > 0) { //check if asleep
            yourPokemon.asleep--
            if (yourPokemon.asleep == 0) {
                console.log(`${this.team[0].name} woke up!`)
                this.attack(this.attackChoice, enemy.team[0])
            } else {
                console.log(`${this.team[0].name} is fast asleep!`)
                //switch to computer turn
            }
        } else if (yourPokemon.frozen > 0) {
            yourPokemon.frozen--
            if (yourPokemon.frozen == 0) {
                console.log(`${this.team[0].name} thawed out!`)
                this.attack(this.attackChoice, enemy.team[0])
            } else {
                console.log(`${this.team[0].name} is frozen solid!`)
                //switch to computer turn
            }
        } else if (yourPokemon.paralyzed) { //check if paralyzed
            //get chance for paralyzed chance
            //switch to computer turn
            this.attack(this.attackChoice, enemy.team[0])
        }
    }
    //method to switch to next elite 4 member when previous is defeated
    attack(chosenAttack, targetPokemon) {
        let attack = 0
        let superEffectiveDamageMultiplyer = 1
        switch (this.target) {
            case "Lorelei":
                targetPokemon = Lorelei.team[0]
                break;
            case "Bruno":
                targetPokemon = Bruno.team[0]
                break;
            case "Agatha":
                targetPokemon = Agatha.team[0]
                break;
            case "Lance":
                targetPokemon = Lance.team[0]
                break;
        }
        if (chosenAttack.power === 0) {
            //use a switch to go through each move
            switch (chosenAttack.name) {
                case "rest":
                    this.team[0].asleep = Math.floor(Math.random() * 3)
                    this.team[0].hp += this.team[0].totalHP
                    //computer turn
                    break;
            }
        }

        //set damage if physical
        if (chosenAttack.physical) {
            // damage = Math.floor((this.team[0].level / 5) + 2 * (this.team[0].moves[0].power * (this.team[0].attack / targetPokemon.defense) / 50)
            //set damage if special
        } else if (chosenAttack.special) {
            // damage = Math.floor((this.team[0].level / 5) + 2 * (this.team[0].moves[0].power * (this.team[0].specialAttack / targetPokemon.specialDefense) / 50)
        }

        //check if move hits
        index = Math.random()
        if (index > chosenAttack.accuracy) {
            //check if move is Same Type Attack Bonus
            if (chosenAttack.type.includes(this.team[0].type)) {
                damage *= 1.5
            }
            //Check if target pokemon is weak or resistant to attack type
            targetPokemon.weakness.forEach((type) => {
                if (targetPokemon.weakness[type].includes(chosenAttack.type)) {
                    superEffectiveDamageMultiplyer += 2
                }
            })
            targetPokemon.resist.forEach((type) => {
                if (targetPokemon.weakness[type].includes(chosenAttack.type)) {
                    superEffectiveDamageMultiplyer /= 2
                }
            })

            //Crit Chance is 6.25
            let critIndex = Math.random()
            if (critIndex > .92) {
                damage *= 2
            }

            //apply super type damage
            if (superEffectiveDamageMultiplyer > 1) {
                damage * superEffectiveDamageMultiplyer
                console.log("It's super effective!")
            } else if (superEffectiveDamageMultiplyer < 1) {
                damage / superEffectiveDamageMultiplyer
                console.log("It's not very effective.")
            }

            //apply damage  
            targetPokemon.hp -= damage
            console.log(damage)

        } else {
            console.log('you missed!')
            //end player turn
        }
    }
    applyStatus(chosenMove) {
        switch (chosenMove.statusType) {
            case "frozen":
                this.target.frozen = true
                break;
            case "confusion":
                this.target.confused = true
                break;
            case "sleep":
                this.target.asleep = true
                break;
            case "poisoned":
                this.target.poisoned = true
                break;
        }
    }
    postCheckYourStatus(yourPokemon) {
        //check your pokemon first
        if (yourPokemon.poisoned) {
            yourPokemon.hp -= (yourPokemon.totalHP * 0.0625) // 1/16th
            //CODE FOR DOM UPDATE
            setTimeout(() => {
                this.postCheckTheirStatus()
            }, 10000);
        } else if (yourPokemon.burned) {
            yourPokemon.hp -= (yourPokemon.totalHP * 0.0625) // 1/16th
            //CODE FOR DOM UPDATE
            setTimeout(() => {
                this.postCheckTheirStatus()
            }, 10000);
        }
    }
    postCheckTheirStatus(targetPokemon) {
        //check target pokemon second
        if (targetPokemon.poisoned) {
            targetPokemon.hp -= (targetPokemon.totalHP * 0.0625) // 1/16th
        } else if (targetPokemon.burned) {
            targetPokemon.hp -= (targetPokemon.totalHP * 0.0625) // 1/16th
            //CODE FOR DOM UPDATE
        }
    }
    changeTarget() {
        switch (this.target) {
            case "Lorelei":
                this.target = "Bruno"
                break;
            case "Bruno":
                this.target = "Agatha"
                break;
            case "Agatha":
                this.target = "Lance"
                break;
        }
    }
}