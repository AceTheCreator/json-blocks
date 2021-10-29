/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from "react";
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
import { serverToolbox } from "../toolboxs/servers";
import { defaultToolbox } from "../toolboxs/default";
import { componentToolbox } from "../toolboxs/components";
import { channelsToolbox } from "../toolboxs/channels";
import { updateActiveBar } from "../../utils";

const localActive = localStorage.getItem("activeBlock");
function Navbar({ setToolbox, view, setView, active, setActive }) {
  useEffect(() => {
    if (active === "Info") {
      setToolbox(infoToolbox);
    } else if (active === "Servers") {
      setToolbox(serverToolbox);
    } else if (active === "Components") {
      setToolbox(componentToolbox);
    } else if (active === "Channels") {
      setToolbox(channelsToolbox);
    } else {
      setToolbox(defaultToolbox);
    }
    updateActiveBar(active);
  }, [active]);
  useEffect(() => {
    console.log(localActive, active);
    if (localActive !== active) {
      setActive(localActive);
    }
  }, [localActive]);
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
        <NavButton
          onClick={() => {
            if (view === "playground") {
              setView("preview");
            } else {
              setView("playground");
            }
          }}
        >
          {view === "playground" ? (
            <div>
              <span className="fi fi-sr-play" />
            </div>
          ) : (
            <div>
              <span className="fi fi-sr-stop" />
            </div>
          )}
        </NavButton>
      </RightNavLink>
    </NavbarWrapper>
  );
}

Navbar.propTypes = {
  setToolbox: PropTypes.func.isRequired,
  view: PropTypes.object.isRequired,
  setView: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};
export default Navbar;
