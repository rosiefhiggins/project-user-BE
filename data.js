const { MongoClient } = require('mongodb');


async function main () {
    const uri = "mongodb+srv://theWasabiBees:theWasabiBees@thewasabibeesspike.n3qvyoo.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // await createListing(client, {
        //      username: "thewasabibees",
        //      password: "peasplease"
        //     }
        // )

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }

}

main().catch(console.error);

async function createListing(client, newListing){
    const result = await
    client.db("UserDatabase").collection("usernames").insertOne(newListing);
}