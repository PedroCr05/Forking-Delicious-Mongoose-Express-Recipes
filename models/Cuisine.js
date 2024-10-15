const { Schema } = require(`mongoose`);

const CuisineSchema = new Schema(
  {
    name: { type: String, required: true },
    recipe: { type: Schema.Types.ObjectId, ref: `Recipe` },
    directions: { type: Schema.Types.ObjectId, ref: `Direction` },
    desc: { type: String, require: true },
    origin: { type: String, required: true },
    techniques: [{ type: String, required: true }],
    dietaryTags: [{ type: String, required: true }],
    img: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = CuisineSchema;
