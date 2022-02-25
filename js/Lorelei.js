class Lorelei {
    constructor() {
        this.name = Lorelei;
        this.pokemonChoice = 0
        this.boy = false
        this.girl = true
        this.changePokemon = 5
        this.defeated = false
        this.img = "elite4trainers/Loreli.png"
        this.target = 'player.team[0]'
        this.damage = 0
        this.attackChoice = ''
        this.fullRestore = 2
        this.team = [{
            name: "DEWGONG",
            cry: "sound.wav",
            type: ["water", "ice"],
            weakness: ["FIRE", "ELECTRIC", "GRASS", "ROCK"],
            resist: ["ICE", "FLYING"],
            img: "charizard.png",
            tinyPic: "img.src",
            fainted: false,
            poisoned: false,
            paralyzed: false,
            burned: false,
            frozen: 0,
            confused: 0,
            asleep: 0,
            hp: 177,
            totalHP: 177,
            level: "54",
            combatLvl: 54,
            attack: 106,
            specialAttack: 87,
            defense: 108,
            specialDefense: 124,
            speed: 97,
            moves: [{
                name: "AURORA BEAM",
                type: "ICE",
                physical: false,
                special: true,
                status: false,
                statusType: "burn",
                pp: 20,
                maxPP: 20,
                power: 65,
                accuracy: 1
            },
            {
                name: "ICE BEAM",
                type: "ICE",
                physical: false,
                special: true,
                status: false,
                pp: 10,
                maxPP: 10,
                power: 90,
                accuracy: 1,
            },
            {
                name: "SURF",
                type: "WATER",
                physical: false,
                special: true,
                status: false,
                pp: 15,
                maxPP: 15,
                power: 90,
                accuracy: 1,
            },
            {
                name: "WATER GUN",
                type: "WATER",
                physical: false,
                special: true,
                status: false,
                loseTurn: false,
                pp: 25,
                maxPP: 25,
                power: 40,
                accuracy: 1,
            }]
        },
        {
            name: "VENUSAUR",
            type: "GRASS",
            cry: "sound.wav",
            weakness: ["fire", "flying", "ice", "psychic",],
            resist: ["grass", "water", "fighting", "fairy", "electric",],
            img: "venusaur.png",
            tinyPic: "img.src",
            fainted: false,
            poisoned: false,
            paralyzed: false,
            burned: false,
            frozen: 0,
            confused: 0,
            asleep: 0,
            hp: 158,
            totalHP: 158,
            level: "Lv51",
            attack: 114,
            specialAttack: 109,
            defense: 105,
            specialDefense: 122,
            speed: 102,
            moves: [{
                name: "RAZOR LEAF",
                type: "GRASS",
                physical: true,
                special: false,
                status: false,
                pp: 25,
                maxPP: 25,
                power: 55,
                accuracy: 95
            },
            {
                name: "POISON POWDER",
                type: "POISON",
                physical: false,
                special: false,
                status: true,
                statusType: "poison",
                pp: 35,
                maxPP: 35,
                power: 0,
                accuracy: .75,
            },
            {
                name: "LEECH SEED",
                type: "GRASS",
                physical: false,
                special: false,
                status: true,
                pp: 10,
                maxPP: 10,
                power: 0,
                accuracy: .9,
            },
            {
                name: "VINE WHIP",
                type: "GRASS",
                physical: true,
                special: false,
                status: false,
                loseTurn: false,
                pp: 25,
                maxPP: 25,
                power: 45,
                accuracy: 1,
            }]
        },
        {
            name: "BLASTOISE",
            type: "WATER",
            cry: "sound.wav",
            img: "blastoise.png",
            tinyPic: "img.src",
            weakness: ["electric", "grass",],
            resist: ["fire", "ice", "steel", "water"],
            fainted: false,
            poisoned: false,
            paralyzed: false,
            burned: false,
            frozen: 0,
            confused: 0,
            asleep: 0,
            hp: 157,
            totalHP: 157,
            level: "Lv51",
            attack: 115,
            specialAttack: 96,
            defense: 122,
            specialDefense: 127,
            speed: 100,
            moves: [{
                name: "HYDRO PUMP",
                type: "WATER",
                physical: false,
                special: true,
                status: false,
                pp: 5,
                maxPP: 5,
                power: 120,
                accuracy: .8
            },
            {
                name: "SURF",
                type: "WATER",
                physical: false,
                special: true,
                status: false,
                pp: 15,
                maxPP: 15,
                power: 90,
                accuracy: 1,
            },
            {
                name: "EARTHQUAKE",
                type: "GROUND",
                physical: true,
                special: false,
                status: false,
                pp: 10,
                maxPP: 10,
                power: 100,
                accuracy: 1,
            },
            {
                name: "WATER GUN",
                type: "WATER",
                physical: false,
                special: true,
                status: false,
                loseTurn: false,
                pp: 25,
                maxPP: 25,
                power: 40,
                accuracy: 1,
            }]
        }, {
            name: "ALAKAZAM",
            type: "PSYCHIC",
            cry: "sound.wav",
            img: "alakazam.png",
            tinyPic: "img.src",
            weakness: ["bug", "dark", "ghost"],
            resist: ["fighting", "psychic"],
            fainted: false,
            poisoned: false,
            paralyzed: false,
            burned: false,
            frozen: 0,
            confused: 0,
            asleep: 0,
            hp: 132,
            totalHP: 132,
            level: "Lv51",
            attack: 78,
            specialAttack: 142,
            defense: 66,
            specialDefense: 117,
            speed: 143,
            moves: [{
                name: "PSYCHIC",
                type: "PSYCHIC",
                physical: false,
                special: true,
                status: false,
                pp: 10,
                maxPP: 10,
                power: 90,
                accuracy: 1
            },
            {
                name: "PSYBEAM",
                type: "PSYCHIC",
                physical: false,
                special: true,
                status: false,
                pp: 20,
                maxPP: 20,
                maxPP: 20,
                power: 65,
                accuracy: 1,
            },
            {
                name: "CONFUSION",
                type: "PSYCHIC",
                physical: false,
                special: true,
                status: true,
                statusType: "confusion",
                pp: 20,
                maxPP: 20,
                power: 50,
                accuracy: 1,
            },
            {
                name: "RECOVER",
                type: "PSYCHIC",
                physical: false,
                special: false,
                status: true,
                loseTurn: false,
                pp: 10,
                maxPP: 10,
                power: 0,
                accuracy: 1,
            }]
        }, {
            name: "LAPRAS",
            type: ["WATER", "ICE"],
            cry: "sound.wav",
            img: "lapras.png",
            tinyPic: "img.src",
            weakness: ["electric", "fighting", "grass", "rock",],
            resist: ["ice", "water"],
            fainted: false,
            poisoned: false,
            paralyzed: false,
            burned: false,
            frozen: 0,
            confused: 0,
            asleep: 0,
            hp: 209,
            totalHP: 209,
            level: "Lv51",
            attack: 117,
            specialAttack: 96,
            defense: 102,
            specialDefense: 117,
            speed: 82,
            moves: [{
                name: "ICE BEAM",
                type: "ICE",
                physical: false,
                special: true,
                status: true,
                statusType: "frozen",
                pp: 10,
                maxPP: 10,
                power: 90,
                accuracy: 1
            },
            {
                name: "SING",
                type: "NORMAL",
                physical: false,
                special: false,
                status: true,
                statusType: "sleep",
                pp: 15,
                maxPP: 15,
                power: 0,
                accuracy: 1,
            },
            {
                name: "SURF",
                type: "WATER",
                physical: false,
                special: true,
                status: true,
                pp: 5,
                maxPP: 5,
                power: 95,
                accuracy: 1,
            },
            {
                name: "BLIZZARD",
                type: "ICE",
                physical: false,
                special: true,
                status: true,
                statusType: "frozen",
                loseTurn: false,
                pp: 5,
                maxPP: 5,
                power: 110,
                accuracy: .75,
            }]
        }, {
            name: "RHYDON",
            type: ["water", "ice"],
            cry: "sound.wav",
            img: "rhydon.png",
            tinyPic: "img.src",
            weakness: ["electric", "fighting", "grass", "rock",],
            resist: ["ice", "water"],
            fainted: false,
            poisoned: false,
            paralyzed: false,
            burned: false,
            frozen: 0,
            confused: 0,
            asleep: 0,
            hp: 209,
            totalHP: 209,
            level: "Lv51",
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
                maxPP: 15,
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
                maxPP: 15,
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
                maxPP: 15,
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
                maxPP: 15,
                power: 110,
                accuracy: .75,
            }]
        }]
    }
    choosePokemon() {
        enemyPokeball.classList.remove("hidden")
        msgBoxText.textContent = `Lorelei sent out ${this.team[this.pokemonChoice].name}!`
        setTimeout(() => {
            enemyLevel.textContent = this.team[this.pokemonChoice].level
            enemyName.textContent = this.team[this.pokemonChoice].name
            animateEnemyBall()
            opponent.classList.add("enemyTrainerLeave")
        }, 1000);
        setTimeout(() => {
            enemyPokeball.classList.add("hidden")
            opponentPokemon.classList.remove("eTrainerPokemonFaint")
            setTimeout(() => {
                msgBoxText.textContent = ``
            }, 2000);
            setTimeout(() => {
                teamScreen.classList.remove('hidden')
                combatScreen.classList.add("hidden")
            }, 2800);
        }, 1450);
    }
    chooseMove() {
        let index = Math.floor(Math.random() * 4)
        this.team[0].moves[index]
    }
    prechange() {
        this.pokemonChoice++
        msgBoxText.textContent = `Lorelei is about to send out ${this.team[this.pokemonChoice].name}, do you want to change POKEMON?`
        //remove hidden on yes or no box
    }

    preCheckStatus(yourPokemon) {
        //Check if confused
        if (yourPokemon.confused) {
            //hit yourself
            this.target.attack(this.team[0])
            this.attack(this.attackChoice, enemy.team[0])
        } else if (yourPokemon.asleep > 0) { //check if asleep
            yourPokemon.asleep--
            if (yourPokemon.asleep == 0) {
                console.log(`${this.team[0].name} woke up!`)
                this.attack(this.attackChoice, enemy.team[0])
            } else {
                console.log(`${this.team[0].name} is fast asleep!`)
                this.target.attack(this.team[0])
            }
        } else if (yourPokemon.frozen > 0) {
            yourPokemon.frozen--
            if (yourPokemon.frozen == 0) {
                console.log(`${this.team[0].name} thawed out!`)
                this.attack(this.attackChoice, enemy.team[0])
            } else {
                console.log(`${this.team[0].name} is frozen solid!`)
                this.target.attack(this.team[0])
            }
        } else if (yourPokemon.paralyzed) { //check if paralyzed
            //get chance for paralyzed chance
            this.target.attack(this.team[0])
            this.attack(this.attackChoice, enemy.team[0])
        }
    }
    speedCheck(playerPokemon, enemyPokemon) {
        if (playerPokemon.speed > enemyPokemon.speed) {
            this.preCheckStatus(this.team[0])
        } else {
            this.opponenet.preCheckStatus(this.targetPokemon)
        }
    }
    //method to switch to next elite 4 member when previous is defeated
    attack(chosenAttack, targetPokemon) {
        let attack = 0
        let superEffectiveDamageMultiplyer = 1

        if (chosenAttack.power === 0) {
            //use a switch to go through each move
            switch (chosenAttack.name) {
                case "rest":
                    this.team[0].asleep = Math.floor(Math.random() * 3)
                    this.team[0].hp += this.team[0].totalHP
                    this.target.attack(this.team[0])
                    break;
            }
        }

        //set damage if move is physical
        if (chosenAttack.physical) {
            this.damage = Math.floor((this.team[0].level / 5) + 2 * this.team[0].moves[0].power * (this.team[0].attack / targetPokemon.defense) / 50 + 2)
            //set damage if move is special
        } else if (chosenAttack.special) {
            this.damage = Math.floor((this.team[0].level / 5) + 2 * this.team[0].moves[0].power * (this.team[0].specialAttack / targetPokemon.specialDefense) / 50 + 2)
        }

        //check if move hits
        index = Math.random()
        if (index > chosenAttack.accuracy) {
            //check if move is Same Type Attack Bonus
            if (chosenAttack.type.includes(this.team[0].type)) {
                this.damage *= 1.5
            }
            //Check if target pokemon is weak or resistant to attack type
            this.targetPokemon.weakness.forEach((type) => {
                if (this.targetPokemon.weakness[type].includes(chosenAttack.type)) {
                    superEffectiveDamageMultiplyer += 2
                }
            })
            this.targetPokemon.resist.forEach((type) => {
                if (this.targetPokemon.resists[type].includes(chosenAttack.type)) {
                    superEffectiveDamageMultiplyer /= 2
                }
            })

            //Crit Chance is 6.25
            let critIndex = Math.random()
            if (critIndex > .92) {
                this.damage *= 2
            }

            //apply super type damage
            if (superEffectiveDamageMultiplyer > 1) {
                this.damage * superEffectiveDamageMultiplyer
                console.log("It's super effective!")
            } else if (superEffectiveDamageMultiplyer < 1) {
                this.damage / superEffectiveDamageMultiplyer
                console.log("It's not very effective.")
            }

            //apply damage  
            this.targetPokemon.hp -= this.damage
            console.log(this.damage)
            //code chosenmove here
            this.applyStatus(chosenAttack)


        } else {
            console.log('you missed!')
            this.target.attack(this.team[0])
        }
    }
    applyStatus(chosenMove) {
        if (chosenAttack.status) {
            switch (chosenMove.statusType) {
                case "frozen":
                    this.targetPokemon.frozen = Math.floor(Math.random() * 3)
                    break;
                case "confusion":
                    this.targetPokemon.confused = Math.floor(Math.random() * 3)
                    break;
                case "sleep":
                    this.targetPokemon.asleep = Math.floor(Math.random() * 3)
                    break;
                case "poisoned":
                    this.targetPokemon.poisoned = true
                    break;
                case "burn":
                    this.targetPokemon.burned = true
                    break;
            }
        }
        this.postCheckTheirStatus(this.targetPokemon)
    }
    postCheckYourStatus(yourPokemon) {
        //check your pokemon first
        if (yourPokemon.poisoned) {
            yourPokemon.hp -= (yourPokemon.totalHP * 0.0625) // 1/16th
            //CODE FOR DOM UPDATE
            setTimeout(() => {
                this.postCheckTheirStatus(this.targetPokemon)
            }, 10000);
        } else if (yourPokemon.burned) {
            yourPokemon.hp -= (yourPokemon.totalHP * 0.0625) // 1/16th
            //CODE FOR DOM UPDATE
            setTimeout(() => {
                this.postCheckTheirStatus(this.targetPokemon)
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
}

Lorelei = new Lorelei()