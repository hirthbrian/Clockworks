import styled from "styled-components";
import { Props } from "./props";

export const Job = styled.Text`
  font-size: 26px;
  text-align: center;
  font-family: "montserratItalic";
  color: ${(props: Props) => props.color};
`;

export const Name = styled.Text`
  font-size: 38px;
  text-align: center;
  font-family: "montserrat";
  color: ${(props: Props) => props.color};
`;
