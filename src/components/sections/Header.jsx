
function Header() {
    return ( 
        <header className="py-4 px-4 bg-red-300">
            <div className="container flex justify-center">
                <img src="../images/logo-bookmark.svg" alt="bookmark logo"
                />
                <img src="../images/icon-hamburger.svg" alt="hamburger"
                    className="ml-auto"
                />
            </div>
        </header>
    );
}

export default Header;