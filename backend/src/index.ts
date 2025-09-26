import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

dotenv.config();
const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));

const port = process.env.PORT ?? 4000;
app.listen(Number(port), () => {
    console.log(`Server listening on ${port}`);
});
