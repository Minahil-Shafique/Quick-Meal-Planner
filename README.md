# Quick Meal Planner

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and integrated with Convex for backend functionality.

## Getting Started

To get started with the project, follow these steps:

### 1. **Install Dependencies**

First, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/Minahil-Shafique/quick-meal-planner.git
cd quick-meal-planner
npm install
2. Set Up Convex
Ensure you have Convex CLI installed and initialized:

Install Convex CLI globally:

bash
Copy code
npm install -g convex
Initialize Convex in your project:

bash
Copy code
npx convex init
Push your Convex schema and functions:

bash
Copy code
npx convex push
3. Configure Environment Variables
Create a .env.local file in the root directory and add the following environment variables:

arduino
Copy code
NEXT_PUBLIC_CONVEX_URL=https://<your-convex-deployment-url>
4. Run the Development Server
Start the development server:

bash
Copy code
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying src/app/page.tsx. The page auto-updates as you edit the file.

Features
Ingredient Input: Input the ingredients you have at home.
Recipe Suggestions: Get meal suggestions based on your ingredients.
Meal Prep Tips: Receive tips for meal preparation.
Grocery List: Generate a list of missing ingredients.
Tech Stack
Frontend: Next.js (React framework)
Backend: Convex
Database: Airtable
Interface: Glide
Tools: TypeScript, Tailwind CSS
Learn More
To learn more about the technologies used, take a look at the following resources:

Next.js Documentation - Learn about Next.js features and API.
Convex Documentation - Learn about Convex and its API.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.

Contributing
If you would like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
