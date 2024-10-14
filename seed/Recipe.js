const db = require(`../db`);
const { Cuisine, Direction, Recipe } = require(`../models`);

db.on(`error`, console.error.bind(console, `MongoDB connection error:`));

const main = async () => {
  await Recipe.deleteMany();

  const chickenParmesan = await Direction.findOne({
    title: `Chicken Parmesan Directions`,
  });

  const chickenParmesanCuisine = await Cuisine.findOne({
    title: `Chicken Parmesan`,
  });

  const recipes = [
    {
      title: `Chicken Parmesan`,
      cuisine: chickenParmesanCuisine._id,
      directions: chickenParmesan._id,
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
