const { Cuisine, Direction, Recipe } = require(`../models`);

// ========={The get'ting for our models}========
// Question: Is is possible to encapsulation all three under one function/const? If so that's be nice not sure how to go by doing it.
const getAllCuisineNames = async (req, res) => {
  try {
    const cuisines = await Cuisine.find({});
    res.json(cuisines);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getAllDirections = async (req, res) => {
  try {
    const directions = await Direction.find({});
    res.json(directions);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.json(recipes);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};
// ========{Get'ting by Ids only of all three different seeds}========
const getCuisineNameById = async (req, res) => {
  try {
    const { id } = req.params;
    const cuisine = await Cuisine.findById(id);
    if (cuisine) {
      return res.json(cuisine);
    }
    return res
      .status(404)
      .send(`This Cuisine does not exist. Please enter a cuisine's Id.`);
  } catch (e) {
    if (e.name === `CastError` && e.kind === `ObjectId`) {
      return res
        .status(404)
        .send(`This Cuisine does not exist. Please enter a cuisine's Id.`);
    }
    return res.status(500).send(e.message);
  }
};

const getDirectionById = async (req, res) => {
  try {
    const { id } = req.params;
    const direction = await Direction.findById(id);
    if (direction) {
      return res.json(direction);
    }
    return res
      .status(404)
      .send(`This Direction does not exist. Please enter a cuisine's Id.`);
  } catch (e) {
    if (e.name === `CastError` && e.kind === `ObjectId`) {
      return res
        .status(404)
        .send(`This Direction does not exist. Please enter a cuisine's Id.`);
    }
    return res.status(500).send(e.message);
  }
};

const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    if (recipe) {
      return res.json(recipe);
    }
    return res
      .status(404)
      .send(`This Recipe does not exist. Please enter a recipe's Id.`);
  } catch (e) {
    if (e.name === `CastError` && e.kind === `ObjectId`) {
      return res
        .status(404)
        .send(`This Recipe does not exist. Please enter a recipe's Id.`);
    }
  }
};
// ========{Usage of Post}========
const createNewCuisineName = async (req, res) => {
  try {
    const cuisine = await new Cuisine(req.body);
    await cuisine.save();
    return res.status(201).json({
      cuisine,
    });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const createNewDirections = async (req, res) => {
  try {
    const direction = await new Direction(req.body);
    await direction.save();
    return res.status(201).json({
      direction,
    });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const createNewRecipe = async (req, res) => {
  try {
    const recipe = await new Recipe(req.body);
    await recipe.save();
    return res.status(201).json({
      recipe,
    });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};
// ========{Our Calls for Put}========
const updateACuisineName = async (req, res) => {
  try {
    const { id } = req.params;
    const cuisine = await Cuisine.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (cuisine) {
      return res.status(200).json(cuisine);
    }
    throw new Error(
      `The Cuisine you just searched for does not exist in our Data Base. Please enter a valid Id.`
    );
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const updateDirections = async (req, res) => {
  try {
    const { id } = req.params;
    const direction = await Direction.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (direction) {
      return res.status(200).json(direction);
    }
    throw new Error(
      `The Direction you just searched for does not exist in our Data Base. Please enter a valid Id.`
    );
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (recipe) {
      return res.status(200).json(recipe);
    }
    throw new Error(
      `The Recipe you just searched for does not exist in our Data Base. Please enter a valid Id.`
    );
  } catch (e) {
    return res.status(500).send(e.message);
  }
};
// ========{Calling the delete}========
const deleteCuisineName = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCuisine = await Cuisine.findByIdAndDelete(id);
    if (deleteCuisine) {
      return res
        .status(200)
        .send(`Cuisine has been officially been deleted. Have a nice day!`);
    }
  } catch (e) {
    return res.status(500).send(e.message);
  }
};
const deleteDirections = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteDirection = await Direction.findByIdAndDelete(id);
    if (deleteDirection) {
      return res
        .status(200)
        .send(`Direction has been officially been deleted. Have a nice day!`);
    }
  } catch (e) {
    return res.status(500).send(e.message);
  }
};
const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteRecipe = await Recipe.findByIdAndDelete(id);
    if (deleteRecipe) {
      return res
        .status(200)
        .send(`Recipe has been officially been deleted. Have a nice day!`);
    }
  } catch (e) {
    return res.status(500).send(e.message);
  }
};
module.exports = {
  // Getting alls
  getAllCuisineNames,
  getAllDirections,
  getAllRecipes,
  // Getting by Ids
  getCuisineNameById,
  getDirectionById,
  getRecipeById,
  // Creating with Post
  createNewCuisineName,
  createNewDirections,
  createNewRecipe,
  // Updating with Put
  updateACuisineName,
  updateDirections,
  updateRecipe,
  // Deleting with Delete
  deleteCuisineName,
  deleteDirections,
  deleteRecipe,
};
