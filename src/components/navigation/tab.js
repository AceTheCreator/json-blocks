/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { TabList, TabLists, TabWrapper } from "./tab.style";
import items from "../../data/tabItems";
import { infoToolbox } from "../toolboxs/info";
import { defaultToolbox } from "../toolboxs/default";

function Tab({ setToolbox }) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (active === "Info") {
      setToolbox(infoToolbox);
    } else {
      setToolbox(defaultToolbox);
    }
  }, [active]);
  return (
    <TabWrapper>
      <TabLists>
        {items.map((item) => (
          <TabList
            active={active === item.name}
            key={item.name}
            onClick={() => setActive(item.name)}
          >
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </TabList>
        ))}
      </TabLists>
    </TabWrapper>
  );
}

Tab.propTypes = {
  setToolbox: PropTypes.func.isRequired,
};

export default Tab;
