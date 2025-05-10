"use client";

const RootErrors = ({ errors }) => {
  return <div>{errors?.message}</div>;
};

export default RootErrors;
