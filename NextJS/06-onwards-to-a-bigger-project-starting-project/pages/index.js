import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image: "https://picsum.photos/200/300",
    address: "Jalan Betawi 1 no 1987",
    description: "This is our first meetup!",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image: "https://picsum.photos/200/300",
    address: "Jalan Betawi 2 no 1986",
    description: "This is our Second meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
}

export default HomePage;
