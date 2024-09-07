"use client";
import { useQuery } from 'convex/react';

interface Recipe {
  id: string;
  name: string;
  instructions: string;
  mealPrepTips: string;
}

const RecipeSuggestions = ({ userIngredients }: { userIngredients: string[] }) => {
  const recipes = useQuery('getRecipes', { userIngredients });

  if (!recipes) return <p>Loading...</p>;

  return (
    <ul>
      {recipes.map((recipe: Recipe) => (
        <li key={recipe.id} className="border p-4 mb-4">
          <h2 className="text-xl font-bold">{recipe.name}</h2>
          <p>{recipe.instructions}</p>
          <p><em>{recipe.mealPrepTips}</em></p>
        </li>
      ))}
    </ul>
  );
};

export default RecipeSuggestions;
