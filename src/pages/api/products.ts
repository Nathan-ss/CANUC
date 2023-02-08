// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const url = process.env.DATABASE_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await MongoClient.connect(url, {});

  const db = client.db("canucDB");
  const collection = db.collection("canucDB");

  const result = await collection.find().toArray();
  res.status(200).json(result);
}
