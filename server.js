const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

// Import the env configuration if not in production environment
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//Instantiating a new express application
const app = express();
// 5000 for local server
const port = process.env.PORT || 5000;

// Process all the request's body tag and convert it to json
app.use(bodyParser.json());
// Encode the url passing in and passing out - should encode characters like space/symbols
app.use(bodyParser.urlencoded({ extended: true }));

// Enables the cross origin requests to communicate b/w client (port 3000) & server (port 5000)
app.use(cors());

if (process.env.NODE_ENV === "production") {
  // Serve all the static files of the client's built artifacts
  app.use(express.static(path.join(__dirname, "client/build")));

  // Serve the client index.html for any get route which doesnt have any API coverage
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// Start the server with the given port number
app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on the port " + port);
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeError, stripeRes) => {
    if (stripeError) {
      res.status(500).send({ error: stripeError });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
