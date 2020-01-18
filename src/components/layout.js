import React from "react";

function Layout({ children }) {
  return (
    <div>
      <main className="flex flex-col flex-1 w-full max-w-3xl px-4 py-8 mx-auto md:justify-center md:p-8">
        {children}
      </main>
    </div>
  );
}

export default Layout;
