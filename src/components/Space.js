import styled from "styled-components";

const Space = styled.div`
  height: ${props => (props.height ? props.height : "0px")};
  width: ${props => (props.width ? props.width : "0px")};
`;

export default Space;
