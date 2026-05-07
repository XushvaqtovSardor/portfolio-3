import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Posts } from './components/Posts'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { AdminPanel } from './components/AdminPanel'
import { AdminProvider, useAdmin } from './context/AdminContext'
import './App.css'

function AppContent() {
  const { isPanelOpen, closePanel } = useAdmin()

  useEffect(() => {
    // Listen for admin panel toggle
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isPanelOpen) {
        closePanel()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isPanelOpen, closePanel])

  return (
    <div className="bg-black">
      <Header />

      <AdminPanel
        isOpen={isPanelOpen}
        onClose={closePanel}
      />

      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Posts />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <AdminProvider>
      <AppContent />
    </AdminProvider>
  )
}

export default App
