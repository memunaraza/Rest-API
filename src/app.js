import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Default route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Express REST API is running"
    });
});

export default app;