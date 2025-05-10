"use client";

const BlogError = ({ error }) => {
  console.log("error", error);
  return (
    <div>
      <p>something went wrong...</p>
      <p>{error.digest}</p>
      <p>{error?.message}</p>
    </div>
  );
};

export default BlogError;
