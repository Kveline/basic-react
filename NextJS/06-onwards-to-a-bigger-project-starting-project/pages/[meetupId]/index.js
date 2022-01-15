import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  console.log(props);

  return (
    <MeetupDetail
      image="https://picsum.photos/200/300"
      title="A First Meetup"
      address="Jalan Betawi 1 no 1987"
      description="This is our first meetup!"
    />
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: "m1",
        image: "https://picsum.photos/200/300",
        title: "A First Meetup",
        address: "Jalan Betawi 1 no 1987",
        description: "This is our first meetup!",
      },
    },
  };
}

export default MeetupDetails;
