# Portfolio + React Full Documentation (Uzbek)

This is a Notion-ready version (clean headings, short blocks, and code snippets). It merges the previous 3 files and removes duplicates.

---

## Portfolio project overview

### Sections
- Header, Hero, About, Skills, Projects, Experience, Posts, Contact, Footer
- Admin panel for content editing

### Tech stack
- React 19, React DOM
- TypeScript
- Vite
- Tailwind CSS 4
- PostCSS, Autoprefixer
- ESLint

### Project structure
```
src/
  assets/                 # image and CV files
  components/             # UI components
  context/                # AdminContext
  data/                   # portfolio content data
  App.tsx                 # layout and composition
  App.css                 # custom animations
  index.css               # global styling
  main.tsx                # React entry
```

### Key files
- src/data/portfolio.ts: skills, projects, experiences, posts, aboutText
- src/context/AdminContext.tsx: admin state and CRUD
- src/components/AdminPanel.tsx: admin panel UI
- src/components/About.tsx: photo and CV download
- vite.config.ts and src/vite-env.d.ts: .docx asset config

### Admin panel flow
- Login: VITE_ADMIN_USERNAME and VITE_ADMIN_PASSWORD
- CRUD: projects/experiences/posts, skills, about text
- Storage: localStorage (no backend)

### Assets and CV
- All images and CV live in src/assets
- CV download uses the download attribute
- .docx is included via Vite assetsInclude + TS module declaration

### Run and build
```
pnpm install
pnpm run dev
pnpm run build
pnpm run preview
```

### Quick edits
- Text/content: src/data/portfolio.ts
- Layout/design: src/components/
- Images/CV: src/assets/

### Authorship notes (what shows this is custom code)
- AdminContext contains custom state logic and localStorage sync
- AdminPanel implements CRUD forms manually
- Hero section has custom typewriter effect
- CV import + download required custom Vite + TS config
- Animations in App.css/index.css are custom

### Limitations and next steps
- No backend: admin edits only saved in localStorage
- Contact form does not send real email
- Optional next step: add API + database

---

## React Learn roadmap (react.dev/learn)

### Quick Start topics
- Create and nest components
- JSX markup
- Styling
- Displaying data
- Conditions and lists
- Events and state
- Hooks
- Lifting state up

### Thinking in React
1. Split UI into components
2. Build a static version
3. Find minimal state
4. Decide where state lives
5. Pass props down, events up

### Managing State
- Keep state minimal
- Avoid derived state
- Lift state when needed

### Escape hatches
- useEffect and useRef to work with DOM and external APIs
- Integrate third-party libraries

### Practice tasks
- Counter and toggle
- Todo list
- Filter/search list

---

## React core concepts (with code)

### Component
```tsx
function Title() {
  return <h1>Hello React</h1>
}
```

### JSX and Fragment
```tsx
function Box() {
  return (
    <>
      <h2>Heading</h2>
      <p>Text</p>
    </>
  )
}
```

### Props
```tsx
function Badge({ label }: { label: string }) {
  return <span>{label}</span>
}

<Badge label="New" />
```

### State (useState)
```tsx
const [count, setCount] = useState(0)

<button onClick={() => setCount(count + 1)}>{count}</button>
```

### Events (onClick, onChange)
```tsx
function Form() {
  const [text, setText] = useState('')
  return <input value={text} onChange={(e) => setText(e.target.value)} />
}
```

### Conditional rendering
```tsx
{isOpen && <Modal />}
{role === 'admin' ? <Admin /> : <User />}
```

### List rendering + key
```tsx
items.map((item) => (
  <li key={item.id}>{item.title}</li>
))
```

### useEffect and cleanup
```tsx
useEffect(() => {
  const handler = () => console.log('scroll')
  window.addEventListener('scroll', handler)
  return () => window.removeEventListener('scroll', handler)
}, [])
```

### useRef (DOM access)
```tsx
const inputRef = useRef<HTMLInputElement>(null)

<input ref={inputRef} />
<button onClick={() => inputRef.current?.focus()}>Focus</button>
```

### Lifting state up
```tsx
function Parent() {
  const [value, setValue] = useState('')
  return <Child value={value} onChange={setValue} />
}

function Child({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />
}
```

### Context
```tsx
const ThemeContext = createContext('light')

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Page />
    </ThemeContext.Provider>
  )
}

function Page() {
  const theme = useContext(ThemeContext)
  return <div>{theme}</div>
}
```

### useReducer
```tsx
type Action = { type: 'add' } | { type: 'sub' }

function reducer(state: number, action: Action) {
  if (action.type === 'add') return state + 1
  if (action.type === 'sub') return state - 1
  return state
}

const [count, dispatch] = useReducer(reducer, 0)
```

### useMemo and useCallback
```tsx
const total = useMemo(() => items.reduce((a, b) => a + b.price, 0), [items])
const onSave = useCallback(() => save(id), [id])
```

### React.memo
```tsx
const Card = React.memo(function Card({ title }: { title: string }) {
  return <div>{title}</div>
})
```

### Custom Hook
```tsx
function useToggle(initial = false) {
  const [value, setValue] = useState(initial)
  const toggle = () => setValue((v) => !v)
  return { value, toggle }
}
```

### Portal
```tsx
import { createPortal } from 'react-dom'

function Modal() {
  return createPortal(<div>Modal</div>, document.body)
}
```

### Lazy + Suspense
```tsx
const Heavy = React.lazy(() => import('./Heavy'))

<Suspense fallback={<div>Loading...</div>}>
  <Heavy />
</Suspense>
```

### Router (react-router-dom)
```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

### Data fetching
```tsx
useEffect(() => {
  async function load() {
    const res = await fetch('/api/posts')
    const data = await res.json()
    setPosts(data)
  }
  load()
}, [])
```

### Error Boundary (class)
```tsx
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) return <div>Xatolik yuz berdi</div>
    return this.props.children
  }
}
```

### Testing
```tsx
render(<Button label="Send" />)
expect(screen.getByText('Send')).toBeInTheDocument()
```

### Accessibility
```tsx
<button aria-label="Close">X</button>
<img src="/a.png" alt="Profile" />
```

### LocalStorage
```tsx
useEffect(() => {
  localStorage.setItem('data', JSON.stringify(value))
}, [value])
```

---

## Best practices and common pitfalls

### Immutability
```tsx
setUser((u) => ({ ...u, name: 'Ali' }))
```

### Avoid derived state
```tsx
const fullName = first + ' ' + last
```

### State snapshot
```tsx
setCount((c) => c + 1)
setCount((c) => c + 1)
```

### useEffect dependencies
```tsx
useEffect(() => {
  fetchData(userId)
}, [userId])
```

### Stale closure
```tsx
useEffect(() => {
  const id = setInterval(() => setCount((c) => c + 1), 1000)
  return () => clearInterval(id)
}, [])
```

### StrictMode
In dev, React may render twice to help catch bugs.

---

## Performance and advanced topics

### Reconciliation + Virtual DOM
React compares old and new virtual DOM and only updates changed parts.

### Performance techniques
- React.memo
- useMemo
- useCallback
- Lazy/Suspense
- Virtualized lists (react-window)

### Concurrent features
- useTransition
- useDeferredValue

### SSR vs CSR
- SSR: HTML from server, good for SEO
- CSR: HTML built in the browser, great for SPA

### React Fiber
React 16+ rendering engine with time slicing and priority updates.

---

## Quick Q&A (181-195 summary)
- 181 React nima? UI komponentlar bilan quriladigan kutubxona.
- 182 Asosiy xususiyatlar: Virtual DOM, component-based, one-way data flow, JSX.
- 183 JSX nima? HTMLga o'xshash syntax, React.createElement ga transpile qilinadi.
- 184 Functional vs Class: modern React functional + hooks.
- 185 render() metodi class komponentlarda UI qaytaradi.
- 186 Reconciliation: VDOM diffing va patching.
- 187 Props vs State: props tashqi, state ichki va o'zgaradi.
- 188 Virtual DOM: minimal DOM updates.
- 189 Lifecycle: class metodlari yoki useEffect.
- 190 Performance: memo, useMemo, useCallback, lazy, virtualization, profiler.
- 191 Custom Hook: qayta ishlatiladigan hook kombinatsiyasi.
- 192 HOC: komponentni o'rab, yangi komponent qaytaradi.
- 193 Error Boundary: xatoni ushlab, fallback UI ko'rsatadi.
- 194 SSR vs CSR: server vs browser rendering.
- 195 Fiber: prioritetli, bo'laklangan render.

---

## Wrap-up
This document is enough to understand the portfolio codebase and React from 0 to advanced. If you want, I can add real examples from the project files or make a shorter summary version.
