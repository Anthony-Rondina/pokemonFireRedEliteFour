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
        this.targetTrainer = Lorelei
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
            cry: "charizardcry.mp3",
            type: ["FIRE", "FLYING"],
            weakness: ["ROCK", "ELECTRIC", "ROCK", "WATER"],
            resist: ["BUG", "GRASS", "BUG", "GRASS", "FAIRY", "FIRE", "FIGHTING", "GROUND", "STEEL",],
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
            level: "Lv:65",
            combatLvl: 65,
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
            cry: "blastoisecry.mp3",
            img: "blastoise.png",
            tinyPic: "blastoise.gif",
            weakness: ["ELECTRIC", "GRASS",],
            resist: ["FIRE", "ICE", "STEEL", "WATER"],
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
            level: "Lv:65",
            combatLvl: 65,
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
            type: ["GRASS", "POISON"],
            cry: "venusaurcry.mp3",
            weakness: ["FIRE", "FLYING", "ICE", "PSYCHIC",],
            resist: ["GRASS", "WATER", "FIGHTING", "FAIRY", "ELECTRIC",],
            img: "venusaur.png",
            tinyPic: "venusaur.gif",
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
            level: "Lv:65",
            combatLvl: 65,
            attack: 116,
            specialAttack: 117,
            defense: 100,
            specialDefense: 107,
            speed: 122,
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
                name: "LEAF BLADE",
                type: "GRASS",
                physical: true,
                special: false,
                status: false,
                pp: 15,
                maxPP: 15,
                power: 85,
                accuracy: 95
            },
            {
                name: "LEAF EDGE",
                type: "GRASS",
                physical: true,
                special: false,
                status: false,
                pp: 15,
                maxPP: 15,
                power: 55,
                accuracy: 95
            },
            {
                name: "VINE WHIP",
                type: "GRASS",
                physical: true,
                special: false,
                status: false,
                pp: 20,
                maxPP: 20,
                power: 55,
                accuracy: 95
            },]
        },
        {
            name: "LAPRAS",
            type: ["WATER", "ICE"],
            cry: "laprascry.mp3",
            weakness: ["FIRE", "FLYING", "ICE", "PSYCHIC",],
            resist: ["GRASS", "WATER", "FIGHTING", "FAIRY", "ELECTRIC",],
            img: "lapras.png",
            tinyPic: "lapras.gif",
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
            level: "Lv:65",
            combatLvl: 65,
            attack: 116,
            specialAttack: 117,
            defense: 100,
            specialDefense: 107,
            speed: 122,
            moves: [{
                name: "ICE BEAM",
                type: "ICE",
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
                name: "ICE SPEAR    ",
                type: "ICE",
                physical: false,
                special: true,
                status: true,
                statusType: "frozen",
                loseTurn: false,
                pp: 15,
                maxPP: 15,
                power: 70,
                accuracy: .75,
            },
            {
                name: "SURF",
                type: "WATER",
                physical: false,
                special: true,
                status: true,
                pp: 5,
                maxPP: 15,
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
                maxPP: 15,
                power: 110,
                accuracy: .75,
            }]
        },
        {
            name: "RHYDON",
            type: ["GROUND", "ROCK"],
            cry: "rhydoncry.mp3",
            weakness: ["FIGHTING", "GROUND", "WATER", "WATER", "GRASS", "GRASS", "ICE",],
            resist: ["ELECTRIC", "FIRE", "FLYING", "NORMAL", "ROCK",],
            img: "rhydon.png",
            tinyPic: "rhydon.gif",
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
            level: "Lv:65",
            combatLvl: 65,
            attack: 114,
            specialAttack: 109,
            defense: 105,
            specialDefense: 122,
            speed: 102,
            moves: [{
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
                name: "SMACK DOWN",
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
                name: "MUD SLAP",
                type: "GROUND",
                physical: false,
                special: true,
                status: true,
                pp: 25,
                maxPP: 15,
                power: 55,
                accuracy: 1,
            },
            {
                name: "BULLDOZE",
                type: "GROUND",
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
            cry: "alakazamcry.mp3",
            img: "alakazam.png",
            tinyPic: "alakazam.gif",
            weakness: ["BUG", "DARK", "GHOST"],
            resist: ["FIGHTING", "PSYCHIC"],
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
            level: "Lv:65",
            combatLvl: 65,
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
                healSound.play()
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
                    healSound.play()
                    pokemon.hp = this.team[swapChoice].totalHP
                    console.log("you are healed!")
                    // playerPercent(pokemon.hp)
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
                    combatChoice.classList.add('hidden')
                    setTimeout(() => {
                        enemyAttack(this.team[0])
                    }, 4000);
                    updateTeam()
                    hpNumbers.textContent = this.team[0].hp
                    hpBar.style.backgroundColor = document.querySelector(`.hp${swapChoice}`).style.backgroundColor
                    hpBar.style.width = document.querySelector(`.hp${swapChoice}`).style.width
                }
                break;
            case "revive":

                if (this.revives === 0) {
                    console.log('none')
                } else if (this.team[swapChoice].hp >= 1) {
                    console.log('your pokemon has not fainted!')
                } else {
                    healSound.play()
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
                        combatChoice.classList.add('hidden')
                        updateTeam()
                        hpBar.style.width = "100%"
                        hpNumbers.textContent = this.team[0].hp
                    }, 2500);
                    setTimeout(() => {
                        enemyAttack(this.team[0])
                    }, 3000);
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
                this.targetTrainer = Bruno
                this.targetPokemon = Bruno.team[0]
                break;
            case "Bruno":
                this.target = "Agatha"
                this.targetTrainer = Agatha
                this.targetPokemon = Agatha.team[0]
                break;
            case "Agatha":
                this.target = "Lance"
                this.targetTrainer = Lance
                this.targetPokemon = Lance.team[0]
                break;
        }
    }
}

//create instance of trainer
player = new Player("Red")


