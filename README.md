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
```
### 2. **Set Up Convex**
Ensure you have Convex CLI installed and initialized:

Install Convex CLI globally:

```bash
npm install -g convex
```
Initialize Convex in your project:

```bash
npx convex init
```
Push your Convex schema and functions:
```bash
npx convex push
```
### 3. **Configure Environment Variables**
Create a .env.local file in the root directory and add the following environment variables:

```arduino
NEXT_PUBLIC_CONVEX_URL=https://<your-convex-deployment-url>
```
### 4. **Run the Development Server**
Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying src/app/page.tsx. The page auto-updates as you edit the file.

### **Features**
Ingredient Input: Input the ingredients you have at home.
Recipe Suggestions: Get meal suggestions based on your ingredients.
Meal Prep Tips: Receive tips for meal preparation.
Grocery List: Generate a list of missing ingredients.

### **Tech Stack**
**Frontend**: Next.js (React framework)<br>
**Backend**: Convex<br>
**Database**: Airtable<br>
**Interface**: Glide<br>
**Tools**: TypeScript, Tailwind CSS<br>

### **Learn More**
To learn more about the technologies used, take a look at the following resources:<br>
Next.js Documentation - Learn about Next.js features and API. <br>
Convex Documentation - Learn about Convex and its API.<br>
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!<br><br>

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. Vercel provides a seamless integration with Next.js, enabling you to deploy your app with minimal configuration.

To deploy your application:

1. **Sign Up/Login**: Create an account or log in to [Vercel](https://vercel.com/).
2. **Import Your Project**: Connect your GitHub, GitLab, or Bitbucket account to Vercel.
3. **Select Your Repository**: Choose the repository where your Next.js project is hosted.
4. **Configure Settings**: Configure build and deployment settings if needed.
5. **Deploy**: Click the "Deploy" button to initiate the deployment process.

For more detailed information, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

---

## Contributing

We welcome contributions to this project! To ensure a smooth process, please follow these guidelines:

1. **Fork the Repository**
   - Click the "Fork" button at the top right of this repository page to create a copy under your GitHub account.

2. **Clone Your Fork**
   - Clone the forked repository to your local machine.
     ```bash
     git clone https://github.com/your-username/your-repository.git
     ```

3. **Create a New Branch**
   - Create a new branch for your feature or fix.
     ```bash
     git checkout -b feature-branch
     ```

4. **Make Changes**
   - Implement your changes or additions. Be sure to test your code thoroughly.

5. **Commit Your Changes**
   - Add and commit your changes with a clear and concise message.
     ```bash
     git add .
     git commit -m 'Add new feature'
     ```

6. **Push to Your Fork**
   - Push your changes to the branch on your forked repository.
     ```bash
     git push origin feature-branch
     ```

7. **Create a Pull Request**
   - Navigate to the original repository and create a new Pull Request (PR) from your branch.
   - Provide a detailed description of your changes and the purpose of the PR.

Thank you for contributing! Your help is greatly appreciated. For more information, please refer to our [contributing guidelines](#) if available.

