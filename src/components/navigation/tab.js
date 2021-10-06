import { TabList, TabLists, TabWrapper } from "./tab.style";
import items from "../../data/tabItems";

function Tab() {
  return (
    <TabWrapper>
      <TabLists>
        {items.map((item) => (
          <TabList key={item.name}>
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </TabList>
        ))}
      </TabLists>
    </TabWrapper>
  );
}

export default Tab;
