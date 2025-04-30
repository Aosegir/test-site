let geniusTable = {
    0: "Mimic",
    1: "Smothering Rug",
    2: "Animated Armor",
};

let kalisTable = {
    0: "Death Knight",
    1: "Arbalest Squad",
    2: "Kill Team",
};

let ennaTable = {
    0: ["Fungal Scratcher"],
    1: ["Fungal Artillery", "Fungal Scratcher"],
    2: ["Large Ectoplasm", "Ectoplasm"],
    3: ["Unclean Giant"],
};

let vorasTable = {
    0: "Wyrmlings",
    1: "Kobolds",
    2: "Hell Hounds",
};

let juriTable = {
    0: "Bulette",
    1: "Ropers",
    2: "Lava Mephits",
};

let animaTable = {
    0: ["Bone Rabble"],
    1: ["Brigand Cutthroat", "Brigand Cutthroat", "Brigand Cuttrhoat"],
    2: ["Brigand Bloodletter"],
    3: ["The Thing From The Stars"],
};

function selectEncounter(table) {
    return table[Math.floor(Math.random() * Object.keys(table).length)];
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
        randomEncounter.innerText = selectEncounter(kalisTable);
    });    
} else if(genius) {
    genius.addEventListener('click', () => {
        randomEncounter.innerText = selectEncounter(geniusTable);
    });
} else if(enna) {
    enna.addEventListener('click', () => {
        randomEncounter.innerText = selectEncounter(ennaTable);
    });
} else if(voras) {
    voras.addEventListener('click', () => {
        randomEncounter.innerText = selectEncounter(vorasTable);
    });
} else if(juri) {
    juri.addEventListener('click', () => {
        randomEncounter.innerText = selectEncounter(juriTable);
    });
} else if(anima) {
    anima.addEventListener('click', () => {
        randomEncounter.innerText = selectEncounter(animaTable);
    });
};
