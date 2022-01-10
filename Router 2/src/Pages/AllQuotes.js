import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Yusuf",
    text: "Learning Vue is fun!",
  },

  {
    id: "q2",
    author: "Yudhistira",
    text: "Angular Vue is fun!",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
