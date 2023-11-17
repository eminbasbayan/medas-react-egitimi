import React, { useEffect, useState } from "react";
import useCounter from "../hooks/use-counter";

const BackwardCounter = () => {
  const counter = useCounter(false);

  return <div>{counter}</div>;
};

export default BackwardCounter;
