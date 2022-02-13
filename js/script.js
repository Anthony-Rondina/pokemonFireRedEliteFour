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
const buttonB = document.querySelector('.buttonB')
const hpBar = document.querySelector('.playerHPanimated')
const hpNumbers = document.querySelector('.inputHPNumbers')
const currentPokemon = document.querySelector('.pokemon')
const maxHP = document.querySelector('.maxHP')
const trainer = document.querySelector('.trainer')
const pokeball = document.querySelector('.pokeball')
const startButton = document.querySelector('.start')
const welcomeScreen = document.querySelector('.welcome')
const combatScreen = document.querySelector('.combat')

if (player.boy) {
    trainer.src = "/trainers/maleTrainer1.png"
} else {
    trainer.src = "/trainers/femaleTrainer1.png"
}

const swapPokemon = () => {
    let swap = {}
    let replace = {}
    let choice = Math.floor(Math.random() * 6)
    swap = player.team[0]
    replace = player.team[choice]
    player.team[0] = replace
    player.team[choice] = swap
    moveTrainer()
    hpNumbers.textContent = player.team[0].hp
    maxHP.textContent = player.team[0].totalHP
    pokemonName.textContent = player.team[0].name
    pokemonLevel.textContent = player.team[0].level
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

const moveTrainer = () => {
    setTimeout(() => {
        trainer.classList.add('trainerThrow')
    }, 650);
    animateThrow()
    setTimeout(() => {
        animateBall()
    }, 800);
    setTimeout(() => {
        pokemonImage.classList.remove('faint')
        pokemonImage.src = player.team[0].img
    }, 900);
}
const animateBall = () => {
    pokeball.classList.remove('pokeballBlank')
    setTimeout(() => {
        pokeball.classList.add('pokeballBlank')

    }, 500);
}
const animateThrow = () => {
    msgBoxText.textContent = `Go ${player.team[0].name}!`
    setTimeout(() => {
        msgBoxText.textContent = `What will ${player.team[0].name} do?`
        setTimeout(() => {
            combatChoice.classList.remove('hidden')
        }, 800);
    }, 2800);
    if (player.boy) {
        trainer.src = "/trainers/maleTrainer1.png"
        setTimeout(() => {
            trainer.src = "/trainers/maleTrainer2.png"
        }, 200);
        setTimeout(() => {
            trainer.src = "/trainers/maleTrainer3.png"
        }, 400);
        setTimeout(() => {
            trainer.src = "/trainers/maleTrainer4.png"
        }, 500);
        setTimeout(() => {
            trainer.src = "/trainers/maleTrainer5.png"
        }, 600);
        setTimeout(() => {
            trainer.src = "/trainers/maleTrainer1.png"
        }, 2000);
    } else {
        trainer.src = "/trainers/femaleTrainer1.png"
        setTimeout(() => {
            trainer.src = "/trainers/femaleTrainer2.png"
        }, 200);
        setTimeout(() => {
            trainer.src = "/trainers/femaleTrainer3.png"
        }, 400);
        setTimeout(() => {
            trainer.src = "/trainers/femaleTrainer4.png"
        }, 500);
        setTimeout(() => {
            trainer.src = "/trainers/femaleTrainer5.png"
        }, 600);
        setTimeout(() => {
            trainer.src = "/trainers/femaleTrainer1.png"
        }, 2000);
    }
}

let intro = true
if (intro) {
    intro = false
    startButton.addEventListener('click', (evt) => {
        welcomeScreen.classList.add('hidden')
        combatScreen.classList.remove('hidden')
        setTimeout(() => {
            swapPokemon()
        }, 1000);
    })
} else {
    start.onclick = cheatCode
}
buttonA.onclick = playerPercent
pokemonButton.onclick = swapPokemon
buttonB.onclick = swapPokemon
