const {MongoClient} = require('mongodb');

async function main(){

   const uri = "mongodb://localhost:27017/";
   const client = new MongoClient(uri);

   try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls

      // Create a single new listing
      await listall(client, "mydb", "products");
   } finally {
      // Close the connection to the MongoDB cluster
      await client.close();
   }
}
main().catch(console.error);


async function listall(client, dbname, colname){
   const result = await client.db("mydb").collection("products").find({}).toArray();
   console.log(JSON.stringify(result));
}
