const db = require(`../db`);
const { Cuisine, Direction, Recipe } = require(`../models`);

db.on(`error`, console.error.bind(console, `MongoDB connection error:`));

const main = async () => {
  await Cuisine.deleteMany();

  const chickenParmesan = await Direction.findOne({
    title: `Chicken Parmesan Directions`,
  });

  const chickenParmesanRecipe = await Recipe.findOne({
    title: `Chicken Parmesan`,
  });

  const cuisines = [
    {
      title: `Chicken Parmesan`,
      directions: chickenParmesan._id,
      recipe: chickenParmesanRecipe._id,
      desc: `My version of chicken Parmesan is a little different than what they do in the restaurants, with less sauce and a crispier crust.`,
      origin: `Italian-American`,
      techniques: [
        `Pounding Chicken`,
        `Breading`,
        `Frying`,
        `Baking`,
        `Seasoning`,
        `Layering`,
      ],
      dietaryTags: [`Dairy`, `Gluten`, `High-Protein`, `Nut-Free`],
      img: `https://www.allrecipes.com/thmb/1Y4Saw1no7Wx0fwU7wmGybVOvUs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ycct-chicken-parmesan-photo-by-allrecipes-2000-374340580006476b8dc4755a3d5b01b0.jpeg`,
    },
  ];

  await Cuisine.insertMany(cuisines);
  console.log(`
        =================================
        +=+=+=+[Cuisines created!]=+=+=+=
        =================================
    `);
};

const run = async () => {
  await main();
  db.close();
};

run();
