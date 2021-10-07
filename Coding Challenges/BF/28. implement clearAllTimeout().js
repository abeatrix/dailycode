/**
 * cancel all timer from window.setTimeout
 */
 const timers = [];
 let setTimer = window.setTimeout;
 window.setTimeout = (...args) => {
   let timer = setTimer(...args);
   timers.push(timer);
   return timer;
 }
function clearAllTimeout() {
 // your code here
 timers.forEach(t=>window.clearTimeout(t))
}