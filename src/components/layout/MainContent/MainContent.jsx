import Hero from '../HeroSection/Hero' ;
import Features from '../FeaturesComponents';
import ExtensionsSection from '../ExtensionsSection';

function Main() {
    return ( 
    <main className="main my-10">
        <div className="container text-center px-5 m-auto">
            <Hero/>
            <Features/>
            <ExtensionsSection/>
        </div>
    </main>
     );
}

export default Main;