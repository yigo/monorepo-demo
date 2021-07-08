import { FC } from "react";
import { useCounter } from "@monorepo/counter";

const Page2:FC = () => {
  const { increase, decrease }= useCounter();
  return (
    <>
      <button onClick={()=> increase()}>increase</button>
      <button onClick={()=> decrease()}>decrease</button>
    </>
  );
}

export default Page2;