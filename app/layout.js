import "./globals.css";
import Providers from "./Providers";
export const metadata = {
  title: {
    template: "%s | Technical Agency",
    default: "Technical Agency",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

{
  /* <header
          style={{
            backgroundColor: "Tomato",
            padding: "5px",
            fontSize: "20px",
            fontFamily: "impact",
          }}
        >
          Header
        </header> */
}

{
  /* <footer
          style={{
            backgroundColor: "Tomato",
            padding: "5px",
            fontSize: "20px",
            fontFamily: "impact",
          }}
        >
          Footer
        </footer> */
}
