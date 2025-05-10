import { notFound } from "next/navigation";

export const metadata = {
  title: {
    // default: "Files",
    absolute: "Files",
  },
  description: "Hello World",
};

export default async function Files({ params }) {
  const { filePath } = await params;

  // if (isNaN(filePath)) {
  //   notFound();
  // }

  // if (filePath) {
  //   notFound();
  // }

  return <div>File Optional Path {filePath}</div>;
}
