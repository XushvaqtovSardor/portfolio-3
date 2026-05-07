export function SocialLinks() {
    const socials = [
        { name: "GitHub", icon: "GH", url: "https://github.com" },
        { name: "LinkedIn", icon: "LI", url: "https://linkedin.com" },
        { name: "Twitter", icon: "TW", url: "https://twitter.com" },
        { name: "Email", icon: "✉", url: "mailto:your@email.com" },
    ];

    return (
        <div className="flex gap-4">
            {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-colors duration-200 font-mono text-sm"
                    title={social.name}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
}
