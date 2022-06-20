const express = require('express');
const Router = express.Router();
const FormPostController = require("../Controllers/FormPostController");

Router.post("/Formpost",FormPostController.FormPostController);

module.exports = Router;