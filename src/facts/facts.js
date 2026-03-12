import fs from "fs";

const factsData = fs.readFileSync("./src/facts/facts.json", "utf8");
const facts = JSON.parse(factsData);

const allFacts = (req, res) => {
  const limit = parseInt(req.query.limit);

  if (limit) {
    res.json({
      facts: facts.slice(0, limit),
      total: facts.length,
      success: true,
      message: "Fetched Successfully..",
    });
  } else {
    res.json(facts);
  }
};

const randomFact = (req, res) => {
  const random = facts[Math.floor(Math.random() * facts.length)];
  res.json({
    fact: random,
    total: facts.length,
    success: true,
    message: "Fetched Successfully..",
  });
};

export { randomFact, allFacts };
