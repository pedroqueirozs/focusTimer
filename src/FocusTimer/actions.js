import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";
export function toggleRunning() {
  state.IsRunning = document.documentElement.classList.toggle("running");

  timer.countDown();
  sounds.buttonPressAudio.play();
}
export function reset() {
  state.IsRunning = false;
  document.documentElement.classList.remove("running");
  timer.updatedDisplay();
  sounds.buttonPressAudio.play();
  sounds.bgAudio.pause();
}
export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}
export function toggleMusic() {
  state.IsMute = document.documentElement.classList.toggle("music-on");
  if (state.IsMute) {
    sounds.bgAudio.play();
    return;
  }
  sounds.bgAudio.pause();
}
