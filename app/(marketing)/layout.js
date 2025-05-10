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
          Header (Marketing)
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
          Footer (Marketing)
        </footer>
      </>
    );
  }
  