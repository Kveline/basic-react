import clientPromise from "../../lib/mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("meetup");

  if (req.method === "POST") {
    let bodyObject = JSON.parse(req.body);
    let newPost = await db.collection("meetups").insertOne(bodyObject);
    res.json(newPost);
  }

  if (req.method === "GET") {
    const posts = await db.collection("meetups").find({}).toArray();
    res.json({ status: 200, data: posts });
  }
}

export default handler;
