import Styled from "styled-components";
const ContentStyle = Styled.div`
width: 300px;
height: auto;
margin: auto;
`;

type Props = {
    children: JSX.Element[],
}
const Content = ({children}: Props) => {
    return <ContentStyle>{children}</ContentStyle>
}

export default Content;