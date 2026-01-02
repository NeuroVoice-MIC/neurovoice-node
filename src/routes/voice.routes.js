import express from "express";
import multer from "multer";
import { analyzeVoice } from "../services/analyzeVoice.js";
import fs from "fs";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/voice-check", upload.single("audio"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No audio file received" });
    }

    console.log("🎤 Received audio:", req.file.path);
    console.log("➡️ Sending audio to ML service...");

    const start = Date.now();
    const result = await analyzeVoice(req.file.path);
    console.log(`⬅️ ML responded in ${Date.now() - start} ms`);

    fs.unlinkSync(req.file.path);

    res.json(result);
  } catch (err) {
    console.error("❌ ML proxy error:", err.message);
    res.status(500).json({ error: "Voice analysis failed" });
  }
});

export default router;
