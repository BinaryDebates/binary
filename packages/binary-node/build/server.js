"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const passport_1 = __importDefault(require("passport"));
const _1 = require(".");
const passport_2 = require("./config/passport");
const session_1 = require("./session");
// TODO: move this lol
const password = 'binary1122';
const PORT = process.env.PORT || 3001;
const MONGO_USER_DB = 'binary';
const uri = `mongodb+srv://binaryroot:${password}@cluster0.oa4uaio.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const app = (0, express_1.default)();
            yield mongoose_1.default.connect(uri);
            const db = mongoose_1.default.connection;
            db.once('open', () => {
                console.log('MongoDB Connection Established.');
            });
            db.useDb('binary');
            db.collection('User');
            db.once('close', () => {
                console.log('MongoDB connection closed.');
            });
            app.use((0, morgan_1.default)('combined'));
            app.use(body_parser_1.default.urlencoded({ extended: true }));
            app.use(body_parser_1.default.json());
            (0, _1.attachRoutes)(app);
            (0, session_1.setupSessionForApp)(app);
            app.use(...(0, session_1.getSessionMiddleware)());
            app.use(passport_1.default.initialize());
            app.use(passport_1.default.session());
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            });
            (0, passport_2.configurePassport)(passport_1.default);
        }
        catch (e) {
            console.log(e);
        }
        finally {
            // Ensures that the client will close when you finish/error
            // await client.close();
        }
    });
}
run().catch(console.dir);
