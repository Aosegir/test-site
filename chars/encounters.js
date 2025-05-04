let monsterTable = [
    {
        name: "Bone Rabble",
        xp: 25,
        area: "Citadel",
    },
    {
        name: "Bone Soldier",
        xp: 100,
        area: "Citadel",
    },
    {
        name: "Bone Defender",
        xp: 100,
        area: "Citadel",
    },
    {
        name: "Bone Arbalist",
        xp: 100,
        area: "Citadel",
    },
    //BREAK
    {
        name: "Banshee",
        xp: 1100,
        area: "City",
    },
    //BREAK
    {
        name: "Needle Blight",
        xp: 50,
        area: "Wilds",
    },
    {
        name: "Twig Blight",
        xp: 25,
        area: "Wilds",
    },
    {
        name: "Vine Blight",
        xp: 100,
        area: "Wilds",
    },
    {
        name: "Chimera",
        xp: 2300,
        area: "Wilds",
    },
    {
        name: "Dryad",
        xp: 100,
        area: "Wilds"
    },
    //BREAK
    {
        name: "Mimic",
        xp: 450,
        area: "Study",
    },
    {
        name: "Animated Armor",
        xp: 200,
        area: "Study",
    },
    {
        name: "Flying Sword",
        xp: 45,
        area: "Study",
    },
    {
        name: "Rug of Smothering",
        xp: 450,
        area: "Study",
    },
    {
        name: "Spectator",
        xp: 700,
        area: "Study",
    },
    //BREAK
    {
        name: "Darkmantle",
        xp: 100,
        area: "Depths"
    },
];

/*
    WHAT: determineDifficulty function returns a random XP threshhold based on number of characters and their level
    WHY: this function exists to create variety in the amount of monsters in each encounter
*/
function determineDifficulty(characters, level) {
    let threshhold = characters * level;
    let randomNumber = Math.floor(Math.random() * 100);
    if(randomNumber <= 50) {
        threshhold *= 25;
        return threshhold;
    } else if (randomNumber <= 80) {
        threshhold *= 50;
        return threshhold;
    } else if (randomNumber <= 90) {
        threshhold *= 75;
        return threshhold;
    } else {
        threshhold *= 100;
        return threshhold;
    }
};

function filterMonsterList(table, zone) {
    return table.filter((monster) => monster.area === zone);
};

/*
    WHAT: selectMonster function returns a random item from an array of object, filtered by a specific zone
    WHY: this function exists to randomize any pull from the monsterTable list from the correct zone
*/
function selectMonster(table, zone) {
    do {
        let areaList = filterMonsterList(table, zone);
        monster = areaList[Math.floor(Math.random() * table.length)];
    } while(!monster);
    return monster;
};

/*
    WHAT: createEncounter function creates a random encounter for any given area
    WHY: i mean this is like the whole point of random encounters
*/
function createEncounter(zone) {
    let runningEncounter = [];
    let runningXP = 0;
    let encounterXP = determineDifficulty(4, 1);
    while(runningXP <= encounterXP) {
        let currentMonster = selectMonster(monsterTable, zone);
        runningEncounter.push(currentMonster.name);
        runningXP += currentMonster.xp;
    };
    return runningEncounter;
};

let randomEncounter = document.getElementById('random');

let kalis = document.getElementById("kalis");
let enna = document.getElementById("enna");
let voras = document.getElementById("voras");
let juri = document.getElementById("juri");
let anima = document.getElementById("anima");
let genius = document.getElementById("genius");

if(kalis) {
    kalis.addEventListener('click', () => {
        randomEncounter.innerText = createEncounter("Citadel");
    });    
} else if(genius) {
    genius.addEventListener('click', () => {
        randomEncounter.innerText = createEncounter("Study");
    });
} else if(enna) {
    enna.addEventListener('click', () => {
        randomEncounter.innerText = createEncounter("Wilds");
    });
} else if(voras) {
    voras.addEventListener('click', () => {

    });
} else if(juri) {
    juri.addEventListener('click', () => {

    });
} else if(anima) {
    anima.addEventListener('click', () => {
        randomEncounter.innerText = createEncounter("City");
    });
};
