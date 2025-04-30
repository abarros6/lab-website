import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGO_URL, { useUnifiedTopology: true });
  const db = client.db(process.env.MONGO_DB);

  const collection = db.collection('contact_form');
  const result = await collection.insertOne(req.body);

  client.close();

  res.json({ message: 'Data saved successfully!' });
}
