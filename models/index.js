const mongoose = require(`mongoose`);
const RecipeNeedsSchema = require(`./cuisine-recipe`);
const RecipeDirectionsSchema = require(`./cuisine-recipe-directions`);
const CuisineTypeSchema = require(`./cuisine-type`);
const RecipeMeasurementsSchema = require(`./recipe-measurements/measurements`);
const RecipeTimingSchema = require(`./recipe-timings/timing`);

const RecipeNeeds = mongoose.model(`RecipeNeeds`, RecipeNeedsSchema);
const RecipeDirections = mongoose.model(
  `RecipeDirections`,
  RecipeDirectionsSchema
);
const CuisineType = mongoose.model(`CuisineType`, CuisineTypeSchema);
const RecipeMeasurements = mongoose.model(
  `RecipeMeasurements`,
  RecipeMeasurementsSchema
);

const RecipeTimings = mongoose.model(`RecipeTiming`, RecipeTimingSchema);

module.exports = {
  RecipeDirections,
  RecipeMeasurements,
  RecipeTimings,
  RecipeNeeds,
  CuisineType,
};
