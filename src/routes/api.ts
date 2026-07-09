import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    environment: process.env.NODE_ENV || "development",
    backendUrl:  process.env.BACKEND_URL || `http://localhost:${process.env.PORT || 4000}`,
  });
});

router.get("/hello", (req, res) => {
  res.json({ message: "Hello from the backend API" });
});

export default router;
