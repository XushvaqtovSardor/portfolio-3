import { useEffect, useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import type { Project, Experience, Post, Skill } from '../data/portfolio';

interface AdminPanelProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
    const {
        portfolioData,
        updateAboutText,
        updateSkills,
        addProject,
        updateProject,
        deleteProject,
        addExperience,
        updateExperience,
        deleteExperience,
        addPost,
        updatePost,
        deletePost
    } = useAdmin();
    const [activeTab, setActiveTab] = useState<'about' | 'skills' | 'projects' | 'experience' | 'posts'>('about');
    const [aboutText, setAboutText] = useState(portfolioData.aboutText);
    const [skillsDraft, setSkillsDraft] = useState<Skill[]>(portfolioData.skills);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [editingExperience, setEditingExperience] = useState<Experience | null>(null);
    const [editingPost, setEditingPost] = useState<Post | null>(null);

    useEffect(() => {
        if (isOpen) {
            setAboutText(portfolioData.aboutText);
            setSkillsDraft(portfolioData.skills);
        }
    }, [isOpen, portfolioData.aboutText, portfolioData.skills]);

    const handleSaveAbout = () => {
        updateAboutText(aboutText);
        alert('About text updated!');
    };

    const handleSaveProject = () => {
        if (editingProject) {
            if (editingProject.id && portfolioData.projects.find(p => p.id === editingProject.id)) {
                updateProject(editingProject.id, editingProject);
            } else {
                addProject(editingProject);
            }
            setEditingProject(null);
            alert('Project saved!');
        }
    };

    const handleDeleteProject = (id: string) => {
        if (confirm('Are you sure you want to delete this project?')) {
            deleteProject(id);
        }
    };

    const handleSaveExperience = () => {
        if (editingExperience) {
            if (editingExperience.id && portfolioData.experiences.find(e => e.id === editingExperience.id)) {
                updateExperience(editingExperience.id, editingExperience);
            } else {
                addExperience(editingExperience);
            }
            setEditingExperience(null);
            alert('Experience saved!');
        }
    };

    const handleDeleteExperience = (id: string) => {
        if (confirm('Are you sure you want to delete this experience?')) {
            deleteExperience(id);
        }
    };

    const handleSaveSkills = () => {
        updateSkills(skillsDraft);
        alert('Skills updated!');
    };

    const updateSkillCategory = (index: number, value: string) => {
        setSkillsDraft(prev => prev.map((skill, idx) => (
            idx === index ? { ...skill, category: value } : skill
        )));
    };

    const updateSkillItem = (categoryIndex: number, itemIndex: number, value: string) => {
        setSkillsDraft(prev => prev.map((skill, idx) => (
            idx === categoryIndex
                ? { ...skill, items: skill.items.map((item, i) => (i === itemIndex ? value : item)) }
                : skill
        )));
    };

    const addSkillItem = (categoryIndex: number) => {
        setSkillsDraft(prev => prev.map((skill, idx) => (
            idx === categoryIndex
                ? { ...skill, items: [...skill.items, ''] }
                : skill
        )));
    };

    const removeSkillItem = (categoryIndex: number, itemIndex: number) => {
        setSkillsDraft(prev => prev.map((skill, idx) => (
            idx === categoryIndex
                ? { ...skill, items: skill.items.filter((_, i) => i !== itemIndex) }
                : skill
        )));
    };

    const addSkillCategory = () => {
        setSkillsDraft(prev => ([
            ...prev,
            { category: 'New Category', items: [''] }
        ]));
    };

    const removeSkillCategory = (categoryIndex: number) => {
        setSkillsDraft(prev => prev.filter((_, idx) => idx !== categoryIndex));
    };

    const handleSavePost = () => {
        if (editingPost) {
            if (editingPost.id && portfolioData.posts.find(p => p.id === editingPost.id)) {
                updatePost(editingPost.id, editingPost);
            } else {
                addPost(editingPost);
            }
            setEditingPost(null);
            alert('Post saved!');
        }
    };

    const handleDeletePost = (id: string) => {
        if (confirm('Are you sure you want to delete this post?')) {
            deletePost(id);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 overflow-y-auto z-40">
            <div className="max-w-6xl mx-auto p-4 py-8">
                <div className="bg-gray-900 border border-gray-700 rounded-lg">
                    {/* Header */}
                    <div className="border-b border-gray-700 p-6 flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-white font-mono">Admin Panel</h1>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white text-2xl"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-gray-700">
                        {(['about', 'skills', 'projects', 'experience', 'posts'] as const).map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-1 px-4 py-3 font-mono text-sm uppercase transition-colors ${activeTab === tab
                                    ? 'border-b-2 border-green-600 text-green-600 bg-gray-800'
                                    : 'text-gray-400 hover:text-gray-300'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {/* About Tab */}
                        {activeTab === 'about' && (
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold text-white mb-4">Edit About Text</h2>
                                <textarea
                                    value={aboutText}
                                    onChange={(e) => setAboutText(e.target.value)}
                                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white font-mono min-h-40 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                                />
                                <button
                                    onClick={handleSaveAbout}
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-mono transition-colors"
                                >
                                    Save About
                                </button>
                            </div>
                        )}

                        {/* Skills Tab */}
                        {activeTab === 'skills' && (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-bold text-white">Skills</h2>
                                    <button
                                        onClick={addSkillCategory}
                                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-mono text-sm transition-colors"
                                    >
                                        + Add Category
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    {skillsDraft.map((skill, idx) => (
                                        <div key={idx} className="bg-gray-800 border border-gray-700 rounded p-4 space-y-3">
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    value={skill.category}
                                                    onChange={(e) => updateSkillCategory(idx, e.target.value)}
                                                    className="flex-1 bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                                                />
                                                <button
                                                    onClick={() => removeSkillCategory(idx)}
                                                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-xs transition-colors"
                                                >
                                                    Remove
                                                </button>
                                            </div>

                                            <div className="space-y-2">
                                                {skill.items.map((item, itemIdx) => (
                                                    <div key={itemIdx} className="flex items-center gap-2">
                                                        <input
                                                            type="text"
                                                            value={item}
                                                            onChange={(e) => updateSkillItem(idx, itemIdx, e.target.value)}
                                                            className="flex-1 bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                                                        />
                                                        <button
                                                            onClick={() => removeSkillItem(idx, itemIdx)}
                                                            className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-xs transition-colors"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>

                                            <button
                                                onClick={() => addSkillItem(idx)}
                                                className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-xs transition-colors"
                                            >
                                                + Add Skill
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={handleSaveSkills}
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-mono transition-colors"
                                >
                                    Save Skills
                                </button>
                            </div>
                        )}

                        {/* Projects Tab */}
                        {activeTab === 'projects' && (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-bold text-white">Projects</h2>
                                    <button
                                        onClick={() => setEditingProject({
                                            id: '',
                                            title: '',
                                            date: '',
                                            description: '',
                                            tags: [],
                                            link: ''
                                        })}
                                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-mono text-sm transition-colors"
                                    >
                                        + Add Project
                                    </button>
                                </div>

                                {editingProject && (
                                    <div className="bg-gray-800 border border-gray-700 rounded p-4 space-y-3 mb-6">
                                        <h3 className="font-bold text-green-400">New/Edit Project</h3>
                                        <input
                                            type="text"
                                            placeholder="Title"
                                            value={editingProject.title}
                                            onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                                            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Date"
                                            value={editingProject.date}
                                            onChange={(e) => setEditingProject({ ...editingProject, date: e.target.value })}
                                            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                                        />
                                        <textarea
                                            placeholder="Description"
                                            value={editingProject.description}
                                            onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                                            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm min-h-24 focus:outline-none focus:border-green-500"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Tags (comma separated)"
                                            value={editingProject.tags.join(', ')}
                                            onChange={(e) => setEditingProject({ ...editingProject, tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean) })}
                                            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Link (optional)"
                                            value={editingProject.link || ''}
                                            onChange={(e) => setEditingProject({ ...editingProject, link: e.target.value })}
                                            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                                        />
                                        <div className="flex gap-2">
                                            <button
                                                onClick={handleSaveProject}
                                                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded font-mono text-sm transition-colors"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => setEditingProject(null)}
                                                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded font-mono text-sm transition-colors"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-3">
                                    {portfolioData.projects.map(project => (
                                        <div key={project.id} className="bg-gray-800 border border-gray-700 rounded p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h3 className="font-bold text-white">{project.title}</h3>
                                                    <p className="text-sm text-gray-400">{project.date}</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => setEditingProject(project)}
                                                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteProject(project.id)}
                                                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                                            <div className="flex gap-2 flex-wrap">
                                                {project.tags.map((tag, idx) => (
                                                    <span key={idx} className="bg-gray-700 text-green-400 px-2 py-1 rounded text-xs font-mono">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Experience Tab */}
                        {activeTab === 'experience' && (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-bold text-white">Experience</h2>
                                    <button
                                        onClick={() => setEditingExperience({
                                            id: '',
                                            company: '',
                                            position: '',
                                            dateRange: '',
                                            description: '',
                                            type: 'full-time'
                                        })}
                                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-mono text-sm transition-colors"
                                    >
                                        + Add Experience
                                    </button>
                                </div>

                                {editingExperience && (
                                    <div className="bg-gray-800 border border-gray-700 rounded p-4 space-y-3 mb-6">
                                        <h3 className="font-bold text-green-400">New/Edit Experience</h3>
                                        <input
                                            type="text"
                                            placeholder="Company"
                                            value={editingExperience.company}
                                            onChange={(e) => setEditingExperience({ ...editingExperience, company: e.target.value })}
                                            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Position"
                                            value={editingExperience.position}
                                            onChange={(e) => setEditingExperience({ ...editingExperience, position: e.target.value })}
                                            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Date Range (e.g., Jan 2025 - Feb 2026)"
                                            value={editingExperience.dateRange}
                                            onChange={(e) => setEditingExperience({ ...editingExperience, dateRange: e.target.value })}
                                            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Link (optional)"
                                            value={editingExperience.link || ''}
                                            onChange={(e) => setEditingExperience({ ...editingExperience, link: e.target.value })}
                                            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                                        />
                                        <select
                                            value={editingExperience.type}
                                            onChange={(e) => setEditingExperience({ ...editingExperience, type: e.target.value as 'full-time' | 'part-time' | 'freelance' })}
                                            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                                        >
                                            <option value="full-time">Full-time</option>
                                            <option value="part-time">Part-time</option>
                                            <option value="freelance">Freelance</option>
                                        </select>
                                        <textarea
                                            placeholder="Description"
                                            value={editingExperience.description}
                                            onChange={(e) => setEditingExperience({ ...editingExperience, description: e.target.value })}
                                            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm min-h-24 focus:outline-none focus:border-green-500"
                                        />
                                        <div className="flex gap-2">
                                            <button
                                                onClick={handleSaveExperience}
                                                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded font-mono text-sm transition-colors"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => setEditingExperience(null)}
                                                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded font-mono text-sm transition-colors"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-3">
                                    {portfolioData.experiences.map(exp => (
                                        <div key={exp.id} className="bg-gray-800 border border-gray-700 rounded p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h3 className="font-bold text-white">{exp.company}</h3>
                                                    <p className="text-sm text-green-400">{exp.position}</p>
                                                    <p className="text-xs text-gray-400">{exp.dateRange}</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => setEditingExperience(exp)}
                                                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteExperience(exp.id)}
                                                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-gray-300 text-sm">{exp.description}</p>
                                            {exp.link && (
                                                <a
                                                    href={exp.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-2 inline-block text-xs text-green-300 hover:text-green-200 transition-colors"
                                                >
                                                    Open link
                                                </a>
                                            )}
                                            <span className="inline-block mt-2 bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-mono">
                                                {exp.type}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Posts Tab */}
                        {activeTab === 'posts' && (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-bold text-white">Posts</h2>
                                    <button
                                        onClick={() => setEditingPost({
                                            id: '',
                                            title: '',
                                            date: '',
                                            description: '',
                                            tags: [],
                                            readTime: '',
                                            link: ''
                                        })}
                                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-mono text-sm transition-colors"
                                    >
                                        + Add Post
                                    </button>
                                </div>

                                {editingPost && (
                                    <div className="bg-gray-800 border border-gray-700 rounded p-4 space-y-3 mb-6">
                                        <h3 className="font-bold text-green-400">New/Edit Post</h3>
                                        <input
                                            type="text"
                                            placeholder="Title"
                                            value={editingPost.title}
                                            onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                                            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Date"
                                            value={editingPost.date}
                                            onChange={(e) => setEditingPost({ ...editingPost, date: e.target.value })}
                                            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Read time (e.g., 4 min read)"
                                            value={editingPost.readTime}
                                            onChange={(e) => setEditingPost({ ...editingPost, readTime: e.target.value })}
                                            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                                        />
                                        <textarea
                                            placeholder="Description"
                                            value={editingPost.description}
                                            onChange={(e) => setEditingPost({ ...editingPost, description: e.target.value })}
                                            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm min-h-24 focus:outline-none focus:border-green-500"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Tags (comma separated)"
                                            value={editingPost.tags.join(', ')}
                                            onChange={(e) => setEditingPost({ ...editingPost, tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean) })}
                                            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Link (optional)"
                                            value={editingPost.link || ''}
                                            onChange={(e) => setEditingPost({ ...editingPost, link: e.target.value })}
                                            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-green-500"
                                        />
                                        <div className="flex gap-2">
                                            <button
                                                onClick={handleSavePost}
                                                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded font-mono text-sm transition-colors"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => setEditingPost(null)}
                                                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded font-mono text-sm transition-colors"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-3">
                                    {portfolioData.posts.map(post => (
                                        <div key={post.id} className="bg-gray-800 border border-gray-700 rounded p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h3 className="font-bold text-white">{post.title}</h3>
                                                    <p className="text-xs text-gray-400">
                                                        {post.date} {post.readTime ? `• ${post.readTime}` : ''}
                                                    </p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => setEditingPost(post)}
                                                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeletePost(post.id)}
                                                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-gray-300 text-sm mb-2">{post.description}</p>
                                            <div className="flex gap-2 flex-wrap">
                                                {post.tags.map((tag, idx) => (
                                                    <span key={idx} className="bg-gray-700 text-green-400 px-2 py-1 rounded text-xs font-mono">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            {post.link && (
                                                <a
                                                    href={post.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-2 inline-block text-xs text-green-300 hover:text-green-200 transition-colors"
                                                >
                                                    Open link
                                                </a>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
