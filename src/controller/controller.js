const express = require('express');
const { getAllSkills, getAllSkillsById, updateSkills, createSkills, deleteSkills, updateSkillsById } = require('../service/service');
const { isValidId, isValidSkill } = require('../helper/validation');
const { buildResponse } = require('../helper/buildResponse');

const route = express.Router();

route.get('/', (_req, res) => {
  try {
    const data = getAllSkills();
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 400, error.message);
  }
});

route.get('/:id', isValidId, (req, res) => {
  try {
    const { id } = req.params;
    const data = getAllSkillsById(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 400, error.message);
  }
});

route.put('/:id', isValidId, isValidSkill, (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const data = updateSkills(id, title);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 400, error.message);
  }
});

route.post('/', isValidSkill, (req, res) => {
  try {
    const { title } = req.body;
    const data = createSkills(title);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 400, error.message);
  }
});

route.delete('/:id', isValidId, (req, res) => {
  try {
    const { id } = req.params;
    const data = deleteSkills(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 400, error.message);
  }
});

route.patch('/:id', isValidId, isValidSkill, (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = updateSkillsById(id, body);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 400, error.message);
  }
});

module.exports = { route };
