import express from "express";

const app = express();
const PUERTO = 8081;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [];

app.get("/users", (req, res) => {
  res.send({ data: users });
});

app.post("/users", (req, res) => {
  const { body } = req;
  if (!body.email || !body.password) {
    return res.status(400).send({ status: "error", error: "falta data" });
  }
  users.push(body);
  res.status(200).send({ data: users });
});

app.put("/users", (req, res) => {
  res.send("put hola mundo");
});

app.delete("/users", (req, res) => {
  res.send("delete hola mundo");
});

//Listen
app.listen(PUERTO, () => {
  console.log(`escuchando en el http://localhost:${PUERTO}`);
});
