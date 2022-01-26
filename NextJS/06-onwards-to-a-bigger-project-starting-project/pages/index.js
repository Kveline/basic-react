import MeetupList from "../components/meetups/MeetupList";
import { useEffect } from "react";

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

//  good for data changes frequently
export async function getServerSideProps(_context) {
  // const req = context.req;
  // const res = context.res;

  let res = await fetch("http://localhost:3000/api/meetup", {
    method: "GET",
  });
  res = await res.json();
  const meetups = res.data;
  console.log(meetups[0]._id);

  // run on the server
  return {
    props: {
      meetups: meetups,
    },
  };
}

// //pre rendering data, execute during build process, for static : good for static website
// export async function getStaticProps() {
//   // get data
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     // if we need to change data, revalidate 2 seconds will wait until regenerate data for incoming request
//     revalidate: 2,
//   };
// }

export default HomePage;
