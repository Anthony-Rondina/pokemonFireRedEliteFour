class Player {
    constructor(name) {
        this.name = name;
        this.boy = true
        this.girl = false
        this.img = "charizard.png"
        this.item = ''
        this.chosenAttack = ''
        this.target = "Lorelei"
        this.damage = 0
        this.targetPokemon = Lorelei.team[0]
        this.opponenet = "Lorelei"
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
            name: "CHARIZARD",
            cry: "sound.wav",
            type: ["fire", "flying"],
            weakness: ["rock", "electric", "rock", "water"],
            resist: ["bug", "grass", "bug", "grass", "fairy", "fire", "fighting", "ground", "steel",],
            img: "charizard.png",
            tinyPic: "charizard.gif",
            fainted: false,
            inCombat: false,
            poisoned: false,
            paralyzed: false,
            burned: false,
            frozen: 0,
            confused: 0,
            asleep: 0,
            hp: 156,
            totalHP: 156,
            level: "Lv:51",
            combatLvl: 60,
            attack: 116,
            specialAttack: 117,
            defense: 100,
            specialDefense: 107,
            speed: 122,
            moves: [{
                name: "FLAMETHROWER",
                type: "FIRE",
                physical: false,
                special: true,
                status: true,
                statusType: "burn",
                pp: 20,
                maxPP: 20,
                power: 90,
                accuracy: 1
            },
            {
                name: "WING ATTACK",
                type: "FLYING",
                physical: true,
                special: false,
                status: false,
                pp: 35,
                maxPP: 35,
                power: 60,
                accuracy: 1,
            },
            {
                name: "FIRE BLAST",
                type: "FIRE",
                physical: false,
                special: true,
                status: true,
                statusType: "burn",
                pp: 5,
                maxPP: 5,
                power: 120,
                accuracy: .85,
            },
            {
                name: "AERIAL ACE",
                type: "FLYING",
                physical: false,
                special: true,
                status: false,
                pp: 20,
                maxPP: 20,
                power: 60,
                accuracy: 1,
            }]
        },
        {
            name: "BLASTOISE",
            type: "WATER",
            cry: "sound.wav",
            img: "blastoise.png",
            tinyPic: "blastoise.gif",
            weakness: ["electric", "grass",],
            resist: ["fire", "ice", "steel", "water"],
            fainted: false,
            poisoned: false,
            inCombat: false,
            paralyzed: false,
            burned: false,
            frozen: 0,
            confused: 0,
            asleep: 0,
            hp: 157,
            totalHP: 157,
            level: "Lv:51",
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
        },
        {
            name: "VENUSAUR",
            type: "GRASS",
            cry: "sound.wav",
            weakness: ["fire", "flying", "ice", "psychic",],
            resist: ["grass", "water", "fighting", "fairy", "electric",],
            img: "venusaur.png",
            tinyPic: "venusaur.gif",
            fainted: false,
            poisoned: false,
            inCombat: false,
            paralyzed: false,
            burned: false,
            frozen: 0,
            confused: 0,
            asleep: 0,
            hp: 158,
            totalHP: 158,
            level: "Lv:51",
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
            name: "LAPRAS",
            type: ["WATER", "ICE"],
            cry: "sound.wav",
            img: "lapras.png",
            tinyPic: "lapras.gif",
            weakness: ["electric", "fighting", "grass", "rock",],
            resist: ["ice", "water"],
            fainted: false,
            poisoned: false,
            inCombat: false,
            paralyzed: false,
            burned: false,
            frozen: 0,
            confused: 0,
            asleep: 0,
            hp: 209,
            totalHP: 209,
            level: "Lv:51",
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
            tinyPic: "rhydon.gif",
            weakness: ["electric", "fighting", "grass", "rock",],
            resist: ["ice", "water"],
            fainted: false,
            poisoned: false,
            inCombat: false,
            paralyzed: false,
            burned: false,
            frozen: 0,
            confused: 0,
            asleep: 0,
            hp: 209,
            totalHP: 209,
            level: "Lv:51",
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
        },
        {
            name: "ALAKAZAM",
            type: "PSYCHIC",
            cry: "sound.wav",
            img: "alakazam.png",
            tinyPic: "alakazam.gif",
            weakness: ["bug", "dark", "ghost"],
            resist: ["fighting", "psychic"],
            fainted: false,
            poisoned: false,
            inCombat: false,
            paralyzed: false,
            burned: false,
            frozen: 0,
            confused: 0,
            asleep: 0,
            hp: 132,
            totalHP: 132,
            level: "Lv:51",
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
        bagScreen.classList.add('hidden')
        teamScreen.classList.remove('hidden')
    }
    useItem(item, pokemon) {
        switch (item) {
            case "antidote":
                if (this.antidote === 0) {
                    console.log('none')
                } else {
                    pokemon.poisoned = false
                    updateTeam()
                    console.log("you are no longer poisoned!")
                    this.antidote--
                    this.target.attack(this.team[0])
                }
                break;
            case "fullRestore":
                if (this.fullRestore === 0) {
                    console.log('none')
                } else if (pokemon.hp === this.team[swapChoice].totalHP) {
                    console.log('you are already full HP')
                } else {
                    pokemon.hp = this.team[swapChoice].totalHP
                    console.log("you are healed!")
                    playerPercent(pokemon.hp)
                    this.fullRestore--
                    fullRestoreButton.textContent = `Full Restore x0${this.fullRestore}`
                    usingItem = false
                    updateTeam()
                    hpBar.style.backgroundColor = "green";
                    hpBar.style.width = "100%"
                    hpNumbers.textContent = pokemon.hp
                    console.log(pokemon.hp)
                    setTimeout(() => {
                        teamScreen.classList.add('hidden')
                        combatScreen.classList.remove('hidden')
                    }, 3000);
                    this.target.attack(this.team[0])
                }
                break;
            case "revive":
                if (this.revives === 0) {
                    console.log('none')
                } else if (this.team[swapChoice].hp >= 1) {
                    console.log('your pokemon has not fainted!')
                } else {
                    pokemon.fainted = false
                    pokemon.hp = (this.team[swapChoice].totalHP / 2)
                    console.log("you are no longer poisoned!")
                    playerPercent(pokemon.hp)
                    this.revives--
                    reviveButton.textContent = `Revives x0${this.revives}`
                    usingItem = false
                    if (pokemon.hp >= (this.team[swapChoice].totalHP / 2)) {
                        hpBar.style.backgroundColor = "green";
                        console.log('picked green')
                        document.querySelector(`.hp${(swapChoice + 1)}`).style.backgroundColor = "green";
                    } else {
                        console.log('picked orange')
                        hpBar.style.backgroundColor = "darkorange";
                        document.querySelector(`.hp${(swapChoice + 1)}`).style.backgroundColor = "darkorange";
                    }
                    console.log(pokemon.hp, (this.team[swapChoice].totalHP / 2))
                    hpBar.style.width = "50%"
                    hpNumbers.textContent = pokemon.hp
                    console.log(pokemon.hp)
                    updateTeam()
                    setTimeout(() => {
                        teamScreen.classList.add('hidden')
                        combatScreen.classList.remove('hidden')
                    }, 3000);
                    this.target.attack(this.team[0])
                }
                break;
            case "parHeal":
                if (this.parHeal === 0) {
                    console.log('none')
                } else {
                    pokemon.paralyzed = false
                    console.log("you are healed!")
                    this.parHeal--
                    updateTeam()
                    this.target.attack(this.team[0])
                } break;
            case "burnHeal":
                if (this.burnHeal === 0) {
                    console.log('none')
                } else {
                    pokemon.burned = false
                    console.log("you are healed!")
                    this.burnHeal--
                    updateTeam()
                    this.target.attack(this.team[0])
                }
                break;
            case "unfreeze":
                if (this.unfreeze === 0) {
                    console.log('none')
                } else {
                    pokemon.frozen = false
                    console.log("you are healed!")
                    this.unfreeze--
                    updateTeam()
                    this.target.attack(this.team[0])
                }
                break;
            case "awaken":
                if (this.awaken === 0) {
                    console.log('none')
                } else {
                    pokemon.asleep = false
                    console.log("you are healed!")
                    this.awaken--
                    updateTeam()
                    this.target.attack(this.team[0])
                }
                break;
            case "confuseHeal":
                if (this.confuseHeal === 0) {
                    console.log('none')
                } else {
                    pokemon.confused = 0
                    console.log("you are healed!")
                    this.confuseHeal--
                    updateTeam()
                    this.target.attack(this.team[0])
                }
                break;
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
        console.log(chosenAttack.name)
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
            console.log('phsyical')
            // this.damage += Math.floor((this.team[0].combatLvl / 5) + 2 * this.team[0].moves[0].power * (this.team[0].attack / targetPokemon.defense) / 50 + 2)
            this.damage += Math.floor((((((this.team[0].combatLvl / 5) + 2) * (this.team[0].attack / targetPokemon.defense) * (chosenAttack.power) + 2) / 50) + 2));
            //set damage if move is special
        } else if (chosenAttack.special) {
            console.log('Specials')
            // console.log('special')
            // this.damage += Math.floor((this.team[0].combatLvl / 5) + 2 * this.team[0].moves[0].power * (this.team[0].specialAttack / targetPokemon.specialDefense) / 50 + 2)
            this.damage += Math.floor((((((this.team[0].combatLvl / 5) + 2) * (this.team[0].specialAttack / targetPokemon.specialDefense) * (chosenAttack.power) + 2) / 50) + 2));
            // console.log('damage is', this.damage)
        }
        console.log('raw damage', this.damage)

        //check if move hits
        let index = Math.random()
        if (index < chosenAttack.accuracy) {
            //check if move is Same Type Attack Bonus
            if (chosenAttack.type.includes(this.team[0].type)) {
                this.damage *= 1.5
            }
            //Check if target pokemon is weak or resistant to attack type
            targetPokemon.weakness.forEach((typing) => {
                if (typing == chosenAttack.type) {
                    superEffectiveDamageMultiplyer += 1
                }
            })
            targetPokemon.resist.forEach((typing) => {
                if (typing === chosenAttack.type) {
                    superEffectiveDamageMultiplyer -= .5
                }
            })

            //Crit Chance is 6.25
            let critIndex = Math.random()
            if (critIndex > .92) {
                console.log('CRIT!')
                this.damage *= 2
            }
            console.log('multipler is at', superEffectiveDamageMultiplyer)
            //apply super type damage
            if (superEffectiveDamageMultiplyer > 1) {
                console.log('greater')
                this.damage *= superEffectiveDamageMultiplyer
                console.log("It's super effective!")
            } else if (superEffectiveDamageMultiplyer < 1) {
                this.damage *= superEffectiveDamageMultiplyer
                console.log("It's not very effective.")
            }
            //apply damage  
            console.log('damage is', this.damage)
            targetPokemon.hp = Math.floor(targetPokemon.hp - this.damage)
            if (targetPokemon.hp <= 0) {
                targetPokemon.hp = 0
            }
            animateEnemyHP()
            console.log('hp now', targetPokemon.hp)
            // this.applyStatus(chosenAttack)
            this.damage = 0

        } else {
            console.log('you missed!')
            this.damage = 0
            // this.target.attack(this.team[0])
        }
    }
    applyStatus(chosenMove) {
        if (chosenMove.status) {
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
    changeTarget() {
        switch (this.target) {
            case "Lorelei":
                this.target = "Bruno"
                this.targetPokemon = Bruno.team[0]
                break;
            case "Bruno":
                this.target = "Agatha"
                this.targetPokemon = Agatha.team[0]
                break;
            case "Agatha":
                this.target = "Lance"
                this.targetPokemon = Lance.team[0]
                break;
        }
    }
}

//create instance of trainer
player = new Player("Red")


