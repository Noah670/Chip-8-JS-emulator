import Renderer from "./renderer.js";
import Keyboard from "./keyboard.js";
import Speaker from "./speaker.js";
import CPU from "./cpu.js";

const renderer = new Renderer(10);
const keyboard = new Keyboard();
const speaker = new Speaker();
const cpu = new CPU(renderer, keyboard, speaker);

let loop;

let fps = 60,
    fpsInterval,
    startTime,
    now,
    then,
    elapsed;

var defaultRom = "BLINKY";

function newRoms() {
    let rom = document.getElementById("myAnchor").innerHTML;
    alert(rom);
    defaultRom = rom;
    console.log(defaultRom);
}


function init() {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;

    cpu.loadSpritesIntoMemory();
    cpu.loadRom(defaultRom);
    loop = requestAnimationFrame(step);
}

function step() {
    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
        cpu.cycle();
    }

    loop = requestAnimationFrame(step);
}

var roms = document.getElementsByClassName("view-roms");

roms[0].addEventListener("click", function() {
    defaultRom = this.innerText;
    console.log(defaultRom);
    init();
});

roms[1].addEventListener("click", function() {
    defaultRom = this.innerText;
    console.log(defaultRom);
    init();
});

roms[2].addEventListener("click", function() {
    defaultRom = this.innerText;
    console.log(defaultRom);
    init();
});

roms[3].addEventListener("click", function() {
    defaultRom = this.innerText;
    console.log(defaultRom);
    init();
});

roms[4].addEventListener("click", function() {
    defaultRom = this.innerText;
    console.log(defaultRom);
    init();
});

roms[5].addEventListener("click", function() {
    defaultRom = this.innerText;
    console.log(defaultRom);
    init();
});

roms[6].addEventListener("click", function() {
    defaultRom = this.innerText;
    console.log(defaultRom);
    init();
});

roms[7].addEventListener("click", function() {
    defaultRom = this.innerText;
    console.log(defaultRom);
    init();
});

roms[8].addEventListener("click", function() {
    defaultRom = this.innerText;
    console.log(defaultRom);
    init();
});

roms[9].addEventListener("click", function() {
    defaultRom = this.innerText;
    console.log(defaultRom);
    init();
});

roms[10].addEventListener("click", function() {
    defaultRom = this.innerText;
    console.log(defaultRom);
    init();
});

roms[11].addEventListener("click", function() {
    defaultRom = this.innerText;
    console.log(defaultRom);
    init();
});

roms[12].addEventListener("click", function() {
    defaultRom = this.innerText;
    console.log(defaultRom);
    init();
});

roms[13].addEventListener("click", function() {
    defaultRom = this.innerText;
    console.log(defaultRom);
    init();
});

roms[14].addEventListener("click", function() {
    defaultRom = this.innerText;
    console.log(defaultRom);
    init();
});


/*
var link = document.getElementById('link');
link.addEventListener('click', editContent);
*/