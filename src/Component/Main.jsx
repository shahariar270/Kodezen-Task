
const SettingsMenu = () => {
  return (
    <div className="kzui-container">
      <header className="kzui-header">
      <img src="/logo.png" alt="" />
        <nav className="kzui-nav">
          <a href="#" className="kzui-nav-link active">Welcome</a>
          <a href="#" className="kzui-nav-link">Blocks</a>
          <a href="#" className="kzui-nav-link">Settings</a>
        </nav>
      </header>
      <main className="kzui-main">
        <h2 className="kzui-title">Settings</h2>
        <div className="kzui-menu">
          <h3 className="kzui-menu-header">Menu</h3>
          <ul className="kzui-menu-list">
            <li className="kzui-menu-item">
              <a href="#" className="kzui-menu-link">General</a>
            </li>
            <li className="kzui-menu-item">
              <a href="#" className="kzui-menu-link active">Design System</a>
            </li>
            <li className="kzui-menu-item">
              <a href="#" className="kzui-menu-link">Integration</a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default SettingsMenu;

