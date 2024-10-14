const fs = require("fs");
const mustache = require("mustache");

console.log("Starting file transformation");

const PATH_PREFIX = "../../restaurant-app/frontend/src/app";
const inputFilePaths = [PATH_PREFIX + "/layout.tsx", PATH_PREFIX + "/menu.ts"];
console.log('test 2');


function getRandomInt() {
  const min = Math.ceil(1);
  const max = Math.floor(9999);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomInt();
const data = {
  restaurant_name: "My Restaurant " + randomNumber,
  restaurant_description: "My Restaurant description " + randomNumber,
};

for (let i = 0; i < inputFilePaths.length; i++) {
  const path = inputFilePaths[i];
  const content = fs.readFileSync(path, "utf-8");
  const output = mustache.render(content, data);
  fs.writeFileSync(path, output);
}
console.log("All file templates transformed");
