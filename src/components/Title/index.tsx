import React, { useState, useEffect } from "react";

import { Color, generateName, generateJob } from "../../utils";
import { Job, Name } from "./styles";
import { Props } from "./props";

const Title = ({ color }: Props) => {
  const [name, setName] = useState(generateName());
  const [job, setJob] = useState(generateJob());

  useEffect(() => {
    const interval = setInterval(() => {
      setName(generateName());
      setJob(generateJob());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Job color={color}>{job}</Job>
      <Name color={color}>{name}</Name>
    </>
  );
};

export default Title;
