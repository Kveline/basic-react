import useCounter from "../hooks/use-counter";
import Card from "./Card";

const BackwardCounter = () => {
  // use custom hook
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
