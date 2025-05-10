import Link from "next/link";

export const metadata = {
  title: "About Us"
}

export default function About() {
  return (
    <>
      <h1>Welcome to my About</h1>
      <Link href="/">Home</Link>
    </>
  );
}
