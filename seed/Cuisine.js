const db = require(`../db`);
const { Cuisine, Recipe, Direction } = require(`../models`);

db.on(`error`, console.error.bind(console, `MongoDB connection error:`));

const main = async () => {
  await Cuisine.deleteMany();

  // Getting the data from children seeds for Chicken Parmesan
  const chickenParmesan = await Recipe.findOne({
    name: `Chicken Parmesan`,
  });
  const chickenParmesanDirection = await Direction.findOne({
    name: `Chicken Parmesan Directions`,
  });

  // Getting the data from the children seeds for Los Barrios Caldo De Res
  const beefSoup = await Recipe.findOne({
    name: `Los Barrios Caldo De Res`,
  });
  const beefSoupDirections = await Direction.findOne({
    name: `Los Barrios Caldo De Res Directions`,
  });

  // Getting the data from the children seeds for Sulppang
  const sulppang = await Recipe.findOne({
    name: `Sulppang`,
  });
  const sulppangDirection = await Direction.findOne({
    name: `Sulppang Directions`,
  });

  const cuisines = [
    {
      name: `Chicken Parmesan`,
      recipe: chickenParmesan,
      directions: chickenParmesanDirection,
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
    {
      name: `Los Barrios Caldo De Res`,
      recipe: beefSoup,
      directions: beefSoupDirections,
      desc: `Los Barrios Caldo De Res is a traditional Salvadorian beef soup with hearty chunks of beef, fresh vegetables, and aromatic herbs simmered together to create a delicious, comforting dish.`,
      origin: `Salvadoran`,
      techniques: [
        `Simmering`,
        `Boiling`,
        `Layering Vegetables`,
        `Seasoning`,
        `Serving with Rice`,
      ],
      dietaryTags: [`Dairy-Free`, `Gluten-Free`, `High-Protein`, `Nut-Free`],
      img: `https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_860,ar_3:2/v1/img/recipes/12/77/47/picocVHhz.jpg`,
    },
    {
      name: `Sulppang`,
      recipe: sulppang,
      directions: sulppangDirection,
      desc: `Sulppang is a fluffy steamed bread made with makgeolli, often enjoyed as a snack or dessert, featuring a slightly sweet flavor and a soft texture.`,
      origin: `Korean`,
      techniques: [`Mixing`, `Kneading`, `Steaming`, `Fermenting`],
      dietaryTags: [`Vegetarian`, `Dairy-Free`],
      img: `https://www.koreanbapsang.com/wp-content/uploads/2020/01/sulppang-1-682x1024.jpg`,
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
