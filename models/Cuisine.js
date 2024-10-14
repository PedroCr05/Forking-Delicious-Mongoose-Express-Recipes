const { Schema } = require(`mongoose`);

const CuisineSchema = new Schema(
  {
    title: { type: String, required: true },
    directions: [{ type: Schema.Types.ObjectId, ref: `Direction` }],
    desc: { type: String, require: true },
    origin: { type: String, requred: true },
    techniques: [{ type: String, required: true }],
    dietaryTags: [{ type: String, required: true }],
    img: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = CuisineSchema;
