const { MongoClient } = require('mongodb');

async function connection() {
    const uri = "mongodb+srv://noxworld:ACczIg4MUcUVC6iM@cluster0.86xpadb.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        await client.connect();

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

connection().catch(console.error);
