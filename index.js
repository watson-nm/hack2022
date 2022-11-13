const FCG = require("fantasy-content-generator");

const raceMapping = {
    dragonborn: 'dragonborn',
    dwarf: 'dwarf',
    elf: 'elf',
    gnome: 'gnome',
    'half-elf': 'halfElf',
    'half-orc': 'halfOrc',
    halfing: 'halfling',
    human: 'human',
    tiefling: 'tiefling',
};

globalThis.generateName = function(race) {
    return FCG.Names.generate({ race: raceMapping[race] }).name;
}
