const { Schema } = require(`mongoose`);

const DirectionSchema = new Schema(
  {
    title: { type: String, required: true },
    cuisine: { type: Schema.Types.ObjectId, ref: `Cuisine` },
    recipe: { type: Schema.Types.ObjectId, ref: `Recipe` },
    directions: [
      {
        directionName: { type: String, required: false },
        stepNumber: { type: Number, required: true },
        instructions: { type: String, required: true },
        fahrenheit: { type: Number, require: false },
        celsius: { type: Number, require: false },
        measureItem: { type: String, required: false },
        grams: { type: Number, required: false },
        ounces: { type: Number, required: false },
        teaspoons: { type: Number, required: false },
        tablespoons: { type: Number, required: false },
      },
    ],
  },
  { timestamps: true }
);

module.exports = DirectionSchema;
