import { MongoClient } from "mongodb";

export default class DatabaseService {
    //_client = new MongoClient(process.env.MONGO_URI);
    _client = new MongoClient('mongodb://docker:mongopw@localhost:55000')
    async Connect() {
        try {
            await this._client.connect();
        } catch (error) {
            console.error(error);
        }
    }

    async ExecuteFindCommand(database, collection, command) {
        try {
            let data = await this._client.db(database).collection(collection).find(command);
            return data;
        } catch (error) {
            console.error(error);
        }
    }
}
