import React from "react";

const File = ({ params }) => {
  const { filePath } = params;
  return <div>page {filePath}</div>;
};

export default File;
