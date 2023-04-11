import FAQHeader from "@layout/FAQSection/FAQHeader.jsx";
import Questions from "@layout/FAQSection/Questions.jsx";


function FAQLayout() {

    const question1 = 'What is Bookmark?'
    const question2 = 'How can I request a new Browser?'
    const question3 = 'Is there a mobile app?'
    const question4 = 'What about other chromium browsers?'

    return (
        <section>
            <FAQHeader/>
            <section className="flex flex-col">
                <Questions question={question1}/>
                <Questions question={question2}/>
                <Questions question={question3}/>
                <Questions question={question4}/>
            </section>


        </section>
    )
}

export default FAQLayout