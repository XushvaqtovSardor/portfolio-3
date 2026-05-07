import { useEffect, useState } from 'react';

export function Hero() {
    const [typeText, setTypeText] = useState('Full Stack');
    const words = ['Full Stack', 'Frontend', 'Backend', 'Full Stack'];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        let wi = 0, ci = 0, del = false;
        let timeoutId: ReturnType<typeof setTimeout>;

        const type = () => {
            const w = words[wi];
            if (!del) {
                ci++;
                setTypeText(w.slice(0, ci));
                if (ci === w.length) {
                    del = true;
                    timeoutId = setTimeout(type, 2200);
                    return;
                }
            } else {
                ci--;
                setTypeText(w.slice(0, ci));
                if (ci === 0) {
                    del = false;
                    wi = (wi + 1) % words.length;
                }
            }
            timeoutId = setTimeout(type, del ? 55 : 95);
        };

        timeoutId = setTimeout(type, 1600);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-black text-white px-4 overflow-hidden">
            {/* Orbs */}
            <div className="hero-orb orb1"></div>
            <div className="hero-orb orb2"></div>
            <div className="hero-orb orb3"></div>

            <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
                {/* Badge */}
                <div className="hero-badge">
                    <span className="badge-dot"></span>
                    Open for new opportunities
                </div>

                {/* Title with typewriter */}
                <div className="mb-6">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 font-mono tracking-wider leading-[0.95] reveal-up">
                        <span id="typeText">{typeText}</span><br />
                        <span className="text-gray-500">Developer</span>
                    </h1>
                </div>

                {/* Description */}
                <p className="max-w-2xl mx-auto text-lg mb-12 leading-relaxed font-mono text-gray-400 reveal-up reveal-delay-2">
                    I specialize in developing sleek and functional online solutions.
                    From polished user interfaces to robust back-end systems, I bring ideas to life in the digital realm.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 reveal-up reveal-delay-3">
                    <button
                        onClick={() => scrollToSection('about')}
                        className="px-8 py-3 bg-white text-black rounded-full font-mono text-sm font-semibold hover:opacity-90 transition-opacity duration-300"
                    >
                        View My Work ↓
                    </button>
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="px-8 py-3 border border-white/30 text-white rounded-full font-mono text-sm hover:border-white hover:bg-white/5 transition-colors duration-300"
                    >
                        Contact Me
                    </button>
                </div>

                {/* Social Links */}
                <div className="mt-12 flex justify-center gap-3 reveal-up reveal-delay-4">
                    <a href="#" className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-xs font-mono hover:border-white hover:text-white transition-all duration-200">GH</a>
                    <a href="#" className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-xs font-mono hover:border-white hover:text-white transition-all duration-200">TG</a>
                    <a href="#" className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-xs font-mono hover:border-white hover:text-white transition-all duration-200">LI</a>
                </div>

                {/* Scroll Hint */}
                <div className="scroll-hint">
                    <div className="scroll-line"></div>
                    <span>scroll</span>
                </div>
            </div>
        </section>
    );
}
