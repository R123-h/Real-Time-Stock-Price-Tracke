const express = require("express");
const next = require("next");
const axios = require("axios");
const { MongoClient } = require("mongodb");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
// import schedule from "node-schedule";
const cron = require("node-cron");
//
const http = require("http");
// const socketIO = require("socket.io");
//

app.prepare().then(async () => {
  const server = express();
  const httpServer = http.createServer(server);

  // Scheduler
  const MONGO_URI =
  "mongodb+srv://ravishna07:Jka9MRNSPNvbQXhw@cluster0.pmx3ah3.mongodb.net/";
const DATABASE_NAME = "FomoFactory";
const API_URL = "https://api.coincap.io/v2/assets";

const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    console.log("datafectedsucessfully");
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for`, error);
    return null;
  }
};

const storeData = async (client, symbol, data) => {
  const db = client.db(DATABASE_NAME);
  const collection = db.collection(symbol);
  const entry = {
  //  symbol,
    price: data.priceUsd,
    timestamp: new Date(),
    symbol : data.symbol
  };
  await collection.insertOne(entry);
};

const pollData = async () => {
  const client = new MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    // for (const symbol of SYMBOLS) {
    const data = await fetchData();
    if (data) {
      for (const item of data?.data) {
        await storeData(client, item?.id, item);
      }
    }
    //}
  } finally {
    await client.close();
  }
};


  server.all("*", (req, res) => {
    return handle(req, res);
  });
  

  const PORT = process.env.PORT || 3001;
  httpServer.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`);

    // runScheduler();
    
  });
  cron.schedule("*/5 * * * * *", () => {
    console.log("Cron job running...");
    pollData(); // Corrected: Invoke pollData as a function

  });
});
