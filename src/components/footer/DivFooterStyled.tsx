import styled from "styled-components";

interface DivStyledProps {
  height?: string;
}

const DivStyledFooter = styled.div<DivStyledProps>`
background-color: white;
  height: ${({ height }) => height ?? "350px"};
  background-size: cover;
  background-position: bottom;
  display: flex;
  align-items: center;
  padding-left: 30px;
`;
export default DivStyledFooter;
