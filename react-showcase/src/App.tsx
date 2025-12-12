import { Link, Outlet } from 'react-router-dom'
import './index.css' // Ensure styles are applied 

function App() {
  const links = [
    { to: '/home', label: 'Home' },
    { to: '/list', label: 'List' },
    { to: '/hoc', label: 'HOC' },
    { to: '/about', label: 'About' },
  ]

  return (
    <div className="app-container">
      <header className="app-header">React Showcase</header>
      <aside className="app-sidebar">
        <nav>
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="app-content">

        <Outlet />

      </main>
      <footer className="app-footer">Footer</footer>
    </div>
  )
}

export default App
