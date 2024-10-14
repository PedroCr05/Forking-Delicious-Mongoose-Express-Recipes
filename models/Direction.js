const { Schema } = require(`mongoose`);

const DirectionSchema = new Schema(
  {
    title: { type: String, require: true },
    cuisine: { type: Schema.Types.ObjectId, ref: `Cuisine` },
    recipe: { type: Schema.Types.ObjectId, ref: `Recipe` },
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
