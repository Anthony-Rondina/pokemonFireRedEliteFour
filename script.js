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
            type: ["fire", "flying"],
            weakness: ["rock", "water"],
            resist: ["fire"],
            img = "img.src",
            poisined: false,
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
                physical: false,
                type: "fire",
                // strength: ["grass", "bug", "grass", "ice"],
                // resist: ["rock", "fire", "water", "dragon"],
                special: true,
                status: true,
                pp: 20,
                power: 90,
                accuracy: 100
            },
            {
                name: "Wing Attack",
                type: "flying",
                physical: true,
                special: false,
                status: false,
                pp: 35,
                power: 60,
                accuracy: 100,
            },
            {
                name: "Fire Blast",
                type: "fire",
                physical: false,
                special: true,
                status: true,
                pp: 5,
                power: 120,
                accuracy: 85,
            },
            {
                name: "Aerial Ace",
                type: "flying",
                physical: false,
                special: true,
                status: false,
                pp: 20,
                power: 60,
                accuracy: 100,
            }]
        },
        {
            name: "Venusaur",
            type: "grass",
            weakness: ["fire"],
            resist: ["grass", "water"],
            img = "img.src",
            poisined: false,
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
                name: "Poisin Powder",
                physical: false,
                special: false,
                status: true,
                pp: 35,
                power: 0,
                accuracy: 75,
            },
            {
                name: "Leech Seed",
                physical: false,
                special: false,
                status: true,
                pp: 10,
                power: 0,
                accuracy: 90,
            },
            {
                name: "Vine Whip",
                physical: true,
                special: false,
                status: false,
                loseTurn: false,
                pp: 25,
                power: 45,
                accuracy: 100,
            }]
        },
        {
            name: "Blastoise",
            type: "water",
            img = "img.src",
            poisined: false,
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
                physical: false,
                special: true,
                status: false,
                pp: 5,
                power: 120,
                accuracy: 80
            },
            {
                name: "Surf",
                physical: false,
                special: true,
                status: false,
                pp: 15,
                power: 90,
                accuracy: 100,
            },
            {
                name: "Earthquake",
                physical: true,
                special: false,
                status: false,
                pp: 10,
                power: 100,
                accuracy: 100,
            },
            {
                name: "Water Gun",
                physical: false,
                special: true,
                status: false,
                loseTurn: false,
                pp: 25,
                power: 40,
                accuracy: 100,
            }]
        }, {
            name: "Alakazam",
            type: "psychic",
            img = "img.src",
            poisined: false,
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
                physical: false,
                special: true,
                status: false,
                pp: 10,
                power: 90,
                accuracy: 100
            },
            {
                name: "Psybeam",
                physical: false,
                special: true,
                status: false,
                pp: 20,
                power: 65,
                accuracy: 100,
            },
            {
                name: "Confusion",
                physical: false,
                special: true,
                status: true,
                pp: 20,
                power: 50,
                accuracy: 100,
            },
            {
                name: "Recover",
                physical: false,
                special: false,
                status: true,
                loseTurn: false,
                pp: 10,
                power: 0,
                accuracy: 100,
            }]
        }, {
            name: "Lapras",
            type: ["water", "ice"],
            img = "img.src",
            poisined: false,
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
                physical: false,
                special: true,
                status: true,
                pp: 10,
                power: 90,
                accuracy: 100
            },
            {
                name: "Sing",
                physical: false,
                special: false,
                status: true,
                pp: 15,
                power: 0,
                accuracy: 0,
            },
            {
                name: "Surf",
                physical: false,
                special: true,
                status: true,
                pp: 5,
                power: 95,
                accuracy: 100,
            },
            {
                name: "Blizzard",
                physical: false,
                special: true,
                status: true,
                loseTurn: false,
                pp: 5,
                power: 110,
                accuracy: 75,
            }]
        }]
    }
    chooseItem() {
        this.item = "antidote"
    }
    useItem() {
        switch (this.item) {
            case "antidote":
                this.team[0].poisined = false
                break;
        }
    }
    checkStatus(yourPokemon) {
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
    attack(chosenAttack, targetPokemon) {
        //switch to make sure of target
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
                    this.checkStatus(this.team[0])
                    break;
            }
        }
        //check if move hits
        index = Math.random()
        if (index < chosenAttack.accuracy) {
            //check if move is Same Type Attack Bonus
            if (chosenAttack.type.includes(this.team[0].type)) {
                console.log("this move is STAB and gets a 50% damage bonus")
                chosenAttack.power += (chosenAttack.power / 2)
            }
            //Check if target pokemon is weak or resistant to attack type
            if (targetPokemon.weakness.includes(chosenAttack.type)) {
                console.log("It's super effective!")
                chosenAttack.power * 2
            } else if (targetPokemon.resist.includes(chosenAttack.type)) {
                console.log("It's not very effective.")
                chosenAttack.power / 2
            }

            //Find the code for how to apply damage of chosenAttack.power

            //find the % of a crit chance


        } else {
            console.log('you missed!')
        }
    }
    checkYourStatusEnd(yourPokemon) {
        //check your pokemon first
        if (yourPokemon.poisined) {
            yourPokemon.hp -= (yourPokemon.totalHP * 0.0625) // 1/16th
            //CODE FOR DOM UPDATE
            setTimeout(() => {
                this.checkTheirStatusEnd()
            }, 10000);
        } else if (yourPokemon.burned) {
            yourPokemon.hp -= (yourPokemon.totalHP * 0.0625) // 1/16th
            //CODE FOR DOM UPDATE
            setTimeout(() => {
                this.checkTheirStatusEnd()
            }, 10000);
        }
    }
    checkTheirStatusEnd(targetPokemon) {
        //check target pokemon second
        if (targetPokemon.poisined) {
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

