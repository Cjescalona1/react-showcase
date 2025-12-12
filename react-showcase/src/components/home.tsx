import { Link } from "react-router-dom"
function Home() {
    return (
        <>

            <h1>Home</h1>

            <ul>
                <li>
                    <Link to="/list">List</Link>
                    <p>Lazy component that implement suspense, calling a random list of fake users from an external API using an custom function that recieve the URL and the <b>state setter</b> to pass the information to the component.</p>
                </li>
                <li>
                    <Link to="/hoc">HOC</Link>
                    <p>High order component , that wrapp input components that recieve the name and the setter of the state as props and control the final action giving utility to the generic inputs.</p>

                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </>
    )
}
export default Home