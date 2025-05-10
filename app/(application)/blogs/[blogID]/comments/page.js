export default async function comments({ params }) {
  const { blogID } = await params;
  return (
    <>
      <p> All Comments on {blogID} page</p>
    </>
  );
}
