// src/app/layout.tsx
"use client"; // Ensure this file is treated as a client component

import { ConvexProvider } from 'convex/react';
import { ReactNode } from 'react';

const convexUrl = 'https://<your-convex-deployment-url>'; // Replace with your Convex URL

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ConvexProvider url={convexUrl}>
          <div className="container mx-auto p-4">
            {children}
          </div>
        </ConvexProvider>
      </body>
    </html>
  );
};

export default Layout;
