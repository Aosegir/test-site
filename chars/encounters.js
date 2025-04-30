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
        name: "Mimic",
        xp: 450,
        area: "Study",
    },
];

/*
    WHAT: determineDifficulty function returns a random XP threshhold based on number of characters and their level
    WHY: this function exists to create variety in the amount of monsters in each encounter
*/
function determineDifficulty(characters, level) {
    let threshholds = [];
    threshholds.push(characters * level * 25);
    threshholds.push(characters * level * 50);
    threshholds.push(characters * level * 75);
    threshholds.push(characters * level * 100);
    return threshholds[Math.floor(Math.random() * threshholds.length)];
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
    });
} else if(voras) {
    voras.addEventListener('click', () => {

    });
} else if(juri) {
    juri.addEventListener('click', () => {

    });
} else if(anima) {
    anima.addEventListener('click', () => {
    });
};
