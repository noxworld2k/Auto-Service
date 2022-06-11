const { MongoClient } = require('mongodb');

async function connection() {
    const uri = "mongodb+srv://noxworld:ACczIg4MUcUVC6iM@cluster0.86xpadb.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
//Query to databse and collection

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        // await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}




connection().catch(console.error);

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
// async function listDatabases(client) {
//     databasesList = await client.db().admin().listDatabases();
//
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// }