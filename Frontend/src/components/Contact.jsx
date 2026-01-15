import { useState } from "react";

function Contact() {
    const [loading, setLoading] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;

        const data = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value,
            website: form.website.value, // honeypot
        };

        try {
            const response = await fetch(
                import.meta.env.VITE_API_URL + "/send",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            const result = await response.json();

            if (response.ok && result.success) {
                alert("✅ Message sent successfully!");
                form.reset();
            } else {
                alert("❌ Failed to send message");
            }
        } catch (error) {
            alert("❌ Server error. Try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="py-20 md:py-28 px-5 md:px-12 lg:px-20"
        >
            <div>
                <h1 className="text-4xl font-bold text-center mb-4">
                    Contact Me
                </h1>

                <p className="text-gray-600 text-center mb-10">
                    Feel free to contact me. I will get back to you soon.
                </p>

                <div
                    className="max-w-4xl mx-auto rounded-2xl p-8 sm:p-12
          outline outline-1 outline-gray-200
          shadow-[0_15px_30px_-10px_rgba(0,0,0,0.9)]"
                >
                    <form onSubmit={sendEmail} className="space-y-7">

                        {/* 🛑 Honeypot field (hidden from users) */}
                        <input
                            type="text"
                            name="website"
                            tabIndex="-1"
                            autoComplete="off"
                            className="hidden"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 rounded-lg border
                focus:border-blue-500 focus:outline-none transition"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-3 rounded-lg border
                focus:border-blue-500 focus:outline-none transition"
                            />
                        </div>

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            className="w-full px-4 py-3 rounded-lg border
              focus:border-blue-500 focus:outline-none transition"
                        />

                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            required
                            className="w-full px-4 py-3 rounded-lg border resize-none
              focus:border-blue-500 focus:outline-none transition"
                        />

                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`px-8 py-3 rounded-full text-white font-semibold transition
                ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
