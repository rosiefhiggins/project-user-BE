const express = require("express");
const BodyParser=require("body-parser");
const { MongoClient, ObjectId } = require('mongodb');
const CONNECTION_URL = "mongodb+srv://theWasabiBees:theWasabiBees@thewasabibeesspike.n3qvyoo.mongodb.net/?retryWrites=true&w=majority";
const DATABASE_NAME = "usernames";

const app = express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
                    
app.listen(9090, () => {
    MongoClient.connect(CONNECTION_URL, {useNewUrlParser: true}, (error, client)=>{
        if(error){
            throw error
        }
        database=client.db(DATABASE_NAME);
        collection = database.collection("UserDatabase");
        console.log("server is listening on port 9090...");
    })
});


app.get('/api/users', (req,res)=>{
    collection.find({}).toArray((error,result)=>{
        if(error){
            return this.response.status(500).send(error)
        }
        console.log(result)
        this.response.send(result)
    })
})
module.exports = app