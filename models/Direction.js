const { Schema } = require(`mongoose`);

const DirectionSchema = new Schema(
  {
    recipe: { type: Schema.Types.ObjectId, ref: `Recipes` },
    directions: [
      {
        stepNumber: { type: Number, required: true },
        instructions: { type: String, required: true },
        temperature: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

module.exports = DirectionSchema;
