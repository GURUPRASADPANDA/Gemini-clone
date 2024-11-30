// src/components/Layout.jsx
const Layout = ({ children }) => (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <header style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
        <h1>Gemini Clone</h1>
      </header>
      <main>{children}</main>
      <footer style={{ borderTop: "1px solid #ccc", marginTop: "20px", padding: "10px 0" }}>
        <p>Powered by React</p>
      </footer>
    </div>
  );
  
  export default Layout;
  