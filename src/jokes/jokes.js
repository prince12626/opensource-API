import fs from "fs";

const jokesData = fs.readFileSync("./src/jokes/jokes.json", "utf8");
const jokes = JSON.parse(jokesData);

const allJokes = (req, res) => {
  const limit = parseInt(req.query.limit);

  if (limit) {
    res.json({
      jokes: jokes.slice(0, limit),
      total: jokes.length,
      success: true,
      message: "Fetched Successfully..",
    });
  } else {
    res.json(jokes);
  }
};

const randomJokes = (req, res) => {
  const random = jokes[Math.floor(Math.random() * jokes.length)];
  res.json({
    joke: random,
    total: jokes.length,
    success: true,
    message: "Fetched Successfully..",
  });
};

export { randomJokes, allJokes };
