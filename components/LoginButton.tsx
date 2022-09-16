import { MouseEventHandler } from "react";
import Styled from "styled-components";

const Button = Styled.button`
 {
    width: 200px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: rgb(6,14,131);
    background: linear-gradient(0deg, rgba(6,14,131,1) 0%, rgba(12,25,180,1) 100%);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
     box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
     7px 7px 20px 0px rgba(0,0,0,.1),
     4px 4px 5px 0px rgba(0,0,0,.1);
    outline: none;
    margin-top : 5px;
    margin-bottom : 5px;
    }
:hover {
    background: rgb(0,3,255);
    background: linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%);
}
`;

type Props = {
    id : string,
    text : string,
    clickEventHandler : MouseEventHandler | undefined
}

const LoginButton = ({id, text, clickEventHandler} : Props) : JSX.Element =>
        <>
        <Button id={id} onClick={clickEventHandler}>
            {text}
        </Button>
        </>

export default LoginButton;