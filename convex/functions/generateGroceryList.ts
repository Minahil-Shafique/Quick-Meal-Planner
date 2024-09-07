import { query } from 'convex/server';

export default query(async ({ db }, { userIngredients, recipeId }) => {
  const recipe = await db.get('recipes', recipeId);

  // Find missing ingredients
  const missingIngredients = recipe.ingredients.filter(
    ingredient => !userIngredients.includes(ingredient)
  );

  return missingIngredients;
});
