function FeatureLayout({imgURL,altText, sectionTitle, sectionContent}) {
    return ( 
        <section className="flex flex-col justify-center items-center gap-5">
            <picture>
                <img src={`images/${imgURL}`} alt={altText} />
            </picture>

            <section>
                <h3>{sectionTitle}</h3>
                <p>{sectionContent}</p>
                <button>More Info</button>
            </section>
        </section>
     );
}

export default FeatureLayout;