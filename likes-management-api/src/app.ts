import express from "express";
import likesRoutes from "./routes/likesRoutes";
import { authMiddleware } from "./middlewares/authMiddleware";

const app = express();
const port = 3000;

app.use(express.json());
app.use(authMiddleware);
app.use(likesRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
