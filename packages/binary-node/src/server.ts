import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import passport from 'passport';
import { attachRoutes } from '.';
import { configurePassport } from './config/passport';
import { getSessionMiddleware, setupSessionForApp } from './session';

// TODO: move this lol
const password = 'binary1122';
const PORT = process.env.PORT != null || 3001;
const uri = `mongodb+srv://binaryroot:${password}@cluster0.oa4uaio.mongodb.net/?retryWrites=true&w=majority`;

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
    await attachRoutes(app);

    setupSessionForApp(app);
    app.use(...getSessionMiddleware());
    app.use(passport.initialize());
    app.use(passport.session());

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    await configurePassport(passport);
  } catch (e) {
    console.log(e);
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
