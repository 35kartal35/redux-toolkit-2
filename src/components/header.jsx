import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <h2>işin hazır</h2>
            <div>
                <Link to={'/'}>iş listesi
                </Link>
                <Link to={'/add-jop'}>İş Ekle</Link>
            </div>
        </header>
    );
};

export default Header;