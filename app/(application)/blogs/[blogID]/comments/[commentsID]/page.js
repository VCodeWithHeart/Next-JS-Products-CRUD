export default async function CommentsID({ params }) {
  const { blogID, commentsID } = await params;
  return (
    <>
      <h1>
        Welcome to comment no {commentsID} of  blog {blogID}
      </h1>
    </>
  );
}
