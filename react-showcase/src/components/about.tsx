import { Link } from "react-router-dom"
import { Header, Footer, Sidebar } from "./partials/partialComponents.tsx"

function About() {

    return (
        <div className="app-container">
            <Header />
            <Sidebar links={[{ to: '/Home', label: 'Home' }]} />
            <main className="app-content">
                <Link rel="stylesheet" to="/">
                    go back home...
                </Link>
            </main>
            <Footer />
        </div>
    )
}
export default About
