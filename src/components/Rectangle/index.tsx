import React, { useState, useEffect } from "react";

import { generateRectangle } from "../../utils";
import { Props } from "./props";
import { Container } from "./styles";

const Rectangle = ({ backgroundColor }: Props) => {
  const [coordinate, setCoordinate] = useState(generateRectangle());

  const { width, height, left, top } = coordinate;

  useEffect(() => {
    const interval = setInterval(() => {
      setCoordinate(generateRectangle());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container
      top={top}
      left={left}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
    />
  );
};

export default Rectangle;
