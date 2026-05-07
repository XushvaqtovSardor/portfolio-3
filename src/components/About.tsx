import { useAdmin } from '../context/AdminContext';
import profileImage from '../assets/myphoto.png';

export function About() {
    const { portfolioData } = useAdmin();

    return (
        <section id="about" className="bg-gray-900/20 py-24 md:py-28 px-4">
            <div className="site-container">
                <p className="sec-label">Introductory</p>
                <h2 className="sec-title reveal-up">About Me</h2>

                <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
                    <div className="reveal-up reveal-delay-1">
                        <p className="text-lg leading-relaxed font-mono text-gray-300 whitespace-pre-line mb-6 max-w-xl">
                            {portfolioData.aboutText}
                        </p>
                        <button className="px-6 py-3 border border-white/30 text-white rounded-lg hover:border-white hover:bg-white/5 transition-all duration-300 font-mono text-sm">
                            Download CV ↓
                        </button>
                    </div>

                    <div className="flex justify-center reveal-up reveal-delay-2">
                        <div className="w-80 h-96 bg-linear-to-br from-gray-800 to-gray-900 rounded-xl border border-white/20 overflow-hidden hover-lift transition-all duration-300">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
