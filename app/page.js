import Link from "next/link";

// export const metadata = {
//   title: "Home | Technical agency"
// }

export default async function Home() {

  return (
    <>
      <h1>Welcome to my Technical Agency</h1>
      {/* <a href="/about">About</a> */}
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
    </>
  );
}
