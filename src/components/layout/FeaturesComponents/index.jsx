import Layout from './FeatureLayout';

function Features() {
    return ( 
        <article>
            <div className="container flex flex-col gap-10">
                <section className="col">
                    <h2> Features </h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dolor repudiandae alias voluptatum, error ea qui similique labore, sequi esse itaque, vel id consectetur quis deserunt laudantium voluptas veniam? Beatae.</p>
                </section>

                <section>
                    <h3>Simple Bookmarking</h3>
                    <h3>Speedy Searching</h3>
                    <h3>Easy Sharing</h3>
                </section>
                
                <Layout
                    imgURL="/illustration-features-tab-1.svg"
                    sectionTitle="Bookmark in one click"
                    sectionContent="Lorem ipsum dolor amet"
                />

            </div>
        </article>
     );
}

export default Features;