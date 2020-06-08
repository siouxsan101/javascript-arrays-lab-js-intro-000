var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return name;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return name;
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return name;
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return name;
}

function appendKitten(name) {
  kittens[...kittens,name];
  return kittens;
}
