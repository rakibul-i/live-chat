const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    method: ["GET", "POST"],
  },
});

app.use(cors());

const PORT = process.env.PORT || 3030;

app.get("/", async (req, res) => {
  try {
    res.send("server is running");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callended");
  });

  socket.on("calluser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("calluser", { signal: signalData, from, name });
  });

  socket.on("answercall", (data) => {
    io.to(data.to).emit("callaccepted", data.signal);
  });
});

server.listen(PORT, () => {
  console.log("listening on port", PORT);
});
