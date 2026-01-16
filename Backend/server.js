import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(
  cors({
    origin: "*", // you can restrict to Netlify URL later
    methods: ["POST"],
  })
);
app.use(express.json());

/* ================= RESEND SETUP ================= */
if (!process.env.RESEND_API_KEY) {
  console.error("❌ RESEND_API_KEY is missing");
}

const resend = new Resend(process.env.RESEND_API_KEY);

/* ================= ROUTES ================= */

// Health check (optional but useful)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Contact form route
app.post("/send", async (req, res) => {
  try {
    const { name, email, subject, message, website } = req.body;

    /* 🛑 Honeypot spam protection */
    if (website) {
      return res.status(400).json({ success: false });
    }

    /* 🛑 Basic validation */
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false });
    }

    if (message.length > 500) {
      return res.status(400).json({ success: false });
    }

    /* 📧 Send email */
    await resend.emails.send({
      from: "Portfolio <rks8192015@gmail.com>", // IMPORTANT FIX
      to: ["rks8192015@gmail.com"],
      subject: subject,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return res.status(500).json({ success: false });
  }
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
