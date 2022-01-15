import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;
    const client = await MongoClient.connect(
      'mongosh "mongodb+srv://cluster0.cfxhs.mongodb.net/meetups" --username yusuflk9'
    );

    const db = client.db;
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
