import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  svg {
    height: 16px;
    margin-right: 5px;
  }
  ${(props) =>
    props.size === "L" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
      svg {
        height: 20px;
      }
    `}
  ${(props) =>
    props.primary &&
    css`
      background-color: #5542f6;
      color: white;
      border: 1px solid 5542F6;
    `}
    ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: white;
    `}
    ${(props) =>
    props.white &&
    props.outline &&
    css`
      background-color: transparent;
      color: white;
      border: 1px solid white;
    `}
`;

export default function PrimaryBtn({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
