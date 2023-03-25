import Features from '../FeaturesComponents';
import Hero from '../HeroSection/Hero' ;

function Main() {
    return ( 
    <main className="main py-10">
        <div className="container flex flex-col justify-center align-center text-center px-5 gap-20">
            <Hero/>
            <Features/>
        </div>
    </main>
     );
}

export default Main;