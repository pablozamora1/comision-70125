import express from "express";
import userRouter from "./routes/users.router.js";

const app = express();
const PUERTO = 8081;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [];

app.use('/api/users', userRouter);

//Listen
app.listen(PUERTO, () => {
  console.log(`escuchando en el http://localhost:${PUERTO}`);
});
