// convex/schema.ts
import { defineSchema } from 'convex/schema';

export default defineSchema({
  ingredients: {
    userId: 'string',
    ingredient: 'string',
  },
  recipes: {
    id: 'string',
    name: 'string',
    instructions: 'string',
    mealPrepTips: 'string',
  },
});
