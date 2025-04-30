let monsterTable = [
    {
        name: "Bone Rabble",
        xp: 25,
    },
    {
        name: "Bone Soldier",
        xp: 100,
    },
    {
        name: "Bone Defender",
        xp: 100,
    },
    {
        name: "Bone Arbalist",
        xp: 100,
    },
];

let geniusTable = {
    0: ["Mimic"],
    1: ["Smothering Rug"],
    2: ["Animated Armor"],
};

let kalisTable = {
    0: ["Death Knight"],
    1: ["Arbalest Squad"],
    2: ["Kill Team"],
};

let ennaTable = {
    0: ["Fungal Scratcher"],
    1: ["Fungal Artillery", "Fungal Scratcher"],
    2: ["Large Ectoplasm", "Ectoplasm"],
    3: ["Unclean Giant"],
};

let vorasTable = {
    0: ["Wyrmlings"],
    1: ["Kobolds"],
    2: ["Hell Hounds"],
};

let juriTable = {
    0: ["Bulette"],
    1: ["Ropers"],
    2: ["Lava Mephits"],
};

let animaTable = {
    0: ["Bone Rabble"],
    1: ["Brigand Cutthroat", "Brigand Cutthroat", "Brigand Cuttrhoat"],
    2: ["Brigand Bloodletter"],
    3: ["The Thing From The Stars"],
};

function determineDifficulty(characters, level) {
    let threshholds = [];
    threshholds.push(characters * level * 25);
    threshholds.push(characters * level * 50);
    threshholds.push(characters * level * 75);
    threshholds.push(characters * level * 100);
    return selectFromTable(threshholds);
};

function selectFromTable(table) {
    return table[Math.floor(Math.random() * Object.keys(table).length)];
};

function createEncounter() {
    let runningEncounter = [];
    let runningXP = 0;
    let encounterXP = determineDifficulty(4, 1);
    while(runningXP <= encounterXP) {
        let currentMonster = selectFromTable(monsterTable);
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
        randomEncounter.innerText = createEncounter();
    });    
} else if(genius) {
    genius.addEventListener('click', () => {
        randomEncounter.innerText = selectFromTable(geniusTable);
    });
} else if(enna) {
    enna.addEventListener('click', () => {
        randomEncounter.innerText = selectFromTable(ennaTable);
    });
} else if(voras) {
    voras.addEventListener('click', () => {
        randomEncounter.innerText = selectFromTable(vorasTable);
    });
} else if(juri) {
    juri.addEventListener('click', () => {
        randomEncounter.innerText = selectFromTable(juriTable);
    });
} else if(anima) {
    anima.addEventListener('click', () => {
        randomEncounter.innerText = selectFromTable(animaTable);
    });
};
