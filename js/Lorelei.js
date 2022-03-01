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
            type: ["WATER", "ICE"],
            weakness: ["FIRE", "ELECTRIC", "GRASS", "ROCK"],
            resist: ["ICE", "WATER"],
            img: "dewgong.png",
            fainted: false,
            poisoned: false,
            paralyzed: false,
            burned: false,
            frozen: 0,
            confused: 0,
            asleep: 0,
            hp: 177,
            totalHP: 177,
            level: "Lv:54",
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
            name: "SLOWBRO",
            type: ["Water", "PSYCHIC"],
            cry: "sound.wav",
            weakness: ["BUG", "DARK", "ELECTRIC", "GHOST", "GRASS"],
            resist: ["FIGHTING", "FIRE", "ICE", "PSYCHIC", "STEEL", "WATER"],
            img: "slowbro.png",
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
            combatLvl: 51,
            attack: 114,
            specialAttack: 109,
            defense: 105,
            specialDefense: 122,
            speed: 102,
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
            name: "CLOYSTER",
            cry: "sound.wav",
            img: "cloyster.png",
            type: ["WATER", "ICE"],
            weakness: ["FIRE", "ELECTRIC", "GRASS", "ROCK"],
            resist: ["ICE", "WATER"],
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
            combatLvl: 51,
            attack: 115,
            specialAttack: 96,
            defense: 122,
            specialDefense: 127,
            speed: 100,
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
        }, {
            name: "LAPRAS",
            cry: "sound.wav",
            img: "laprasFront.png",
            type: ["WATER", "ICE"],
            weakness: ["FIRE", "ELECTRIC", "GRASS", "ROCK"],
            resist: ["ICE", "WATER"],
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
            combatLvl: 51,
            attack: 78,
            specialAttack: 142,
            defense: 66,
            specialDefense: 117,
            speed: 143,
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
        }, {
            name: "JYNX",
            cry: "sound.wav",
            img: "jynx.png",
            type: ["PSYCHIC", "ICE"],
            weakness: ["BUG", "DARK", "FIRE", "GHOST", "ROCK", "STEEL"],
            resist: ["ICE", "PSYCHIC"],
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
            combatLvl: 51,
            attack: 117,
            specialAttack: 96,
            defense: 102,
            specialDefense: 117,
            speed: 82,
            moves: [{
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
            }]
        }]
    }
    choosePokemon() {
        opponentPokemon.src = this.team[this.pokemonChoice].img
        console.log(this.team[0].name, this.team[0].hp)
        enemyHPBar.style.backgroundColor = "green";
        enemyHPBar.style.width = "100%"
        enemyPokeball.classList.remove("hidden")
        msgBoxText.textContent = `Lorelei sent out ${this.team[this.pokemonChoice].name}!`
        setTimeout(() => {
            enemyLevel.textContent = this.team[this.pokemonChoice].level
            enemyName.textContent = this.team[this.pokemonChoice].name
            animateEnemyBall()
            setTimeout(() => {
                ballOpenSound.play()
            }, 500);
            opponent.classList.add("enemyTrainerLeave")
        }, 1000);
        setTimeout(() => {
            enemyPokeball.classList.add("hidden")
            opponentPokemon.classList.remove("eTrainerPokemonFaint")
            setTimeout(() => {
                msgBoxText.textContent = ``
            }, 2000);
            if (afterBattleSwap) {
                setTimeout(() => {
                    msgBoxText.textContent = `What will ${player.team[0].name} do?`
                    combatChoice.classList.remove('hidden')
                }, 1000);
                afterBattleSwap = false

            } else {
                setTimeout(() => {
                    teamScreen.classList.remove('hidden')
                    combatScreen.classList.add("hidden")
                }, 2800);
            }
        }, 1450);
    }
    chooseMove() {
        let index = Math.floor(Math.random() * 4)
        this.team[0].moves[index]
    }
    preChange() {
        if (this.pokemonChoice === 4) {
            combat1Theme.pause()
            endingScreen.style.opacity = "100%"
        } else {
            this.pokemonChoice++
            console.log(this.pokemonChoice)
            this.team[0] = this.team[this.pokemonChoice]
            msgBoxText.textContent = `Lorelei is about to send out ${this.team[this.pokemonChoice].name}, do you want to change POKEMON?`
            //remove hidden on yes or no box
        }
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
        let index = Math.random()
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
            player.attack(this.team[0])
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