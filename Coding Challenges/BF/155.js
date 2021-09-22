const count = (() => {
  let time = 0;
  const counter =()=>++time;
  counter.reset=()=>time=0;
  return counter;
})();

// or

let c = 0;
function count(){
  return ++c;
}
count.reset = ()=>c = 0;
