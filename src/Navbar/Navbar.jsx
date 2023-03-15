import logo from '../img/logo.svg';
import menu from '../img/hamburger.svg';
export const Navbar = () => {
    return (
        <>
        <div className="nav">
        <div className="navbar">
                <img className="margin-navbar padding-navbar logo" src={logo} alt="logo" />
                <div className="menu-toggle">
                    <div className="menu-container margin-navbar">
                        <img className="padding-navbar menu" src={menu} alt="menu" />
                    </div>
                </div>
            </div>
            <div className="nav-overlay"></div>
        </div> 
        </>
    );
}


