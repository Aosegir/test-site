// Grid elements
let citadel = document.getElementById('citadel');
let city = document.getElementById('city');
let wilds = document.getElementById('wilds');
let study = document.getElementById('study');
let tower = document.getElementById('tower');
let depths = document.getElementById('depths');

// Text elements
let citadelBio = document.getElementById('citadel-bio');
let cityBio = document.getElementById('city-bio');
let wildsBio = document.getElementById('wilds-bio');
let studyBio = document.getElementById('study-bio');
let towerBio = document.getElementById('tower-bio');
let depthsBio = document.getElementById('depths-bio');

// Citadel events
citadel.addEventListener('mouseover', () => {
    toggleVisibility(citadelBio);
});

citadel.addEventListener('mouseout', () => {
    toggleVisibility(citadelBio);
});

// City events
city.addEventListener('mouseover', () => {
    toggleVisibility(cityBio);
});

city.addEventListener('mouseout', () => {
    toggleVisibility(cityBio);
});

// Wilds events
wilds.addEventListener('mouseover', () => {
    toggleVisibility(wildsBio);
});

wilds.addEventListener('mouseout', () => {
    toggleVisibility(wildsBio);
});

// Study events
study.addEventListener('mouseover', () => {
    toggleVisibility(studyBio);
});

study.addEventListener('mouseout', () => {
    toggleVisibility(studyBio);
});

// Tower events
tower.addEventListener('mouseover', () => {
    toggleVisibility(towerBio);
});

tower.addEventListener('mouseout', () => {
    toggleVisibility(towerBio);
});

// Depths events
depths.addEventListener('mouseover', () => {
    toggleVisibility(depthsBio);
});

depths.addEventListener('mouseout', () => {
    toggleVisibility(depthsBio);
});



function toggleVisibility(div) {
    if(div.classList.contains('invisible')) {
        div.classList.remove('invisible');
    } else {
        div.classList.add('invisible');
    };
};