import React from "react";
import Title from "../../components/Title";
import Rectangle from "../../components/Rectangle";

import { COLORS } from "../../utils";
import { Container } from "./styles";

const Main = ({ isDark }: { isDark: boolean }) => (
  <Container backgroundColor={isDark ? COLORS.black : COLORS.white}>
    <Rectangle backgroundColor={COLORS.pruple} />
    <Rectangle backgroundColor={COLORS.green} />
    <Title color={isDark ? COLORS.white : COLORS.black} />
  </Container>
);

export default Main;
