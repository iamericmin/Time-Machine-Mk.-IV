/*

    
    ###  ###  ###   _______                   __  ___           __    _                ###  ###  ###
   ###  ###  ###   /_  __(_)___ ___  ___     /  |/  /___ ______/ /_  (_)___  ___      ###  ###  ###
  ###  ###  ###     / / / / __ `__ \/ _ \   / /|_/ / __ `/ ___/ __ \/ / __ \/ _ \    ###  ###  ###
 ###  ###  ###     / / / / / / / / /  __/  / /  / / /_/ / /__/ / / / / / / /  __/   ###  ###  ###
###  ###  ###     /_/ /_/_/ /_/ /_/\___/  /_/  /_/\__,_/\___/_/ /_/_/_/ /_/\___/   ###  ###  ###

Digital watch made by Eric Min
Based on Espruino firmware by Gordon Williams

*/

var dg1 = D19;
var dg2 = D18;
var A = D17;
var B = D16;
var C = D15;
var D = D14;
var E = D13;
var F = D12;
var G = D11;
var l1 = D25;
var l2 = D26;
var l3 = D27;
var l4 = D28;
var l5 = D29;
var left = D0;
var select = D1;
var right = D2;
var spk = D5;

/*
pinMode(dg1, "output");
pinMode(dg2, "output");
pinMode(A, "output");
pinMode(B, "output");
pinMode(C, "output");
pinMode(D, "output");
pinMode(E, "output");
pinMode(F, "output");
pinMode(G, "output");
pinMode(l1, "output");
pinMode(l2, "output");
pinMode(l3, "output");
pinMode(l4, "output");
pinMode(l5, "output");
pinMode(spk, "output");
*/

function allClear() {
  digitalWrite(A, 0);
  digitalWrite(B, 0);
  digitalWrite(C, 0);
  digitalWrite(D, 0);
  digitalWrite(E, 0);
  digitalWrite(F, 0);
  digitalWrite(G, 0);
  digitalWrite(dg1, 1);
  digitalWrite(dg2, 1);
  digitalWrite(l1, 0);
  digitalWrite(l2, 0);
  digitalWrite(l3, 0);
  digitalWrite(l4, 0);
  digitalWrite(l5, 0);
}

function clearDigits() {
  digitalWrite(A, 0);
  digitalWrite(B, 0);
  digitalWrite(C, 0);
  digitalWrite(D, 0);
  digitalWrite(E, 0);
  digitalWrite(F, 0);
  digitalWrite(G, 0);
}

function freq(f) { 
  if (f===0) digitalWrite(spk,0);
  else analogWrite(spk, 0.5, { freq: f } );
}

/*
A little help?

            ----A----
            |       |
            F       B
            |       |
            ----G----
            |       |
            E       C
            |       |
            ----D----
*/

function one() {
  digitalWrite(F, 1);
  digitalWrite(E, 1);
}

function two() {
  digitalWrite(A, 1);
  digitalWrite(B, 1);
  digitalWrite(G, 1);
  digitalWrite(E, 1);
  digitalWrite(D, 1);
}

function three() {
  digitalWrite(A, 1);
  digitalWrite(B, 1);
  digitalWrite(G, 1);
  digitalWrite(C, 1);
  digitalWrite(D, 1);
}

function four() {
  digitalWrite(F, 1);
  digitalWrite(G, 1);
  digitalWrite(B, 1);
  digitalWrite(C, 1);
}

function five() {
  digitalWrite(A, 1);
  digitalWrite(F, 1);
  digitalWrite(G, 1);
  digitalWrite(C, 1);
  digitalWrite(D, 1);
}

function six() {
  digitalWrite(A, 1);
  digitalWrite(F, 1);
  digitalWrite(E, 1);
  digitalWrite(G, 1);
  digitalWrite(C, 1);
  digitalWrite(D, 1);
}

function seven() {
  digitalWrite(F, 1);
  digitalWrite(A, 1);
  digitalWrite(B, 1);
  digitalWrite(C, 1);
}

function eight() {
  digitalWrite(A, 1);
  digitalWrite(B, 1);
  digitalWrite(C, 1);
  digitalWrite(D, 1);
  digitalWrite(E, 1);
  digitalWrite(F, 1);
  digitalWrite(G, 1);
}

function nine() {
  digitalWrite(A, 1);
  digitalWrite(B, 1);
  digitalWrite(C, 1);
  digitalWrite(G, 1);
  digitalWrite(F, 1);
  digitalWrite(D, 1);
}

function zero() {
  digitalWrite(A, 1);
  digitalWrite(B, 1);
  digitalWrite(C, 1);
  digitalWrite(D, 1);
  digitalWrite(E, 1);
  digitalWrite(F, 1);
}

function aa() {
  digitalWrite(A, 1);
  digitalWrite(B, 1);
  digitalWrite(C, 1);
  digitalWrite(E, 1);
  digitalWrite(F, 1);
  digitalWrite(G, 1);
}

function bb() {
  digitalWrite(C, 1);
  digitalWrite(D, 1);
  digitalWrite(E, 1);
  digitalWrite(F, 1);
  digitalWrite(G, 1);
}

function cc() {
  digitalWrite(A, 1);
  digitalWrite(F, 1);
  digitalWrite(E, 1);
  digitalWrite(D, 1);

}

function dd() {
  digitalWrite(B, 1);
  digitalWrite(C, 1);
  digitalWrite(G, 1);
  digitalWrite(E, 1);
  digitalWrite(D, 1);
}

function ee() {
  digitalWrite(A, 1);
  digitalWrite(F, 1);
  digitalWrite(G, 1);
  digitalWrite(E, 1);
  digitalWrite(D, 1);
}

function ff() {
  digitalWrite(A, 1);
  digitalWrite(F, 1);
  digitalWrite(G, 1);
  digitalWrite(E, 1);
}

function gg() {
  digitalWrite(A, 1);
  digitalWrite(F, 1);
  digitalWrite(E, 1);
  digitalWrite(D, 1);
  digitalWrite(C, 1);
}

function hh() {
  digitalWrite(F, 1);
  digitalWrite(E, 1);
  digitalWrite(G, 1);
  digitalWrite(C, 1);
  digitalWrite(B, 1);
}

function ii() {
  digitalWrite(B, 1);
  digitalWrite(C, 1);
}

function jj() {
  digitalWrite(B, 1);
  digitalWrite(C, 1);
  digitalWrite(E, 1);
  digitalWrite(D, 1);
}

function pp() {
  digitalWrite(A, 1);
  digitalWrite(F, 1);
  digitalWrite(E, 1);
  digitalWrite(G, 1);
  digitalWrite(B, 1);
}

function rr() {
  digitalWrite(G, 1);
  digitalWrite(E, 1);
}

function ss() {
  five();
}

function tt() {
  digitalWrite(D, 1);
  digitalWrite(F, 1);
  digitalWrite(E, 1);
  digitalWrite(G, 1);
}

function ll() {
  digitalWrite(D, 1);
  digitalWrite(F, 1);
  digitalWrite(E, 1);
}

function nn() {
  digitalWrite(D, 1);
  digitalWrite(F, 1);
  digitalWrite(G, 1);
}

function uu() {
  digitalWrite(D, 1);
  digitalWrite(F, 1);
  digitalWrite(E, 1);
}

function space() {
  digitalWrite(A, 0);
  digitalWrite(B, 0);
  digitalWrite(C, 0);
  digitalWrite(D, 0);
  digitalWrite(E, 0);
  digitalWrite(F, 0);
  digitalWrite(G, 0);
}

/*
function menu() {
  itemNum = 3;
  while(digitalRead(select) !== 0) {
    if (digitalRead(right, 1) === 0) {
      itemNum += 1;
    }
    if (itemNum == 4){ itemNum = 1;}
    else if (itemNum == 1) {
      showDisp("p", "r", BTN, 0);
    }
    else if (itemNum == 2) {
      showDisp("s", "t", BTN, 0);
    }
    else if (itemNum == 3) {
      showDisp("a", "l", BTN, 0);
    }
  }
}
*/

function data() {
  time = new Date();
  month = time.getMonth();
  date = time.getDate();
  hour = time.getHours();
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour === 0) {
    hour = 12;
  }
  hourFirstDigit = hour.toString()[0];
  hourSecondDigit = hour.toString()[1];
  min = time.getMinutes();
  minFirstDigit = min.toString()[0];
  minSecondDigit = min.toString()[1];
}

function display(digit, value) {
  allClear();
  if (digit == 1) {
    digitalWrite(dg1, 0);
    digitalWrite(dg2, 1);
  }

  if (digit == 2) {
    digitalWrite(dg2, 0);
    digitalWrite(dg1, 1);
  }

  if (digit == 3) {
    digitalWrite(dg1, 0);
    digitalWrite(dg2, 0);
  }

  switch (value) {
    case "0":
      clearDigits();
      zero();
      break;
    case "1":
      clearDigits();
      one();
      break;
    case "2":
      clearDigits();
      two();
      break;
    case "3":
      clearDigits();
      three();
      break;
    case "4":
      clearDigits();
      four();
      break;
    case "5":
      clearDigits();
      five();
      break;
    case "6":
      clearDigits();
      six();
      break;
    case "7":
      clearDigits();
      seven();
      break;
    case "8":
      clearDigits();
      eight();
      break;
    case "9":
      clearDigits();
      nine();
      break;
    case "p":
      clearDigits();
      pp();
      break;
    case "r":
      clearDigits();
      rr();
      break;
    case "s":
      clearDigits();
      ss();
      break;
    case "t":
      clearDigits();
      tt();
      break;
    case "a":
      clearDigits();
      aa();
      break;
    case "l":
      clearDigits();
      ll();
      break;
    case "e":
      clearDigits();
      ee();
      break;
    case "n":
      clearDigits();
      nn();
      break;
    case "d":
      clearDigits();
      dd();
      break;
    case "u":
      clearDigits();
      uu();
      break;
    case " ":
      clearDigits();
      space();
      break;
      
  }
}

/*
function sendNudes() {
  delay = 1000;
  while (digitalRead(l3) == 1) {
    display(1, "s");
    display(2, "e");
    digitalPulse(D3, 0, delay);
    display(1, "e");
    display(2, "n");
    digitalPulse(D3, 0, delay);
    display(1, "n");
    display(2, "d");
    digitalPulse(D3, 0, delay);
    display(1, "d");
    display(2, " ");
    digitalPulse(D3, 0, delay);
    display(1, " ");
    display(2, "n");
    digitalPulse(D3, 0, delay);
    display(1, "n");
    display(2, "u");
    digitalPulse(D3, 0, delay);
    display(1, "u");
    display(2, "d");
    digitalPulse(D3, 0, delay);
    display(1, "d");
    display(2, "e");
    digitalPulse(D3, 0, delay);
    display(1, "e");
    display(2, "s");
    digitalPulse(D3, 0, delay);
    display(1, "s");
    display(2, " ");
    digitalPulse(D3, 0, delay);
    display(1, "s");
  }
}
*/

function showDisp(val1, val2) {
    display(1, val1);
    display(2, val2);
}

function random(state) {
  if (state == 1 || state === true) {} else if (state === 0 || state === false) {
    allClear();
    clearTimeout();
    return;
  }

  digitalWrite(dg1, 0);
  digitalWrite(dg2, 0);

  var what = Math.floor((Math.random() * 3));

  if (what === 0) {
    allClear();
  } else if (what == 1 || what == 2) {
    digitalWrite(A, Math.floor((Math.random() * 2)));
    digitalWrite(B, Math.floor((Math.random() * 2)));
    digitalWrite(C, Math.floor((Math.random() * 2)));
    digitalWrite(D, Math.floor((Math.random() * 2)));
    digitalWrite(E, Math.floor((Math.random() * 2)));
    digitalWrite(F, Math.floor((Math.random() * 2)));
    digitalWrite(G, Math.floor((Math.random() * 2)));
  }

  setTimeout(random, ((Math.random() * 700) + 1));
}

function dashes(state) {
  digitalWrite(dg1, 0);
  digitalWrite(dg2, 0);

  if (state == 1 || state === true) {
    digitalWrite(A, 1);
    digitalWrite(G, 1);
    digitalWrite(D, 1);
    analogWrite(l1, 0.05);
    analogWrite(l2, 0.05);
    analogWrite(l3, 0.05);
    analogWrite(l4, 0.05);
    analogWrite(l5, 0.05);
  } else if (state === 0 || state === false) {
    digitalWrite(A, 0);
    digitalWrite(G, 0);
    digitalWrite(D, 0);
    digitalWrite(l1,0);
    digitalWrite(l2,0);
    digitalWrite(l3,0);
    digitalWrite(l4,0);
    digitalWrite(l5,0);
  }
}

function slideUp() {
  var delay = 30;
  allClear();
  digitalWrite(dg1, 0);
  digitalWrite(dg2, 0);
  for (i = 0; i < 5; i++) {
    digitalWrite(A, 0);
    digitalPulse(D3, 0, delay);
    digitalWrite(A, 0);
    digitalWrite(B, 0);
    digitalWrite(F, 0);
    digitalPulse(D3, 0, delay);
    digitalWrite(A, 0);
    digitalWrite(B, 0);
    digitalWrite(F, 0);
    digitalWrite(G, 0);
    digitalPulse(D3, 0, delay);
    digitalWrite(A, 0);
    digitalWrite(B, 0);
    digitalWrite(F, 0);
    digitalWrite(G, 0);
    digitalWrite(C, 0);
    digitalWrite(E, 0);
    digitalPulse(D3, 0, delay);
    digitalWrite(A, 0);
    digitalWrite(B, 0);
    digitalWrite(F, 0);
    digitalWrite(G, 0);
    digitalWrite(C, 0);
    digitalWrite(E, 0);
    digitalWrite(D, 0);
    digitalPulse(D3, 0, 05);
    digitalWrite(A, 1);
    digitalWrite(B, 0);
    digitalWrite(F, 0);
    digitalWrite(G, 0);
    digitalWrite(C, 0);
    digitalWrite(E, 0);
    digitalWrite(D, 0);
    digitalPulse(D3, 0, delay);
    digitalWrite(A, 1);
    digitalWrite(B, 1);
    digitalWrite(F, 1);
    digitalWrite(G, 0);
    digitalWrite(C, 0);
    digitalWrite(E, 0);
    digitalWrite(D, 0);
    digitalPulse(D3, 0, delay);
    digitalWrite(A, 1);
    digitalWrite(B, 1);
    digitalWrite(F, 1);
    digitalWrite(G, 1);
    digitalWrite(C, 0);
    digitalWrite(E, 0);
    digitalWrite(D, 0);
    digitalPulse(D3, 0, delay);
    digitalWrite(A, 1);
    digitalWrite(B, 1);
    digitalWrite(F, 1);
    digitalWrite(G, 1);
    digitalWrite(C, 1);
    digitalWrite(E, 1);
    digitalWrite(D, 0);
    digitalPulse(D3, 0, delay);
    digitalWrite(A, 1);
    digitalWrite(B, 1);
    digitalWrite(F, 1);
    digitalWrite(G, 1);
    digitalWrite(C, 1);
    digitalWrite(E, 1);
    digitalWrite(D, 1);
    digitalPulse(D3, 0, delay);
  }
  allClear();
}


function swirl() {
  digitalWrite(dg1, 0);
  digitalWrite(dg2, 0);
  for (delay = 35; delay > 0; delay = delay - 2) {
    digitalWrite(A, 0);
    digitalWrite(B, 1);

    digitalPulse(D3, 0, delay);

    digitalWrite(B, 0);
    digitalWrite(C, 1);

    digitalPulse(D3, 0, delay);

    digitalWrite(C, 0);
    digitalWrite(D, 1);

    digitalPulse(D3, 0, delay);

    digitalWrite(D, 0);
    digitalWrite(E, 1);

    digitalPulse(D3, 0, delay);

    digitalWrite(E, 0);
    digitalWrite(F, 1);

    digitalPulse(D3, 0, delay);

    digitalWrite(F, 0);
    digitalWrite(A, 1);

    digitalPulse(D3, 0, delay);
  }
  digitalWrite(A, 0);
}

function flashlight(state) {
  if (state === true || state == 1) {
    digitalWrite(l1, 1);
    digitalWrite(l2, 1);
    digitalWrite(l3, 1);
    digitalWrite(l4, 1);
    digitalWrite(l5, 1);
  } else if (state === false || state === 0) {
    digitalWrite(l1, 0);
    digitalWrite(l2, 0);
    digitalWrite(l3, 0);
    digitalWrite(l4, 0);
    digitalWrite(l5, 0);
  }
}

function beep(f) { 
  if (f===0) digitalWrite(spk,0);
  else analogWrite(spk, 0.5, { freq: f } );
}

function buttonBoop(f) {
  beep(f);
  setTimeout(function() {digitalWrite(spk, 0);}, 50);
}

function breathe(state) {
  let ledBrightness = 0;
  let ledPin = l5;
  let fadeIn = false;
  function fadeLED() {
   if((ledBrightness <= 0) || (ledBrightness >= 1)){
     fadeIn = !fadeIn;
   }

    setLedBrightness(fadeIn);
  }
  function setLedBrightness(fadeIn){
      if(fadeIn){
      ledBrightness += 0.01;
    }
    else {
      ledBrightness -=0.01;
    }

    analogWrite(ledPin, ledBrightness);
  }
  
  if (state === true || state == 1) {
    clearInterval();
    setInterval(fadeLED, 40);
  } else if (state === false || state === 0) {
    clearInterval();
    digitalWrite(ledPin, 0);
  }
}

function bootAnim() {
  delay = 50;
  ledBrightness = 0;
  setTimeout(allClear, 1500);
  while (ledBrightness <= 1) {
    analogWrite(l1, ledBrightness);
    analogWrite(l2, ledBrightness);
    analogWrite(l3, ledBrightness);
    analogWrite(l4, ledBrightness);
    analogWrite(l5, ledBrightness);
    digitalPulse(D3, 0, 25);
  }
  allClear();
}

pinMode(left, 'input_pullup');
pinMode(select, 'input_pullup');
pinMode(right, 'input_pullup');

/*
setWatch(function(e) {
  buttonBoop(650);
}, select, {repeat: true, debounce: 50, edge: "falling"});

setWatch(function(e) {
  buttonBoop(950);
}, select, {repeat: true, debounce: 50, edge: "rising"});
*/

setWatch(function(e) {
  data();
  buttonBoop(650);
  while (digitalRead(select) != 1) {
    display(1, hourFirstDigit);
    display(2, hourSecondDigit);
  }
  allClear();
}, select, {repeat: true, debounce: 50, edge: "falling"});

setWatch(function(e) {
  data();
  buttonBoop(950);
  for (i = 0; i < 30; i++) {
    display(1, minFirstDigit);
    display(2, minSecondDigit);
  }
    allClear();
}, select, {repeat: true, debounce: 50, edge: "rising"});

/*
var flashState = false;
setWatch(function(e) {
  var isLong = (e.time - e.lastTime) > 1;
  flashState = !flashState;
  if (isLong) {
    flashlight(flashState);
    //setDeepSleep(1);
  }
    //setDeepSleep(1);
}, right, { repeat: true, debounce: 50, edge: "rising" });
*/

var dashesState = false;
var flashState = false;
setWatch(function(e) {
  var isLong = 2 > (e.time - e.lastTime);
  var isLonger = (e.time - e.lastTime) > 2;
  dashesState = !dashesState;
  flashState = !flashState;
  if (isLong) {
    flashlight(flashState);
  } else if (isLonger) {
    dashes(dashesState);
  }
    //setDeepSleep(1);
}, left, {repeat: true, debounce: 50, edge: "rising"});

/*
var randomState = false;
setWatch(function(e) {
  var isLong = (e.time - e.lastTime) > 1;
  randomState = !randomState;
  if (isLong) {
    random(randomState);
  }
    //setDeepSleep(1);
}, up, {repeat: true, debounce: 50, edge: "rising"});
*/

setWatch(function(e) {
  var isLong = 2 > (e.time - e.lastTime) >= 1;
  var isLonger = (e.time - e.lastTime) >= 2;
  if (isLong) {
    NRF.disconnect();
    NRF.stop();
    //setDeepSleep(1);
  } else if (isLonger) {
    NRF.wake();
    //setDeepSleep(1);
  }
}, right, {repeat: true, edge: 'rising', debounce: 50});

function onInit() {
  data();
  digitalWrite(dg1, 1);
  digitalWrite(dg2, 1);
  //setDeepSleep(1);
}

//setDeepSleep(1);