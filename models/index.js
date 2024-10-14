const mongoose = require(`mongoose`);
const CuisineSchema = require(`./Cuisine`);
const DirectionSchema = require("./Direction");
const RecipeSchema = require("./Recipe");

const Cuisine = mongoose.model(`Cuisine`, CuisineSchema);
const Direction = mongoose.model(`Direction`, DirectionSchema);
const Recipe = mongoose.model(`Recipe`, RecipeSchema);

module.exports = {
  Cuisine,
  Direction,
  Recipe,
};
