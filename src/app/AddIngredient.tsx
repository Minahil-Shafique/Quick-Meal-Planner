"use client";
import { useMutation } from 'convex/react';
import { useState } from 'react';

const AddIngredient = () => {
  const addIngredient = useMutation('addIngredient');
  const [ingredient, setIngredient] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (ingredient.trim()) {
      await addIngredient({ userId: 'user123', ingredient });
      setIngredient('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input 
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Enter ingredient"
        className="border rounded-lg p-2 mb-4"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
        Add Ingredient
      </button>
    </form>
  );
};

export default AddIngredient;
