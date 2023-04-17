import Hero from '../HeroSection/Hero' ;
import Features from '../FeaturesComponents';
import ExtensionsSection from '../ExtensionsSection';
import FAQLayout from "@layout/FAQSection/FAQLayout.jsx";
import ContactUsForm from "@layout/ContactUsForm/ContactUsForm.jsx";

function Main() {
    return (
        <main className="main mt-10">
            <div className="container text-center px-5 m-auto">
                <Hero/>
                <Features/>
                <ExtensionsSection/>
                <FAQLayout/>
            </div>
            <ContactUsForm/>
        </main>
    );
}

export default Main;