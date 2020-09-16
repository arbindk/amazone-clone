const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQ2b5GngXe22GQZM5aaltz99VcGK7qqRpK8D05UOesQ4StjWcP8C94mXZ8fe1Tr0rUyXG02GtnM0fJRSFnzBPTA00asEHuL23"
);

//API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request  Received BOOM!!!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "inr",
  });

  //OK Created
  response.status(201).send({ clientSecret: paymentIntent.client_secret });
});
//Listen Command

exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
