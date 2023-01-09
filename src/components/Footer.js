import {Link} from "react-router-dom"
function Footer() {
    return(
        <footer className="page-footer  teal accent-3">
            <div className="footer-copuright">
                <div className="container">
                © {new Date().getFullYear()} Copyright Text
                    <Link className="grey-text text-lighten-4 right" to="https://hadith-api-khalilov.netlify.app">Hadith API</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer