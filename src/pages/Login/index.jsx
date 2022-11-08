import React from "react";
import { StyledLogin } from "./indexStyled";

import LoginContent from "../../organisms/LonginContent";

const Login = () => {
    return <StyledLogin>
        <h1>Welcome on our NFT Project</h1>
        <h2>Please Login with Metamask</h2>
        <LoginContent />
    </StyledLogin>;
};

export default Login;