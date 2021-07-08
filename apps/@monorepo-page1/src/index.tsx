import { FC } from "react";
import { useCounter } from "@monorepo/counter";

const Page1:FC = () => {
  const { counter }= useCounter();
  return (<>{counter}</>);
}

export default Page1;