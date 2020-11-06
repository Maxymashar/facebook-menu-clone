import React, { useRef, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

const MenuItem = ({ icon, text, reverse, gotoMenu }) => {
  return (
    <div
      className="menu-item"
      style={reverse ? { flexDirection: "row-reverse" } : {}}
      onClick={() => {
        gotoMenu && gotoMenu();
      }}
    >
      {icon && <span className="icon">{icon}</span>}
      {text && <span className="text">{text}</span>}
    </div>
  );
};

const Menu = ({ children }) => {
  return <div className="menu">{children}</div>;
};

const Dropdown = () => {
  const [activeMenu, setActiveMenu] = useState("settings");
  const dropdownRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current.offsetHeight);
  }, [dropdownRef]);

  function getHeight(el) {
    setMenuHeight(el.offsetHeight + 32);
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={getHeight}
      >
        <Menu>
          <MenuItem icon="😒" text="not happy" reverse />
          <MenuItem
            icon="⚙"
            text="settings"
            gotoMenu={() => {
              setActiveMenu("settings");
            }}
          />
          <MenuItem icon="😎" text="cool" />
          <MenuItem icon="😍" text="love" />
          <MenuItem icon="😎" text="cool" />
          <MenuItem
            icon="❓"
            text="Help Menu"
            reverse
            gotoMenu={() => {
              setActiveMenu("help");
            }}
          />
        </Menu>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={getHeight}
      >
        <Menu>
          <MenuItem icon="😒" text="not happy" />
          <MenuItem
            icon="🤣"
            text="main"
            gotoMenu={() => {
              setActiveMenu("main");
            }}
          />
        </Menu>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "help"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={getHeight}
      >
        <Menu>
          <MenuItem icon="❓" text="Help" />
          <MenuItem icon="❓" text="Help" />
          <MenuItem icon="❓" text="Help" />
          <MenuItem
            icon="🤣"
            text="main"
            gotoMenu={() => {
              setActiveMenu("main");
            }}
          />
        </Menu>
      </CSSTransition>
    </div>
  );
};

const DropdownMenu = () => {
  return <Dropdown />;
};

export { DropdownMenu };
