"use client";
import { useState } from 'react';
import AddIngredient from './AddIngredient';
import RecipeSuggestions from './RecipeSuggestions';

const HomePage = () => {
  const [userIngredients, setUserIngredients] = useState<string[]>([]);

  return (
    <div>
      <h1>Quick Meal Planner</h1>
      <AddIngredient />
      <RecipeSuggestions userIngredients={userIngredients} />
    </div>
  );
};

export default HomePage;
