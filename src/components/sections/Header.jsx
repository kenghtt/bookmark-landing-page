import { useState } from "react";
import MobileNav from "../MobileNav";

function Header() {

    const [isToggled, setIsToggled] = useState(false);

    function toggleMobileNav() {
        setIsToggled(true);
        console.log("toggled");
    }

    return ( 
        <header className="py-4 px-4">
            <div className="container flex justify-center">
                <img src="../images/logo-bookmark.svg" alt="bookmark logo" className="mr-auto"
                />

                <nav className="hidden sm:block">
                    <ul className="nav__list flex gap-4 px-2">
                        <li className="nav__item">Features</li>
                        <li className="nav__item">Pricing</li>
                        <li className="nav__item">Contact</li>
                        <li className="nav__item bg-softRed text-white px-4">Login</li>
                    </ul>
                </nav>

                <img src="../images/icon-hamburger.svg" alt="hamburger"
                    className="ml-auto sm:hidden" onClick={toggleMobileNav}
                />
            </div>
            <div className="container flex">
                { isToggled && <MobileNav/>  }
            </div>
        </header>
    );
}

export default Header;