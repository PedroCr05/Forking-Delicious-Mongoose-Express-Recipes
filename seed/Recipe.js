const db = require(`../db`);
const { Recipe, Direction } = require(`../models`);

db.on(`error`, console.error.bind(console, `MongoDB connection error:`));

const main = async () => {
  await Recipe.deleteMany();

  const chickenParmesanDirection = await Direction.findOne({
    name: `Chicken Parmesan Directions`,
  });

  const beefSoupDirection = await Direction.findOne({
    name: `Los Barrios Caldo De Res Directions`,
  });

  const sulppangDirection = await Direction.findOne({
    name: `Sulppang Directions`,
  });

  const recipes = [
    {
      name: `Chicken Parmesan`,
      directions: chickenParmesanDirection._id,
      ingredients: [
        { name: `Chicken breast halves`, quantity: `4 skinless, boneless` },
        { name: `Salt and freshly ground black pepper`, quantity: `to taste` },
        { name: `Eggs`, quantity: `2 large` },
        { name: `Panko bread crumbs`, quantity: `1 cup` },
        { name: `Grated Parmesan cheese`, quantity: `3/4 cup, divided` },
        { name: `All-purpose flour`, quantity: `2 tablespoons` },
        { name: `Olive oil for frying`, quantity: `1/2 cup` },
        { name: `Prepared tomato sauce`, quantity: `1/2 cup` },
        { name: `Fresh mozzarella`, quantity: `1/4 cup, cut into small cubes` },
        { name: `Chopped fresh basil`, quantity: `1/4 cup` },
        { name: `Grated provolone cheese`, quantity: `1/2 cup` },
        { name: `Olive oil`, quantity: `2 teaspoons` },
      ],
      prepTimeInMin: 15,
      cookTimeInMin: 20,
      totalTimeInMin: 45,
      servings: 4,
      source: `https://www.allrecipes.com/recipe/223042/chicken-parmesan/`,
      publishedDate: new Date(`2024-10-10`),
    },
    {
      name: `Los Barrios Caldo De Res`,
      directions: beefSoupDirection._id,
      ingredients: [
        { name: `Beef`, quantity: `500g` },
        { name: `Vegetables`, quantity: `800g, cut into large chunks` },
        { name: `Water`, quantity: `32 ounces` },
        { name: `Salt` },
        { name: `Seasoning` },
      ],
      prepTimeInMin: 20,
      cookTimeInMin: 120,
      totalTimeInMin: 140,
      servings: 6,
      source: `https://www.food.com/recipe/los-barrios-caldo-de-res-beef-soup-127747`,
      publishedDate: new Date(`2024-10-10`),
    },
    {
      name: `Sulppang`,
      directions: sulppangDirection._id,
      ingredients: [
        { name: `Makgeolli`, quantity: `1 cup` },
        { name: `Sugar`, quantity: `67g (1/3 cup)` },
        { name: `Dry yeast`, quantity: `1 teaspoon` },
        { name: `Kosher salt`, quantity: `½ teaspoon` },
        { name: `All-purpose flour`, quantity: `312g (2½ cups)` },
        { name: `Apple`, quantity: `75g (½ cup)` },
        { name: `Fresh cranberry beans`, quantity: `85g (½ cup)` },
      ],
      prepTimeInMin: 20,
      cookTimeInMin: 35,
      totalTimeInMin: 55,
      servings: 4,
      source: `https://www.maangchi.com/recipe/sulppang`,
      publishedDate: new Date(`2024-10-10`),
    },
  ];

  await Recipe.insertMany(recipes);
  console.log(`
        ================================
        +=+=+=+[Recipes Created!]=+=+=+=
        ================================
    `);
};

const run = async () => {
  await main();
  db.close();
};

run();
