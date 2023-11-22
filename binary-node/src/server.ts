import bodyParser from 'body-parser';
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb'
import mongoose from 'mongoose';
import morgan from 'morgan';
//TODO: move this lol
const username = 'binaryroot';
const password = 'binary1122';
const PORT = process.env.PORT || 3001;

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
    const db = mongoose.connection
    db.once('open', () => {
        console.log('MongoDB Connection Established.');
    })
    
    const app = express(); 
    app.use(morgan('combined'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
