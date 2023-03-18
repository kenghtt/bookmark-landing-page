function Footer() {
    return ( 
        <footer className="bg-veryDarkBlue">
            <div className="container flex items-center justify-center gap-10 flex-wrap">
                <img src="../images/logo-bookmark.svg" alt="bookmark logo" className="bg-white"/>
                
                <section className="pages-links flex py-10 gap-8 flex-wrap">
                    <h3 className="cursor-pointer">Features</h3>
                    <h3 className="cursor-pointer">Pricing</h3>
                    <h3 className="cursor-pointer">Contact</h3>
                </section>

                <section className="footer-links flex items-center gap-5">
                    <img src="../images/icon-facebook.svg" alt="Facebook icon" />
                    <img src="../images/icon-twitter.svg" alt="Twitter icon" />
                </section>

            </div>
        </footer>
     );
}

export default Footer;