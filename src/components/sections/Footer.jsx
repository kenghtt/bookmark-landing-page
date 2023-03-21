function Footer() {
    return ( 
        <footer className="bg-veryDarkBlue py-10">
            <div className="container flex flex-col items-center justify-center sm:flex-row sm: gap-10">
                <img src="../images/logo-bookmark.svg" alt="bookmark logo" className="bg-white"/>
                
                <section className="pages-links flex flex-col gap-8 justify-center sm:flex-row">
                    <h3 className="cursor-pointer">Features</h3>
                    <h3 className="cursor-pointer">Pricing</h3>
                    <h3 className="cursor-pointer">Contact</h3>
                </section>

                <section className="footer-links flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <img src="../images/icon-facebook.svg" alt="Facebook icon" />
                    <img src="../images/icon-twitter.svg" alt="Twitter icon" />
                </section>

            </div>
        </footer>
     );
}

export default Footer;