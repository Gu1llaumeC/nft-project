import React from "react";
import { StyledCollection } from "./indexStyled";

import Header from "../../organisms/Header";
import Content from "../../organisms/Content";

const Collection = () => {
  return (
    <StyledCollection>
      <Header />
      <Content />
    </StyledCollection>
  );
};

export default Collection;
