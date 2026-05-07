import { useState } from 'react';
import { useAdmin } from '../context/AdminContext';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAdmin();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (login(username, password)) {
            setUsername('');
            setPassword('');
            onClose();
        } else {
            setError('Invalid credentials');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 max-w-md w-full mx-4">
                <h2 className="text-2xl font-bold text-white mb-6">Admin Login</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-mono text-gray-300 mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white font-mono focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            placeholder="admin"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-mono text-gray-300 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white font-mono focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            placeholder="••••••••"
                        />
                    </div>

                    {error && (
                        <div className="bg-red-900/30 border border-red-700 rounded px-4 py-2 text-red-300 text-sm">
                            {error}
                        </div>
                    )}

                    <div className="flex gap-3 pt-4">
                        <button
                            type="submit"
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-mono py-2 rounded transition-colors"
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-mono py-2 rounded transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
