import { MongoClient, ServerApiVersion } from 'mongodb'
import mongoose from 'mongoose';
//TODO: move this lol
const username = 'binaryroot';
const password = 'binary1122';

const uri = `mongodb+srv://${username}:${password}@cluster0.oa4uaio.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    mongoose.connect(uri);
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

