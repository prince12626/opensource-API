import express from "express";
import { allFacts, randomFact } from "./src/facts/facts.js";
import { allQoutes, randomQoute } from "./src/qoutes/qoutes.js";
import { allJokes, randomJokes } from "./src/jokes/jokes.js";

const app = express();

app.use(express.json());

app.use("/api/facts", allFacts);
app.use("/api/facts/random", randomFact);
app.use("/api/qoutes", allQoutes);
app.use("/api/qoutes/random", randomQoute);
app.use("/api/jokes", allJokes);
app.use("/api/jokes/random", randomJokes);

app.listen(5000, () => {
  console.log("😘 Server running ....");
});
