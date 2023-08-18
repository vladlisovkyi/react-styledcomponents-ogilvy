import React from "react";
import { StyledCard, StyledGraphItem } from "./CardStyle";
import { TabContent } from "../../data";

const Card = ({ title, text, image, graph }: TabContent) => {
  return (
    <StyledCard>
      <img
        src={`./assets/images/${image}`}
        alt="title"
        width={50}
        height={50}
        loading="lazy"
      />
      <h3>{title}</h3>
      <p>{text}</p>
      {graph.map((item) => (
        <StyledGraphItem
          key={item.id}
          id={item.id}
          title={item.title}
          percent={item.percent}
        >
          <div className="line"></div>
          <div className="info">
            <span>{item.title}</span>
            <span>{item.percent}%</span>
          </div>
        </StyledGraphItem>
      ))}
    </StyledCard>
  );
};

export default Card;
