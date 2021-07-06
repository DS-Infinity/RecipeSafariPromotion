// Export Navbar
export default function Navbar() {
  return (
    <div id="navbar">
      <div id="navbar-start">
        <div id="navbar-logo" />
        <h1 id="navbar-heading">Recipe Safari</h1>
      </div>

      <div id="navbar-links">
        <a className="navbar-link" href="/">
          Home
        </a>
        <a className="navbar-link" href="/help">
          Help
        </a>
        <a className="navbar-link" href="/about">
          About Us
        </a>
      </div>
    </div>
  );
}
