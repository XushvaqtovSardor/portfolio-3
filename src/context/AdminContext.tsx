import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Skill, Project, Experience, Post } from '../data/portfolio';
import { aboutText, skills, projects, experiences, posts } from '../data/portfolio';

interface PortfolioData {
    skills: Skill[];
    projects: Project[];
    experiences: Experience[];
    posts: Post[];
    aboutText: string;
}

interface AdminContextType {
    isLoggedIn: boolean;
    isPanelOpen: boolean;
    portfolioData: PortfolioData;
    login: (username: string, password: string) => boolean;
    logout: () => void;
    openPanel: () => void;
    closePanel: () => void;
    togglePanel: () => void;
    updatePortfolioData: (data: PortfolioData) => void;
    addProject: (project: Project) => void;
    updateProject: (id: string, project: Project) => void;
    deleteProject: (id: string) => void;
    addExperience: (experience: Experience) => void;
    updateExperience: (id: string, experience: Experience) => void;
    deleteExperience: (id: string) => void;
    addPost: (post: Post) => void;
    updatePost: (id: string, post: Post) => void;
    deletePost: (id: string) => void;
    updateSkills: (skills: Skill[]) => void;
    updateAboutText: (text: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [portfolioData, setPortfolioData] = useState<PortfolioData>(() => {
        const defaultData: PortfolioData = {
            skills,
            projects,
            experiences,
            posts,
            aboutText
        };

        const savedData = localStorage.getItem('portfolioData');
        if (!savedData) {
            return defaultData;
        }

        try {
            const parsed = JSON.parse(savedData) as Partial<PortfolioData>;
            return {
                skills: parsed.skills ?? defaultData.skills,
                projects: parsed.projects ?? defaultData.projects,
                experiences: parsed.experiences ?? defaultData.experiences,
                posts: parsed.posts ?? defaultData.posts,
                aboutText: parsed.aboutText ?? defaultData.aboutText
            };
        } catch {
            return defaultData;
        }
    });

    useEffect(() => {
        localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
    }, [portfolioData]);

    const login = (username: string, password: string): boolean => {
        const validUsername = import.meta.env.VITE_ADMIN_USERNAME;
        const validPassword = import.meta.env.VITE_ADMIN_PASSWORD;

        if (username === validUsername && password === validPassword) {
            setIsLoggedIn(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsLoggedIn(false);
        setIsPanelOpen(false);
    };

    const openPanel = () => {
        setIsPanelOpen(true);
    };

    const closePanel = () => {
        setIsPanelOpen(false);
    };

    const togglePanel = () => {
        setIsPanelOpen(prev => !prev);
    };

    const updatePortfolioData = (data: PortfolioData) => {
        setPortfolioData(data);
    };

    const addProject = (project: Project) => {
        setPortfolioData(prev => ({
            ...prev,
            projects: [...prev.projects, { ...project, id: Date.now().toString() }]
        }));
    };

    const updateProject = (id: string, project: Project) => {
        setPortfolioData(prev => ({
            ...prev,
            projects: prev.projects.map(p => p.id === id ? { ...project, id } : p)
        }));
    };

    const deleteProject = (id: string) => {
        setPortfolioData(prev => ({
            ...prev,
            projects: prev.projects.filter(p => p.id !== id)
        }));
    };

    const addExperience = (experience: Experience) => {
        setPortfolioData(prev => ({
            ...prev,
            experiences: [...prev.experiences, { ...experience, id: Date.now().toString() }]
        }));
    };

    const updateExperience = (id: string, experience: Experience) => {
        setPortfolioData(prev => ({
            ...prev,
            experiences: prev.experiences.map(e => e.id === id ? { ...experience, id } : e)
        }));
    };

    const deleteExperience = (id: string) => {
        setPortfolioData(prev => ({
            ...prev,
            experiences: prev.experiences.filter(e => e.id !== id)
        }));
    };

    const addPost = (post: Post) => {
        setPortfolioData(prev => ({
            ...prev,
            posts: [...prev.posts, { ...post, id: Date.now().toString() }]
        }));
    };

    const updatePost = (id: string, post: Post) => {
        setPortfolioData(prev => ({
            ...prev,
            posts: prev.posts.map(p => p.id === id ? { ...post, id } : p)
        }));
    };

    const deletePost = (id: string) => {
        setPortfolioData(prev => ({
            ...prev,
            posts: prev.posts.filter(p => p.id !== id)
        }));
    };

    const updateSkills = (skills: Skill[]) => {
        setPortfolioData(prev => ({
            ...prev,
            skills
        }));
    };

    const updateAboutText = (text: string) => {
        setPortfolioData(prev => ({
            ...prev,
            aboutText: text
        }));
    };

    return (
        <AdminContext.Provider value={{
            isLoggedIn,
            isPanelOpen,
            portfolioData,
            login,
            logout,
            openPanel,
            closePanel,
            togglePanel,
            updatePortfolioData,
            addProject,
            updateProject,
            deleteProject,
            addExperience,
            updateExperience,
            deleteExperience,
            addPost,
            updatePost,
            deletePost,
            updateSkills,
            updateAboutText
        }}>
            {children}
        </AdminContext.Provider>
    );
}

export function useAdmin() {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error('useAdmin must be used within AdminProvider');
    }
    return context;
}
