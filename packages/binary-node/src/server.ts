import bodyParser from 'body-parser';
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose from 'mongoose';
import morgan from 'morgan';
import passport from 'passport';
import { attachRoutes } from '.';
import { configurePassport } from './config/passport';
import { getSessionMiddleware, setupSessionForApp } from './session';

// TODO: move this lol
const password = 'binary1122';
const PORT = process.env.PORT || 3001;
const MONGO_USER_DB = 'binary';
const uri = `mongodb+srv://binaryroot:${password}@cluster0.oa4uaio.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const app = express();
    await mongoose.connect(uri);

    const db = mongoose.connection;
    db.once('open', () => {
      console.log('MongoDB Connection Established.');
    });
    db.useDb('binary');
    db.collection('User');
    db.once('close', () => {
      console.log('MongoDB connection closed.');
    });
    app.use(morgan('combined'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    attachRoutes(app);

    setupSessionForApp(app);
    app.use(...getSessionMiddleware());
    app.use(passport.initialize());
    app.use(passport.session());

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    configurePassport(passport);
  } catch (e) {
    console.log(e);
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
