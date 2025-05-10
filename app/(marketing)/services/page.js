import Link from "next/link";

export const metadata = {
  title: "Services"
}

export default function Services() {
  return (
    <>
      <h1>All Services</h1>
      <Link href="/services/web-dev">Web Dev</Link> <br />
      <Link href="/services/seo">SEO</Link>
      
    </>
  );
}
