import { useAdmin } from '../context/AdminContext';

export function Posts() {
    const { portfolioData } = useAdmin();

    return (
        <section id="posts" className="bg-gray-900/20 py-24 md:py-28 px-4">
            <div className="site-container">
                <p className="sec-label">From My Blog</p>
                <h2 className="sec-title reveal-up">Latest Posts</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {portfolioData.posts.map((post, index) => {
                        const cardContent = (
                            <>
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold font-mono mb-2 text-white">{post.title}</h3>
                                    <p className="text-xs text-gray-500 font-mono">
                                        {post.date} {post.readTime ? `• ${post.readTime}` : ''}
                                    </p>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-mono line-clamp-4">
                                    {post.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
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
                            style: { animationDelay: `${index * 80}ms` }
                        };

                        return post.link ? (
                            <a
                                key={post.id}
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                {...commonProps}
                            >
                                {cardContent}
                            </a>
                        ) : (
                            <div key={post.id} {...commonProps}>
                                {cardContent}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
