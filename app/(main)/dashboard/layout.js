import React, { Suspense } from 'react'
import { BarLoader } from 'react-spinners';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground px-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold">
          Industry Insights
        </h1>
      </div>

      <Suspense fallback={<BarLoader width="100%" color="#6C47FF" />}>
        {children}
      </Suspense>
    </div>
  );
};

export default Layout;