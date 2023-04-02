function FeatureLayout({imgURL,altText, sectionTitle, sectionContent}) {
    return ( 
        <section className="grid grid-rows-2 justify-center items-center gap-5 md:grid-cols-2 md:grid-rows-1">
            <section className="w-screen h-full py-2.5 flex justify-center items-center relative md:w-full">
                <div className="w-4/6 h-full bg-softBlue rounded absolute left-0 bottom-0">
                    
                </div>

                <picture className="z-10 h-1/2 relative top-0">
                    <img src={`images/${imgURL}`} alt={altText} />
                </picture>
            </section>

            <section>
                <h3>{sectionTitle}</h3>
                <p>{sectionContent}</p>
                <button className="btn btn-primary">More Info</button>
            </section>
        </section>
     );
}

export default FeatureLayout;