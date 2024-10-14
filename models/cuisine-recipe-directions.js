const { Schema } = require(`mongoose`);

const RecipeDirectionsSchema = new Schema({
  cuisineName: { type: String, required: true },
  cuisineImg: { type: String, required: true },
  recipeCreditsBy: { type: String, required: true },
  creditorsSocials: { type: String, required: true },
  recipeDifficulty: { type: String, required: true },
  recipeTiming: { type: Schema.Types.ObjectId, ref: `RecipeTiming` },
  recipeMeasurements_id: [
    { type: Schema.Types.ObjectId, ref: `RecipeMeasurements` },
  ],
});

module.exports = RecipeDirectionsSchema;
