"use strict";
var context = new AudioContext();
var oci = {};
var gain;
var isStart = false;
var hz = {
    C5: 523.251,
    D5: 587.330,
    E5: 659.255,
    F5: 698.456,
    G5: 783.991,
    A5: 880,
    B5: 987.767
};
gain = context.createGain();
gain.gain.value = 0.1;
gain.connect(context.destination);
var ele = document.getElementById('btn');
ele === null || ele === void 0 ? void 0 : ele.addEventListener('click', function () {
    entry();
});
ele = document.getElementById('vol');
ele.value = gain.gain.value;
ele === null || ele === void 0 ? void 0 : ele.addEventListener('change', function (e) {
    changeVolume(e.target.value);
});
// C5
ele = document.getElementById('keyC5');
ele === null || ele === void 0 ? void 0 : ele.addEventListener('mousedown', function (e) {
    startOscillator('C5');
});
ele === null || ele === void 0 ? void 0 : ele.addEventListener('mouseup', function (e) {
    stopOscillator('C5');
});
// D5
ele = document.getElementById('keyD5');
ele === null || ele === void 0 ? void 0 : ele.addEventListener('mousedown', function (e) {
    startOscillator('D5');
});
ele === null || ele === void 0 ? void 0 : ele.addEventListener('mouseup', function (e) {
    stopOscillator('D5');
});
// E5
ele = document.getElementById('keyE5');
ele === null || ele === void 0 ? void 0 : ele.addEventListener('mousedown', function (e) {
    startOscillator('E5');
});
ele === null || ele === void 0 ? void 0 : ele.addEventListener('mouseup', function (e) {
    stopOscillator('E5');
});
// F5
ele = document.getElementById('keyF5');
ele === null || ele === void 0 ? void 0 : ele.addEventListener('mousedown', function (e) {
    startOscillator('F5');
});
ele === null || ele === void 0 ? void 0 : ele.addEventListener('mouseup', function (e) {
    stopOscillator('F5');
});
// G5
ele = document.getElementById('keyG5');
ele === null || ele === void 0 ? void 0 : ele.addEventListener('mousedown', function (e) {
    startOscillator('G5');
});
ele === null || ele === void 0 ? void 0 : ele.addEventListener('mouseup', function (e) {
    stopOscillator('G5');
});
// A5
ele = document.getElementById('keyA5');
ele === null || ele === void 0 ? void 0 : ele.addEventListener('mousedown', function (e) {
    startOscillator('A5');
});
ele === null || ele === void 0 ? void 0 : ele.addEventListener('mouseup', function (e) {
    stopOscillator('A5');
});
// B5
ele = document.getElementById('keyB5');
ele === null || ele === void 0 ? void 0 : ele.addEventListener('mousedown', function (e) {
    startOscillator('B5');
});
ele === null || ele === void 0 ? void 0 : ele.addEventListener('mouseup', function (e) {
    stopOscillator('B5');
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'a') {
        startOscillator('C5');
    }
    else if (e.key === 's') {
        startOscillator('D5');
    }
    else if (e.key === 'd') {
        startOscillator('E5');
    }
    else if (e.key === 'f') {
        startOscillator('F5');
    }
    else if (e.key === 'g') {
        startOscillator('G5');
    }
    else if (e.key === 'h') {
        startOscillator('A5');
    }
    else if (e.key === 'j') {
        startOscillator('B5');
    }
});
document.addEventListener('keyup', function (e) {
    if (e.key === 'a') {
        stopOscillator('C5');
    }
    else if (e.key === 's') {
        stopOscillator('D5');
    }
    else if (e.key === 'd') {
        stopOscillator('E5');
    }
    else if (e.key === 'f') {
        stopOscillator('F5');
    }
    else if (e.key === 'g') {
        stopOscillator('G5');
    }
    else if (e.key === 'h') {
        stopOscillator('A5');
    }
    else if (e.key === 'j') {
        stopOscillator('B5');
    }
});
function startOscillator(tone) {
    oci[tone] = context.createOscillator();
    oci[tone].type = 'triangle'; // 'sawtooth', 'triangle' 'square' "sine";
    oci[tone].frequency.setValueAtTime(hz[tone], context.currentTime);
    oci[tone].connect(gain);
    oci[tone].start();
}
function stopOscillator(tone) {
    oci[tone].stop();
}
function entry() {
}
function changeVolume(vol) {
    gain.gain.value = vol;
}
