import { Link } from "react-router-dom"
import { Header, Footer, Sidebar } from "./partials/partialComponents.tsx"

function About() {

    return (
        <div className="app-container">
            <Header />
            <Sidebar links={[{ to: '/', label: 'Home' }]} />
            <main className="app-content">

                <h1>About</h1>
                <p>this application is a little repository of basic features of react for practical purposes </p>
                <Link rel="stylesheet" to="/">
                    go back home...
                </Link>
            </main>
            <Footer />
        </div>
    )
}
export default About
