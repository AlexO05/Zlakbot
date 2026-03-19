
const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI; // your MongoDB connection string



const client = new MongoClient(uri);

let memoryCollection;

async function connectDB() {
  await client.connect();
  const db = client.db("streamerBot"); // database name
  memoryCollection = db.collection("memory"); // collection for AI memory
  console.log("MongoDB connected");
}

async function saveFact(fact, message = null) {
  // message is the Discord message object
  const doc = {
    fact,
    timestamp: new Date(),
  };

  if (message) {
    doc.userId = message.author.id;
    doc.username = message.author.username;
  }

  const result = await memoryCollection.insertOne(doc);
  console.log("Fact saved:", result.insertedId);
  return result;
}

async function getLastFacts(limit = 20) {
  const docs = await memoryCollection
    .find()
    .sort({ timestamp: -1 })
    .limit(limit)
    .toArray();
  return docs.map(doc => doc.fact);
}

async function getUserFacts(userId, limit = 20) {
  const docs = await memoryCollection
    .find({ userId })
    .sort({ timestamp: -1 })
    .limit(limit)
    .toArray();
  return docs.map(doc => doc.fact);
}

module.exports = { connectDB, saveFact, getLastFacts, getUserFacts };