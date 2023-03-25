import useStore from "@/store/Store";
import MobileNav from "./MobileNav";

function Header() {

    const isToggled = useStore(state => state.isToggled);
    const setIsToggledToTrue = useStore(state => state.setIsToggledToTrue);

    const toggleMobileNav = () => {
        setIsToggledToTrue();
    }

    return ( 
        <header className="py-4 px-4">
            <div className="container flex justify-center">
                <img src="../images/logo-bookmark.svg" alt="bookmark logo" className="mr-auto"
                />

                <nav className="hidden sm:block">
                    <ul className="nav__list flex flex gap-4 px-2">
                        <li className="nav__item cursor-pointer">Features</li>
                        <li className="nav__item cursor-pointer">Pricing</li>
                        <li className="nav__item cursor-pointer">Contact</li>
                        <li className="nav__item cursor-pointer bg-softRed text-white px-4">Login</li>
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