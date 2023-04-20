import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <h2>İŞ ARAMA PORTALI</h2>
            <div>
                <Link to={'/'}>İŞLER
                </Link>
                <Link to={'/add-jop'}>İŞ EKLE</Link>
            </div>
        </header>
    );
};

export default Header;