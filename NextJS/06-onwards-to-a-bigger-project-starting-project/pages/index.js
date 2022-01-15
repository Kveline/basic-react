import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

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

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// pre rendering data, execute during build process, for static
export async function getStaticProps() {
  // get data
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // if we need to change data, revalidate 2 seconds will wait until regenerate data for incoming request
    revalidate: 2,
  };
}

export default HomePage;
