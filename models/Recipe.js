const { Schema } = require(`mongoose`);

const RecipeSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [
      {
        name: { type: String, required: true },
        quantity: { type: String, required: true },
      },
    ],
    prepTimeInMin: { type: Number, required: true },
    cookTimeInMin: { type: Number, required: true },
    totalTimeInMin: { type: Number, required: true },
    servings: { type: Number, required: true },
    source: { type: String, required: true },
    publishedDate: { type: Date, require: true },
  },
  { timestamps: true }
);

module.exports = RecipeSchema;
