const { Schema } = require(`mongoose`);

const TimingSchema = new Schema(
  {
    cuisineName: { type: String, required: true },
    recipeYieldsOfServings: { type: Number, required: false },
    recipeEstimatedPrepTime: { type: Number, required: false },
    recipeCookTimeInMinutes: { type: Number, required: false },
    recipeTotalTimeInMinutes: { type: Number, required: false },
  },
  { timestamps: true }
);

module.exports = TimingSchema;
