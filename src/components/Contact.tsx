import { useState } from 'react';

export function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="relative py-24 md:py-28 px-4 overflow-hidden bg-black">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-linear-to-t from-green-500/5 to-transparent rounded-full blur-3xl -translate-x-1/2"></div>
            </div>

            <div className="relative z-10 site-container-narrow text-center">
                <p className="sec-label">Get in Touch</p>
                <h2 className="sec-title reveal-up">
                    Let's work <span className="text-green-400">together</span>
                </h2>
                <p className="text-gray-400 font-mono mb-12 reveal-up reveal-delay-1">
                    Have a project in mind? Let's collaborate and bring your ideas to life.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 reveal-up reveal-delay-2">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900/30 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors duration-200"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900/30 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors duration-200"
                    />
                    <textarea
                        name="message"
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-gray-900/30 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono placeholder-gray-500 focus:border-green-400 focus:outline-none transition-colors duration-200 resize-none"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-white text-black font-mono font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
                    >
                        {submitted ? 'Message sent! ✓' : 'Send Message →'}
                    </button>
                </form>

                <div className="mt-12 grid grid-cols-3 gap-8 text-sm font-mono">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                    <a href="mailto:hello@example.com" className="text-gray-400 hover:text-white transition-colors">Email</a>
                </div>
            </div>
        </section>
    );
}
