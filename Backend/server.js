import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send", async (req, res) => {
  try {
    const { name, email, subject, message, website } = req.body;

    // Honeypot spam protection
    if (website) {
      return res.status(400).json({ success: false });
    }

    // Message length limit
    if (!message || message.length > 500) {
      return res.status(400).json({ success: false });
    }

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
