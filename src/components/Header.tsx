import { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { LoginModal } from './LoginModal';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const { isLoggedIn, logout, openPanel } = useAdmin();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    const handleAdminLogin = () => {
        if (!isLoggedIn) {
            setIsLoginModalOpen(true);
            setIsOpen(false);
        }
    };

    const handleOpenAdminPanel = () => {
        if (isLoggedIn) {
            openPanel();
            setIsOpen(false);
        } else {
            setIsLoginModalOpen(true);
            setIsOpen(false);
        }
    };

    return (
        <>
            <header className="fixed top-0 w-full bg-black/85 backdrop-blur-md border-b border-gray-900/50 z-50 transition-all duration-300">
                <div className="site-container py-4 flex justify-between items-center">
                    <div className="flex items-center gap-1 font-mono font-bold text-xl">
                        <span className="text-white">Sarvar</span>
                        <span className="text-green-400">.dev</span>
                    </div>

                    <nav className="hidden md:flex gap-8">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="font-mono text-sm text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('skills')}
                            className="font-mono text-sm text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            Skills
                        </button>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="font-mono text-sm text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => scrollToSection('experience')}
                            className="font-mono text-sm text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            Experience
                        </button>
                        <button
                            onClick={() => scrollToSection('posts')}
                            className="font-mono text-sm text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            Posts
                        </button>
                    </nav>

                    <div className="flex items-center gap-3">
                        {isLoggedIn ? (
                            <>
                                <button
                                    onClick={handleOpenAdminPanel}
                                    className="hidden md:block font-mono text-xs px-3 py-1 rounded-full border border-green-600/50 text-green-400 hover:border-green-500 hover:text-green-300 transition-all duration-200"
                                >
                                    Admin
                                </button>
                                <button
                                    onClick={logout}
                                    className="hidden md:block font-mono text-xs px-3 py-1 rounded-full border border-red-600/50 text-red-400 hover:border-red-500 hover:text-red-300 transition-all duration-200"
                                    title="Logout"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={handleAdminLogin}
                                className="hidden md:block font-mono text-xs px-3 py-1 rounded-full border border-gray-600/50 text-gray-400 hover:border-gray-500 hover:text-white transition-all duration-200"
                                title="Login"
                            >
                                Login
                            </button>
                        )}

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-white hover:text-gray-300 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {isOpen && (
                        <nav className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-900/50 md:hidden">
                            <div className="flex flex-col p-4 gap-4">
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="font-mono text-gray-300 hover:text-white transition-colors text-left py-2"
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => scrollToSection('skills')}
                                    className="font-mono text-gray-300 hover:text-white transition-colors text-left py-2"
                                >
                                    Skills
                                </button>
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="font-mono text-gray-300 hover:text-white transition-colors text-left py-2"
                                >
                                    Projects
                                </button>
                                <button
                                    onClick={() => scrollToSection('experience')}
                                    className="font-mono text-gray-300 hover:text-white transition-colors text-left py-2"
                                >
                                    Experience
                                </button>
                                <button
                                    onClick={() => scrollToSection('posts')}
                                    className="font-mono text-gray-300 hover:text-white transition-colors text-left py-2"
                                >
                                    Posts
                                </button>
                                <div className="border-t border-gray-800 pt-3">
                                    {isLoggedIn ? (
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={handleOpenAdminPanel}
                                                className="flex-1 font-mono text-xs px-3 py-2 rounded-full border border-green-600/50 text-green-300 hover:border-green-500 transition-all duration-200"
                                            >
                                                Admin
                                            </button>
                                            <button
                                                onClick={logout}
                                                className="font-mono text-xs px-3 py-2 rounded-full border border-red-600/50 text-red-300 hover:border-red-500 transition-all duration-200"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={handleAdminLogin}
                                            className="w-full font-mono text-xs px-3 py-2 rounded-full border border-gray-600/50 text-gray-300 hover:border-gray-500 hover:text-white transition-all duration-200"
                                        >
                                            Login
                                        </button>
                                    )}
                                </div>
                            </div>
                        </nav>
                    )}
                </div>
            </header>

            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
            />

        </>
    );
}
