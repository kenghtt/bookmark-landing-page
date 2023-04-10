import Summary from "./Summary.jsx";
import SummaryImage from "./SummaryImage.jsx";

function Hero() {
    return ( 
        <article className="flex flex-col justify-center align-center w-full text-center mb-40">
                <div className="container grid items-center grid-cols-1 md:grid-cols-2 md:grid-rows-1 lg:gap-4">
                    <SummaryImage/>
                    <Summary/> 
                </div>
        </article>
    );
}


export default Hero;