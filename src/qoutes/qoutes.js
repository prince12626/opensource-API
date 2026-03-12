import fs from "fs";

const qoutesData = fs.readFileSync("./src/qoutes/qoutes.json", "utf8");
const qoutes = JSON.parse(qoutesData);

const allQoutes = (req, res) => {
  const limit = parseInt(req.query.limit);
  const lang = req.query.lang?.toLowerCase(); // "english", "hinglish", or undefined

  let filtered = qoutes;

  if (lang) {
    filtered = qoutes.filter((q) => q.lang?.toLowerCase() === lang);
  }

  if (limit) {
    res.json({
      qoutes: filtered.slice(0, limit),
      total: filtered.length,
      success: true,
      message: "Fetched Successfully..",
    });
  } else {
    res.json({
      qoutes: filtered,
      total: filtered.length,
      success: true,
      message: "Fetched Successfully..",
    });
  }
};

const randomQoute = (req, res) => {
  const lang = req.query.lang?.toLowerCase();

  let filtered = qoutes;

  if (lang) {
    filtered = qoutes.filter((q) => q.lang?.toLowerCase() === lang);
  }

  if (filtered.length === 0) {
    return res.status(404).json({
      success: false,
      message: `No quotes found for language: ${lang}`,
    });
  }

  const random = filtered[Math.floor(Math.random() * filtered.length)];

  res.json({
    qoute: random,
    total: filtered.length,
    success: true,
    message: "Fetched Successfully..",
  });
};

export { randomQoute, allQoutes };
