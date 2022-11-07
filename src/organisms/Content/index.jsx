import React from "react";
import { StyledContent } from "./indexStyled";

import Vignette from "../../molecules/Vignette";

const Vignettes = () => {
    return Array.from({ length: 10 }, (_, i) => <Vignette key={i} />);
};

const Content = () => {
    return <StyledContent>
        <Vignettes />
    </StyledContent>;
};

export default Content;