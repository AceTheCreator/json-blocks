/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  CenterNavLink,
  LeftNavLink,
  NavbarWrapper,
  NavButton,
  RightNavLink,
  CenterNavLinks,
} from "./navbar.style";
import items from "../../data/tabItems";
import { infoToolbox } from "../toolboxs/info";
import { defaultToolbox } from "../toolboxs/default";

function Navbar({ setToolbox }) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (active === "Info") {
      setToolbox(infoToolbox);
    } else {
      setToolbox(defaultToolbox);
    }
  }, [active]);
  return (
    <NavbarWrapper>
      <LeftNavLink>
        <NavButton>
          <div>
            {" "}
            <span className="fi fi-br-menu-burger" />
          </div>
        </NavButton>
        <div>
          <span>Demo Playground</span>
        </div>
      </LeftNavLink>
      <CenterNavLink>
        <div>
          {items.map((item) => (
            <CenterNavLinks
              style={{
                background: "transparent",
                border: "none",
              }}
              key={item.name}
              onClick={() => setActive(item.name)}
              active={active === item.name && true}
            >
              <NavButton active={active}>
                <div>
                  {" "}
                  <span>{item.icon}</span>
                </div>
              </NavButton>
              <span>{item.name}</span>
            </CenterNavLinks>
          ))}
        </div>
      </CenterNavLink>
      <RightNavLink>
        <NavButton>
          <div>
            <span className="fi fi-sr-play" />
          </div>
        </NavButton>
      </RightNavLink>
    </NavbarWrapper>
  );
}

Navbar.propTypes = {
  setToolbox: PropTypes.func.isRequired,
};
export default Navbar;
