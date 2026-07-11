import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// API test route
app.get("/api", (req, res) => {
  res.send("Backend running!");
});

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "CodeQuest Backend",
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});