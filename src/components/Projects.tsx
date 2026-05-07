import { useAdmin } from '../context/AdminContext';

export function Projects() {
    const { portfolioData } = useAdmin();

    return (
        <section id="projects" className="bg-gray-900/20 py-24 md:py-28 px-4">
            <div className="site-container">
                <p className="sec-label">Showcase</p>
                <h2 className="sec-title reveal-up">Featured Projects</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioData.projects.map((project, index) => {
                        const cardContent = (
                            <>
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold font-mono mb-2 text-white">{project.title}</h3>
                                    <p className="text-xs text-gray-500 font-mono">{project.date}</p>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-mono line-clamp-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-800/50 rounded-full text-xs font-mono text-gray-400 border border-gray-700/50 hover:border-green-400/50 hover:text-green-300 transition-colors duration-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </>
                        );

                        const commonProps = {
                            className: "proj-card hover-lift reveal-up focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/50",
                            style: { animationDelay: `${index * 70}ms` }
                        };

                        return project.link ? (
                            <a
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                {...commonProps}
                            >
                                {cardContent}
                            </a>
                        ) : (
                            <div key={project.id} {...commonProps}>
                                {cardContent}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
