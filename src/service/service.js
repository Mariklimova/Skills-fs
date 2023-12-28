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

function getAllSkillsById(id) {
  const arr = readJsonFile();
  const filt = arr.filter(el => el.id == id);
  if (!filt.length) throw new Error('this id not found');
  return filt[0];
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

function createSkills(title) {
  const arr = readJsonFile();
  const newObj = { id: Math.max(...arr.map(el => el.id)) + 1, title };
  arr.push(newObj);
  writeJsonFile(arr);
  return arr;
}

function deleteSkills(id) {
  const arr = readJsonFile();
  const filt = arr.filter(el => el.id != id);
  if (arr.length == filt.length) throw new Error('this id not found');
  return filt;
}

function updateSkillsById(id, body) {
  const arr = readJsonFile();
  const index = arr.findIndex(el => el.id == id);
  if (index < 0) throw new Error('this id not found');
  const item = arr[index];
  arr[index] = { ...item, ...body };
  writeJsonFile(arr);
  return arr;
}

module.exports = { getAllSkills, getAllSkillsById, updateSkills, createSkills, deleteSkills, updateSkillsById };
