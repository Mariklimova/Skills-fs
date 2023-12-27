const express = require('express');
const { getAllSkills, updateSkills } = require('../service/service');
const { buildResponse } = require('../helper/buildResponse');

const route = express.Router();

route.get('/', (_req, res) => {
  try {
    const data = getAllSkills();
    res.status(200).send(data);
  } catch (error) {
    buildResponse(res, 400, error.message);
  }
});

route.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const data = updateSkills(id, title);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// route.post('/:id',(req,res)=>{
//     try {
//         const {id} = req.params;
//         const {title}  = req.body;
//         const data = updateSkills(id,title)
//         res.status(200).send(data)
//     } catch (error) {
//         res.status(400).send(error.message)
//     }
// })

module.exports = { route };
