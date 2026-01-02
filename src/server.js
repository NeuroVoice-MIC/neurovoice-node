import express from "express";
import cors from "cors";
import voiceRoutes from "./routes/voice.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", voiceRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 NeuroVoice Node API running on port ${PORT}`);
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "alive" });
});
