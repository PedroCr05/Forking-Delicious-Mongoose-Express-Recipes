const { Schema } = require(`mongoose`);

const CuisineIngredientsSchema = new Schema({
  cuisineName: { type: String, required: true },
  cuisineName: { type: String, required: true },
  cuisineImg: { type: String, required: true },
  recipeCredits: { type: String, required: true },
  creditSocials: { type: String, required: true },
  recipeDifficulty: { type: String, required: true },
  recipeYieldsOfServings: { type: Number, required: false },
  recipeEstimatedPrepTime: { type: Number, required: false },
  recipeCookTimeInMinutes: { type: Number, required: false },
  recipeTotalTimeInMinutes: { type: Number, required: false },
});
