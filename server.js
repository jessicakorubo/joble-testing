import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;
const host = "0.0.0.0"; // 👈 CRITICAL for AWS App Runner

// Serve static files from the root or public folder
app.use(express.static(path.join(__dirname, "public"))); // optional if you have public assets

// Handle all routes by sending root index.html
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // <-- point to root
});

app.listen(port, host, () => {
  console.log(`✅ Server is running on http://${host}:${port}`);
});
