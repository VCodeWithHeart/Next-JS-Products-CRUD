"use client";

import { usePathname } from "next/navigation";

const NotFound = () => {
    const path = usePathname()

  return (
    <div>
      <h1>Blog {path} Page not found</h1>
      <p>Could not found the page you are looking for</p>
    </div>
  );
};

export default NotFound;