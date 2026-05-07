import { useAdmin } from '../context/AdminContext';

export function Skills() {
    const { portfolioData } = useAdmin();

    return (
        <section id="skills" className="bg-black py-24 md:py-28 px-4">
            <div className="site-container">
                <p className="sec-label">Technical Stack</p>
                <h2 className="sec-title reveal-up">Skills & Technologies</h2>

                <div className="grid md:grid-cols-3 gap-12">
                    {portfolioData.skills.map((skillGroup, index) => (
                        <div key={skillGroup.category} className="reveal-up" style={{ animationDelay: `${index * 80}ms` }}>
                            <h3 className="text-2xl font-bold mb-6 font-mono text-white">{skillGroup.category}</h3>
                            <ul className="space-y-3">
                                {skillGroup.items.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center text-gray-400 font-mono hover:text-white transition-colors duration-200"
                                    >
                                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
