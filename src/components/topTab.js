import React from 'react'
import { TabList, TabLists, TabWrapper } from './tab.style';
import Select from "./illustrations/select";
import Square from "./illustrations/square";
import Exagon from "./illustrations/exagon";
import Circle from "./illustrations/circle";
import Arrow from "./illustrations/arrow";
import Line from "./illustrations/line";
import Pen from "./illustrations/pen";
import Text from "./illustrations/text";

function TopTab() {
    return (
      <TabWrapper>
        <TabLists>
          <TabList>
            <Select />
          </TabList>
          <TabList>
            <Square />
          </TabList>
          <TabList>
            <Exagon />
          </TabList>
          <TabList>
            <Circle />
          </TabList>
          <TabList>
            <Arrow />
          </TabList>
          <TabList>
            <Line />
          </TabList>
          <TabList>
            <Pen />
          </TabList>
          <TabList>
            <Text />
          </TabList>
        </TabLists>
      </TabWrapper>
    );
}

export default TopTab
