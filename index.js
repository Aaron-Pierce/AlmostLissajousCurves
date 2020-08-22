let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background(33);

}
const UPPER_BOUND = 60;
const STEP = 6;
const MARGINS = 5;

const WAVE_SIZE = 0.5 * Math.min(canvasHeight, canvasWidth) / (UPPER_BOUND / STEP) - (MARGINS/(UPPER_BOUND/STEP));
let periods = [];
for (let i = STEP; i < UPPER_BOUND; i += STEP) {
    periods.push(i)
}

function draw() {
    frameRate(60)
    // stroke(255)

    let Ix = 0;
    for (let Px of periods) {
        let Iy = 0;
        for (let Py of periods) {
            let y = WAVE_SIZE * cos(frameCount / Py) + (2 * WAVE_SIZE * (Py / STEP));
            let x = WAVE_SIZE * sin(frameCount / Px) + (2 * WAVE_SIZE * (Px / STEP));
            stroke(255 - (Px/UPPER_BOUND * 125), (Px/UPPER_BOUND * 122) + (Py/UPPER_BOUND * 122), 255 - (Py/UPPER_BOUND * 125))
            point(x + MARGINS*Ix - 2.5*STEP, y + MARGINS*Iy - 2.5*STEP)
            Iy++
        }
        Ix++;
    }

}