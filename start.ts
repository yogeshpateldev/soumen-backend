import createApp from "./src/app.js";
import connectDatabase from "./src/db.js";

// Load environment variables from .env if supported and present
try {
  if (typeof process.loadEnvFile === "function") {
    process.loadEnvFile();
  }
} catch (error) {
  // Ignore if file doesn't exist
}

const PORT = Number(process.env.PORT ?? 4000);

// Connect to database
connectDatabase();

const app = createApp();

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});

