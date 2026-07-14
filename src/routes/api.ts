import { Router } from "express";
import mongoose from "mongoose";
import Message from "../models/Message.js";
import Post from "../models/Post.js";
import { sendContactEmails } from "../utils/email.js";
import { syncLinkedInPosts } from "../db.js";

const router = Router();

router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    environment: process.env.NODE_ENV || "development",
    backendUrl:  process.env.BACKEND_URL || `http://localhost:${process.env.PORT || 4000}`,
  });
});

router.post("/contact", async (req, res, next) => {
  try {
    const { name, email, company, message } = req.body;

    if (mongoose.connection.readyState !== 1) {
      res.status(503).json({ error: "Database connection is offline. Please verify configurations and try again later." });
      return;
    }

    if (!name || !email || !message) {
      res.status(400).json({ error: "Name, email, and message are required." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ error: "Please provide a valid email address." });
      return;
    }

    // Save message to MongoDB
    await Message.create({
      name,
      email,
      company: company || "",
      message,
    });

    // Send emails in the background (asynchronous, non-blocking)
    sendContactEmails({ name, email, company, message });

    res.status(201).json({ success: true, message: "Thank you! Your message has been received." });
  } catch (error) {
    next(error);
  }
});

// GET /api/posts
router.get("/posts", async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      res.status(503).json({ error: "Database connection is offline." });
      return;
    }

    const posts = await Post.find().sort({ timestamp: -1 });
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

// POST /api/posts/sync
router.post("/posts/sync", async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      res.status(503).json({ error: "Database connection is offline." });
      return;
    }

    await syncLinkedInPosts();
    const posts = await Post.find().sort({ timestamp: -1 });
    res.json({ success: true, posts });
  } catch (error) {
    next(error);
  }
});

// POST /api/posts/like/:id
router.post("/posts/like/:id", async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      res.status(503).json({ error: "Database connection is offline." });
      return;
    }

    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: "Invalid post ID format." });
      return;
    }

    const post = await Post.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } },
      { new: true }
    );

    if (!post) {
      res.status(404).json({ error: "Post not found." });
      return;
    }

    res.json({ success: true, likes: post.likes });
  } catch (error) {
    next(error);
  }
});

router.get("/hello", (req, res) => {
  res.json({ message: "Hello from the backend API" });
});

export default router;

