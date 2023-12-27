const fs = require('fs');

function writeJsonFile(arr) {
  fs.writeFileSync('./src/storage.json', JSON.stringify(arr));
}

function readJsonFile() {
  const jsonString = fs.readFileSync('./src/storage.json');
  const data = JSON.parse(jsonString);
  return data;
}

function getAllSkills() {
  const arr = readJsonFile();
  if (!arr.length) throw new Error('database is empty');
  return arr;
}

function updateSkills(id, title) {
  const arr = readJsonFile();
  const index = arr.findIndex(el => el.id == id);
  if (index < 0) throw new Error('this id not found');
  const newObj = { id, title };
  arr[index] = newObj;
  writeJsonFile(arr);
  return arr;
}

module.exports = { getAllSkills, updateSkills };
