import type { Request, Response, NextFunction } from "express";

export function errorHandler(error: unknown, req: Request, res: Response, next: NextFunction) {
  console.error("Backend error:", error);

  if (res.headersSent) {
    return next(error);
  }

  res.status(500).json({
    error: "Internal server error",
  });
}
