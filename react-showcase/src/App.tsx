import { Outlet } from 'react-router-dom'
import './index.css' // Ensure styles are applied 
import { Header, Sidebar, Footer } from './components/partials/partialComponents.tsx'
function App() {
  const links = [
    { to: '/home', label: 'Home' },
    { to: '/list', label: 'List' },
    { to: '/hoc', label: 'HOC' },
    { to: '/about', label: 'About' },
  ]

  return (
    <div className="app-container">
      <Header />
      <Sidebar links={links} />
      <main className="app-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
