function Switch({ toggleTheme, isLightMode }) {
  return (
    <div className="switch">
      <input 
        type="checkbox" 
        id="meu-switch" 
        className="switch-input"
        onChange={toggleTheme}
        checked={isLightMode}
      />
      <label htmlFor="meu-switch" className="switch-label">
        <span className="switch-circle">
          {}
          <img 
            src="/assets/desktop-moon-stars.svg" 
            alt="Icone Lua" 
            className="icon-moon" 
          />
          <img 
            src="/assets/desktop-sun.svg" 
            alt="Icone Sol" 
            className="icon-sun" 
          />
        </span>
      </label>
    </div>
  );
}

export default Switch;