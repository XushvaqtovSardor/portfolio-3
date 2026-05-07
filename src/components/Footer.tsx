export function Footer() {
    return (
        <footer className="bg-black border-t border-gray-900/50 text-gray-400 py-16 px-4">
            <div className="site-container">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="reveal-up">
                        <h3 className="font-mono font-bold text-white mb-4">Sarvar.dev</h3>
                        <p className="text-sm font-mono text-gray-500">Full Stack Developer & Designer</p>
                    </div>

                    <div className="reveal-up reveal-delay-1">
                        <h4 className="font-mono font-bold text-white mb-4">Navigation</h4>
                        <ul className="space-y-2 text-sm font-mono">
                            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                            <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
                        </ul>
                    </div>

                    <div className="reveal-up reveal-delay-2">
                        <h4 className="font-mono font-bold text-white mb-4">Social</h4>
                        <ul className="space-y-2 text-sm font-mono">
                            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
                        </ul>
                    </div>

                    <div className="reveal-up reveal-delay-3">
                        <h4 className="font-mono font-bold text-white mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm font-mono">
                            <li><a href="mailto:hello@example.com" className="hover:text-white transition-colors">Email</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Get in touch</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-900/50 pt-8 text-center text-xs font-mono text-gray-600">
                    <p>&copy; 2025 Sarvar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
