import express from "express";
import http from "http";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { Server } from "socket.io";

const app = express();

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

// socket.io
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A user connected", socket);
});
