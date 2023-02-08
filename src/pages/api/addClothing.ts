import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

const url = process.env.DATABASE_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await MongoClient.connect(url, {});
  console.log(req.body);

  const db = client.db("canucDB");
  const collection = db.collection("canucDB");

  const result = await collection.insertOne(req.body.dataClothing);

  res.status(200).json(result);
}
