import useCounter from "../hooks/use-counter";
import Card from "./Card";

const ForwardCounter = () => {
  // use custom hook
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
