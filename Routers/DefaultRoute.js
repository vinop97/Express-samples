const express = require("express");
const Router = express.Router();
const DefaultRouteController = require("../Controllers/DefaultRouteController");

Router.get("/",DefaultRouteController.DefaultController);

module.exports = Router;