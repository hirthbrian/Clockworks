import styled from "styled-components";
import { ContainerProps } from "./props";

export const Container = styled.View`
  position: absolute;
  top: ${(props: ContainerProps) => props.top}px;
  left: ${(props: ContainerProps) => props.left}px;
  width: ${(props: ContainerProps) => props.width}px;
  height: ${(props: ContainerProps) => props.height}px;
  background-color: ${(props: ContainerProps) => props.backgroundColor};
`;
