import { ErrorDetails } from "../models/errorDetails";
import { Request, Response, NextFunction } from "express";

export const exceptionMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500;
  const message = err.message || "Internal Server Error";

  const errorDetails = new ErrorDetails(statusCode, message);
  res.status(statusCode).json(errorDetails);
};
