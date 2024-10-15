const db = require(`../db`);
const { Direction } = require(`../models`);

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

  const directions = [
    {
      name: `Chicken Parmesan Directions`,
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
          measureItem: `Chicken Breast`,
          grams: 200,
          ounces: Math.round(200 / 28.3495),
        },
        {
          directionName: `Season Chicken`,
          stepNumber: 3,
          instructions: `Season chicken thoroughly with salt and pepper. Using a sifter or strainer; sprinkle flour over chicken breasts, evenly coating both sides.`,
          measureItem: `Salt`,
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
              measureItem: `Bread Crumbs`,
              grams: ouncesToGrams(1),
              ounces: 1,
            },
            {
              measureItem: `Parmesan Cheese`,
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
          measureItem: `Olive Oil`,
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
              measureItem: `Tomato Sauce`,
              grams: tablespoonsToGrams(2),
              ounces: Math.round(tablespoonsToGrams(2) / 28.3495),
              tablespoons: 2,
            },
            {
              measureItem: `Mozzarella Cheese`,
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
    {
      name: `Los Barrios Caldo De Res Directions`,
      directions: [
        {
          directionName: `Preparing the Vegetables`,
          stepNumber: 1,
          instructions: `Wash and cut all vegetables into large chunks.`,
          measureItem: `Vegetables`,
          grams: 800,
        },
        {
          directionName: `Cooking the Beef`,
          stepNumber: 2,
          instructions: `In a large pot, add beef and cover with water. Simmer on medium heat until beef is tender.`,
          fahrenheit: 350,
          celsius: fahrenheitToCelsius(350),
          measureItem: `Beef`,
          grams: 500,
        },
        {
          directionName: `Adding Vegetables`,
          stepNumber: 3,
          instructions: `Once the beef is tender, add all vegetables to the pot. Continue simmering until vegetables are cooked through.`,
          measureItem: `Water`,
          ounces: 32,
          grams: ouncesToGrams(32),
        },
        {
          directionName: `Seasoning`,
          stepNumber: 4,
          instructions: `Add salt and any additional seasoning to taste.`,
          teaspoons: 1,
          grams: teaspoonsToGrams(1),
        },
        {
          directionName: `Final Simmer`,
          stepNumber: 5,
          instructions: `Simmer for an additional 15 minutes to blend all flavors.`,
        },
        {
          directionName: `Serving`,
          stepNumber: 6,
          instructions: `Serve the beef soup hot with a side of rice or tortillas.`,
        },
      ],
    },
    {
      name: `Sulppang Directions`,
      directions: [
        {
          directionName: `Prepare Ingredients`,
          stepNumber: 1,
          instructions: `Gather all your ingredients: makgeolli, sugar, dry yeast, kosher salt, all-purpose flour, apple, and fresh cranberry beans.`,
        },
        {
          directionName: `Warm Makgeolli`,
          stepNumber: 2,
          instructions: `Take the makgeolli out of the fridge and allow it to come to room temperature. Shake the bottle to mix it well, then heat it in a pot over medium-high heat until lukewarm (around 100°F or 40°C).`,
          fahrenheit: 100,
          celsius: fahrenheitToCelsius(100),
        },
        {
          directionName: `Combine Ingredients`,
          stepNumber: 3,
          instructions: `In a large bowl, combine warm makgeolli, sugar, and dry yeast. Let it stand for 1 minute until frothy.`,
        },
        {
          directionName: `Mix Dough`,
          stepNumber: 4,
          instructions: `Add flour and salt to the mixture and stir until a smooth dough forms. Cover and let it sit for 2 hours until bubbly.`,
          measurements: [
            {
              measureItem: `Sugar`,
              grams: 67,
              ounces: Math.round(67 / 28.3495),
            },
            {
              measureItem: `Kosher Salt`,
              grams: teaspoonsToGrams(1 / 2),
              ounces: Math.round(teaspoonsToGrams(1 / 2) / 28.3495),
              teaspoons: 1 / 2,
            },
            {
              measureItem: `All-Purpose Flour`,
              grams: 312,
              ounces: Math.round(312 / 28.3495),
            },
            {
              measureItem: `Apple`,
              grams: 75,
              ounces: Math.round(75 / 28.3495),
            },
            {
              measureItem: `Fresh Cranberry Beans`,
              grams: 85,
              ounces: Math.round(85 / 28.3495),
            },
          ],
        },
        {
          directionName: `Prepare Steamer`,
          stepNumber: 5,
          instructions: `Wet a large cotton cloth and place it in the bottom of a steamer basket. Pour the dough on top and sprinkle apple and cranberry beans over it. Allow to rise for 30 minutes.`,
        },
        {
          directionName: `Steam Bread`,
          stepNumber: 6,
          instructions: `Bring 3 inches of water to a boil in the steamer and steam the bread for 35 minutes.`,
        },
        {
          directionName: `Cool and Serve`,
          stepNumber: 7,
          instructions: `Once done, remove the steamer from heat. Lift the cloth with the bread and let it cool before cutting into pieces. Serve warm.`,
        },
      ],
    },
  ];

  await Direction.insertMany(directions);
  console.log(`
        =================================
        +=+=+=[Directions created!]+=+=+=
        =================================
    `);
};

const run = async () => {
  await main();
  db.close();
};

run();
