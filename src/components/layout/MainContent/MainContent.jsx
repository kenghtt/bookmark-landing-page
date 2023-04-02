import Features from '../FeaturesComponents';
import Hero from '../HeroSection/Hero' ;

function Main() {
    return ( 
    <main className="main py-10 my-10">
        <div className="container text-center px-5 m-auto">
            <Hero/>
            <Features/>
        </div>
    </main>
     );
}

export default Main;