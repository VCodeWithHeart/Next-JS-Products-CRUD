import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { blogID } = await params;
  return {
    title: `Blog ${blogID}`,
  };
}

export default async function DynamicBlogs({ params }) {
  const { blogID } = await params;

  if (blogID > 15) {
    notFound();
  }

  return <h1>Welcome to my Blog {blogID}</h1>;
}
