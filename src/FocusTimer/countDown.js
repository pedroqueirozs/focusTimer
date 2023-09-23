import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";
import { kichenTimer } from "./sounds.js";
import { updatedDisplay } from "./timer.js";

export function countDown() {
  clearTimeout(state.countDouwnId);
  if (!state.IsRunning) {
    return;
  }
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }
  if (minutes < 0) {
    reset();
    kichenTimer.play();
    return;
  }

  updatedDisplay(minutes, seconds);

  state.countDouwnId = setTimeout(() => {
    countDown();
  }, 1000);
}
