import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';  // Local MongoDB URI
const options = {};

let client;
let clientPromise;

// Check if client exists and connect if not
if (!client) {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function connectToDatabase() {
  if (!clientPromise) {
    clientPromise = client.connect();
  }
  const db = client.db('myLocalDatabase');  // Replace 'myLocalDatabase' with your local database name
  return { client, db };
}
