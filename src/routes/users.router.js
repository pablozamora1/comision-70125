import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send({ data: users });
});

router.post("/", (req, res) => {
  const { body } = req;
  if (!body.email || !body.password) {
    return res.status(400).send({ status: "error", error: "falta data" });
  }
  users.push(body);
  res.status(200).send({ data: users });
});

router.put("/", (req, res) => {
  res.send("put hola mundo");
});

router.delete("/", (req, res) => {
  res.send("delete hola mundo");
});

export default router
