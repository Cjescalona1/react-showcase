import { Link } from "react-router-dom"

export function Header() {
    return (
        <header className="app-header">React Showcase</header>
    )
}
export function Sidebar(props: { links: { to: string, label: string }[] }) {
    const { links } = props;

    return (
        <aside className="app-sidebar">
            <nav>
                {links.map((link) => (
                    <Link key={link.to} to={link.to}>
                        {link.label}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}
export function Footer() {
    return (
        <footer className="app-footer"> <a href="https://react.dev/learn/thinking-in-react" target="_blank" rel="noopener noreferrer"> nice to read</a> , <a href="https://github.com/streamich/react-use">react-use</a> </footer>
    )

}

