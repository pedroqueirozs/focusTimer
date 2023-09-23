import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.IsRunning = document.documentElement.classList.toggle("running");

  timer.countDown();
  soundClick();
}
export function buttonMore() {
  if (state.minutes >= 60) {
    return;
  }
  state.minutes += 5;
  timer.updatedDisplay();
  soundClick();
}
export function buttonAnyLess() {
  if (state.minutes <= 0) {
    return;
  }
  state.minutes -= 5;
  timer.updatedDisplay();
  soundClick();
}
export function reset() {
  state.IsRunning = false;
  document.documentElement.classList.remove("running");
  timer.updatedDisplay();
  soundClick();
}
export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}
export function florest() {
  soundClick();
  resetSouds();

  state.IsMute = document.documentElement.classList.toggle("music-on");
  if (state.IsMute) {
    sounds.soudFlorest.play();
    el.butonFlorest.classList.add("corButonFoco");

    return;
  }

  sounds.soudFlorest.pause();
  el.butonFlorest.classList.remove("corButonFoco");
}

export function fire() {
  soundClick();
  resetSouds();
  state.IsMute = document.documentElement.classList.toggle("music-on");
  if (state.IsMute) {
    sounds.soudFire.play();
    el.butonFire.classList.add("corButonFoco");

    return;
  }

  sounds.soudFire.pause();
  el.butonFire.classList.remove("corButonFoco");
}

export function rain() {
  soundClick();
  resetSouds();
  state.IsMute = document.documentElement.classList.toggle("music-on");
  if (state.IsMute) {
    sounds.soudRain.play();
    el.butonRain.classList.add("corButonFoco");

    return;
  }

  sounds.soudRain.pause();
  el.butonFogo.classList.remove("corButonFoco");
}

export function birds() {
  soundClick();
  resetSouds();
  state.IsMute = document.documentElement.classList.toggle("music-on");
  if (state.IsMute) {
    sounds.soudBirds.play();
    el.butonBirds.classList.add("corButonFoco");

    return;
  }

  sounds.soudBirds.pause();
  el.butonBirds.classList.remove("corButonFoco");
}

function resetSouds() {
  sounds.soudFire.pause();
  el.butonFire.classList.remove("corButonFoco");

  sounds.soudFlorest.pause();
  el.butonFlorest.classList.remove("corButonFoco");

  sounds.soudRain.pause();
  el.butonRain.classList.remove("corButonFoco");

  sounds.soudBirds.pause();
  el.butonBirds.classList.remove("corButonFoco");
}
function soundClick() {
  sounds.buttonPressAudio.play();
}
