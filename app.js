const express = require("express");
const BodyParser=require("body-parser");
const { MongoClient, ObjectId } = require('mongodb');
const CONNECTION_URL = "mongodb+srv://theWasabiBees:theWasabiBees@thewasabibeesspike.n3qvyoo.mongodb.net/?retryWrites=true&w=majority";
const DATABASE_NAME = "UserDatabase";

const app = express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
           

app.get('/users', (req,res)=>{
    collection.find({}).toArray((error,result)=>{
        if(error){
            return this.res.status(500).send(error)
        }
        res.send(result)
    })
})

app.listen(9090, () => {
    MongoClient.connect(CONNECTION_URL, {useNewUrlParser: true}, (error, client)=>{
        if(error){
            throw error
        }
        database=client.db(DATABASE_NAME);
        collection = database.collection("usernames");
        console.log('listening on port 9090')
    })
});


app.post("/users", (request, response) => {
    collection.insertOne(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send({msg: "user inserted"});
    });
});



module.exports = app