const ServicesLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ backgroundColor: "mediumseagreen", padding: "25px" }}>
        sidebar
      </aside>
      <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
    </div>
  );
};

export default ServicesLayout;
