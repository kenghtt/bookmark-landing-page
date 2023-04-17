import FAQHeader from "@layout/FAQSection/FAQHeader.jsx";
import {useState} from "react";
import Question from "@layout/FAQSection/Question.jsx";


function FAQLayout() {

    const [isAnswer1Active, setIsAnswer1Active] = useState(false);
    const [isAnswer2Active, setIsAnswer2Active] = useState(false);
    const [isAnswer3Active, setIsAnswer3Active] = useState(false);
    const [isAnswer4Active, setIsAnswer4Active] = useState(false);


    const question1 = 'What is Bookmark?'
    const question2 = 'How can I request a new Browser?'
    const question3 = 'Is there a mobile app?'
    const question4 = 'What about other chromium browsers?'

    const answer1 = 'Lorem ipsum dolor sit amet, mea vide assum adipiscing eu, in quot maluisset vix, ad nemore voluptatum pro. In dolor iuvaret officiis eam, cu civibus adipiscing contentiones qui, an sed liber option adolescens. Mel dicta utamur ei, eum cu fugit nominati. Movet zril cum te. Dicat soleat ad eam, malorum mentitum per ad. Lorem ipsum dolor sit amet, mea vide assum adipiscing eu, in quot maluisset vix, ad nemore voluptatum pro. In dolor iuvaret officiis eam, cu civibus adipiscing contentiones qui, an sed liber option adolescens. Mel dicta utamur ei, eum cu fugit nominati. Movet zril cum te. Dicat soleat ad eam, malorum mentitum per ad.'
    const answer2 = 'Mei rebum bonorum legimus an, eius clita bonorum mel no. Ne iriure denique eum, mel te quod iisque. Eos case cibo detracto ea. Sit laoreet rationibus ne, eam ea summo quodsi mollis, quidam nostro id sea.'
    const answer3 = 'An nisl paulo mandamus vim, ea vel essent mnesarchum scripserit. Ius unum nobis ne, cu quo consul graecis minimum. Pri eu errem blandit appetere. Prompta tibique instructior vix cu, ius electram reformidans no, est eu putant pertinax. Ad case adolescens qui, cibo labore cu vel.'
    const answer4 = 'His quando quidam labitur ne. Vim id suas nulla labitur. Eu ius viris soleat accusata, vix dicat mucius persequeris ad. Quodsi qualisque ei qui, ne vero verear deleniti pri, case graeci luptatum ad usu. Ei sit munere apeirian scriptorem, nec consul sensibus evertitur eu, pro probo nihil in.'

    function setActiveAnswer(answerNumber) {
        if (answerNumber === 1) {
            setIsAnswer1Active(!isAnswer1Active);
        } else if (answerNumber === 2) {
            setIsAnswer2Active(!isAnswer2Active)
        } else if (answerNumber === 3) {
            setIsAnswer3Active(!isAnswer3Active)
        } else if (answerNumber === 4) {
            setIsAnswer4Active(!isAnswer4Active)
        } else {
            console.warn("An invalid answer was selected")
        }
    }

    return (
        <section>
            <FAQHeader/>
            <section className="flex flex-col mb-10 ">
                <div onClick={() => setActiveAnswer(1)}>
                    <Question question={question1} answer={answer1} active={isAnswer1Active}/>
                </div>
                <div onClick={() => setActiveAnswer(2)}>
                    <Question question={question2} answer={answer2} active={isAnswer2Active}/>
                </div>
                <div onClick={() => setActiveAnswer(3)}>
                    <Question question={question3} answer={answer3} active={isAnswer3Active}/>
                </div>
                <div onClick={() => setActiveAnswer(4)}>
                    <Question question={question4} answer={answer4} active={isAnswer4Active}/>
                </div>
            </section>
            <button className="btn btn-primary self-center">More Info</button>

        </section>
    )
}

export default FAQLayout