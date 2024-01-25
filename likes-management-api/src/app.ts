import express from "express";
import cors from "cors";
import { authMiddleware } from "./middlewares/authMiddleware";
import { exceptionMiddleware } from "./middlewares/exceptionMiddleware";
import likesRoutes from "./routes/likesRoutes";

const app = express();
const port = 3000;

// Enable CORS for all requests
app.use(cors());

// Middleware to parse the request body
app.use(express.json());

// Specific middlewares (e.g., authentication)
app.use(authMiddleware);

// Routes
app.use(likesRoutes);

// Exception handling middleware
app.use(exceptionMiddleware);

// Starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
