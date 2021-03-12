import Renderer from './renderer.js';
import Keyboard from './keyboard.js';
import Speaker from './speaker.js';
import CPU from './cpu.js';

const renderer = new Renderer(10);
const keyboard = new Keyboard();
const speaker = new Speaker();
const cpu = new CPU(renderer, keyboard, speaker);

let loop;

let fps = 60,
    fpsInterval, startTime, now, then, elapsed;

var defaultRom = "BLINKY";



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


//init();





function newRoms() {
    //let rom = document.getElementsByClassName("anchors")[0].id;
    let rom = document.getElementById("myAnchor").innerHTML;
    alert(rom);

    defaultRom = rom;
    console.log(defaultRom);
}

//export default defaultRom
//exports = defaultRom;






var link = document.getElementById('link');
link.addEventListener('click', editContent);

function editContent() {
    var editor = document.getElementById('myAnchor').innerHTML;
    defaultRom = editor;
    //alert(defaultRom);
    console.log(defaultRom);
    init();
}