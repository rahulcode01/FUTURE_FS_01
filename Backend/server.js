import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send", async (req, res) => {
  try {
    const { name, email, subject, message, website } = req.body;

    if (website) {
      return res.status(400).json({ success: false });
    }

    if (!message || message.length > 500) {
      return res.status(400).json({ success: false });
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["rks8192015@gmail.com"],
      subject: subject,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
