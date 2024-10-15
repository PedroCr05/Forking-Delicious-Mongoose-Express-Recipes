const { Schema } = require(`mongoose`);

const RecipeSchema = new Schema(
  {
    name: { type: String, required: true },
    directions: { type: Schema.Types.ObjectId, ref: `Direction` },
    ingredients: [
      {
        name: { type: String, required: true },
        quantity: { type: String, required: false },
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
