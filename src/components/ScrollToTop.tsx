export function ScrollToTop() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg font-mono font-bold opacity-0 hover:opacity-100"
            title="Scroll to top"
        >
            ↑
        </button>
    );
}
