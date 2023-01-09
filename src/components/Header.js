import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="teal accent-3">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">React SPA</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contact</Link></li>
                    <li><a href="https://react-movie-khalilov.netlify.app">Movie API APP</a></li>
                    <li><a href="https://hadith-api-khalilov.netlify.app">Hadith API</a></li>
                </ul>
            </div>
        </nav>
    ) 
}