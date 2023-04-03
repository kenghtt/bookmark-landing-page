import Layout from "./ExtensionLayout";

function ExtensionSection() {
    return ( 
        <article className="">
            <div className="container grid grid-cols-1 gap-6 md:grid-cols-3">
                <Layout
                    browser="chrome"
                    extensionVersion="62"
                />

                <Layout
                    browser="firefox"
                    extensionVersion="55"
                />

                <Layout
                    browser="opera"
                    extensionVersion="46"
                />

            </div>
        </article>
     );
}

export default ExtensionSection;