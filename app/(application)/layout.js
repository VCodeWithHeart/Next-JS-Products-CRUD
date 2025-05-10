export default function RootLayout({ children }) {
  return (
    <>
      <header
        style={{
          backgroundColor: "Tomato",
          padding: "5px",
          fontSize: "20px",
          fontFamily: "impact",
        }}
      >
        Header (Application)
      </header>
      {children}
      <footer
        style={{
          backgroundColor: "Tomato",
          padding: "5px",
          fontSize: "20px",
          fontFamily: "impact",
        }}
      >
        Footer (Application)
      </footer>
    </>
  );
}
