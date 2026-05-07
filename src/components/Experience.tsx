import { useAdmin } from '../context/AdminContext';

export function Experience() {
    const { portfolioData } = useAdmin();

    return (
        <section id="experience" className="bg-black py-24 md:py-28 px-4">
            <div className="site-container">
                <p className="sec-label">Career Path</p>
                <h2 className="sec-title reveal-up">Experience</h2>

                <div className="max-w-4xl mx-auto space-y-8">
                    {portfolioData.experiences.map((exp, index) => (
                        <div key={exp.id} className="relative reveal-up" style={{ animationDelay: `${index * 80}ms` }}>
                            {index !== portfolioData.experiences.length - 1 && (
                                <div className="absolute left-2 top-10 w-0.5 h-24 bg-linear-to-b from-green-400/50 to-transparent"></div>
                            )}

                            <div className="flex gap-6">
                                <div className="flex flex-col items-center pt-1">
                                    <div className="w-4 h-4 bg-green-400 rounded-full border-4 border-black"></div>
                                </div>

                                <div className="flex-1 bg-gray-900/20 border border-gray-700/50 rounded-lg p-6 hover:border-green-400/50 hover:bg-green-500/5 transition-all duration-300 hover-lift">
                                    <div className="mb-3">
                                        <h3 className="text-2xl font-bold font-mono text-white">{exp.company}</h3>
                                        <p className="text-lg text-green-400 font-mono mt-1">{exp.position}</p>
                                        <p className="text-sm text-gray-500 font-mono mt-2">{exp.dateRange}</p>
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed font-mono mb-4">
                                        {exp.description}
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <span className="px-3 py-1 bg-gray-800/50 rounded-full text-xs font-mono text-gray-400 border border-gray-700/50 capitalize">
                                            {exp.type}
                                        </span>
                                        {exp.link && (
                                            <a
                                                href={exp.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs text-green-400 hover:text-green-300 transition-colors font-mono"
                                            >
                                                Visit →
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
