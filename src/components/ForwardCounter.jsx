import React, { useEffect, useState } from "react";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter();

  return <div>{counter}</div>;
};

export default ForwardCounter;
