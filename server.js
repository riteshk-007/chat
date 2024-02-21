import express from "express";
import http from "http";

const app = express();

const PORT = process.env.PORT || 4000;

http.createServer(app).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
