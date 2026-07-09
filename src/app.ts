import express from "express";
import cors from "cors";
import apiRouter from "./routes/api.js";
import { errorHandler } from "./middleware/errorHandler.js";

export const createApp = () => {
  const app = express();

  const allowedOrigins = [
    process.env.FRONTEND_URL,
    "http://localhost:8000",
    "http://127.0.0.1:8000",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
  ].filter(Boolean) as string[];

  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        
        const isLocalhost = origin.startsWith("http://localhost:") || 
                            origin.startsWith("http://127.0.0.1:") || 
                            origin.startsWith("http://[::1]:");
                            
        if (allowedOrigins.includes(origin) || isLocalhost) {
          return callback(null, true);
        }
        return callback(new Error("Not allowed by CORS"));
      },
      credentials: true,
    })
  );

  app.use(express.json());
  app.use("/api", apiRouter);
  app.use(errorHandler);

  return app;
};

export default createApp;
