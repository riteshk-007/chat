import express from "express";
import http from "http";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();

const PORT = process.env.PORT || 4000;

http.createServer(app).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
