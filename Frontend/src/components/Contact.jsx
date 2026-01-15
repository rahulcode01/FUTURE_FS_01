function Contact() {

    const sendEmail = async (e) => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
            website: e.target.website.value, // 👈 honeypot
        };

        try {
            const response = await fetch("http://localhost:5000/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Message sent successfully!");
                e.target.reset();
            } else {
                alert("Message failed to send");
            }
        } catch (error) {
            alert("Server error");
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

                <div className="max-w-4xl mx-auto rounded-2xl p-8 sm:p-12
                outline outline-1 outline-gray-200
                shadow-[0_15px_30px_-10px_rgba(0,0,0,0.9)]">

                    <form onSubmit={sendEmail} className="space-y-7">

                        {/* 🛑 Honeypot field (hidden) */}
                        <input
                            type="text"
                            name="website"
                            style={{ display: "none" }}
                            tabIndex="-1"
                            autoComplete="off"
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
                            className="w-full px-4 py-3 rounded-lg border
                            resize-none focus:border-blue-500 focus:outline-none transition"
                        />

                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-8 py-3 rounded-full bg-blue-500
                                text-white font-semibold hover:bg-blue-600 transition"
                            >
                                Send Message
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
