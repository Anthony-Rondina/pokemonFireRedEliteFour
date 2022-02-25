let myPokemonCry = document.querySelector(".pCry")
let pokemonName = document.querySelector('.myName')
const pokemonLevel = document.querySelector('.myLvl')
let enemyPokemonCry = document.querySelector(".eCry")
const fightButton = document.querySelector(".fight")
const opponentPokemon = document.querySelector(".eTrainerPokemon")
const enemyLevel = document.querySelector(".enemyLvl")
const enemyPokeball = document.querySelector(".epokeballThrown")
const enemyName = document.querySelector(".enemyName")
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
const upButton = document.querySelector('.up')
const hpBar = document.querySelector('.playerHPanimated')
const enemyHPBar = document.querySelector('.enemyHPanimated')
const hpNumbers = document.querySelector('.inputHPNumbers')
const currentPokemon = document.querySelector('.pokemon')
const maxHP = document.querySelector('.maxHP')
const trainer = document.querySelector('.trainer')
const pokeball = document.querySelector('.pokeball')
const enemyPokeballFlash = document.querySelector('.epokeball')
const startButton = document.querySelector('.start')
const welcomeScreen = document.querySelector('.welcome')
const combatScreen = document.querySelector('.combat')
const pokeBallThrown = document.querySelector('.pokeballThrown')
const playerInput = document.querySelector('.nameInput')
const continueButton = document.querySelector('.continueButton')
const introScreen = document.querySelector('.intro')
const introMessage = document.querySelector('.introMessage')
const inputNameDiv = document.querySelector('.inputName')
const genderChoice = document.querySelector('.genderChoice')
const boyButton = document.querySelector('.boy')
const girlButton = document.querySelector('.girl')
const beginGame = document.querySelector('.beginGame')
const opponent = document.querySelector('.enemyTrainer')
const combatIntro = document.querySelector('.battleIntro')
const victoryRoadTheme = document.getElementById("road")
const introTheme = document.getElementById('introTheme')
const combat1Theme = document.getElementById('combat1')
const powerOnButton = document.querySelector('.power')
const powerOnScreen = document.querySelector('.powerOn')
const powerOnSound = document.getElementById('powerOn')
const teamScreen = document.querySelector('.team')
const teamCancel = document.querySelector('.teamCancel')
const teamChoice1 = document.querySelector('.pokemon1')
const teamChoice2 = document.querySelector('.pokemon2')
const teamChoice3 = document.querySelector('.pokemon3')
const teamChoice4 = document.querySelector('.pokemon4')
const teamChoice5 = document.querySelector('.pokemon5')
const teamChoice6 = document.querySelector('.pokemon6')
const bagScreen = document.querySelector('.bagScreen')
const bagMsg = document.querySelector('.bagMsgBoxText')
const fullRestoreButton = document.getElementById('fullRestore')
const parHealButton = document.getElementById('parHeal')
const reviveButton = document.getElementById('revive')
const burnHealButton = document.getElementById('burnHeal')
const unfreezeButton = document.getElementById('unfreeze')
const awakenButton = document.getElementById('awaken')
const confuseHealButton = document.getElementById('confuseHeal')
const antidoteButton = document.getElementById('antidote')
const bagMenuButton = document.querySelector('.bagMenu')

Lorelei.choosePokemon()


//Create Global Variables
let input = ''
Lorelei.target = player.team[0]
let swapChoice = 0
genderChoice.style.display = "none"
let usingItem = false
const setChoice = (evt) => {
    resetBall()
    switch (evt.target.id) {
        case "pokemon1":
            swapChoice = 0
            if (usingItem) {
                player.useItem(player.item, player.team[swapChoice])
            } else {
                swapPokemon()
            }
            break;
        case "pokemon2":
            swapChoice = 1
            if (usingItem) {
                player.useItem(player.item, player.team[swapChoice])
            } else {
                swapPokemon()
            }
            break;
        case "pokemon3":
            swapChoice = 2
            if (usingItem) {
                player.useItem(player.item, player.team[swapChoice])
            } else {
                swapPokemon()
            }
            break;
        case "pokemon4":
            swapChoice = 3
            if (usingItem) {
                player.useItem(player.item, player.team[swapChoice])
            } else {
                swapPokemon()
            }
            break;
        case "pokemon5":
            swapChoice = 4
            if (usingItem) {
                player.useItem(player.item, player.team[swapChoice])
            } else {
                swapPokemon()
            }
            break;
        case "pokemon6":
            swapChoice = 5
            if (usingItem) {
                player.useItem(player.item, player.team[swapChoice])
            } else {
                swapPokemon()
            }
            break;
    }
}


const swapPokemon = () => {
    pokeBallThrown.style.opacity = '100'
    pokemonImage.classList.add('faint')
    let swap = player.team[0]
    let replace = player.team[swapChoice]
    document.querySelector('.smallpic1').src = player.team[swapChoice].tinyPic
    document.querySelector('.smallpic' + (swapChoice + 1)).src = player.team[0].tinyPic
    player.team[0] = replace
    player.team[swapChoice] = swap
    player.team[swapChoice].inCombat = false
    width = Math.floor((player.team[0].hp / player.team[0].totalHP) * 100)
    if (width <= 50 && width >= 21) {
        hpBar.style.backgroundColor = "darkorange";
    } else if (width <= 20) {
        hpBar.style.backgroundColor = "darkred";
    } else {
        hpBar.style.backgroundColor = "green";
    }
    hpBar.style.width = width + "%"
    trainer.classList.remove('trainerThrow')
    teamScreen.classList.add('hidden')
    combatScreen.classList.remove("hidden")
    moveTrainer()
    hpNumbers.textContent = player.team[0].hp
    maxHP.textContent = player.team[0].totalHP
    pokemonName.textContent = player.team[0].name
    pokemonLevel.textContent = player.team[0].level
    player.team[0].inCombat = true
    setTimeout(() => {
        pokeBallThrown.style.opacity = '0'
    }, 6000);
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
const animateEnemyHP = () => {
    let width = Math.floor((player.targetPokemon.hp / player.targetPokemon.totalHP) * 100)
    if (width <= 50 && width >= 21) {
        enemyHPBar.style.backgroundColor = "darkorange";
    } else if (width <= 20) {
        enemyHPBar.style.backgroundColor = "darkred";
    } else {
        enemyHPBar.style.backgroundColor = "green";
    }
    enemyHPBar.style.width = width + "%"
}

const playerPercent = (pokemon, damageReceived) => {
    let start = pokemon.hp
    pokemon.hp -= damageReceived
    if (pokemon.hp <= 0) pokemon.hp = 0
    let end = pokemon.hp
    damage = Math.floor((pokemon.hp / pokemon.totalHP) * 100)
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
    updateTeam()
    setTimeout(() => {
        msgBoxText.textContent = `What will ${player.team[0].name} do?`
    }, 1500);
})

fightButton.addEventListener('click', (evt) => {
    updateTeam()
    fightMenu()
    menuButtonDiv.classList.remove('hidden')
})

const moveTrainer = () => {
    setTimeout(() => {
        trainer.classList.add('trainerThrow')
    }, 650);
    animateThrow()
    setTimeout(() => {
        moveBall()
    }, 500);
    setTimeout(() => {
        animateBall()
    }, 800);
    setTimeout(() => {
        pokemonImage.classList.remove('faint')
        pokemonImage.src = player.team[0].img
    }, 1200);
}
const animateBall = () => {
    pokeball.style.opacity = "0"
    setTimeout(() => {
        pokeball.style.opacity = "100"
    }, 300);
    setTimeout(() => {
        pokeball.style.opacity = "0"

    }, 700);
}
const animateEnemyBall = () => {
    enemyPokeballFlash.style.opacity = "0"
    setTimeout(() => {
        enemyPokeballFlash.style.opacity = "100"
    }, 300);
    setTimeout(() => {
        enemyPokeballFlash.style.opacity = "0"

    }, 700);
}
const moveBall = () => {
    pokeBallThrown.style.marginTop = "-200px";
    pokeBallThrown.style.marginLeft = "600px";
    pokeBallThrown.style.transform = 'rotate(1290deg)';
    pokeBallThrown.style.opacity = '0'
}
const resetBall = () => {
    pokeBallThrown.style.marginTop = "-400px";
    pokeBallThrown.style.marginLeft = "460px";
    pokeBallThrown.style.transform = 'rotate(0deg)';
    pokeBallThrown.style.opacity = '100'

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
    startButton.addEventListener('click', (evt) => {
        introTheme.pause()
        welcomeScreen.classList.add('hidden')
        introScreen.classList.remove('hidden')
        intro = false
        victoryRoadTheme.play()
    })
} else {
    start.onclick = cheatCode
}

const gender = () => {
    if (playerInput.value.length > 0) {
        player.name = playerInput.value
    }
    inputNameDiv.style.display = "none"
    genderChoice.style.display = "flex"
    introMessage.textContent = "Are you a boy or a girl?"
}

const genderDecision = (evt) => {
    switch (evt.target.id) {
        case "boy":
            trainer.src = "/trainers/maleTrainer1.png"
            player.boy = true
            player.girl = false
            battlePic()
            genderChoice.style.display = "none"
            introMessage.textContent = `You have done well trainer ${player.name}! You have traveled all over the Kanto region collecting various types of POKEMON. After defeating all the gym leaders and collecting every badge you now face the region's toughest challenge...The Elite Four! You are ready, your pokemon are ready, you step into the arena and take on your toughest foes yet...`
            beginGame.classList.remove('hidden')
            break;
        case "girl":
            trainer.src = "/trainers/femaleTrainer1.png"
            player.boy = false
            player.girl = true
            battlePic()
            genderChoice.style.display = "none"
            introMessage.textContent = `You have done well trainer ${player.name}! You have traveled all over the Kanto region collecting various types of POKEMON. After defeating all the gym leaders and collecting every badge you now face the region's toughest challenge...The Elite Four! You are ready, your pokemon are ready, you step into the arena and take on your toughest foes yet...`
            beginGame.classList.remove('hidden')
    }
}
const beginCombat = () => {
    victoryRoadTheme.pause()
    combat1Theme.play()
    pokeBallThrown.style.opacity = '0'
    combatIntro.style.zIndex = "10";
    combatIntro.classList.add("battleIntroFade")
    setTimeout(() => {
        opponent.classList.remove("enemyTrainerLeave")
    }, 4000);
    setTimeout(() => {
        trainer.classList.remove("trainerThrow")
    }, 4000);
    setTimeout(() => {
        pokeBallThrown.style.opacity = '100'
    }, 6000);
    setTimeout(() => {
        introScreen.classList.add("hidden")
    }, 3000);
    setTimeout(() => {
        combatIntro.classList.add('hidden')
        combatScreen.classList.remove("hidden")
    }, 3000);

    setTimeout(() => {
        msgBoxText.textContent = "Lorelei: No one can best me when it comes to icy POKEMON! Are you ready?"
        updateTeam()
    }, 5000);
    setTimeout(() => {
        msgBoxText.textContent = ''
    }, 9000);
    setTimeout(() => {
        Lorelei.choosePokemon()
    }, 10000);
}
const battlePic = () => {
    if (player.boy) {
        combatIntro.style.backgroundImage = "url('mChallenge1.png')";
    } else {
        combatIntro.style.backgroundImage = "url('fChallenge1.png')";
    }
}

const turnOn = () => {
    powerOnSound.play()
    codeTime = false
    powerOnButton.classList.add('powermoved')
    welcomeScreen.classList.remove('hidden')
    setTimeout(() => {
        powerOnScreen.classList.add('hidden')
        introTheme.play()
    }, 1500);
}

const updateTeam = () => {
    for (let i = 0; i < 6; i++) {
        document.querySelector(`.poke${(i + 1)}Name`).textContent = player.team[i].name
        document.querySelector(`.smallLvPrint${(i + 1)}`).textContent = player.team[i].level
        document.querySelector(`.poke${(i + 1)}HP`).textContent = player.team[i].hp
        document.querySelector(`.poke${(i + 1)}MaxHP`).textContent = player.team[i].totalHP
        // playerPercent(player.team[i])
        width = Math.floor((player.team[i].hp / player.team[i].totalHP) * 100)
        if (width < 50 && width >= 21) {
            document.querySelector(`.hp${(i + 1)}`).style.backgroundColor = "darkorange";
        } else if (width <= 20) {
            document.querySelector(`.hp${(i + 1)}`).style.backgroundColor = "darkred";
        } else {
            document.querySelector(`.hp${(i + 1)}`).style.backgroundColor = "green";
        }
        document.querySelector(`.hp${(i + 1)}`).style.width = width + "%"
    }
}
beginGame.onclick = beginCombat
girlButton.onclick = genderDecision
boyButton.onclick = genderDecision
continueButton.onclick = gender
// upButton.onclick = 
teamChoice1.onclick = setChoice
teamChoice2.onclick = setChoice
teamChoice3.onclick = setChoice
teamChoice4.onclick = setChoice
teamChoice5.onclick = setChoice
teamChoice6.onclick = setChoice
powerOnButton.onclick = turnOn
buttonA.addEventListener('click', (evt) => {
    playerPercent(player.team[0])
})
pokemonButton.addEventListener('click', (evt) => {
    teamScreen.classList.remove('hidden')
    combatScreen.classList.add("hidden")
    updateTeam()
})
teamCancel.addEventListener('click', (evt) => {
    updateTeam()
    usingItem = false
    pokeBallThrown.style.opacity = '0'
    if (player.team[0].inCombat) {
        teamScreen.classList.add('hidden')
        combatScreen.classList.remove("hidden")
    } else {
        console.log("no pokemon in combat!")
    }
})
bagButton.addEventListener('click', (evt) => {
    updateTeam()
    bagScreen.classList.remove('hidden')
    combatScreen.classList.add('hidden')
})

const bagButtons = [fullRestoreButton, reviveButton, parHealButton, burnHealButton, unfreezeButton, awakenButton, confuseHealButton, antidoteButton]
const moveButtons = [moveOneButton, moveTwoButton, moveThreeButton, moveFourButton]
let firstAttack = 0
const playerAttack = (chosenAttack, targetPokemon) => {
    let attack = 0
    let superEffectiveDamageMultiplyer = 1
    console.log(chosenAttack.name)
    if (chosenAttack.power === 0) {
        //use a switch to go through each move
        switch (chosenAttack.name) {
            case "rest":
                player.team[0].asleep = Math.floor(Math.random() * 3)
                player.team[0].hp += player.team[0].totalHP
                player.target.attack(player.team[0])
                break;
        }
    }

    //set damage if move is physical
    if (chosenAttack.physical) {
        console.log('phsyical')
        // this.damage += Math.floor((this.team[0].combatLvl / 5) + 2 * this.team[0].moves[0].power * (this.team[0].attack / targetPokemon.defense) / 50 + 2)
        player.damage += Math.floor((((((player.team[0].combatLvl / 5) + 2) * (player.team[0].attack / targetPokemon.defense) * (chosenAttack.power) + 2) / 50) + 2));
        //set damage if move is special
    } else if (chosenAttack.special) {
        console.log('Specials')
        // console.log('special')
        // this.damage += Math.floor((this.team[0].combatLvl / 5) + 2 * this.team[0].moves[0].power * (this.team[0].specialAttack / targetPokemon.specialDefense) / 50 + 2)
        player.damage += Math.floor((((((player.team[0].combatLvl / 5) + 2) * (player.team[0].specialAttack / targetPokemon.specialDefense) * (chosenAttack.power) + 2) / 50) + 2));
        // console.log('damage is', this.damage)
    }
    console.log('raw damage', player.damage)

    //check if move hits
    let index = Math.random()
    if (index < chosenAttack.accuracy) {
        //check if move is Same Type Attack Bonus
        if (chosenAttack.type.includes(player.team[0].type)) {
            player.damage *= 1.5
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
            player.damage *= 2
        }
        console.log('multipler is at', superEffectiveDamageMultiplyer)
        //apply super type damage
        if (superEffectiveDamageMultiplyer > 1) {
            console.log('greater')
            player.damage *= superEffectiveDamageMultiplyer
            console.log("It's super effective!")
        } else if (superEffectiveDamageMultiplyer < 1) {
            player.damage *= superEffectiveDamageMultiplyer
            console.log("It's not very effective.")
        }
        //apply damage  
        console.log('damage is', player.damage)
        targetPokemon.hp = Math.floor(targetPokemon.hp - player.damage)
        if (targetPokemon.hp <= 0) {
            targetPokemon.hp = 0

        }
        currentPokemon.classList.add("pokemonAttack")
        setTimeout(() => {
            currentPokemon.classList.remove("pokemonAttack")
        }, 750);
        setTimeout(() => {
            opponentPokemon.classList.add("eTrainerPokemonHit")
            setTimeout(() => {
                opponentPokemon.classList.remove("eTrainerPokemonHit")
            }, 750);
        }, 2000);
        setTimeout(() => {
            animateEnemyHP()
        }, 3000);

        console.log('hp now', targetPokemon.hp)
        // this.applyStatus(chosenAttack)
        player.damage = 0

    } else {
        console.log('you missed!')
        player.damage = 0
        if (firstAttack === "player") {
            setTimeout(() => {
                enemyAttack()
            }, 4000);

        } else {
            firstAttack = ''
            msgBoxText.textContent = `${player.team[0].name} used ${player.team[0].moves[0].name}!`
            setTimeout(() => {
                fightMenu()
            }, 2050);


        }
        // this.target.attack(this.team[0])
    }
    if (firstAttack === "player") {
        setTimeout(() => {
            enemyAttack()
        }, 6000);

    } else {
        firstAttack = ''
        msgBoxText.textContent = `${player.team[0].name} used ${player.team[0].moves[0].name}!`
        setTimeout(() => {
            fightMenu()
        }, 2050);

    }
}
const enemyAttack = () => {
    let computerChoice = Math.floor(Math.random() * 4)
    let computerAttack = player.targetPokemon.moves[computerChoice]
    let superEffectiveDamageMultiplyer = 1
    console.log(computerAttack.name)
    console.log(player.targetTrainer.damage)

    //set damage if move is physical
    if (computerAttack.physical) {
        console.log('phsyical')
        // this.damage += Math.floor((this.team[0].combatLvl / 5) + 2 * this.team[0].moves[0].power * (this.team[0].attack / targetPokemon.defense) / 50 + 2)
        player.targetTrainer.damage += Math.floor((((((player.targetPokemon.combatLvl / 5) + 2) * (player.targetPokemon.attack / player.team[0].defense) * (computerAttack.power) + 2) / 50) + 2));
        //set damage if move is special
    } else if (computerAttack.special) {
        console.log('Special')
        // console.log('special')
        // this.damage += Math.floor((this.team[0].combatLvl / 5) + 2 * this.team[0].moves[0].power * (this.team[0].specialAttack / targetPokemon.specialDefense) / 50 + 2)
        player.targetTrainer.damage += Math.floor((((((player.targetPokemon.combatLvl / 5) + 2) * (player.targetPokemon.specialAttack / player.team[0].specialDefense) * (computerAttack.power) + 2) / 50) + 2));
        // console.log('damage is', this.damage)
    }
    console.log('raw damage', player.targetTrainer.damage)

    //check if move hits
    let index = Math.random()
    if (index < computerAttack.accuracy) {
        //check if move is Same Type Attack Bonus
        if (computerAttack.type.includes(player.targetPokemon.type)) {
            player.damage *= 1.5
        }
        //Check if target pokemon is weak or resistant to attack type
        player.team[0].weakness.forEach((typing) => {
            if (typing == computerAttack.type) {
                superEffectiveDamageMultiplyer += 1
            }
        })
        player.team[0].resist.forEach((typing) => {
            if (typing === computerAttack.type) {
                superEffectiveDamageMultiplyer -= .5
            }
        })

        //Crit Chance is 6.25
        let critIndex = Math.random()
        if (critIndex > .92) {
            console.log('CRIT!')
            msgBoxText.textContent = "A critical hit!"
            setTimeout(() => {
                msgBoxText.textContent = ""
            }, 2000);
            player.damage *= 2
        }
        console.log('multipler is at', superEffectiveDamageMultiplyer)
        //apply super type damage
        if (superEffectiveDamageMultiplyer > 1) {
            console.log('greater')
            player.targetTrainer.damage *= superEffectiveDamageMultiplyer
            console.log("It's super effective!")
        } else if (superEffectiveDamageMultiplyer < 1) {
            player.targetTrainer.damage *= superEffectiveDamageMultiplyer
            console.log("It's not very effective.")
        }
        //apply damage  
        console.log('damage is', player.targetTrainer.damage)
        if (player.team[0].hp <= 0) {
            player.team[0].hp = 0
        }
        opponentPokemon.classList.add("eTrainerPokemonAttack")
        setTimeout(() => {
            opponentPokemon.classList.remove("eTrainerPokemonAttack")
        }, 750);
        setTimeout(() => {
            playerPercent(player.team[0], player.targetTrainer.damage)
        }, 2000);
        console.log('hp now', player.team[0].hp)
        // this.applyStatus(chosenAttack)
        setTimeout(() => {
            player.targetTrainer.damage = 0
        }, 4000);

    } else {
        console.log('you missed!')
        player.targetTrainer.damage = 0
        // setTimeout(() => {
        //     if (firstAttack === "opponent") {
        //         playerAttack(player.attackChoice, player.targetPokemon)
        //     } else {
        //         firstAttack = ''
        //         msgBoxText.textContent = `${player.targetPokemon.name} used ${computerAttack.name}!`
        //         computerChoice = 0
        //         setTimeout(() => {
        //             fightMenu()
        //         }, 2050);
        //     }
        // }, 3000);
        // this.target.attack(this.team[0])
    }
   

    
    if (firstAttack === "opponent") {
        playerAttack(player.attackChoice, player.targetPokemon)
    } else {
        firstAttack = ''
        msgBoxText.textContent = `${player.team[0].name} used ${computerAttack.name}!`
        setTimeout(() => {
            moveBar.classList.add("hidden")
            combatChoice.classList.remove('hidden')
            mainMessageBox.classList.remove('hidden')
            msgBoxText.textContent = `What will ${player.team[0].name} do?`
        }, 5050);
    }
}

moveButtons.forEach((chosenMove) => {
    chosenMove.addEventListener('click', (evt) => {
        switch (evt.target.id) {
            case "mv1":
                if (player.team[0].moves[0].pp > 0) {
                    player.team[0].moves[0].pp--
                    msgBoxText.textContent = ''
                    player.attackChoice = player.team[0].moves[0]
                    moveBar.classList.add("hidden")
                    mainMessageBox.classList.remove('hidden')
                    menuButtonDiv.classList.add('hidden')
                    firstAttack = "player"
                    setTimeout(() => {
                        msgBoxText.textContent = `${player.team[0].name} used ${player.team[0].moves[0].name}!`
                    }, 150);
                    if (player.team[0].speed >= player.targetPokemon.speed) {
                        playerAttack(player.team[0].moves[0], player.targetPokemon)
                    } else {
                        firstAttack = "opponent"
                        enemyAttack()
                    }

                }
                break;
            case "mv2":
                if (player.team[0].moves[1].pp > 0) {
                    player.team[0].moves[1].pp--
                    msgBoxText.textContent = ''
                    player.attackChoice = player.team[0].moves[1]
                    moveBar.classList.add("hidden")
                    mainMessageBox.classList.remove('hidden')
                    menuButtonDiv.classList.add('hidden')
                    firstAttack = "player"
                    setTimeout(() => {
                        msgBoxText.textContent = `${player.team[0].name} used ${player.team[0].moves[1].name}!`
                    }, 150);
                    if (player.team[0].speed >= player.targetPokemon.speed) {
                        playerAttack(player.team[0].moves[1], player.targetPokemon)
                    } else {
                        firstAttack = "opponent"
                        enemyAttack()
                    }

                }
                break;
            case "mv3":
                if (player.team[0].moves[2].pp > 0) {
                    player.team[0].moves[2].pp--
                    msgBoxText.textContent = ''
                    player.attackChoice = player.team[0].moves[2]
                    moveBar.classList.add("hidden")
                    mainMessageBox.classList.remove('hidden')
                    menuButtonDiv.classList.add('hidden')
                    firstAttack = "player"
                    setTimeout(() => {
                        msgBoxText.textContent = `${player.team[2].name} used ${player.team[0].moves[2].name}!`
                    }, 150);
                    if (player.team[0].speed >= player.targetPokemon.speed) {
                        playerAttack(player.team[0].moves[2], player.targetPokemon)
                    } else {
                        firstAttack = "opponent"
                        enemyAttack()
                    }

                }
                break;
            case "mv4":
                if (player.team[0].moves[3].pp > 0) {
                    player.team[0].moves[3].pp--
                    msgBoxText.textContent = ''
                    player.attackChoice = player.team[0].moves[3]
                    moveBar.classList.add("hidden")
                    mainMessageBox.classList.remove('hidden')
                    menuButtonDiv.classList.add('hidden')
                    firstAttack = "player"
                    setTimeout(() => {
                        msgBoxText.textContent = `${player.team[0].name} used ${player.team[0].moves[3].name}!`
                    }, 150);
                    if (player.team[0].speed >= player.targetPokemon.speed) {
                        playerAttack(player.team[0].moves[3], player.targetPokemon)
                    } else {
                        firstAttack = "opponent"
                        enemyAttack()
                    }

                }
                break;
        }
    })
})

bagButtons.forEach((item) => {
    item.addEventListener('mouseout', (evt) => {
        bagMsg.textContent = ''
    })
})
bagButtons.forEach((item) => {
    item.addEventListener('click', (evt) => {
        player.chooseItem(evt)
        usingItem = true
    })
})
bagButtons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
        let after = button.textContent
        button.textContent = `> ${after}`
    })
    button.addEventListener('mouseout', () => {
        let after = button.textContent
        button.textContent = after.substring(2)
    })
})

fullRestoreButton.addEventListener('mouseenter', (evt) => {
    bagMsg.textContent = "One-time-use item that cures the user of all status ailments - paralysis, poison, sleep, burn, freeze, and confusion, along with completely restoring the user's HP."
})
reviveButton.addEventListener('mouseenter', (evt) => {
    bagMsg.textContent = "A medicine that can revive fainted Pokémon. It also restores half of a fainted Pokémon's maximum HP."
})
parHealButton.addEventListener('mouseenter', (evt) => {
    bagMsg.textContent = "It can be used to cure a Pokémon from paralysis."
})
burnHealButton.addEventListener('mouseenter', (evt) => {
    bagMsg.textContent = " It heals a single Pokémon that is suffering from a burn."
})
unfreezeButton.addEventListener('mouseenter', (evt) => {
    bagMsg.textContent = " Thaws a single Pokémon that is suffering from being frozen."
})
awakenButton.addEventListener('mouseenter', (evt) => {
    bagMsg.textContent = " Wakes a single Pokémon that has fallen asleep."
})
confuseHealButton.addEventListener('mouseenter', (evt) => {
    bagMsg.textContent = " Heals a pokemon who is suffering from confusion."
})
antidoteButton.addEventListener('mouseenter', (evt) => {
    bagMsg.textContent = " Heals a pokemon who is suffering from poison."
})
buttonB.onclick = swapPokemon

bagMenuButton.addEventListener('click', (evt) => {
    bagScreen.classList.add("hidden")
    combatScreen.classList.remove('hidden')
})



const inArr = [teamChoice1, teamChoice2, teamChoice3, teamChoice4, teamChoice5, teamChoice6,]
const outArr = [teamChoice1, teamChoice2, teamChoice3, teamChoice4, teamChoice5, teamChoice6,]

inArr.forEach((item) => {
    item.addEventListener('mouseenter', (evt) => {
        evt.target.classList.add("pokemon2b")
    })
    item.addEventListener('mouseout', (evt) => {
        evt.target.classList.remove("pokemon2b")
    })
})