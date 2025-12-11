import { Link } from "react-router-dom"
function About() {

    return (
        <div className="app-container">
            <header className="app-header">React Showcase</header>
            <aside className="app-sidebar">
                <nav>
                    <Link to="/">
                        Home
                    </Link>
                </nav>
            </aside>
            <main className="app-content">
                <Link rel="stylesheet" to="/">
                    go back home...
                </Link>
            </main>
            <footer className="app-footer">...</footer>
        </div>
    )
}
export default About