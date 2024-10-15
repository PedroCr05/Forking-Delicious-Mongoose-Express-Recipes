const express = require(`express`);
const db = require(`./db`);
const cuisineController = require(`./controllers/cuisine`);
const bodyParser = require(`body-parser`);
const logger = require(`morgan`);

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger(`dev`));
app.use(bodyParser.json());

// ========{The landing page for the API}========
app.get(`/`, (req, res) =>
  res.send(
    `Welcome to Food Fare Album! To get started please <a href="http://localhost:3001/cuisines">click </a>me!`
  )
);

// ========{Calling for all items in each objectID}========
app.get(`/cuisines`, cuisineController.getAllCuisineNames);
app.get(`/directions`, cuisineController.getAllDirections);
app.get(`/recipes`, cuisineController.getAllRecipes);

// ========{Calling for Specific items for item IDs}========
app.get(`/cuisines/:id`, cuisineController.getCuisineNameById);
app.get(`/directions/:id`, cuisineController.getDirectionById);
app.get(`/recipes/:id`, cuisineController.getRecipeById);

// ========{Calling for a Post for each ObjectID (Creating new object)}========
app.post(`/cuisines`, cuisineController.createNewCuisineName);
app.post(`/directions`, cuisineController.createNewDirections);
app.post(`/recipes`, cuisineController.createNewRecipe);

// ======={Calling a Put for specific IDs (Updating an ID's data)}========
app.put(`/cuisines/:id`, cuisineController.updateACuisineName);
app.put(`/directions/:id`, cuisineController.updateDirections);
app.put(`/recipes/:id`, cuisineController.updateRecipe);

// ======={Calling the delete for a specific ID}========
app.delete(`/cuisines/:id`, cuisineController.deleteCuisineName);
app.delete(`/directions/:id`, cuisineController.deleteDirections);
app.delete(`/recipes/:id`, cuisineController.deleteRecipe);

app.listen(PORT, () => console.log(`Running at ${PORT}`));
