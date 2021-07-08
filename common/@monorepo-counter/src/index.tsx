import { FC, useContext, createContext, useState } from "react";

interface CounterTypes {
  counter: number;
  increase: () => void;
  decrease: () => void;
}

const Context = createContext<CounterTypes>({} as CounterTypes)

const useCounter = () => useContext(Context);

const Counter:FC = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const increase = () => { setCounter(counter+1)};
  const decrease = () => { setCounter(counter-1)};

  return (<Context.Provider value={{ counter, increase, decrease }}>{children}</Context.Provider>)
};

export {useCounter};
export default Counter;