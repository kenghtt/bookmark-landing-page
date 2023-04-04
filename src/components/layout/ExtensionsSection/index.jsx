import Layout from "./ExtensionLayout";

function ExtensionSection() {
    return ( 
        <article className="my-50 md:my-[15rem]">
            <div className="container flex flex-col items-center gap-10">
                
                <section className="w-1/2">
                    <h2 className="text-xl">Download the extension</h2>
                    <p>
                        We've got more browsers in the pipeline.
                        Please do let us know if you've got a favourite
                        you'd like us to prioritize.
                    </p>
                </section>
                
                <section className="w-full relative grid grid-cols-1 gap-6 md:grid-cols-3">
                    <Layout
                        browser="chrome"
                        extensionVersion="62"
                        positionValue="relative"
                        topValue="0px"
                        leftValue="0px"
                    />
                    <Layout 
                        browser="firefox"
                        extensionVersion="55"
                        positionValue="absolute"
                        topValue="4rem"
                        leftValue="25.5rem"
                    />
                    <Layout
                        browser="opera"
                        extensionVersion="46"
                        positionValue="absolute"
                        topValue="8rem"
                        leftValue="49.8rem"
                    />
                </section>

            </div>
        </article>
     );
}

export default ExtensionSection;