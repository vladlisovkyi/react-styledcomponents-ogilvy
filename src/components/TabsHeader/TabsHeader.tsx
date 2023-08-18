import React, { Dispatch, SetStateAction } from "react";
import { StyledTabHeader, StyledTabsHeader } from "./TabsHeaderStyle";
import { Tab } from "../../data";

interface TabsHeaderProps {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  tabs: Tab[];
}

const TabsHeader: React.FC<TabsHeaderProps> = ({
  activeTab,
  setActiveTab,
  tabs,
}) => {
  return (
    <StyledTabsHeader>
      {tabs.map((tab) => (
        <StyledTabHeader
          className={`${activeTab === tab.id ? "active-tab" : ""}`}
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.title}
        </StyledTabHeader>
      ))}
    </StyledTabsHeader>
  );
};

export default TabsHeader;
