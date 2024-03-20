import { Link, NavLink } from "react-router-dom"
import "./Header.css"
const Header = () => {
    return (
        <div>
            <nav>
                <span>My Website</span>
                <Link to="/">Home</Link>
                <NavLink to="/users">Users (Nav)</NavLink>
                <Link to="/users">Users</Link>
                <NavLink to="/posts">Posts (Nav)</NavLink>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    )
}

export default Header
