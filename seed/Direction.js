const db = require(`../db`);
const { Cuisine, Direction, Recipe } = require(`../models`);

db.on(`error`, console.error.bind(console, `MongoDB connection error:`));

const fahrenheitToCelsius = (fahrenheit) => {
  return Math.round(((fahrenheit - 32) * 5) / 9);
};

const ouncesToGrams = (ounces) => {
  return Math.round(ounces * 28.3495);
};

const teaspoonsToGrams = (teaspoons) => {
  return Math.round(teaspoons * 4.92892);
};

const tablespoonsToGrams = (tablespoons) => {
  return Math.round(tablespoons * 14.7868);
};

const main = async () => {
  await Direction.deleteMany();

  const chickenParmesanCuisine = await Cuisine.findOne({
    title: `Chicken Parmesan`,
  });

  const chickenParmesanRecipe = await Recipe.findOne({
    title: `Chicken Parmesan`,
  });

  const directions = [
    {
      title: `Chicken Parmesan Directions`,
      cuisine: chickenParmesanCuisine._id,
      recipe: chickenParmesanRecipe._id,
      directions: [
        {
          directionName: `Gather Ingredients`,
          stepNumber: 1,
          instructions: `Gather the ingredients. Preheat an oven to 450 degrees F (230 degrees C).`,
          fahrenheit: 450,
          celsius: fahrenheitToCelsius(450),
        },
        {
          directionName: `Pound Chicken`,
          stepNumber: 2,
          instructions: `Place chicken breasts between two sheets of heavy plastic (resealable freezer bags work well) on a solid, level surface. Firmly pound chicken with the smooth side of a meat mallet to a thickness of 1/2-inch.`,
          measureItem: "Chicken Breast",
          grams: 200,
          ounces: Math.round(200 / 28.3495),
        },
        {
          directionName: `Season Chicken`,
          stepNumber: 3,
          instructions: `Season chicken thoroughly with salt and pepper. Using a sifter or strainer; sprinkle flour over chicken breasts, evenly coating both sides.`,
          measureItem: "Salt",
          grams: teaspoonsToGrams(2),
          ounces: Math.round(teaspoonsToGrams(2) / 28.3495),
          teaspoons: 2,
        },
        {
          directionName: `Beat Eggs`,
          stepNumber: 4,
          instructions: `Beat eggs in a shallow bowl and set aside. Mix bread crumbs and 1/2 cup Parmesan cheese in a separate bowl, set aside. Dip a flour-coated chicken breast in beaten eggs. Transfer breast to the bread crumb mixture, pressing crumbs into both sides. Repeat for each breast. Let chicken rest for 10 to 15 minutes.`,
          measurements: [
            {
              measureItem: "Bread Crumbs",
              grams: ouncesToGrams(1),
              ounces: 1,
            },
            {
              measureItem: "Parmesan Cheese",
              grams: ouncesToGrams(1.5),
              ounces: 1.5,
            },
          ],
        },
        {
          directionName: `Heat Oil`,
          stepNumber: 5,
          instructions: `Heat 1/2 inch olive oil in a large skillet on medium-high heat until it begins to shimmer. Cook chicken in the hot oil until golden, about 2 minutes per side. The chicken will finish cooking in the oven.`,
          fahrenheit: 375,
          celsius: fahrenheitToCelsius(375),
          measureItem: "Olive Oil",
          grams: tablespoonsToGrams(2),
          ounces: Math.round(tablespoonsToGrams(2) / 28.3495),
          tablespoons: 2,
        },
        {
          directionName: `Layer Chicken`,
          stepNumber: 6,
          instructions: `Transfer chicken to a baking dish. Top each breast with 2 tablespoons tomato sauce. Layer each chicken breast with equal amounts of mozzarella cheese, fresh basil, and provolone cheese. Sprinkle remaining Parmesan over top and drizzle each with 1/2 teaspoon olive oil.`,
          measurements: [
            {
              measureItem: "Tomato Sauce",
              grams: tablespoonsToGrams(2),
              ounces: Math.round(tablespoonsToGrams(2) / 28.3495),
              tablespoons: 2,
            },
            {
              measureItem: "Mozzarella Cheese",
              grams: ouncesToGrams(6),
              ounces: 6,
            },
          ],
        },
        {
          directionName: `Bake Chicken`,
          stepNumber: 7,
          instructions: `Bake in the preheated oven until cheese is browned and bubbly and chicken breasts are no longer pink in the center, 15 to 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).`,
          fahrenheit: 165,
          celsius: fahrenheitToCelsius(165),
        },
      ],
    },
  ];

  await Direction.insertMany(directions);
  console.log(`
        =================================
        +=+=+=+[Directions created!]=+=+=+=
        =================================
    `);
};

const run = async () => {
  await main();
  db.close();
};

run();
