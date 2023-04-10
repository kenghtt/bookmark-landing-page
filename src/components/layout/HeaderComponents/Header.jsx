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
                    <ul className="nav__list flex flex gap-4 px-2 uppercase">
                        <li className="nav__item cursor-pointer hover:text-softRed">Features</li>
                        <li className="nav__item cursor-pointer hover:text-softRed">Pricing</li>
                        <li className="nav__item cursor-pointer hover:text-softRed">Contact</li>
                        <li className="nav__item cursor-pointer bg-softRed text-white px-4 rounded hover:bg-white hover:text-softRed hover:ring-2 ring-softRed">Login</li>
                    </ul>
                </nav>

                <img src="../images/icon-hamburger.svg" alt="hamburger"
                    className="ml-auto cursor-pointer myTransition ml-auto hover:rotate-180 active:rotate-180 sm:hidden" onClick={toggleMobileNav}
                />
            </div>
                
            { isToggled && <MobileNav/>  }
        </header>
    );
}

export default Header;