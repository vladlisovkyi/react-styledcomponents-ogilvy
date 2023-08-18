import React, { useState } from "react";
import TabsHeader from "../TabsHeader/TabsHeader";
import arrTabs from "../../data";
import Card from "../Card/Card";
import Container from "../UI/Container";
import { StyledCardWrapper } from "../Card/CardStyle";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const activeTabContent = arrTabs[activeTab].content;

  return (
    <Container>
      <TabsHeader
        activeTab={activeTab}
        tabs={arrTabs}
        setActiveTab={setActiveTab}
      />
      <StyledCardWrapper>
        {activeTabContent.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </StyledCardWrapper>
    </Container>
  );
};

export default TabsSection;
