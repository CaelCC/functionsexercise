// 1
function fozzieBear() {
    console.log('Wokka Wokka');
};
fozzieBear();

// 2
function beaker(speak) {
    console.log(speak);
    console.log(speak);
    console.log(speak);
    console.log(speak);
};
beaker('Meep');

// 3
function muppetShow(a, b) {
    if (a === 'Muppet' && b === 'Show') {
        console.log("It's time to play the music. It's time to light the lights.");
    }
};
muppetShow('Muppet', 'Show');
muppetShow('Spork a borka borka');

// 4
function kermit() {
    return 'Kermit the Frog';
};
kermit();
console.log(kermit());

// 5
function muppetShowSeasons(seasons) {
    if (seasons === 5) {
        return true;
    } else {
        return false;
    }
};

console.log(muppetShowSeasons(5));

// 6
const manOrMuppet = function () {
    return 'Am I am man or I am a muppet';
    // console.log(Am I am man or am I a muppet);
};
manOrMuppet();
console.log(manOrMuppet());

// 7
rainbowConnection = () => "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me";
console.log(rainbowConnection());

// 8
// no

// 9
// yes

// 10a
const newMuppetMovies = ['The Muppets', 'The Muppets most Wanted'];

// 10b
const upperMovies = newMuppetMovies.map(function (movie) {
    return movie.toUpperCase();
});

// Bonus
// 11a
const oldMuppetMovies = [
    "The Muppet Movie",
    "The Muppets Take Manhattan",
    "The Great Muppet Caper",
    "The Muppet Christmas Carol",
    "Muppet Treasure Island",
    "Muppets From Space"
];

// 11b
const twoMovies = oldMuppetMovies.filter(movie => movie === 'The Great Muppet Caper' || movie === 'Muppet Treasure Island');
console.log(twoMovies);

// 12a
const charactersOne = ['Statler', 'Waldorf'];

// 12b
const charactersTwo = ['The Swedish Chef', 'Animal', 'Rowlf'];

// 12c
randomMuppet = (characters) => {
    console.log(characters[Math.floor(Math.random() * characters.length)]);
}

// 12d
randomMuppet(charactersOne);
randomMuppet(charactersTwo);

// 13
const caps = string => {
    let newString = '';
    for (i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            newString += string[i].toUpperCase();
        } else if (string[i] === ' ') {
            newString += '';
        } else {
            newString += string[i].toUpperCase;
        }
    }
    console.log(newString);
}

