import { useState } from "react";

function MobileNav() {
    const [isToggled, setIsToggled] = useState(true);

    function toggleMobileNav() {
        console.log("toggled off");
        setIsToggled(false)
    }

    return ( 
        <div className="div">
            
            {isToggled && <article className="w-screen h-screen absolute top-0">
                <div className="container py-10 px-20 flex opacity-75 flex-col justify-center gap-6 bg-veryDarkBlue">
                    <section className="logo-container flex justify-center">
                        <img src="../images/logo-bookmark.svg" alt="bookmark logo" className="bg-softRed"/>
                        <img src="../images/icon-close.svg" alt="closing icon" className="ml-auto" onClick={toggleMobileNav} />
                    </section>
                    <section className="pages-links py-10 flex flex-col items-center gap-8">
                        <h3 className="cursor-pointer">Features</h3>
                        <h3 className="cursor-pointer">Pricing</h3>
                        <h3 className="cursor-pointer">Contact</h3>
                    </section>
                    <button className="py-2 px-10 border-2 border-white rounded self-center text-white">Login</button>
                    <section className="footer-links flex justify-center gap-12">
                        <img src="../images/icon-facebook.svg" alt="Facebook icon" />
                        <img src="../images/icon-twitter.svg" alt="Twitter icon" />
                    </section>
                </div>
            </article>
                }
        </div>
     );
}

export default MobileNav;