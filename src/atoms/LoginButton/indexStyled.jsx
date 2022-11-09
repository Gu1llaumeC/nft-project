import style from 'styled-components';

export const StyledLoginButton = style.button`
    .connect-wallet {
        background-color: #1578f1;
        color: white;
        width: 150px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 15px;
        font-weight: bold;
        border: 1px solid transparent;
        border-radius: 50px;
        padding: 0.8rem 1rem;
        cursor: pointer;
    }
  
    .connect-wallet-loading {
        cursor: none;
    }`