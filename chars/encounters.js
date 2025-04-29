let geniusTable = [
    "Mimic",
    "Smothering Rug",
    "Animated Armor",
];

let kalisTable = [
    "Death Knight",
    "Arbalest Squad",
    "Kill Team",
];

let ennaTable = [
    "Dryads",
    "Elementals",
    "Displacer Beasts",
];

let vorasTable = [
    "Wyrmlings",
    "Kobolds",
    "Hell Hounds",
];

let juriTable = [
    "Bulette",
    "Ropers",
    "Lava Mephits",
];

let animaTable = [
    "Wraiths",
    "Zombie Mob",
    "Steel Defender",
];

function selectEncounter(table) {
    return table[Math.floor(Math.random() * table.length)];
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
