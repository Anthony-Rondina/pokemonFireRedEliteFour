const myPokemonCry = document.querySelector(".pCry")
const pokemonName = document.querySelector('.myName')
const pokemonLevel = document.querySelector('.myLvl')
const enemyPokemonCry = document.querySelector(".eCry")
const fightButton = document.querySelector(".fight")
const bagButton = document.querySelector(".bag")
const pokemonButton = document.querySelector(".pkmn")
const runButton = document.querySelector(".run")
const moveBar = document.querySelector('.controlBar')
const combatChoice = document.querySelector('.combatChoice')
const mainMessageBox = document.querySelector('.mainMessageBox')
const moveOneButton = document.querySelector('.mv1')
const moveTwoButton = document.querySelector('.mv2')
const moveThreeButton = document.querySelector('.mv3')
const moveFourButton = document.querySelector('.mv4')
const movesButtons = document.querySelectorAll(".moves")
const choiceButtons = document.querySelectorAll('.choiceMoves')
const ppNumber = document.querySelector('.ppCount')
const currentPP = document.querySelector('.currentPP')
const maxPP = document.querySelector('.maxPP')
const typeInfo = document.querySelector('.moveType')
const menuButtonDiv = document.querySelector('.menuButtonDiv')
const menuButton = document.querySelector('.menuButton')
const msgBoxText = document.querySelector('.msgBoxText')
const pokemonImage = document.querySelector('.pokemon')
const buttonA = document.querySelector('.buttonA')
const hpBar = document.querySelector('.playerHPanimated')
const hpNumbers = document.querySelector('.inputHPNumbers')
const currentPokemon = document.querySelector('.pokemon')
const maxHP = document.querySelector('.maxHP')

class Player {
    constructor(name) {
        this.name = name;
        this.boy = true
        this.girl = false
        this.img = "charizard.png"
        this.item = ''
        this.target = "Lorelei"
        this.damage = 0
        this.targetPokemon = 0
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
            tinyPic: "img.src",
            fainted: false,
            poisoned: false,
            paralyzed: false,
            burned: false,
            frozen: 0,
            confused: 0,
            asleep: 0,
            hp: 156,
            totalHP: 156,
            level: "Lv51",
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
                    this.target.attack(this.team[0])
                }
                break;
            case "fullRestore":
                if (this.fullRestore === 0) {
                    console.log('none')
                } else if (pokemon.hp === this.team[0].totalHP) {
                    console.log('you are already full HP')
                } else {
                    pokemon.hp = this.team[0].totalHP
                    console.log("you are healed!")
                    playerPercent(pokemon.hp, this.team[0].totalHP)
                    this.fullRestore--
                    this.target.attack(this.team[0])
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
                    this.target.attack(this.team[0])
                } break;
            case "burnHeal":
                if (this.burnHeal === 0) {
                    console.log('none')
                } else {
                    pokemon.burned = false
                    console.log("you are healed!")
                    this.burnHeal--
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
player = new Player("Ant")

const swapPokemon = () => {
    pokemonImage.classList.add('faint')
    setTimeout(() => {
        pokemonImage.classList.remove('faint')
        pokemonImage.src = player.team[0].img
    }, 1000);
    let swap = {}
    let replace = {}
    let choice = Math.floor(Math.random() * 6)
    swap = player.team[0]
    replace = player.team[choice]
    player.team[0] = replace
    player.team[choice] = swap
    hpNumbers.textContent = player.team[0].hp
    maxHP.textContent = player.team[0].totalHP
    pokemonName.textContent = player.team[0].name
    pokemonLevel.textContent = player.team[0].level
    msgBoxText.textContent = `What will ${player.team[0].name} do?`
}

let codeTime = true
let codeCheck = 0
const cheatCode = (evt) => {
    if (codeTime) {
        switch (codeCheck) {
            case 0:
                if (evt.textContent === "u") {
                    codeCheck++
                    //update lock on DOM
                } else {
                    //update lock on DOM
                    codeCheck = 0
                }
                break;
            case 1:
                if (evt.textContent === "u") {
                    codeCheck++
                    //update lock on DOM
                } else {
                    //update lock on DOM
                    codeCheck = 0
                }
                break;
            case 2:
                if (evt.textContent === "d") {
                    codeCheck++
                    //update lock on DOM
                } else {
                    //update lock on DOM
                    codeCheck = 0
                }
                break;
            case 3:
                if (evt.textContent === "d") {
                    codeCheck++
                    //update lock on DOM
                } else {
                    //update lock on DOM
                    codeCheck = 0
                }
                break;
            case 4:
                if (evt.textContent === "l") {
                    codeCheck++
                    //update lock on DOM
                } else {
                    //update lock on DOM
                    codeCheck = 0
                }
                break;
            case 5:
                if (evt.textContent === "r") {
                    codeCheck++
                    //update lock on DOM
                } else {
                    //update lock on DOM
                    codeCheck = 0
                }
                break;
            case 6:
                if (evt.textContent === "l") {
                    codeCheck++
                    //update lock on DOM
                } else {
                    //update lock on DOM
                    codeCheck = 0
                }
                break;
            case 7:
                if (evt.textContent === "r") {
                    codeCheck++
                    //update lock on DOM
                } else {
                    //update lock on DOM
                    codeCheck = 0
                }
                break;
            case 8:
                if (evt.textContent === "b") {
                    codeCheck++
                    //update lock on DOM
                } else {
                    //update lock on DOM
                    codeCheck = 0
                }
                break;
            case 9:
                if (evt.textContent === "a") {
                    codeCheck++
                    //update lock on DOM
                } else {
                    //update lock on DOM
                    codeCheck = 0
                }
                break;
            case 10:
                if (evt.textContent === "s") {
                    // specialUnlock()
                    //update lock on DOM
                } else {
                    //update lock on DOM
                    codeCheck = 0
                }
                break;
        }
    } else {
        console.log("must restart game to enter a code!")
        return
    }
}


const animateNumbers = (start, end, duration) => {
    if (start === end) return;
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let timer = setInterval(function () {
        current += increment;
        hpNumbers.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}
hpNumbers.textContent = player.team[0].hp
maxHP.textContent = player.team[0].totalHP



const playerPercent = (endPoint) => {
    let start = player.team[0].hp
    player.team[0].hp = Math.floor(Math.random() * 100)
    let end = player.team[0].hp
    damage = Math.floor((player.team[0].hp / player.team[0].totalHP) * 100)
    currentPokemon.classList.add("pokemonHit")
    setTimeout(() => {
        currentPokemon.classList.remove("pokemonHit")
    }, 750);
    setTimeout(() => {
        if (damage <= 50 && damage >= 21) {
            hpBar.style.backgroundColor = "darkorange";
        } else if (damage <= 20) {
            hpBar.style.backgroundColor = "darkred";
        } else {
            hpBar.style.backgroundColor = "green";
        }
        hpBar.style.width = damage + "%"
        animateNumbers(start, end, 1500);
    }, 1000);
}
const playerFaint = () => {
    setTimeout(() => {
        currentPokemon.classList.add("faint")
    }, 1500);
}
const fightMenu = () => {
    moveBar.classList.remove("hidden")
    combatChoice.classList.add('hidden')
    mainMessageBox.classList.add('hidden')
    moveOneButton.textContent = player.team[0].moves[0].name
    moveTwoButton.textContent = player.team[0].moves[1].name
    moveThreeButton.textContent = player.team[0].moves[2].name
    moveFourButton.textContent = player.team[0].moves[3].name
}


choiceButtons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
        let after = button.textContent
        button.textContent = `> ${after}`
    })
})
choiceButtons.forEach((button) => {
    button.addEventListener('mouseout', () => {
        let after = button.textContent
        button.textContent = after.substring(2)
    })
})

movesButtons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
        switch (button.id) {
            case "mv1":
                button.textContent = `> ${player.team[0].moves[0].name}`
                currentPP.textContent = `${player.team[0].moves[0].pp}`
                maxPP.textContent = `${player.team[0].moves[0].maxPP}`
                typeInfo.textContent = `${player.team[0].moves[0].type}`
                break;
            case "mv2":
                button.textContent = `> ${player.team[0].moves[1].name}`
                currentPP.textContent = `${player.team[0].moves[1].pp}`
                maxPP.textContent = `${player.team[0].moves[1].maxPP}`
                typeInfo.textContent = `${player.team[0].moves[1].type}`
                break;
            case "mv3":
                button.textContent = `> ${player.team[0].moves[2].name}`
                currentPP.textContent = `${player.team[0].moves[2].pp}`
                maxPP.textContent = `${player.team[0].moves[2].maxPP}`
                typeInfo.textContent = `${player.team[0].moves[2].type}`
                break;
            case "mv4":
                button.textContent = `> ${player.team[0].moves[3].name}`
                currentPP.textContent = `${player.team[0].moves[3].pp}`
                maxPP.textContent = `${player.team[0].moves[3].maxPP}`
                typeInfo.textContent = `${player.team[0].moves[3].type}`
                break;
        }
    })
})
movesButtons.forEach((button) => {
    button.addEventListener('mouseout', () => {
        let after = button.textContent
        button.textContent = after.substring(2)
    })
})

menuButton.addEventListener('click', (evt) => {
    moveBar.classList.add("hidden")
    combatChoice.classList.remove('hidden')
    mainMessageBox.classList.remove('hidden')
    menuButtonDiv.classList.add('hidden')
})
runButton.addEventListener('click', (evt) => {
    msgBoxText.textContent = "Can't Escape!"
    setTimeout(() => {
        msgBoxText.textContent = `What will ${player.team[0].name} do?`
    }, 1500);
})

fightButton.addEventListener('click', (evt) => {
    fightMenu()
    menuButtonDiv.classList.remove('hidden')
})
buttonA.onclick = playerPercent
pokemonButton.onclick = swapPokemon
