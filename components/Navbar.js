// Export Navbar
export default function Navbar() {
  return (
    <nav id="navbar">
      <div id="navbar-start">
        <div id="navbar-logo" />
        <h1 id="navbar-heading">Recipe Safari</h1>
      </div>

      <div id="navbar-links">
        <a className="navbar-link" href="#home">
          Home
        </a>
        <a className="navbar-link" href="#help">
          Help
        </a>
        <a className="navbar-link" href="#about">
          About Us
        </a>
      </div>

      <label className="label">
        <div className="toggle">
          <input
            className="toggle-state"
            type="checkbox"
            onClick={() => {
              document.body.classList.toggle("light-mode");
            }}
          />
          <div class="indicator"></div>
        </div>
      </label>
    </nav>
  );
}
