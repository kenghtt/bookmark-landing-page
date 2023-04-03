import { useState } from 'react'
import Layout from './FeatureLayout'

function Features() {
    const [ isFirstPage, setIsFirstPage ] = useState(true);
    const [ isSecondPage, setIsSecondPage ] = useState(false);
    const [ isThirdPage, setIsThirdPage ] = useState(false);

    const setPage = (pageNumber) => {
        if(pageNumber == 1) {
            setIsFirstPage(true);
            setIsSecondPage(false);
            setIsThirdPage(false);
        }
        else if(pageNumber == 2) {
            setIsFirstPage(false);
            setIsSecondPage(true);
            setIsThirdPage(false);
        }
        else if(pageNumber == 3) {
            setIsFirstPage(false);
            setIsSecondPage(false);
            setIsThirdPage(true);
        }
        else {
            console.log(pageNumber)
        }
    
    }

    return ( 
        <article>
            <div className="container flex flex-col gap-10">
                <section className="self-center md:w-1/2">
                    <h2 className='capitalize text-veryDarkBlue text-2xl'> Features </h2>
                    <p className='text-grayBlue opacity-70 px-10'>
                        Our aim is to make it quick and easy for you 
                        to access your favourite websites. Your bookmarks
                        sync between your devices so you can acess them on the go.
                        
                    </p>
                </section>

                <section className="grid grid-cols-1 gap-2 md:grid-cols-3">
                    <a className="feature-titles border-t-2 md:border-t-0" onClick={() => setPage(1)}>Simple Bookmarking</a>
                    <a className="feature-titles" onClick={() => setPage(2)}>Speedy Searching</a>
                    <a className="feature-titles" onClick={() => setPage(3)}>Easy Sharing</a>
                </section>
                
                {isFirstPage && <Layout
                    imgURL="/illustration-features-tab-1.svg"
                    altText="an illustration of
                     a tab with bookmarks"
                    sectionTitle="Bookmark in one click"
                    sectionContent="Organize your bookmarks 
                    however you like. Our simple drag-and-drop 
                    interface gives you complete control over 
                    how you manage your favourite sites."
                />}

                {isSecondPage && <Layout
                    imgURL="/illustration-features-tab-2.svg"
                    altText="an illustration of
                        a magnifying-glass
                        icon looking over bookmarks"
                    sectionTitle="Intelligent search"
                    sectionContent="
                        Our powerful search feature
                        will help you find saved
                        sites in no time at all.
                        No need to trawl through
                        all of your bookmarks."
                />}

                {isThirdPage && <Layout
                    imgURL="/illustration-features-tab-3.svg"
                    altText="an illustration of a two people
                        talking to each others online "
                    sectionTitle="Share your bookmarks"
                    sectionContent="Easily share your bookmarks
                     and collections with others.
                     Create a shareable link that
                     you can send at the click of a button."
                />}

            </div>
        </article>
     );
}

export default Features;