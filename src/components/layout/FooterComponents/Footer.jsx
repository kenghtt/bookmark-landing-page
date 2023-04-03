function Footer() {
    return ( 
        <footer className="bg-veryDarkBlue py-10">
            <div className="container flex flex-col items-center justify-center sm:flex-row">
                <img 
                    src="../images/logo-bookmark.svg"
                    alt="bookmark logo" 
                    className="bg-grayBlue"
                />
                
                <section className="pages-links flex flex-col gap-8 justify-center md:flex-row">
                    <h3 className="cursor-pointer">Features</h3>
                    <h3 className="cursor-pointer">Pricing</h3>
                    <h3 className="cursor-pointer">Contact</h3>
                </section>

                <section className="footer-links flex gap-3 items-center justify-center">
                    <img src="../images/icon-facebook.svg" alt="Facebook icon" />
                    <img src="../images/icon-twitter.svg" alt="Twitter icon" />
                </section>

            </div>
        </footer>
     );
}

export default Footer;